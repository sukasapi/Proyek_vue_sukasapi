// Component dengan Data Property
// Data property digunakan untuk menyimpan state/data reaktif dalam component

// Component 1: User Profile - Menggunakan berbagai tipe data property
const UserProfile = {
  template: `
    <div class="profile-card">
      <div class="profile-header">
        <img :src="user.avatar" :alt="user.name" class="avatar">
        <h3>{{ user.name }}</h3>
        <p class="status" :class="{ online: user.isOnline }">
          {{ user.isOnline ? 'Online' : 'Offline' }}
        </p>
      </div>
      <div class="profile-body">
        <div class="info-item">
          <span class="label">Email:</span>
          <span class="value">{{ user.email }}</span>
        </div>
        <div class="info-item">
          <span class="label">Umur:</span>
          <span class="value">{{ user.age }} tahun</span>
        </div>
        <div class="info-item">
          <span class="label">Kota:</span>
          <span class="value">{{ user.city }}</span>
        </div>
        <div class="info-item">
          <span class="label">Hobi:</span>
          <span class="value">{{ user.hobbies.join(', ') }}</span>
        </div>
        <div class="info-item">
          <span class="label">Bergabung:</span>
          <span class="value">{{ user.joinDate }}</span>
        </div>
      </div>
      <div class="profile-actions">
        <button @click="toggleStatus" class="btn-toggle">
          {{ user.isOnline ? 'Set Offline' : 'Set Online' }}
        </button>
        <button @click="incrementAge" class="btn-increment">Tambah Umur</button>
      </div>
    </div>
  `,
  data() {
    // Data property harus berupa fungsi yang return object
    return {
      user: {
        name: 'Ahmad Rizki',
        email: 'ahmad.rizki@example.com',
        age: 22,
        city: 'Jakarta',
        avatar: 'https://via.placeholder.com/150?text=AR',
        isOnline: true,
        hobbies: ['Programming', 'Reading', 'Gaming'],
        joinDate: '1 Januari 2023'
      }
    }
  },
  methods: {
    toggleStatus() {
      this.user.isOnline = !this.user.isOnline;
    },
    incrementAge() {
      this.user.age++;
    }
  }
};

// Component 2: Counter - Data property sederhana dengan number
const CounterComponent = {
  template: `
    <div class="counter-card">
      <h3>Counter Component</h3>
      <div class="counter-display">
        <span class="counter-value" :class="{ negative: count < 0 }">
          {{ count }}
        </span>
      </div>
      <div class="counter-controls">
        <button @click="decrement" class="btn-counter minus">-</button>
        <button @click="reset" class="btn-counter reset">Reset</button>
        <button @click="increment" class="btn-counter plus">+</button>
      </div>
      <div class="counter-info">
        <p>Nilai saat ini: <strong>{{ count }}</strong></p>
        <p>Total perubahan: <strong>{{ changeCount }}</strong></p>
      </div>
    </div>
  `,
  data() {
    return {
      count: 0,           // Number
      changeCount: 0      // Number untuk tracking perubahan
    }
  },
  methods: {
    increment() {
      this.count++;
      this.changeCount++;
    },
    decrement() {
      this.count--;
      this.changeCount++;
    },
    reset() {
      this.count = 0;
      this.changeCount++;
    }
  }
};

// Component 3: Shopping Cart - Data property dengan array dan object kompleks
const ShoppingCart = {
  template: `
    <div class="cart-card">
      <h3>Keranjang Belanja</h3>
      <div v-if="items.length === 0" class="empty-cart">
        <p>Keranjang kosong</p>
      </div>
      <div v-else>
        <div class="cart-items">
          <div v-for="item in items" :key="item.id" class="cart-item">
            <div class="item-info">
              <span class="item-name">{{ item.name }}</span>
              <span class="item-price">Rp {{ formatPrice(item.price) }}</span>
            </div>
            <div class="item-quantity">
              <button @click="decreaseQuantity(item)" class="btn-qty">-</button>
              <span class="qty">{{ item.quantity }}</span>
              <button @click="increaseQuantity(item)" class="btn-qty">+</button>
            </div>
            <div class="item-total">
              Rp {{ formatPrice(item.price * item.quantity) }}
            </div>
            <button @click="removeItem(item.id)" class="btn-remove">×</button>
          </div>
        </div>
        <div class="cart-summary">
          <div class="summary-row">
            <span>Subtotal:</span>
            <span>Rp {{ formatPrice(subtotal) }}</span>
          </div>
          <div class="summary-row">
            <span>Pajak (10%):</span>
            <span>Rp {{ formatPrice(tax) }}</span>
          </div>
          <div class="summary-row total">
            <span>Total:</span>
            <span>Rp {{ formatPrice(total) }}</span>
          </div>
        </div>
      </div>
      <button @click="addSampleItem" class="btn-add">+ Tambah Item</button>
    </div>
  `,
  data() {
    return {
      items: [
        { id: 1, name: 'Laptop', price: 10000000, quantity: 1 },
        { id: 2, name: 'Mouse', price: 150000, quantity: 2 },
        { id: 3, name: 'Keyboard', price: 500000, quantity: 1 }
      ],
      nextId: 4,
      sampleItems: [
        { name: 'Monitor', price: 2500000 },
        { name: 'Webcam', price: 800000 },
        { name: 'Speaker', price: 1200000 }
      ],
      sampleIndex: 0
    }
  },
  computed: {
    subtotal() {
      return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    },
    tax() {
      return this.subtotal * 0.1;
    },
    total() {
      return this.subtotal + this.tax;
    }
  },
  methods: {
    increaseQuantity(item) {
      item.quantity++;
    },
    decreaseQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--;
      }
    },
    removeItem(id) {
      this.items = this.items.filter(item => item.id !== id);
    },
    addSampleItem() {
      const sample = this.sampleItems[this.sampleIndex % this.sampleItems.length];
      this.items.push({
        id: this.nextId++,
        name: sample.name,
        price: sample.price,
        quantity: 1
      });
      this.sampleIndex++;
    },
    formatPrice(price) {
      return new Intl.NumberFormat('id-ID').format(price);
    }
  }
};

// Registrasi dan mount aplikasi
const app = Vue.createApp({
  components: {
    'user-profile': UserProfile,
    'counter-component': CounterComponent,
    'shopping-cart': ShoppingCart
  }
}).mount('#app');

