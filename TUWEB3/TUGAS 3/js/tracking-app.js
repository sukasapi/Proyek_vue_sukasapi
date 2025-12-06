// Vue App untuk halaman Tracking DO - TUGAS 3
// Mengimplementasikan semua fitur Vue.js yang diminta:
// 1. Vue Component dan Vue Template
// 2. Mustaches dan directive v-text
// 3. Conditional (v-if/v-else/v-else-if/v-show)
// 4. Data binding (v-bind, v-model) dan property (computed, methods)
// 5. Watcher
// 6. v-for dengan zero-based dan name-based index
// 7. Filter untuk formatting data teks
// 8. Custom element, Vue Component, dan Property Template

var app = Vue.createApp({
  data() {
    return {
      // Data input No. Billing
      noBilling: '',
      
      // Data tracking yang ditemukan
      trackingData: null,
      
      // Status pencarian
      isSearching: false,
      hasSearched: false,
      hasError: false,
      
      // Alert message
      alertMessage: '',
      alertType: 'info',
      
      // Status pencarian untuk ditampilkan
      statusPencarian: '',
      statusPencarianType: 'info',
      
      // Data tracking dari SITTA_DATA
      dataTracking: []
    }
  },
  
  // Computed Properties
  computed: {
    // Computed property untuk mengecek apakah input valid
    isInputValid() {
      return this.noBilling && this.noBilling.trim() !== '';
    },
    
    // Computed property untuk mendapatkan status tracking (jika ada)
    statusTracking() {
      if (!this.trackingData || !this.trackingData.dataPengiriman) {
        return '';
      }
      return this.trackingData.dataPengiriman.status || '';
    },
    
    // Computed property untuk menghitung jumlah detail perjalanan
    jumlahDetailPerjalanan() {
      if (!this.trackingData || !this.trackingData.dataPengiriman || !this.trackingData.dataPengiriman.detailPerjalanan) {
        return 0;
      }
      return this.trackingData.dataPengiriman.detailPerjalanan.length;
    },
    
    // Computed property untuk mendapatkan informasi tracking yang diformat
    trackingInfo() {
      if (!this.trackingData) return null;
      
      return {
        noBilling: this.trackingData.noBilling || '-',
        nim: this.trackingData.nim || '-',
        nama: this.trackingData.nama || '-',
        status: this.statusTracking
      };
    }
  },
  
  // Methods
  methods: {
    // Method untuk mencari tracking berdasarkan No. Billing
    cariTracking() {
      // Validasi input
      if (!this.noBilling || this.noBilling.trim() === '') {
        this.tampilkanAlert('No. Billing tidak boleh kosong', 'error');
        this.hasError = true;
        return;
      }
      
      // Set status pencarian
      this.isSearching = true;
      this.hasSearched = true;
      this.hasError = false;
      this.trackingData = null;
      this.alertMessage = '';
      
      // Simulasi delay untuk pencarian (bisa dihapus jika tidak diperlukan)
      setTimeout(() => {
        // Panggil method untuk mencari data
        this.performSearch();
        this.isSearching = false;
      }, 500);
    },
    
    // Method untuk melakukan pencarian data
    performSearch() {
      const noBillingTrimmed = this.noBilling.trim();
      
      // Cari data di array tracking
      const found = this.dataTracking.find(item => 
        item.noBilling && item.noBilling.toLowerCase() === noBillingTrimmed.toLowerCase()
      );
      
      if (found) {
        // Data ditemukan
        this.trackingData = found;
        this.hasError = false;
        this.statusPencarian = `Data tracking ditemukan untuk No. Billing: ${noBillingTrimmed}`;
        this.statusPencarianType = 'success';
        this.tampilkanAlert('Data tracking berhasil ditemukan', 'success');
      } else {
        // Data tidak ditemukan
        this.trackingData = null;
        this.hasError = true;
        this.statusPencarian = `Tidak ditemukan data tracking untuk No. Billing: ${noBillingTrimmed}`;
        this.statusPencarianType = 'error';
        this.tampilkanAlert(`No. Billing "${noBillingTrimmed}" tidak ditemukan`, 'error');
      }
    },
    
    // Method untuk menangani perubahan input
    handleInputChange() {
      // Reset error state saat user mengetik
      this.hasError = false;
      
      // Reset status pencarian jika input kosong
      if (!this.noBilling || this.noBilling.trim() === '') {
        this.statusPencarian = '';
        this.alertMessage = '';
      }
    },
    
    // Method untuk format tanggal
    formatTanggal(tanggal) {
      if (!tanggal) return '-';
      
      try {
        const date = new Date(tanggal + 'T00:00:00');
        const options = { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric',
          timeZone: 'Asia/Jakarta'
        };
        return date.toLocaleDateString('id-ID', options);
      } catch (error) {
        return tanggal;
      }
    },
    
    // Method untuk format tanggal dan waktu
    formatDateTime(tanggal, waktu) {
      if (!tanggal || !waktu) return '-';
      
      try {
        const dateTime = new Date(tanggal + 'T' + waktu + ':00');
        const options = { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          timeZone: 'Asia/Jakarta'
        };
        return dateTime.toLocaleString('id-ID', options);
      } catch (error) {
        return `${tanggal} ${waktu}`;
      }
    },
    
    // Method untuk format currency
    formatCurrency(angka) {
      if (!angka && angka !== 0) return '-';
      return 'Rp ' + angka.toLocaleString('id-ID');
    },
    
    // Method untuk mendapatkan class badge berdasarkan status
    getStatusBadgeClass(status) {
      if (!status) return 'badge-info';
      
      const statusLower = status.toLowerCase();
      if (statusLower.includes('selesai') || statusLower.includes('sampai')) {
        return 'badge-success';
      } else if (statusLower.includes('dalam perjalanan')) {
        return 'badge-info';
      } else if (statusLower.includes('dipesan')) {
        return 'badge-warning';
      }
      return 'badge-info';
    },
    
    // Method untuk mendapatkan type badge (tanpa prefix badge-)
    getBadgeType(status) {
      if (!status) return 'info';
      
      const statusLower = status.toLowerCase();
      if (statusLower.includes('selesai') || statusLower.includes('sampai')) {
        return 'success';
      } else if (statusLower.includes('dalam perjalanan')) {
        return 'info';
      } else if (statusLower.includes('dipesan')) {
        return 'warning';
      }
      return 'info';
    },
    
    // Method untuk menampilkan alert
    tampilkanAlert(pesan, tipe) {
      this.alertMessage = pesan;
      this.alertType = tipe || 'info';
      
      // Auto hide alert setelah 5 detik
      setTimeout(() => {
        this.alertMessage = '';
      }, 5000);
    },
    
    // Method untuk memuat data tracking dari SITTA_DATA
    loadTrackingData() {
      if (typeof SITTA_DATA !== 'undefined' && SITTA_DATA.tracking) {
        this.dataTracking = SITTA_DATA.tracking || [];
        
        // Check jika ada parameter billing di URL
        const urlParams = new URLSearchParams(window.location.search);
        const billingParam = urlParams.get('billing');
        
        if (billingParam) {
          this.noBilling = billingParam;
          // Otomatis cari jika ada parameter
          this.$nextTick(() => {
            this.cariTracking();
          });
        }
      } else {
        this.tampilkanAlert('Error: Data tracking tidak ditemukan', 'error');
      }
    },
    
    // Method untuk reset form
    resetForm() {
      this.noBilling = '';
      this.trackingData = null;
      this.hasSearched = false;
      this.hasError = false;
      this.statusPencarian = '';
      this.alertMessage = '';
    }
  },
  
  // Watchers
  watch: {
    // Watcher untuk memantau perubahan noBilling
    noBilling(newValue, oldValue) {
      // Log perubahan untuk debugging
      console.log(`No. Billing berubah dari "${oldValue}" menjadi "${newValue}"`);
      
      // Reset error state saat user mengetik
      if (newValue !== oldValue) {
        this.hasError = false;
      }
      
      // Jika input dikosongkan, reset tracking data
      if (!newValue || newValue.trim() === '') {
        this.trackingData = null;
        this.statusPencarian = '';
        
        // Reset hasSearched jika input benar-benar kosong
        if (!newValue) {
          this.hasSearched = false;
        }
      }
    },
    
    // Watcher untuk memantau perubahan trackingData
    trackingData(newValue, oldValue) {
      if (newValue) {
        console.log('Data tracking berhasil dimuat:', newValue.noBilling);
        
        // Tampilkan informasi tambahan
        if (newValue.dataPengiriman && newValue.dataPengiriman.status) {
          console.log('Status pengiriman:', newValue.dataPengiriman.status);
        }
      } else if (oldValue) {
        console.log('Data tracking direset');
      }
    },
    
    // Watcher untuk memantau perubahan statusTracking (computed property)
    statusTracking(newValue, oldValue) {
      if (newValue && newValue !== oldValue) {
        console.log(`Status tracking berubah menjadi: ${newValue}`);
      }
    },
    
    // Watcher untuk memantau perubahan hasError
    hasError(newValue, oldValue) {
      if (newValue !== oldValue) {
        console.log(`Error state berubah menjadi: ${newValue}`);
      }
    },
    
    // Watcher untuk memantau perubahan jumlahDetailPerjalanan (computed property)
    jumlahDetailPerjalanan(newValue, oldValue) {
      if (newValue !== oldValue) {
        console.log(`Jumlah detail perjalanan berubah dari ${oldValue} menjadi ${newValue}`);
      }
    }
  },
  
  // Lifecycle hook: mounted
  mounted() {
    // Load data saat komponen siap
    this.loadTrackingData();
    
    // Tampilkan pesan selamat datang
    this.tampilkanAlert('Selamat datang di halaman Tracking DO. Masukkan No. Billing untuk mencari tracking pengiriman.', 'info');
  }
}).mount('#app')

