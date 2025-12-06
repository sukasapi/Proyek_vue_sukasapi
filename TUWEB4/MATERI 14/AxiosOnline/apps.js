// Axios - Integrasi Online (CDN)
// Menggunakan Axios dari CDN untuk HTTP requests

const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      loading: false,
      saving: false,
      loadingMultiple: false,
      users: [],
      error: null,
      newPost: {
        title: '',
        body: ''
      },
      createdPost: null,
      multipleData: {
        posts: null,
        comments: null
      },
      errorMessage: '',
      successMessage: ''
    }
  },
  methods: {
    // GET Request - Mengambil data dari API publik
    async fetchUsers() {
      this.loading = true;
      this.error = null;
      this.users = [];
      
      try {
        // Menggunakan JSONPlaceholder sebagai contoh API
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.users = response.data;
        console.log('Data users berhasil diambil:', response.data);
      } catch (error) {
        this.error = error.message;
        console.error('Error fetching users:', error);
      } finally {
        this.loading = false;
      }
    },
    
    // POST Request - Mengirim data ke API
    async createPost() {
      this.saving = true;
      this.createdPost = null;
      
      try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
          title: this.newPost.title,
          body: this.newPost.body,
          userId: 1
        });
        
        this.createdPost = response.data;
        console.log('Post berhasil dibuat:', response.data);
        
        // Reset form
        this.newPost.title = '';
        this.newPost.body = '';
        
        // Tampilkan pesan sukses
        this.successMessage = 'Data berhasil dikirim!';
        setTimeout(() => {
          this.successMessage = '';
        }, 3000);
      } catch (error) {
        this.errorMessage = `Error: ${error.message}`;
        console.error('Error creating post:', error);
      } finally {
        this.saving = false;
      }
    },
    
    // Multiple Requests - Concurrent
    async fetchMultiple() {
      this.loadingMultiple = true;
      
      try {
        // Menggunakan Promise.all untuk concurrent requests
        const [postsResponse, commentsResponse] = await Promise.all([
          axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5'),
          axios.get('https://jsonplaceholder.typicode.com/comments?_limit=5')
        ]);
        
        this.multipleData = {
          posts: postsResponse.data,
          comments: commentsResponse.data
        };
        
        console.log('Multiple data berhasil diambil');
      } catch (error) {
        this.errorMessage = `Error: ${error.message}`;
        console.error('Error fetching multiple data:', error);
      } finally {
        this.loadingMultiple = false;
      }
    },
    
    // Error Handling
    async fetchWithError() {
      this.errorMessage = '';
      this.successMessage = '';
      
      try {
        // Request ke URL yang tidak ada untuk demo error handling
        await axios.get('https://jsonplaceholder.typicode.com/invalid-url');
      } catch (error) {
        if (error.response) {
          // Server merespons dengan status error
          this.errorMessage = `Server Error: ${error.response.status} - ${error.response.statusText}`;
        } else if (error.request) {
          // Request dibuat tapi tidak ada response
          this.errorMessage = 'Network Error: Tidak ada response dari server';
        } else {
          // Error saat setup request
          this.errorMessage = `Error: ${error.message}`;
        }
        console.error('Error details:', error);
      }
    }
  }
});

app.mount('#app');

