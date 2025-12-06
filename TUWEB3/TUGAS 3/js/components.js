// Vue Components untuk reusable components
// Komponen ini menggunakan Vue Component dan Property Template

// Komponen Alert untuk menampilkan pesan notifikasi
Vue.component('alert-component', {
  props: {
    message: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'info',
      validator: function(value) {
        return ['info', 'success', 'warning', 'error'].indexOf(value) !== -1;
      }
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  template: `
    <div v-if="show && message" :class="['alert', 'alert-' + type]" v-text="message"></div>
  `
});

// Komponen Card untuk menampilkan konten dalam card
Vue.component('card-component', {
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    }
  },
  template: `
    <div class="card">
      <div v-if="title || subtitle" class="card-header">
        <h2 v-if="title" v-text="title"></h2>
        <p v-if="subtitle" v-text="subtitle"></p>
      </div>
      <slot></slot>
    </div>
  `
});

// Komponen Badge untuk menampilkan status badge
Vue.component('badge-component', {
  props: {
    text: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'info',
      validator: function(value) {
        return ['info', 'success', 'warning', 'danger'].indexOf(value) !== -1;
      }
    }
  },
  template: `
    <span :class="['badge', 'badge-' + type]" v-text="text"></span>
  `
});

// Komponen Thumbnail Card untuk menampilkan item dengan thumbnail
Vue.component('thumbnail-card', {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleImageError(event) {
      event.target.src = 'https://via.placeholder.com/200x200?text=No+Image';
    }
  },
  template: `
    <div class="card thumbnail-card">
      <img 
        :src="item.thumbnail || 'https://via.placeholder.com/200x200?text=No+Image'"
        :alt="item.nama"
        @error="handleImageError"
      >
      <div style="padding: 1rem;">
        <div style="font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 0.5rem;" v-text="item.id"></div>
        <h4 style="font-size: 1rem; font-weight: 600; margin-bottom: 0.75rem; color: var(--text-primary);" v-text="item.nama"></h4>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div>
            <div style="font-size: 0.875rem; color: var(--text-secondary);">Stok</div>
            <div style="font-size: 1.25rem; font-weight: 600; color: var(--primary-color);" v-text="item.stok | number"></div>
          </div>
          <div style="font-size: 0.875rem; color: var(--text-secondary);" v-text="item.satuan"></div>
        </div>
      </div>
    </div>
  `
});

// Komponen Timeline Item untuk menampilkan item timeline
Vue.component('timeline-item', {
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      default: 0
    }
  },
  template: `
    <div class="timeline-item">
      <h4 v-text="item.status"></h4>
      <p v-text="formatDateTime(item.tanggal, item.waktu)"></p>
      <p v-text="'Lokasi: ' + item.lokasi"></p>
    </div>
  `,
  methods: {
    formatDateTime(tanggal, waktu) {
      if (!tanggal || !waktu) return '-';
      try {
        const dateTime = new Date(tanggal + 'T' + waktu + ':00');
        const options = { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          timeZone: 'Asia/Jakarta'
        };
        return dateTime.toLocaleString('id-ID', options);
      } catch (error) {
        return `${tanggal} ${waktu}`;
      }
    }
  }
});

// Komponen Empty State untuk menampilkan state kosong
Vue.component('empty-state', {
  props: {
    icon: {
      type: String,
      default: '📦'
    },
    title: {
      type: String,
      default: 'Tidak Ada Data'
    },
    message: {
      type: String,
      default: 'Tidak ada data yang ditampilkan.'
    }
  },
  template: `
    <div class="empty-state">
      <div class="empty-state-icon" v-text="icon"></div>
      <h3 v-text="title"></h3>
      <p v-text="message"></p>
    </div>
  `
});

// Komponen Search Box untuk input pencarian
Vue.component('search-box', {
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Cari...'
    },
    buttonText: {
      type: String,
      default: 'Cari'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleInput(event) {
      this.$emit('input', event.target.value);
    },
    handleSearch() {
      this.$emit('search');
    },
    handleKeyup(event) {
      if (event.key === 'Enter') {
        this.handleSearch();
      }
      this.$emit('keyup', event);
    }
  },
  template: `
    <div class="search-box">
      <input 
        type="text" 
        :value="value"
        @input="handleInput"
        @keyup.enter="handleSearch"
        class="form-control" 
        :placeholder="placeholder"
        :disabled="disabled"
      >
      <button 
        type="button" 
        @click="handleSearch"
        class="btn btn-primary"
        :disabled="disabled || !value || value.trim() === ''"
        v-text="buttonText">
      </button>
    </div>
  `
});

