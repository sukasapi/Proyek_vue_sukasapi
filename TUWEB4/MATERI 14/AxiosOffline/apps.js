// Axios - Integrasi Offline (File Lokal)
// Menggunakan Axios dari file lokal

const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      testing: false,
      axiosStatus: null,
      loading: false,
      saving: false,
      localData: null,
      error: null,
      formData: {
        name: '',
        email: '',
        message: ''
      },
      responseData: null
    }
  },
  methods: {
    // Test apakah Axios tersedia
    testAxios() {
      this.testing = true;
      this.axiosStatus = null;
      
      setTimeout(() => {
        if (typeof axios !== 'undefined') {
          this.axiosStatus = {
            available: true,
            version: axios.VERSION || 'Unknown'
          };
          console.log('Axios tersedia:', axios);
        } else {
          this.axiosStatus = {
            available: false
          };
          console.error('Axios tidak ditemukan! Pastikan file axios.min.js sudah di-include.');
        }
        this.testing = false;
      }, 500);
    },
    
    // GET Request ke API lokal (contoh endpoint)
    async fetchLocalData() {
      this.loading = true;
      this.error = null;
      this.localData = null;
      
      try {
        // Contoh endpoint lokal (sesuaikan dengan server Anda)
        // Bisa menggunakan API publik untuk testing jika server lokal belum siap
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        this.localData = response.data;
        console.log('Data berhasil diambil:', response.data);
      } catch (error) {
        this.error = error.message;
        console.error('Error fetching data:', error);
        
        // Jika error karena server lokal tidak tersedia, tampilkan instruksi
        if (error.code === 'ERR_NETWORK' || error.message.includes('Network')) {
          this.error = 'Server lokal tidak tersedia. Pastikan server sudah berjalan atau gunakan API publik untuk testing.';
        }
      } finally {
        this.loading = false;
      }
    },
    
    // POST Request ke API lokal
    async sendLocalData() {
      this.saving = true;
      this.responseData = null;
      this.error = null;
      
      try {
        // Contoh endpoint lokal (sesuaikan dengan server Anda)
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
          title: this.formData.name,
          body: this.formData.message,
          email: this.formData.email,
          userId: 1
        });
        
        this.responseData = response.data;
        console.log('Data berhasil dikirim:', response.data);
        
        // Reset form
        this.formData = {
          name: '',
          email: '',
          message: ''
        };
        
        // Tampilkan pesan sukses
        alert('Data berhasil dikirim!');
      } catch (error) {
        this.error = error.message;
        console.error('Error sending data:', error);
        alert('Error: ' + error.message);
      } finally {
        this.saving = false;
      }
    }
  },
  mounted() {
    // Otomatis test Axios saat component dimount
    this.testAxios();
  }
});

app.mount('#app');

