// Component dengan Props
// Props adalah cara untuk mengirim data dari parent ke child component

// Component 1: User Card - Props sederhana dengan string dan number
const UserCard = {
  props: {
    name: {
      type: String,
      required: true
    },
    role: {
      type: String,
      default: 'Pengguna'
    },
    email: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      default: 0
    }
  },
  template: `
    <div class="user-card">
      <div class="avatar">{{ initials }}</div>
      <div class="user-info">
        <h3>{{ name }}</h3>
        <p class="role">{{ role }}</p>
        <p class="email">{{ email }}</p>
        <p class="age">Umur: {{ age }} tahun</p>
      </div>
    </div>
  `,
  computed: {
    initials() {
      return this.name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
        .substring(0, 2);
    }
  }
};

// Component 2: Product Card - Props dengan validasi
const ProductCard = {
  props: {
    title: {
      type: String,
      required: true,
      validator: (value) => value.length > 0
    },
    price: {
      type: Number,
      required: true,
      validator: (value) => value >= 0
    },
    stock: {
      type: Number,
      default: 0,
      validator: (value) => value >= 0
    },
    rating: {
      type: [String, Number],
      default: 0,
      validator: (value) => {
        const num = Number(value);
        return num >= 0 && num <= 5;
      }
    }
  },
  template: `
    <div class="product-card">
      <h4>{{ title }}</h4>
      <div class="price">Rp {{ formatPrice(price) }}</div>
      <div class="product-info">
        <div class="stock" :class="{ 'out-of-stock': stock === 0 }">
          Stok: {{ stock === 0 ? 'Habis' : stock + ' unit' }}
        </div>
        <div class="rating">
          Rating: {{ displayRating }}
        </div>
      </div>
    </div>
  `,
  computed: {
    displayRating() {
      const num = Number(this.rating);
      return '★'.repeat(num) + '☆'.repeat(5 - num);
    }
  },
  methods: {
    formatPrice(price) {
      return new Intl.NumberFormat('id-ID').format(price);
    }
  }
};

// Component 3: Profile Card - Props dengan Object dan Array
const ProfileCard = {
  props: {
    user: {
      type: Object,
      required: true,
      validator: (value) => {
        return value && typeof value === 'object' && 
               'name' in value && 'location' in value;
      }
    },
    skills: {
      type: Array,
      default: () => []
    }
  },
  template: `
    <div class="profile-card">
      <div class="profile-header">
        <h3>{{ user.name }}</h3>
        <p class="location">📍 {{ user.location }}</p>
      </div>
      <div class="profile-body">
        <div v-if="user.bio" class="bio">
          <p>{{ user.bio }}</p>
        </div>
        <div v-if="skills.length > 0" class="skills">
          <h4>Skills:</h4>
          <div class="skill-tags">
            <span v-for="skill in skills" :key="skill" class="skill-tag">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  `
};

// Component 4: Dynamic Card - Props yang berubah dari input
const DynamicCard = {
  props: {
    name: {
      type: String,
      default: 'Belum diisi'
    },
    age: {
      type: Number,
      default: 0
    }
  },
  template: `
    <div class="dynamic-card">
      <h4>Kartu Dinamis</h4>
      <div class="card-content">
        <p><strong>Nama:</strong> {{ name }}</p>
        <p><strong>Umur:</strong> {{ age > 0 ? age + ' tahun' : 'Belum diisi' }}</p>
        <p v-if="name !== 'Belum diisi' && age > 0" class="info">
          Props berubah secara real-time ketika Anda mengetik!
        </p>
      </div>
    </div>
  `
};

// Aplikasi utama
const app = Vue.createApp({
  components: {
    'user-card': UserCard,
    'product-card': ProductCard,
    'profile-card': ProfileCard,
    'dynamic-card': DynamicCard
  },
  data() {
    return {
      user1: {
        name: 'Ahmad Rizki',
        location: 'Jakarta, Indonesia',
        bio: 'Full Stack Developer dengan pengalaman 5 tahun dalam pengembangan aplikasi web modern.'
      },
      skills1: ['JavaScript', 'Vue.js', 'Node.js', 'MongoDB', 'CSS'],
      
      user2: {
        name: 'Siti Nurhaliza',
        location: 'Bandung, Indonesia',
        bio: 'UI/UX Designer yang fokus pada pengalaman pengguna yang menarik dan intuitif.'
      },
      skills2: ['Figma', 'Adobe XD', 'Photoshop', 'User Research', 'Prototyping'],
      
      dynamicName: '',
      dynamicAge: 0
    }
  }
}).mount('#app');

