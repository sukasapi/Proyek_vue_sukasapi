// Component dengan Multiline Template
// Template yang lebih kompleks dan panjang dengan beberapa baris

// Component 1: Product Card - Template multiline untuk card produk
const ProductCard = {
  template: `
    <div class="product-card">
      <div class="product-image">
        <img :src="product.image" :alt="product.name">
        <span class="badge">{{ product.badge }}</span>
      </div>
      <div class="product-content">
        <h3 class="product-title">{{ product.name }}</h3>
        <p class="product-description">{{ product.description }}</p>
        <div class="product-rating">
          <span class="stars">{{ product.rating }}</span>
          <span class="review-count">({{ product.reviews }} ulasan)</span>
        </div>
        <div class="product-footer">
          <span class="price">Rp {{ formatPrice(product.price) }}</span>
          <button class="btn-buy">Beli Sekarang</button>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      product: {
        name: 'Laptop Gaming Asus ROG',
        description: 'Laptop gaming dengan processor Intel i7 dan GPU RTX 3060, RAM 16GB DDR4, SSD 512GB',
        price: 15000000,
        image: 'https://via.placeholder.com/300x200?text=Laptop+Gaming',
        rating: '★★★★★',
        reviews: 124,
        badge: 'Terlaris'
      }
    }
  },
  methods: {
    formatPrice(price) {
      return new Intl.NumberFormat('id-ID').format(price);
    }
  }
};

// Component 2: Article Card - Template multiline untuk artikel
const ArticleCard = {
  template: `
    <article class="article-card">
      <header class="article-header">
        <div class="author-info">
          <div class="author-avatar">{{ article.author.initials }}</div>
          <div>
            <h4 class="author-name">{{ article.author.name }}</h4>
            <p class="publish-date">{{ article.publishDate }}</p>
          </div>
        </div>
        <span class="category">{{ article.category }}</span>
      </header>
      <div class="article-content">
        <h2 class="article-title">{{ article.title }}</h2>
        <p class="article-excerpt">{{ article.excerpt }}</p>
        <div class="article-tags">
          <span v-for="tag in article.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </div>
      <footer class="article-footer">
        <div class="article-stats">
          <span class="stat">
            <strong>{{ article.views }}</strong> dilihat
          </span>
          <span class="stat">
            <strong>{{ article.likes }}</strong> suka
          </span>
          <span class="stat">
            <strong>{{ article.comments }}</strong> komentar
          </span>
        </div>
        <button class="btn-read">Baca Selengkapnya →</button>
      </footer>
    </article>
  `,
  data() {
    return {
      article: {
        title: 'Panduan Lengkap Belajar Vue.js 3 untuk Pemula',
        excerpt: 'Vue.js adalah framework JavaScript progresif yang digunakan untuk membangun antarmuka pengguna. Dalam artikel ini, kita akan mempelajari dasar-dasar Vue.js 3...',
        author: {
          name: 'Dr. Budi Santoso',
          initials: 'BS'
        },
        publishDate: '15 Maret 2024',
        category: 'Web Development',
        tags: ['Vue.js', 'JavaScript', 'Frontend', 'Tutorial'],
        views: 2450,
        likes: 89,
        comments: 23
      }
    }
  }
};

// Registrasi dan mount aplikasi
const app = Vue.createApp({
  components: {
    'product-card': ProductCard,
    'article-card': ArticleCard
  }
}).mount('#app');

