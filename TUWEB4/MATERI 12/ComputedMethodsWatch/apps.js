// Component dengan Computed, Methods, dan Watch Property

// Component 1: Computed Property - Contoh perhitungan otomatis
const ComputedExample = {
  template: `
    <div class="example-card">
      <h3>Computed Property</h3>
      <div class="input-group">
        <label>Panjang (cm):</label>
        <input type="number" v-model.number="panjang" min="0">
      </div>
      <div class="input-group">
        <label>Lebar (cm):</label>
        <input type="number" v-model.number="lebar" min="0">
      </div>
      
      <div class="results">
        <div class="result-item">
          <span class="label">Luas:</span>
          <span class="value">{{ luas }} cm²</span>
        </div>
        <div class="result-item">
          <span class="label">Keliling:</span>
          <span class="value">{{ keliling }} cm</span>
        </div>
        <div class="result-item">
          <span class="label">Jenis:</span>
          <span class="value" :class="jenisBentuk.class">
            {{ jenisBentuk.nama }}
          </span>
        </div>
      </div>
      
      <div class="info-box">
        <strong>Catatan:</strong> Computed property dihitung otomatis dan di-cache. 
        Hasil hanya dihitung ulang ketika panjang atau lebar berubah.
      </div>
    </div>
  `,
  data() {
    return {
      panjang: 10,
      lebar: 10
    }
  },
  computed: {
    // Computed: otomatis dihitung ketika panjang/lebar berubah
    luas() {
      console.log('Computed: luas dihitung');
      return this.panjang * this.lebar;
    },
    keliling() {
      console.log('Computed: keliling dihitung');
      return 2 * (this.panjang + this.lebar);
    },
    jenisBentuk() {
      if (this.panjang === this.lebar) {
        return { nama: 'Persegi', class: 'square' };
      } else if (this.panjang > this.lebar) {
        return { nama: 'Persegi Panjang (Landscape)', class: 'landscape' };
      } else {
        return { nama: 'Persegi Panjang (Portrait)', class: 'portrait' };
      }
    }
  }
};

// Component 2: Methods - Contoh fungsi yang dipanggil secara manual
const MethodsExample = {
  template: `
    <div class="example-card">
      <h3>Methods</h3>
      
      <div class="todo-container">
        <div class="input-section">
          <input 
            type="text" 
            v-model="newTodo" 
            @keyup.enter="addTodo"
            placeholder="Tambah tugas baru..."
            class="todo-input"
          >
          <button @click="addTodo" class="btn-add-todo">Tambah</button>
        </div>
        
        <div class="filter-section">
          <button 
            v-for="filter in filters" 
            :key="filter"
            @click="currentFilter = filter"
            :class="['btn-filter', { active: currentFilter === filter }]"
          >
            {{ filter }}
          </button>
        </div>
        
        <ul class="todo-list">
          <li 
            v-for="todo in filteredTodos" 
            :key="todo.id"
            :class="{ completed: todo.completed }"
            class="todo-item"
          >
            <input 
              type="checkbox" 
              v-model="todo.completed"
              @change="updateTodo(todo)"
            >
            <span @dblclick="editTodo(todo)">{{ todo.text }}</span>
            <button @click="deleteTodo(todo.id)" class="btn-delete">×</button>
          </li>
        </ul>
        
        <div class="stats">
          <p>Total: {{ todos.length }} | 
             Selesai: {{ completedCount() }} | 
             Sisa: {{ remainingCount() }}</p>
        </div>
      </div>
      
      <div class="info-box">
        <strong>Catatan:</strong> Methods dipanggil setiap kali diperlukan dan tidak di-cache. 
        Cocok untuk event handlers dan operasi yang perlu dieksekusi saat dipanggil.
      </div>
    </div>
  `,
  data() {
    return {
      newTodo: '',
      todos: [
        { id: 1, text: 'Belajar Vue.js', completed: false },
        { id: 2, text: 'Membuat komponen', completed: true },
        { id: 3, text: 'Memahami computed vs methods', completed: false }
      ],
      nextId: 4,
      currentFilter: 'Semua',
      filters: ['Semua', 'Aktif', 'Selesai']
    }
  },
  computed: {
    filteredTodos() {
      switch (this.currentFilter) {
        case 'Aktif':
          return this.todos.filter(todo => !todo.completed);
        case 'Selesai':
          return this.todos.filter(todo => todo.completed);
        default:
          return this.todos;
      }
    }
  },
  methods: {
    // Method: dipanggil ketika tombol diklik atau Enter ditekan
    addTodo() {
      if (this.newTodo.trim()) {
        this.todos.push({
          id: this.nextId++,
          text: this.newTodo.trim(),
          completed: false
        });
        this.newTodo = '';
        console.log('Method: addTodo dipanggil');
      }
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
      console.log('Method: deleteTodo dipanggil');
    },
    editTodo(todo) {
      const newText = prompt('Edit tugas:', todo.text);
      if (newText !== null && newText.trim()) {
        todo.text = newText.trim();
      }
    },
    updateTodo(todo) {
      console.log('Method: updateTodo dipanggil', todo);
    },
    completedCount() {
      return this.todos.filter(todo => todo.completed).length;
    },
    remainingCount() {
      return this.todos.filter(todo => !todo.completed).length;
    }
  }
};

// Component 3: Watch - Contoh monitoring perubahan data
const WatchExample = {
  template: `
    <div class="example-card">
      <h3>Watch Property</h3>
      
      <div class="input-group">
        <label>Nama Pengguna:</label>
        <input type="text" v-model="username" placeholder="Masukkan nama...">
        <div v-if="usernameValidation" class="validation" :class="usernameValidation.status">
          {{ usernameValidation.message }}
        </div>
      </div>
      
      <div class="input-group">
        <label>Pencarian:</label>
        <input type="text" v-model="searchQuery" placeholder="Cari sesuatu...">
      </div>
      
      <div class="search-results">
        <h4>Hasil Pencarian:</h4>
        <div v-if="searchResults.length > 0">
          <ul>
            <li v-for="result in searchResults" :key="result">{{ result }}</li>
          </ul>
        </div>
        <p v-else class="no-results">Tidak ada hasil</p>
      </div>
      
      <div class="watch-log">
        <h4>Log Watch ({{ watchCallCount }} kali dipanggil):</h4>
        <div class="log-content">
          <p v-for="(log, index) in watchLogs" :key="index" class="log-item">
            {{ log }}
          </p>
        </div>
        <button @click="clearLogs" class="btn-clear">Bersihkan Log</button>
      </div>
      
      <div class="info-box">
        <strong>Catatan:</strong> Watch memantau perubahan data dan menjalankan fungsi. 
        Berguna untuk side effects seperti validasi, API calls, atau logging.
      </div>
    </div>
  `,
  data() {
    return {
      username: '',
      searchQuery: '',
      usernameValidation: null,
      watchCallCount: 0,
      watchLogs: [],
      items: ['Apel', 'Pisang', 'Mangga', 'Jeruk', 'Anggur', 'Semangka', 'Durian']
    }
  },
  computed: {
    searchResults() {
      if (!this.searchQuery) return [];
      return this.items.filter(item => 
        item.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  watch: {
    // Watch: memantau perubahan username
    username(newValue, oldValue) {
      this.watchCallCount++;
      const log = `[${new Date().toLocaleTimeString()}] Username berubah: "${oldValue || '(kosong)'}" → "${newValue}"`;
      this.watchLogs.unshift(log);
      
      // Validasi
      if (newValue.length < 3 && newValue.length > 0) {
        this.usernameValidation = {
          status: 'warning',
          message: 'Nama terlalu pendek (minimal 3 karakter)'
        };
      } else if (newValue.length >= 3 && newValue.length <= 20) {
        this.usernameValidation = {
          status: 'success',
          message: 'Nama valid ✓'
        };
      } else if (newValue.length > 20) {
        this.usernameValidation = {
          status: 'error',
          message: 'Nama terlalu panjang (maksimal 20 karakter)'
        };
      } else {
        this.usernameValidation = null;
      }
      
      // Simulasi debounce (pada praktik nyata bisa untuk API call)
      console.log('Watch: username berubah', { newValue, oldValue });
    },
    
    // Watch: memantau perubahan searchQuery dengan immediate
    searchQuery: {
      handler(newValue) {
        console.log('Watch: searchQuery berubah ke:', newValue);
      },
      immediate: true // Jalankan saat pertama kali component dibuat
    }
  },
  methods: {
    clearLogs() {
      this.watchLogs = [];
      this.watchCallCount = 0;
    }
  }
};

// Registrasi dan mount aplikasi
const app = Vue.createApp({
  components: {
    'computed-example': ComputedExample,
    'methods-example': MethodsExample,
    'watch-example': WatchExample
  }
}).mount('#app');

