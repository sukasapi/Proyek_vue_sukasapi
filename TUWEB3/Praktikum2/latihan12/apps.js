var app = Vue.createApp({
  data() {
    return {
      // Data untuk filter string
      searchText: '',
      daftarBuah: [
        'Apel', 'Anggur', 'Alpukat', 
        'Jeruk', 'Jambu', 'Jambu Air',
        'Mangga', 'Melon', 'Markisa',
        'Pisang', 'Pepaya', 'Pir',
        'Strawberry', 'Semangka', 'Salak'
      ],
      
      // Data untuk event handler
      teksDinamis: 'Teks awal',
      angka: 0,
      inputKeyup: '',
      statusKeyup: 'Belum ada input',
      namaForm: '',
      namaSubmit: '',
      inputMultiple: '',
      statusMultiple: 'Belum ada event'
    }
  },
  computed: { 
    // Computed property untuk filter string
    filteredBuah() {
      if (!this.searchText) {
        return this.daftarBuah;
      }
      // Filter: case-insensitive search
      return this.daftarBuah.filter(buah => 
        buah.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  },
  methods: {
    // Method untuk event handler input search
    onSearchInput() {
      console.log('User sedang mengetik: ', this.searchText);
    },
    
    // Method untuk event handler click
    ubahTeks() {
      this.teksDinamis = 'Teks berhasil diubah! ' + new Date().toLocaleTimeString();
    },
    
    resetTeks() {
      this.teksDinamis = 'Teks awal';
    },
    
    // Method untuk event handler dengan parameter
    tambah(nilai) {
      this.angka += nilai;
    },
    
    resetAngka() {
      this.angka = 0;
    },
    
    // Method untuk event handler keyup
    onKeyUp() {
      this.statusKeyup = 'Key ditekan - Total karakter: ' + this.inputKeyup.length;
    },
    
    onEnter() {
      this.statusKeyup = 'ENTER ditekan! Form bisa disubmit sekarang.';
      alert('Anda menekan tombol Enter!');
    },
    
    // Method untuk event handler submit
    onSubmit() {
      this.namaSubmit = this.namaForm;
      alert('Form disubmit! Nama: ' + this.namaForm);
      this.namaForm = ''; // Reset form setelah submit
    },
    
    // Method untuk multiple event handlers
    onFocus() {
      this.statusMultiple = 'Input sedang focus';
    },
    
    onBlur() {
      this.statusMultiple = 'Input kehilangan focus';
    },
    
    onInput() {
      this.statusMultiple = 'Input berubah - Karakter: ' + this.inputMultiple.length;
    }
  }
}).mount('#app')


