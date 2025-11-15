// Vue App untuk halaman Stok Bahan Ajar
var app = Vue.createApp({
  data() {
    return {
      // Data untuk tab lokasi (Pusat/UPBJJ)
      lokasiTab: 'pusat', // Default ke Pusat
      
      // Data untuk jenis stok (item/paket/lokasi)
      jenisStok: 'item', // Default ke Item
      
      // Data untuk pencarian
      searchText: '',
      
      // Data untuk alert/notifikasi
      alertMessage: '',
      alertType: 'info',
      
      // Data stok dari SITTA_DATA
      stokPusat: {
        stokItem: [],
        stokPaket: [],
        stokLokasi: []
      },
      stokUPBJJ: {
        stokItem: [],
        stokPaket: [],
        stokLokasi: []
      }
    }
  },
  
  // Computed Properties untuk filtering dan menghitung data
  computed: {
    // Computed property untuk mendapatkan stok item/paket pusat berdasarkan pencarian
    filteredStok() {
      if (!this.lokasiTab || (this.jenisStok !== 'item' && this.jenisStok !== 'paket')) {
        return [];
      }
      
      // Tentukan data yang akan difilter berdasarkan lokasi dan jenis
      let dataToFilter = [];
      if (this.lokasiTab === 'pusat') {
        if (this.jenisStok === 'item') {
          dataToFilter = this.stokPusat.stokItem || [];
        } else if (this.jenisStok === 'paket') {
          dataToFilter = this.stokPusat.stokPaket || [];
        }
      } else if (this.lokasiTab === 'upbjj') {
        if (this.jenisStok === 'item') {
          dataToFilter = this.stokUPBJJ.stokItem || [];
        } else if (this.jenisStok === 'paket') {
          dataToFilter = this.stokUPBJJ.stokPaket || [];
        }
      }
      
      // Jika tidak ada teks pencarian, kembalikan semua data
      if (!this.searchText || this.searchText.trim() === '') {
        return dataToFilter;
      }
      
      // Filter berdasarkan teks pencarian (case-insensitive)
      const searchLower = this.searchText.toLowerCase().trim();
      return dataToFilter.filter(item => {
        return item.nama.toLowerCase().includes(searchLower) ||
               item.id.toLowerCase().includes(searchLower);
      });
    },
    
    // Computed property untuk mendapatkan stok UPBJJ yang sudah difilter
    filteredStokUPBJJ() {
      return this.filteredStok; // Menggunakan computed property yang sama
    },
    
    // Computed property untuk mendapatkan stok lokasi pusat
    stokLokasiPusat() {
      return this.stokPusat.stokLokasi || [];
    },
    
    // Computed property untuk mendapatkan stok lokasi UPBJJ
    stokLokasiUPBJJ() {
      return this.stokUPBJJ.stokLokasi || [];
    },
    
    // Computed property untuk menghitung total stok berdasarkan lokasi dan jenis
    totalStok() {
      if (this.jenisStok === 'item' || this.jenisStok === 'paket') {
        return this.filteredStok.length;
      }
      return 0;
    }
  },
  
  // Methods untuk menangani aksi user
  methods: {
    // Method untuk mengubah tab lokasi (Pusat/UPBJJ)
    ubahLokasiTab(lokasi) {
      this.lokasiTab = lokasi;
      // Reset jenis stok ke item ketika ganti lokasi
      this.jenisStok = 'item';
      // Reset pencarian
      this.searchText = '';
      // Tampilkan notifikasi
      this.tampilkanAlert(`Menampilkan stok untuk ${lokasi === 'pusat' ? 'Pusat' : 'UPBJJ'}`, 'info');
    },
    
    // Method untuk mengubah jenis stok (Item/Paket/Lokasi)
    ubahJenisStok(jenis) {
      this.jenisStok = jenis;
      // Reset pencarian jika ganti ke lokasi
      if (jenis === 'lokasi') {
        this.searchText = '';
      }
    },
    
    // Method untuk menangani input pencarian
    handleSearchInput() {
      // Log untuk debugging (bisa dihapus di production)
      console.log('User sedang mengetik: ', this.searchText);
      
      // Jika pencarian kosong, hapus alert
      if (!this.searchText || this.searchText.trim() === '') {
        this.alertMessage = '';
      }
    },
    
    // Method untuk menangani error gambar
    handleImageError(event) {
      // Set default image jika gambar gagal dimuat
      event.target.src = 'https://via.placeholder.com/200x200?text=No+Image';
    },
    
    // Method untuk menampilkan alert/notifikasi
    tampilkanAlert(pesan, tipe) {
      this.alertMessage = pesan;
      this.alertType = tipe || 'info';
      
      // Auto hide alert setelah 3 detik
      setTimeout(() => {
        this.alertMessage = '';
      }, 3000);
    },
    
    // Method untuk memuat data stok dari SITTA_DATA
    loadStokData() {
      if (typeof SITTA_DATA !== 'undefined' && SITTA_DATA.stokBahanAjar) {
        // Load data pusat
        this.stokPusat = {
          stokItem: SITTA_DATA.stokBahanAjar.pusat?.stokItem || [],
          stokPaket: SITTA_DATA.stokBahanAjar.pusat?.stokPaket || [],
          stokLokasi: SITTA_DATA.stokBahanAjar.pusat?.stokLokasi || []
        };
        
        // Load data UPBJJ
        this.stokUPBJJ = {
          stokItem: SITTA_DATA.stokBahanAjar.upbjj?.stokItem || [],
          stokPaket: SITTA_DATA.stokBahanAjar.upbjj?.stokPaket || [],
          stokLokasi: SITTA_DATA.stokBahanAjar.upbjj?.stokLokasi || []
        };
        
        // Tampilkan alert sukses
        this.tampilkanAlert('Data stok berhasil dimuat', 'success');
      } else {
        this.tampilkanAlert('Error: Data stok tidak ditemukan', 'error');
      }
    },
    
    // Method untuk format angka (helper)
    formatAngka(angka) {
      return angka.toLocaleString('id-ID');
    }
  },
  
  // Watchers untuk monitoring perubahan data
  watch: {
    // Watcher untuk memantau perubahan searchText
    searchText(newValue, oldValue) {
      // Log perubahan untuk debugging
      console.log(`Search text berubah dari "${oldValue}" menjadi "${newValue}"`);
      
      // Tampilkan informasi jika ada hasil pencarian
      if (newValue && newValue.trim() !== '') {
        // Delay untuk menunggu computed property terupdate
        this.$nextTick(() => {
          const jumlahHasil = this.filteredStok.length;
          if (jumlahHasil > 0) {
            this.alertMessage = `Ditemukan ${jumlahHasil} hasil untuk "${newValue}"`;
            this.alertType = 'success';
          } else {
            this.alertMessage = `Tidak ditemukan hasil untuk "${newValue}"`;
            this.alertType = 'warning';
          }
        });
      } else {
        this.alertMessage = '';
      }
    },
    
    // Watcher untuk memantau perubahan lokasiTab
    lokasiTab(newValue, oldValue) {
      console.log(`Lokasi tab berubah dari "${oldValue}" menjadi "${newValue}"`);
      
      // Reset pencarian saat ganti lokasi
      if (oldValue && newValue !== oldValue) {
        this.searchText = '';
      }
    },
    
    // Watcher untuk memantau perubahan jenisStok
    jenisStok(newValue, oldValue) {
      console.log(`Jenis stok berubah dari "${oldValue}" menjadi "${newValue}"`);
      
      // Reset pencarian jika ganti ke lokasi
      if (newValue === 'lokasi' && oldValue !== 'lokasi') {
        this.searchText = '';
      }
    },
    
    // Watcher untuk memantau perubahan filteredStok (computed property)
    filteredStok(newValue, oldValue) {
      // Log perubahan jumlah hasil pencarian
      if (this.searchText && this.searchText.trim() !== '') {
        console.log(`Jumlah hasil pencarian berubah menjadi: ${newValue.length}`);
      }
    }
  },
  
  // Lifecycle hook: mounted - dipanggil setelah komponen dimount
  mounted() {
    // Load data saat komponen siap
    this.loadStokData();
    
    // Tampilkan pesan selamat datang
    this.tampilkanAlert('Selamat datang di halaman Stok Bahan Ajar', 'info');
  }
}).mount('#app')

