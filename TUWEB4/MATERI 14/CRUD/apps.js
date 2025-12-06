// CRUD dengan Axios dan Database
// Menggunakan Vue.js, Axios, dan PHP backend dengan MySQL

const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      students: [],
      loading: false,
      saving: false,
      editing: false,
      formData: {
        id: null,
        nim: '',
        nama: '',
        email: '',
        jurusan: ''
      },
      message: '',
      messageType: 'success',
      error: ''
    }
  },
  mounted() {
    // Load data saat component dimount
    this.fetchStudents();
  },
  methods: {
    // READ - Mengambil semua data
    async fetchStudents() {
      this.loading = true;
      this.error = '';
      
      try {
        const response = await axios.get('api.php?action=read');
        this.students = response.data;
        console.log('Data berhasil diambil:', response.data);
      } catch (error) {
        this.error = error.response?.data?.error || error.message;
        console.error('Error fetching students:', error);
      } finally {
        this.loading = false;
      }
    },
    
    // CREATE/UPDATE - Menyimpan data
    async saveData() {
      this.saving = true;
      this.error = '';
      this.message = '';
      
      try {
        const action = this.editing ? 'update' : 'create';
        const url = `api.php?action=${action}`;
        
        // Convert object to URLSearchParams for PHP $_POST
        const params = new URLSearchParams();
        Object.keys(this.formData).forEach(key => {
          if (this.formData[key] !== null) {
            params.append(key, this.formData[key]);
          }
        });
        
        const response = await axios.post(url, params, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });
        
        this.message = response.data.message || 
          (this.editing ? 'Data berhasil diupdate!' : 'Data berhasil ditambahkan!');
        this.messageType = 'success';
        
        // Reset form
        this.resetForm();
        
        // Refresh data
        await this.fetchStudents();
        
        // Hide message after 3 seconds
        setTimeout(() => {
          this.message = '';
        }, 3000);
        
        console.log('Data berhasil disimpan:', response.data);
      } catch (error) {
        this.error = error.response?.data?.error || error.message;
        this.message = 'Gagal menyimpan data!';
        this.messageType = 'error';
        console.error('Error saving data:', error);
      } finally {
        this.saving = false;
      }
    },
    
    // UPDATE - Mengisi form untuk edit
    editStudent(student) {
      this.editing = true;
      this.formData = {
        id: student.id,
        nim: student.nim,
        nama: student.nama,
        email: student.email,
        jurusan: student.jurusan
      };
      
      // Scroll to form
      document.querySelector('.form-section').scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    },
    
    // DELETE - Menghapus data
    async deleteStudent(id) {
      if (!confirm('Apakah Anda yakin ingin menghapus data ini?')) {
        return;
      }
      
      this.error = '';
      this.message = '';
      
      try {
        const params = new URLSearchParams();
        params.append('id', id);
        
        const response = await axios.post('api.php?action=delete', params, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });
        
        this.message = response.data.message || 'Data berhasil dihapus!';
        this.messageType = 'success';
        
        // Refresh data
        await this.fetchStudents();
        
        // Hide message after 3 seconds
        setTimeout(() => {
          this.message = '';
        }, 3000);
        
        console.log('Data berhasil dihapus:', response.data);
      } catch (error) {
        this.error = error.response?.data?.error || error.message;
        this.message = 'Gagal menghapus data!';
        this.messageType = 'error';
        console.error('Error deleting data:', error);
      }
    },
    
    // Reset form
    resetForm() {
      this.editing = false;
      this.formData = {
        id: null,
        nim: '',
        nama: '',
        email: '',
        jurusan: ''
      };
      this.error = '';
      this.message = '';
    }
  }
});

app.mount('#app');

