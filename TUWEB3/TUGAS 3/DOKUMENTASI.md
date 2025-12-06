# Dokumentasi Tugas Praktik 3 - Mobile SITTA dengan Vue.js (Advanced)

## 📋 Daftar Isi

1. [Pendahuluan](#pendahuluan)
2. [Struktur Proyek](#struktur-proyek)
3. [Indikator Capaian Pembelajaran](#indikator-capaian-pembelajaran)
4. [Penjelasan Konsep Vue.js yang Digunakan](#penjelasan-konsep-vuejs-yang-digunakan)
5. [Implementasi Per Halaman](#implementasi-per-halaman)
6. [Penjelasan Code Penting](#penjelasan-code-penting)
7. [Cara Menggunakan](#cara-menggunakan)

---

## Pendahuluan

Proyek ini adalah aplikasi **Mobile SITTA (Sistem Informasi Tracking Bahan Ajar)** yang dibuat menggunakan **Vue.js 3** dengan implementasi fitur-fitur advanced. Aplikasi ini merupakan pengembangan dari Tugas 2 dengan penambahan fitur Vue Component, Filter, dan implementasi lengkap semua konsep Vue.js yang diminta.

### Teknologi yang Digunakan
- **HTML5** - Struktur halaman
- **CSS3** - Styling dengan CSS ringan
- **Vue.js 3** (vue.min.js) - Framework JavaScript untuk membangun antarmuka interaktif
- **JavaScript** - Logika aplikasi

---

## Struktur Proyek

```
TUGAS 3/
├── index.html              # Halaman utama dengan navigasi menu
├── stok.html               # Halaman 1: Stok Bahan Ajar (WAJIB)
├── tracking.html           # Halaman 2: Tracking DO (WAJIB)
├── css/
│   └── style.css          # CSS ringan untuk styling
├── js/
│   ├── vue.min.js         # Library Vue.js
│   ├── filters.js         # Filter untuk formatting data teks
│   ├── components.js      # Vue Components (custom elements)
│   ├── stok-app.js        # Logika Vue untuk stok.html
│   └── tracking-app.js    # Logika Vue untuk tracking.html
├── data/
│   └── data.js            # Data dummy aplikasi (SITTA_DATA)
└── DOKUMENTASI.md         # File dokumentasi ini
```

### Penjelasan File:

1. **index.html**: Halaman navigasi utama yang menampilkan menu untuk menuju ke halaman Stok Bahan Ajar dan Tracking DO.

2. **stok.html**: Halaman untuk menampilkan dan mengelola informasi stok bahan ajar dengan fitur:
   - Pilihan lokasi (Pusat/UPBJJ)
   - Pilihan jenis stok (Item/Paket/Lokasi)
   - Pencarian bahan ajar
   - Tampilan grid dengan thumbnail menggunakan Vue Component
   - Tampilan tabel dengan v-for menggunakan zero-based dan name-based index

3. **tracking.html**: Halaman untuk tracking pengiriman Delivery Order dengan fitur:
   - Pencarian berdasarkan No. Billing
   - Tampilan detail lengkap tracking menggunakan Vue Components
   - Timeline perjalanan paket menggunakan Vue Component
   - Informasi pembayaran dengan filter formatting

4. **js/filters.js**: File berisi filter Vue.js untuk formatting data teks (currency, tanggal, uppercase, dll)

5. **js/components.js**: File berisi Vue Components yang reusable (Alert, Card, Badge, Thumbnail Card, Timeline Item, Empty State)

---

## Indikator Capaian Pembelajaran

Tugas Praktik 3 ini memiliki **8 Indikator Capaian** untuk menilai Hasil Belajar Mahasiswa:

### 1. ✅ Sistem Perorganisasian Kode Vue.js dengan Vue Component dan Vue Template

**Penjelasan**: Mahasiswa dapat menerapkan sistem perorganisasian kode Javascript Framework Vue.js dengan memanfaatkan konsep Vue Component dan Vue Template.

**Implementasi**:
- Menggunakan struktur Vue.js standar dengan `Vue.createApp()`
- Pemisahan logika ke file terpisah (`stok-app.js`, `tracking-app.js`)
- Penggunaan Vue Components di file `components.js`
- Penggunaan Vue Template dalam komponen

**Contoh Code**:
```javascript
// Di js/components.js
Vue.component('alert-component', {
  props: {
    message: { type: String, default: '' },
    type: { type: String, default: 'info' }
  },
  template: `
    <div v-if="message" :class="['alert', 'alert-' + type]" v-text="message"></div>
  `
});
```

**Penggunaan di HTML**:
```html
<alert-component :message="alertMessage" :type="alertType"></alert-component>
```

---

### 2. ✅ Fungsi Menampilkan Data (Mustaches/Directive v-text)

**Penjelasan**: Mahasiswa dapat menerapkan fungsi untuk menampilkan data menggunakan mustaches atau directive v-text untuk menghasilkan output yang diharapkan.

**Implementasi**:
- **Mustaches** `{{ }}` untuk interpolasi data
- **Directive v-text** untuk menampilkan teks

**Contoh di stok.html**:
```html
<!-- Menggunakan Mustaches -->
<h2>Stok Bahan Ajar</h2>
<p>{{ lokasiAktif }} - {{ jenisStokAktif }}</p>
<p>Total: {{ totalStok | number }} item</p>

<!-- Menggunakan Directive v-text -->
<p v-text="'Pilih lokasi untuk melihat informasi stok bahan ajar'"></p>
<h4 v-text="item.nama"></h4>
```

**Contoh di tracking.html**:
```html
<!-- Menggunakan Mustaches dengan Filter -->
<td>{{ trackingData.nim | uppercase }}</td>
<td>{{ trackingData.dataPembayaran.totalBayar | currency }}</td>

<!-- Menggunakan Directive v-text dengan Filter -->
<td v-text="trackingData.nama | capitalize"></td>
<td v-text="trackingData.email | lowercase"></td>
```

**Perbedaan**:
- **Mustaches** `{{ }}`: Lebih fleksibel, bisa digunakan dalam atribut dan dengan filter
- **v-text**: Hanya untuk menampilkan teks murni, lebih aman dari XSS

---

### 3. ✅ Conditional Rendering (v-if/v-else/v-else-if/v-show)

**Penjelasan**: Mahasiswa dapat menerapkan fungsi conditional atau pengandaian dengan directive v-if, v-else, v-else-if, atau v-show dengan operator condition yang sesuai.

**Implementasi**:

#### **v-if / v-else-if / v-else**
Digunakan untuk conditional rendering berdasarkan kondisi. Elemen akan ditambahkan/dihapus dari DOM.

**Contoh di stok.html**:
```html
<!-- Tab Lokasi -->
<div v-if="lokasiTab === 'pusat'">
  <!-- Konten tab Pusat -->
</div>
<div v-else-if="lokasiTab === 'upbjj'">
  <!-- Konten tab UPBJJ -->
</div>

<!-- Jenis Stok -->
<div v-if="jenisStok === 'item' || jenisStok === 'paket'">
  <!-- Tampilkan grid -->
</div>
<div v-else-if="jenisStok === 'lokasi'">
  <!-- Tampilkan tabel -->
</div>
```

**Contoh di tracking.html**:
```html
<!-- Tampilkan data tracking jika ada -->
<div v-if="trackingData">
  <!-- Detail tracking -->
</div>

<!-- Tampilkan empty state jika belum ada pencarian -->
<div v-else-if="!isSearching">
  <empty-state></empty-state>
</div>

<!-- Tampilkan loading jika sedang mencari -->
<div v-if="isSearching">
  <empty-state icon="⏳" title="Mencari..."></empty-state>
</div>
```

#### **v-show**
Digunakan untuk toggle visibility. Elemen tetap ada di DOM, hanya CSS `display` yang diubah.

**Contoh di stok.html**:
```html
<!-- Tab jenis stok akan selalu ada di DOM, hanya visibility yang berubah -->
<div class="tabs" v-show="lokasiTab">
  <button v-text="'Stok Item'"></button>
  <button v-text="'Stok Paket'"></button>
  <button v-text="'Stok per Lokasi'"></button>
</div>
```

**Perbedaan v-if vs v-show**:
- **v-if**: Conditional rendering (elemen ditambahkan/dihapus dari DOM). Lebih baik untuk kondisi yang jarang berubah.
- **v-show**: Conditional display (elemen tetap ada, hanya CSS yang diubah). Lebih baik untuk toggle yang sering berubah.

---

### 4. ✅ Data Binding (v-bind, v-model) dan Property (computed, methods)

**Penjelasan**: Mahasiswa mampu menerapkan data binding (one-way/two-way) melalui directive v-bind, v-model dan penggunaan property untuk mengolah data (computed property/methods property).

#### **A. Two-Way Data Binding dengan v-model**
**v-model** digunakan untuk two-way data binding pada form input.

**Contoh di stok.html**:
```html
<!-- Input pencarian dengan v-model -->
<input 
  type="text" 
  v-model="searchText"
  placeholder="Cari bahan ajar..."
>
```

**Contoh di tracking.html**:
```html
<!-- Input No. Billing dengan v-model -->
<input 
  type="text" 
  v-model="noBilling"
  placeholder="Masukkan No. Billing..."
>
```

#### **B. One-Way Data Binding dengan v-bind**
**v-bind** (disingkat `:`) digunakan untuk one-way data binding pada atribut HTML.

**Contoh di stok.html**:
```html
<!-- Binding class dinamis -->
<button 
  class="tab" 
  :class="{ active: lokasiTab === 'pusat' }"
  @click="ubahLokasiTab('pusat')">
  Pusat
</button>

<!-- Binding src gambar -->
<img 
  :src="item.thumbnail || 'https://via.placeholder.com/200x200?text=No+Image'"
  :alt="item.nama"
>
```

**Contoh di tracking.html**:
```html
<!-- Binding disabled attribute -->
<button 
  :disabled="!noBilling || noBilling.trim() === ''"
  @click="cariTracking">
  Cari
</button>

<!-- Binding props ke komponen -->
<alert-component 
  :message="alertMessage" 
  :type="alertType"
  :show="!!alertMessage">
</alert-component>
```

#### **C. Computed Properties**
**Computed properties** adalah property yang nilainya dihitung berdasarkan data property lain.

**Contoh di stok-app.js**:
```javascript
computed: {
  filteredStok() {
    // Filter stok berdasarkan pencarian
    let dataToFilter = [];
    if (this.lokasiTab === 'pusat') {
      if (this.jenisStok === 'item') {
        dataToFilter = this.stokPusat.stokItem || [];
      }
    }
    
    if (!this.searchText || this.searchText.trim() === '') {
      return dataToFilter;
    }
    
    const searchLower = this.searchText.toLowerCase().trim();
    return dataToFilter.filter(item => {
      return item.nama.toLowerCase().includes(searchLower);
    });
  },
  
  lokasiAktif() {
    return this.lokasiTab === 'pusat' ? 'Pusat' : 'UPBJJ';
  }
}
```

#### **D. Methods Properties**
**Methods** adalah fungsi yang dapat dipanggil dari template atau dari method lain.

**Contoh di stok-app.js**:
```javascript
methods: {
  ubahLokasiTab(lokasi) {
    this.lokasiTab = lokasi;
    this.jenisStok = 'item';
    this.searchText = '';
    this.tampilkanAlert(`Menampilkan stok untuk ${lokasi === 'pusat' ? 'Pusat' : 'UPBJJ'}`, 'info');
  },
  
  tampilkanAlert(pesan, tipe) {
    this.alertMessage = pesan;
    this.alertType = tipe || 'info';
    setTimeout(() => {
      this.alertMessage = '';
    }, 3000);
  }
}
```

---

### 5. ✅ Watcher

**Penjelasan**: Mahasiswa mampu menerapkan fungsi watcher yang sesuai untuk menghasilkan output yang diharapkan.

**Watcher** digunakan untuk memantau perubahan data property dan menjalankan kode ketika data berubah.

**Contoh di stok-app.js**:
```javascript
watch: {
  // Watcher untuk memantau perubahan searchText
  searchText(newValue, oldValue) {
    console.log(`Search text berubah dari "${oldValue}" menjadi "${newValue}"`);
    
    if (newValue && newValue.trim() !== '') {
      this.$nextTick(() => {
        const jumlahHasil = this.filteredStok.length;
        if (jumlahHasil > 0) {
          this.alertMessage = `Ditemukan ${jumlahHasil} hasil untuk "${newValue}"`;
          this.alertType = 'success';
        } else {
          this.alertMessage = `Tidak ditemukan hasil untuk "${newValue}"`;
          this.alertType = 'warning';
        }
      });
    } else {
      this.alertMessage = '';
    }
  },
  
  // Watcher untuk memantau perubahan lokasiTab
  lokasiTab(newValue, oldValue) {
    console.log(`Lokasi tab berubah dari "${oldValue}" menjadi "${newValue}"`);
    if (oldValue && newValue !== oldValue) {
      this.searchText = '';
    }
  },
  
  // Watcher untuk computed property
  filteredStok(newValue, oldValue) {
    if (this.searchText && this.searchText.trim() !== '') {
      console.log(`Jumlah hasil pencarian berubah menjadi: ${newValue.length}`);
    }
  }
}
```

**Contoh di tracking-app.js**:
```javascript
watch: {
  // Watcher untuk memantau perubahan noBilling
  noBilling(newValue, oldValue) {
    console.log(`No. Billing berubah dari "${oldValue}" menjadi "${newValue}"`);
    
    if (newValue !== oldValue) {
      this.hasError = false;
    }
    
    if (!newValue || newValue.trim() === '') {
      this.trackingData = null;
      this.statusPencarian = '';
    }
  },
  
  // Watcher untuk memantau perubahan trackingData
  trackingData(newValue, oldValue) {
    if (newValue) {
      console.log('Data tracking berhasil dimuat:', newValue.noBilling);
    }
  }
}
```

---

### 6. ✅ v-for dengan Zero-based dan Name-based Index

**Penjelasan**: Mahasiswa mampu menerapkan pengolahan data Array melalui directive v-for, baik untuk zero-based number index maupun name based index.

**Implementasi**:

#### **Zero-based Index (menggunakan index)**
Index dimulai dari 0, 1, 2, 3, ...

**Contoh di stok.html**:
```html
<!-- v-for dengan zero-based index -->
<tr v-for="(item, index) in stokLokasiPusat" :key="item.lokasi">
  <td>{{ index + 1 }}</td>  <!-- Menampilkan nomor urut (1, 2, 3, ...) -->
  <td><strong v-text="item.lokasi"></strong></td>
  <td v-text="item.stokTotal | number"></td>
</tr>
```

**Contoh di tracking.html**:
```html
<!-- v-for dengan zero-based index untuk timeline -->
<timeline-item 
  v-for="(item, index) in trackingData.dataPengiriman.detailPerjalanan" 
  :key="index"
  :item="item"
  :index="index">
</timeline-item>
```

#### **Name-based Index (menggunakan key dari object)**
Menggunakan property dari object sebagai identifier.

**Contoh di stok.html**:
```html
<!-- v-for dengan name-based index (menggunakan item.id sebagai key) -->
<thumbnail-card 
  v-for="(item, index) in filteredStok" 
  :key="item.id"  <!-- Name-based: menggunakan item.id -->
  :item="item">
</thumbnail-card>
```

**Contoh di tracking.html**:
```html
<!-- v-for dengan name-based index -->
<tr v-for="(item, index) in stokLokasiPusat" :key="item.lokasi">
  <!-- item.lokasi digunakan sebagai identifier -->
</tr>
```

**Penjelasan**:
- **Zero-based index**: `index` dimulai dari 0, berguna untuk menampilkan nomor urut
- **Name-based index**: Menggunakan property unik dari object (seperti `id`, `lokasi`) sebagai `:key` untuk performa yang lebih baik

---

### 7. ✅ Filter untuk Formatting Data Teks

**Penjelasan**: Mahasiswa mampu menerapkan formatting data teks menggunakan konsep filter.

**Implementasi**:

Filter didefinisikan di `js/filters.js` dan digunakan dengan pipe operator `|`.

**Contoh Filter di js/filters.js**:
```javascript
// Filter untuk format currency (Rupiah)
Vue.filter('currency', function(value) {
  if (!value && value !== 0) return '-';
  return 'Rp ' + value.toLocaleString('id-ID');
});

// Filter untuk format tanggal Indonesia
Vue.filter('formatTanggal', function(value) {
  if (!value) return '-';
  try {
    const date = new Date(value + 'T00:00:00');
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      timeZone: 'Asia/Jakarta'
    };
    return date.toLocaleDateString('id-ID', options);
  } catch (error) {
    return value;
  }
});

// Filter untuk uppercase
Vue.filter('uppercase', function(value) {
  if (!value) return '';
  return value.toString().toUpperCase();
});

// Filter untuk capitalize
Vue.filter('capitalize', function(value) {
  if (!value) return '';
  return value.toString().charAt(0).toUpperCase() + value.toString().slice(1).toLowerCase();
});

// Filter untuk format angka dengan separator
Vue.filter('number', function(value) {
  if (!value && value !== 0) return '-';
  return value.toLocaleString('id-ID');
});
```

**Penggunaan di HTML**:
```html
<!-- Menggunakan Filter dengan Mustaches -->
<td>{{ trackingData.nim | uppercase }}</td>
<td>{{ trackingData.dataPembayaran.totalBayar | currency }}</td>
<td>{{ trackingData.dataPengiriman.tanggalPengiriman | formatTanggal }}</td>
<td>{{ item.stokTotal | number }}</td>

<!-- Menggunakan Filter dengan v-text -->
<td v-text="trackingData.nama | capitalize"></td>
<td v-text="trackingData.email | lowercase"></td>
```

**Filter yang Tersedia**:
- `currency` - Format currency Rupiah
- `formatTanggal` - Format tanggal Indonesia
- `formatDateTime` - Format tanggal dan waktu
- `uppercase` - Huruf besar semua
- `lowercase` - Huruf kecil semua
- `capitalize` - Huruf pertama besar
- `number` - Format angka dengan separator
- `truncate` - Memotong teks

---

### 8. ✅ Custom Element, Vue Component, dan Property Template

**Penjelasan**: Mahasiswa mampu menerapkan penggunaan custom element, Vue Component, dan Property Template.

**Implementasi**:

#### **A. Vue Component dengan Custom Element**

Komponen Vue didefinisikan menggunakan `Vue.component()` dan digunakan sebagai custom element di HTML.

**Contoh di js/components.js**:
```javascript
// Komponen Alert
Vue.component('alert-component', {
  props: {
    message: { type: String, default: '' },
    type: { type: String, default: 'info' },
    show: { type: Boolean, default: true }
  },
  template: `
    <div v-if="show && message" :class="['alert', 'alert-' + type]" v-text="message"></div>
  `
});

// Komponen Badge
Vue.component('badge-component', {
  props: {
    text: { type: String, required: true },
    type: { type: String, default: 'info' }
  },
  template: `
    <span :class="['badge', 'badge-' + type]" v-text="text"></span>
  `
});

// Komponen Thumbnail Card
Vue.component('thumbnail-card', {
  props: {
    item: { type: Object, required: true }
  },
  methods: {
    handleImageError(event) {
      event.target.src = 'https://via.placeholder.com/200x200?text=No+Image';
    }
  },
  template: `
    <div class="card thumbnail-card">
      <img :src="item.thumbnail || 'https://via.placeholder.com/200x200?text=No+Image'"
           :alt="item.nama"
           @error="handleImageError">
      <div style="padding: 1rem;">
        <div v-text="item.id"></div>
        <h4 v-text="item.nama"></h4>
        <div v-text="item.stok | number"></div>
      </div>
    </div>
  `
});
```

**Penggunaan di HTML**:
```html
<!-- Custom Element Alert Component -->
<alert-component 
  :message="alertMessage" 
  :type="alertType"
  :show="!!alertMessage">
</alert-component>

<!-- Custom Element Badge Component -->
<badge-component 
  :text="trackingData.dataPengiriman.status"
  :type="getBadgeType(trackingData.dataPengiriman.status)">
</badge-component>

<!-- Custom Element Thumbnail Card Component -->
<thumbnail-card 
  v-for="(item, index) in filteredStok" 
  :key="item.id"
  :item="item">
</thumbnail-card>
```

#### **B. Property Template**

Template didefinisikan dalam property `template` di komponen Vue.

**Contoh**:
```javascript
Vue.component('card-component', {
  props: {
    title: { type: String, default: '' },
    subtitle: { type: String, default: '' }
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
```

**Penggunaan dengan Slot**:
```html
<card-component title="Data Pribadi Mahasiswa">
  <table class="table">
    <!-- Konten di sini akan masuk ke <slot></slot> -->
  </table>
</card-component>
```

#### **C. Komponen yang Tersedia**

1. **alert-component** - Menampilkan alert/notifikasi
2. **card-component** - Card dengan header dan slot untuk konten
3. **badge-component** - Badge untuk status
4. **thumbnail-card** - Card dengan thumbnail gambar
5. **timeline-item** - Item untuk timeline
6. **empty-state** - State kosong dengan icon dan pesan

---

## Implementasi Per Halaman

### 📄 Halaman 1: stok.html (Stok Bahan Ajar)

#### Fitur Utama:
1. **Tab Lokasi**: Pilihan antara Pusat dan UPBJJ
2. **Tab Jenis Stok**: Pilihan antara Item, Paket, dan Lokasi
3. **Pencarian**: Filter bahan ajar berdasarkan nama atau ID
4. **Tampilan Grid**: Menampilkan stok dengan thumbnail menggunakan Vue Component
5. **Tampilan Tabel**: Menampilkan stok per lokasi dengan v-for (zero-based dan name-based index)

#### Konsep Vue.js yang Digunakan:

**1. Vue Components**:
- `alert-component` untuk notifikasi
- `thumbnail-card` untuk menampilkan item dengan thumbnail
- `empty-state` untuk state kosong

**2. Mustaches dan v-text**:
```html
<p>{{ lokasiAktif }} - {{ jenisStokAktif }}</p>
<p>Total: {{ totalStok | number }} item</p>
<h4 v-text="item.nama"></h4>
```

**3. Conditional Rendering**:
```html
<div v-if="lokasiTab === 'pusat'">...</div>
<div v-else-if="lokasiTab === 'upbjj'">...</div>
<div v-show="lokasiTab">...</div>
```

**4. Data Binding**:
```html
<input v-model="searchText">
<button :class="{ active: lokasiTab === 'pusat' }">
```

**5. v-for dengan Zero-based dan Name-based Index**:
```html
<!-- Zero-based index -->
<tr v-for="(item, index) in stokLokasiPusat" :key="item.lokasi">
  <td>{{ index + 1 }}</td>
</tr>

<!-- Name-based index -->
<thumbnail-card 
  v-for="(item, index) in filteredStok" 
  :key="item.id"
  :item="item">
</thumbnail-card>
```

**6. Filter**:
```html
<td v-text="item.stokTotal | number"></td>
```

---

### 📄 Halaman 2: tracking.html (Tracking DO)

#### Fitur Utama:
1. **Form Pencarian**: Input No. Billing untuk mencari tracking
2. **Detail Tracking**: Menampilkan informasi lengkap tracking menggunakan Vue Components
3. **Data Mahasiswa**: Informasi pribadi mahasiswa
4. **Data Pengiriman**: Informasi pengiriman dengan timeline menggunakan Vue Component
5. **Data Pembayaran**: Informasi pembayaran lengkap dengan filter formatting

#### Konsep Vue.js yang Digunakan:

**1. Vue Components**:
- `alert-component` untuk notifikasi
- `card-component` untuk card dengan header
- `badge-component` untuk status badge
- `timeline-item` untuk item timeline
- `empty-state` untuk state kosong

**2. Mustaches dan v-text dengan Filter**:
```html
<td>{{ trackingData.nim | uppercase }}</td>
<td>{{ trackingData.dataPembayaran.totalBayar | currency }}</td>
<td v-text="trackingData.nama | capitalize"></td>
```

**3. Conditional Rendering**:
```html
<div v-if="trackingData">...</div>
<div v-else-if="!isSearching">...</div>
<div v-if="isSearching">...</div>
```

**4. Data Binding**:
```html
<input v-model="noBilling">
<button :disabled="!noBilling || noBilling.trim() === ''">
```

**5. v-for dengan Zero-based Index**:
```html
<timeline-item 
  v-for="(item, index) in trackingData.dataPengiriman.detailPerjalanan" 
  :key="index"
  :item="item"
  :index="index">
</timeline-item>
```

**6. Filter**:
```html
<td>{{ trackingData.dataPengiriman.tanggalPengiriman | formatTanggal }}</td>
<td>{{ trackingData.dataPembayaran.totalBayar | currency }}</td>
```

---

## Penjelasan Code Penting

### 1. Struktur Dasar Vue.js App

```javascript
var app = Vue.createApp({
  data() {
    return {
      // Data properties
    }
  },
  computed: {
    // Computed properties
  },
  methods: {
    // Methods
  },
  watch: {
    // Watchers
  },
  mounted() {
    // Lifecycle hook
  }
}).mount('#app')
```

### 2. Vue Component dengan Props dan Template

```javascript
Vue.component('component-name', {
  props: {
    propName: { type: String, required: true }
  },
  template: `
    <div>
      <h2 v-text="propName"></h2>
      <slot></slot>
    </div>
  `
});
```

### 3. Filter untuk Formatting

```javascript
Vue.filter('filterName', function(value) {
  // Format value
  return formattedValue;
});
```

**Penggunaan**:
```html
{{ value | filterName }}
```

### 4. v-for dengan Index

```html
<!-- Zero-based index -->
<div v-for="(item, index) in items" :key="item.id">
  {{ index + 1 }}. {{ item.name }}
</div>

<!-- Name-based index (menggunakan property sebagai key) -->
<div v-for="item in items" :key="item.id">
  {{ item.name }}
</div>
```

---

## Cara Menggunakan

### 1. Persiapan
- Pastikan file `vue.min.js` sudah ada di folder `js/`
- Pastikan file `data/data.js` sudah ada dengan data `SITTA_DATA`
- Pastikan semua file JavaScript sudah di-load dengan urutan yang benar

### 2. Membuka Aplikasi
1. Buka file `index.html` di browser
2. Atau serve melalui web server (XAMPP, Laragon, dll)
3. Akses melalui URL: `http://localhost/TUWEB3/TUGAS 3/index.html`

### 3. Urutan Load Script
Pastikan script di-load dengan urutan berikut:
```html
<script src="data/data.js"></script>
<script src="js/vue.min.js"></script>
<script src="js/filters.js"></script>      <!-- Filter harus sebelum Components -->
<script src="js/components.js"></script>  <!-- Components harus sebelum App -->
<script src="js/stok-app.js"></script>    <!-- atau tracking-app.js -->
```

### 4. Navigasi
- Dari `index.html`, klik menu "Stok Bahan Ajar" untuk ke `stok.html`
- Atau klik menu "Tracking DO" untuk ke `tracking.html`
- Setiap halaman memiliki menu navigasi di header

### 5. Menggunakan Halaman Stok
1. Pilih lokasi: **Pusat** atau **UPBJJ**
2. Pilih jenis stok: **Stok Item**, **Stok Paket**, atau **Stok per Lokasi**
3. Gunakan search box untuk mencari bahan ajar (jika memilih Item atau Paket)
4. Data akan otomatis ter-filter sesuai pencarian
5. Lihat penggunaan Vue Components dan Filter pada tampilan

### 6. Menggunakan Halaman Tracking
1. Masukkan **No. Billing** di input field
2. Klik tombol **Cari** atau tekan **Enter**
3. Detail tracking akan ditampilkan jika data ditemukan
4. Lihat penggunaan Vue Components, Filter, dan v-for pada tampilan
5. Informasi yang ditampilkan:
   - Data Pribadi Mahasiswa (dengan filter uppercase, capitalize, lowercase)
   - Data Pengiriman Bahan Ajar (dengan timeline menggunakan Vue Component)
   - Data Pembayaran (dengan filter currency dan formatTanggal)

### 7. Data Testing

**No. Billing untuk Testing**:
- `BLG-2024-001`
- `BLG-2024-002`
- `BLG-2024-003`

**Data Stok**:
- Data stok Pusat: Item, Paket, dan Lokasi
- Data stok UPBJJ: Item, Paket, dan Lokasi

---

## Tips untuk Mahasiswa

### 1. Pahami Struktur Vue.js
- Pelajari konsep **data**, **computed**, **methods**, **watch**, dan **components**
- Pahami kapan menggunakan masing-masing

### 2. Vue Components
- Gunakan komponen untuk kode yang reusable
- Gunakan props untuk passing data ke komponen
- Gunakan slot untuk konten yang fleksibel

### 3. Filter
- Filter digunakan untuk formatting data sebelum ditampilkan
- Filter didefinisikan dengan `Vue.filter()`
- Filter digunakan dengan pipe operator `|`

### 4. v-for dengan Index
- Gunakan zero-based index untuk nomor urut
- Gunakan name-based index (property unik) sebagai `:key` untuk performa
- Selalu gunakan `:key` pada `v-for`

### 5. Conditional Rendering
- Gunakan **v-if** untuk kondisi yang jarang berubah
- Gunakan **v-show** untuk toggle yang sering berubah

### 6. Data Binding
- **v-model**: Untuk form input (two-way binding)
- **v-bind** (`:`): Untuk atribut HTML (one-way binding)

### 7. Best Practices
- Selalu gunakan `:key` pada `v-for`
- Pisahkan komponen ke file terpisah untuk reusability
- Gunakan computed untuk performa yang lebih baik
- Gunakan watcher untuk side effects

---

## Kesimpulan

Proyek ini telah mengimplementasikan semua konsep Vue.js yang diperlukan untuk Tugas Praktik 3:

✅ **Sistem Perorganisasian Kode**: Struktur Vue.js standar dengan Vue Component dan Vue Template  
✅ **Menampilkan Data**: Mustaches `{{ }}` dan directive `v-text`  
✅ **Conditional Rendering**: `v-if`, `v-else-if`, `v-else`, dan `v-show`  
✅ **Data Binding**: `v-model` (two-way) dan `v-bind` (one-way)  
✅ **Computed & Methods**: Computed properties dan methods untuk logika bisnis  
✅ **Watcher**: Monitoring perubahan data dengan watchers  
✅ **v-for**: Pengolahan array dengan zero-based dan name-based index  
✅ **Filter**: Formatting data teks menggunakan filter  
✅ **Custom Element & Vue Component**: Penggunaan custom element, Vue Component, dan Property Template  

Dengan memahami dokumentasi ini, mahasiswa diharapkan dapat menjelaskan dan memahami implementasi Vue.js advanced dalam proyek Mobile SITTA.

---

**Dokumentasi dibuat untuk Tugas Praktik 3 - Mobile SITTA dengan Vue.js (Advanced)**  
*Versi 1.0*

