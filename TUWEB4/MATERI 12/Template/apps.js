// Mendefinisikan Component dengan Template
// Component 1: Greeting Card - Template sederhana
const GreetingCard = {
  template: `
    <div class="card greeting">
      <h3>Selamat Datang!</h3>
      <p>Ini adalah contoh component dengan template sederhana.</p>
      <p class="time">{{ currentTime }}</p>
    </div>
  `,
  data() {
    return {
      currentTime: new Date().toLocaleTimeString('id-ID')
    }
  },
  mounted() {
    // Update waktu setiap detik
    setInterval(() => {
      this.currentTime = new Date().toLocaleTimeString('id-ID');
    }, 1000);
  }
};

// Component 2: User Card - Template dengan data dinamis
const UserCard = {
  template: `
    <div class="card user">
      <div class="avatar">{{ user.initials }}</div>
      <div class="info">
        <h4>{{ user.name }}</h4>
        <p class="role">{{ user.role }}</p>
        <p class="email">{{ user.email }}</p>
      </div>
    </div>
  `,
  data() {
    return {
      user: {
        name: 'Ahmad Rizki',
        role: 'Mahasiswa',
        email: 'ahmad.rizki@example.com',
        initials: 'AR'
      }
    }
  }
};

// Registrasi dan mount aplikasi
const app = Vue.createApp({
  components: {
    'greeting-card': GreetingCard,
    'user-card': UserCard
  }
}).mount('#app');

