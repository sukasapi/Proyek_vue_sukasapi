# Dokumentasi Tugas Praktik 2 - Mobile SITTA dengan Vue.js

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

Proyek ini adalah aplikasi **Mobile SITTA (Sistem Informasi Tracking Bahan Ajar)** yang dibuat menggunakan **Vue.js** framework. Aplikasi ini bertujuan untuk mengelola informasi stok bahan ajar dan tracking pengiriman Delivery Order (DO) untuk sistem kebutuhan proses pemesanan dan distribusi bahan ajar di UT.

### Teknologi yang Digunakan
- **HTML5** - Struktur halaman
- **CSS3** - Styling dengan CSS ringan
- **Vue.js 3** (vue.min.js) - Framework JavaScript untuk membangun antarmuka interaktif
- **JavaScript** - Logika aplikasi

---

## Struktur Proyek

```
Tugas2/
├── index.html              # Halaman utama dengan navigasi menu
├── stok.html               # Halaman 1: Stok Bahan Ajar (WAJIB)
├── tracking.html           # Halaman 2: Tracking DO (WAJIB)
├── css/
│   └── style.css          # CSS ringan untuk styling
├── js/
│   ├── vue.min.js         # Library Vue.js
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
   - Tampilan grid dengan thumbnail

3. **tracking.html**: Halaman untuk tracking pengiriman Delivery Order dengan fitur:
   - Pencarian berdasarkan No. Billing
   - Tampilan detail lengkap tracking
   - Timeline perjalanan paket
   - Informasi pembayaran

---

## Indikator Capaian Pembelajaran

Tugas Praktik 2 ini memiliki **5 Indikator Capaian** untuk menilai Hasil Belajar Mahasiswa:

### 1. ✅ Sistem Perorganisasian Kode Vue.js
**Penjelasan**: Mahasiswa dapat menerapkan sistem perorganisasian kode Vue.js yang disepakati pada umumnya.

**Implementasi**:
- Menggunakan struktur Vue.js standar dengan `Vue.createApp()`
- Pemisahan logika ke file terpisah (`stok-app.js`, `tracking-app.js`)
- Penggunaan `data()`, `computed`, `methods`, `watch`, dan lifecycle hooks

**Contoh Code**:
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

---

### 2. ✅ Fungsi Menampilkan Data (Mustaches/Directive v-text)
**Penjelasan**: Mahasiswa dapat menerapkan fungsi untuk menampilkan data menggunakan mustaches atau directive v-text untuk menghasilkan output yang diharapkan.

**Implementasi**:
- **Mustaches** `{{ }}` untuk interpolasi data
- **Directive v-text** untuk menampilkan teks

**Contoh di stok.html**:
```html
<!-- Menggunakan Mustaches -->
<h4>{{ item.nama }}</h4>
<div>{{ item.stok }}</div>

<!-- Menggunakan Directive v-text -->
<h4 v-text="item.nama"></h4>
<div v-text="item.stok"></div>

<!-- Menggunakan v-text pada attribute -->
<button v-text="'Stok Item'"></button>
```

**Contoh di tracking.html**:
```html
<td v-text="trackingData.nim"></td>
<td v-text="trackingData.nama"></td>
<p v-text="'Masukkan No. Billing untuk melihat detail lengkap'"></p>
```

**Perbedaan**:
- **Mustaches** `{{ }}`: Lebih fleksibel, bisa digunakan dalam atribut
- **v-text**: Hanya untuk menampilkan teks murni, lebih aman dari XSS

---

### 3. ✅ Conditional Rendering (v-if/v-else/v-else-if/v-show)
**Penjelasan**: Mahasiswa dapat menerapkan fungsi conditional atau pengandaian dengan directive v-if, v-else, v-else-if, atau v-show dengan operator condition yang sesuai.

**Implementasi**:

#### **v-if / v-else-if / v-else**
Digunakan untuk conditional rendering berdasarkan kondisi. Elemen akan ditambahkan/dihapus dari DOM.

**Contoh di stok.html**:
```html
<!-- Tab Pusat -->
<div v-if="lokasiTab === 'pusat'">
  <!-- Konten tab Pusat -->
</div>

<!-- Tab UPBJJ -->
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
<div v-else-if="!isSearching" class="empty-state">
  <!-- Empty state -->
</div>

<!-- Tampilkan loading jika sedang mencari -->
<div v-if="isSearching" class="empty-state">
  <h3>Mencari...</h3>
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
**v-model** digunakan untuk two-way data binding pada form input. Perubahan input akan langsung memperbarui data di Vue instance.

**Contoh di stok.html**:
```html
<!-- Input pencarian dengan v-model -->
<input 
  type="text" 
  v-model="searchText"
  placeholder="Cari bahan ajar..."
>
```
**Penjelasan**: Setiap perubahan di input akan langsung memperbarui `searchText` di data Vue, dan sebaliknya.

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

<!-- Binding class array -->
<div :class="['alert', 'alert-' + alertType]">
  {{ alertMessage }}
</div>
```

**Contoh di tracking.html**:
```html
<!-- Binding disabled attribute -->
<button 
  :disabled="!noBilling || noBilling.trim() === ''"
  @click="cariTracking">
  Cari
</button>

<!-- Binding class dinamis berdasarkan status -->
<span 
  class="badge" 
  :class="getStatusBadgeClass(trackingData.dataPengiriman.status)">
  {{ trackingData.dataPengiriman.status }}
</span>
```

#### **C. Computed Properties**
**Computed properties** adalah property yang nilainya dihitung berdasarkan data property lain. Hasil computed akan di-cache dan hanya dihitung ulang ketika dependencies berubah.

**Contoh di stok-app.js**:
```javascript
computed: {
  // Filter stok berdasarkan pencarian
  filteredStok() {
    // Tentukan data yang akan difilter
    let dataToFilter = [];
    if (this.lokasiTab === 'pusat') {
      if (this.jenisStok === 'item') {
        dataToFilter = this.stokPusat.stokItem || [];
      } else if (this.jenisStok === 'paket') {
        dataToFilter = this.stokPusat.stokPaket || [];
      }
    }
    
    // Filter berdasarkan searchText
    if (!this.searchText || this.searchText.trim() === '') {
      return dataToFilter;
    }
    
    const searchLower = this.searchText.toLowerCase().trim();
    return dataToFilter.filter(item => {
      return item.nama.toLowerCase().includes(searchLower) ||
             item.id.toLowerCase().includes(searchLower);
    });
  },
  
  // Computed untuk total stok
  totalStok() {
    if (this.jenisStok === 'item' || this.jenisStok === 'paket') {
      return this.filteredStok.length;
    }
    return 0;
  }
}
```

**Contoh di tracking-app.js**:
```javascript
computed: {
  // Validasi input
  isInputValid() {
    return this.noBilling && this.noBilling.trim() !== '';
  },
  
  // Status tracking
  statusTracking() {
    if (!this.trackingData || !this.trackingData.dataPengiriman) {
      return '';
    }
    return this.trackingData.dataPengiriman.status || '';
  },
  
  // Jumlah detail perjalanan
  jumlahDetailPerjalanan() {
    if (!this.trackingData || !this.trackingData.dataPengiriman || 
        !this.trackingData.dataPengiriman.detailPerjalanan) {
      return 0;
    }
    return this.trackingData.dataPengiriman.detailPerjalanan.length;
  }
}
```

**Keuntungan Computed Properties**:
- Otomatis di-cache
- Hanya dihitung ulang saat dependencies berubah
- Lebih efisien daripada methods untuk perhitungan

#### **D. Methods Properties**
**Methods** adalah fungsi yang dapat dipanggil dari template atau dari method lain. Methods akan dijalankan setiap kali dipanggil.

**Contoh di stok-app.js**:
```javascript
methods: {
  // Method untuk mengubah tab lokasi
  ubahLokasiTab(lokasi) {
    this.lokasiTab = lokasi;
    this.jenisStok = 'item';
    this.searchText = '';
    this.tampilkanAlert(`Menampilkan stok untuk ${lokasi === 'pusat' ? 'Pusat' : 'UPBJJ'}`, 'info');
  },
  
  // Method untuk mengubah jenis stok
  ubahJenisStok(jenis) {
    this.jenisStok = jenis;
    if (jenis === 'lokasi') {
      this.searchText = '';
    }
  },
  
  // Method untuk menangani input pencarian
  handleSearchInput() {
    console.log('User sedang mengetik: ', this.searchText);
    if (!this.searchText || this.searchText.trim() === '') {
      this.alertMessage = '';
    }
  },
  
  // Method untuk menampilkan alert
  tampilkanAlert(pesan, tipe) {
    this.alertMessage = pesan;
    this.alertType = tipe || 'info';
    setTimeout(() => {
      this.alertMessage = '';
    }, 3000);
  }
}
```

**Contoh di tracking-app.js**:
```javascript
methods: {
  // Method untuk mencari tracking
  cariTracking() {
    if (!this.noBilling || this.noBilling.trim() === '') {
      this.tampilkanAlert('No. Billing tidak boleh kosong', 'error');
      this.hasError = true;
      return;
    }
    
    this.isSearching = true;
    // ... logika pencarian
  },
  
  // Method untuk format tanggal
  formatTanggal(tanggal) {
    if (!tanggal) return '-';
    const date = new Date(tanggal + 'T00:00:00');
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      timeZone: 'Asia/Jakarta'
    };
    return date.toLocaleDateString('id-ID', options);
  },
  
  // Method untuk format currency
  formatCurrency(angka) {
    if (!angka && angka !== 0) return '-';
    return 'Rp ' + angka.toLocaleString('id-ID');
  }
}
```

**Perbedaan Computed vs Methods**:
- **Computed**: Di-cache, hanya dihitung saat dependencies berubah. Dipanggil tanpa `()`
- **Methods**: Dijalankan setiap kali dipanggil. Dipanggil dengan `()`

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
    
    // Tampilkan informasi jika ada hasil pencarian
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
    
    // Reset pencarian saat ganti lokasi
    if (oldValue && newValue !== oldValue) {
      this.searchText = '';
    }
  },
  
  // Watcher untuk memantau perubahan jenisStok
  jenisStok(newValue, oldValue) {
    console.log(`Jenis stok berubah dari "${oldValue}" menjadi "${newValue}"`);
    
    // Reset pencarian jika ganti ke lokasi
    if (newValue === 'lokasi' && oldValue !== 'lokasi') {
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
    
    // Reset error state saat user mengetik
    if (newValue !== oldValue) {
      this.hasError = false;
    }
    
    // Jika input dikosongkan, reset tracking data
    if (!newValue || newValue.trim() === '') {
      this.trackingData = null;
      this.statusPencarian = '';
      
      if (!newValue) {
        this.hasSearched = false;
      }
    }
  },
  
  // Watcher untuk memantau perubahan trackingData
  trackingData(newValue, oldValue) {
    if (newValue) {
      console.log('Data tracking berhasil dimuat:', newValue.noBilling);
      
      if (newValue.dataPengiriman && newValue.dataPengiriman.status) {
        console.log('Status pengiriman:', newValue.dataPengiriman.status);
      }
    } else if (oldValue) {
      console.log('Data tracking direset');
    }
  },
  
  // Watcher untuk computed property
  statusTracking(newValue, oldValue) {
    if (newValue && newValue !== oldValue) {
      console.log(`Status tracking berubah menjadi: ${newValue}`);
    }
  }
}
```

**Kapan Menggunakan Watcher**:
- Untuk melakukan side effects (async operations, API calls)
- Untuk memantau perubahan dan melakukan validasi
- Untuk logging dan debugging
- Untuk sinkronisasi dengan external systems

**Perbedaan Watcher vs Computed**:
- **Computed**: Untuk menghitung nilai baru berdasarkan data lain (return value)
- **Watcher**: Untuk melakukan aksi saat data berubah (side effects)

---

## Implementasi Per Halaman

### 📄 Halaman 1: stok.html (Stok Bahan Ajar)

#### Fitur Utama:
1. **Tab Lokasi**: Pilihan antara Pusat dan UPBJJ
2. **Tab Jenis Stok**: Pilihan antara Item, Paket, dan Lokasi
3. **Pencarian**: Filter bahan ajar berdasarkan nama atau ID
4. **Tampilan Grid**: Menampilkan stok dengan thumbnail dan informasi
5. **Tampilan Tabel**: Menampilkan stok per lokasi

#### Konsep Vue.js yang Digunakan:

**1. Data Properties**:
```javascript
data() {
  return {
    lokasiTab: 'pusat',      // Tab lokasi aktif
    jenisStok: 'item',       // Jenis stok aktif
    searchText: '',          // Teks pencarian
    alertMessage: '',        // Pesan alert
    alertType: 'info',       // Tipe alert
    stokPusat: { ... },      // Data stok pusat
    stokUPBJJ: { ... }       // Data stok UPBJJ
  }
}
```

**2. Conditional Rendering**:
```html
<!-- Tampilkan konten berdasarkan lokasiTab -->
<div v-if="lokasiTab === 'pusat'">
  <!-- Konten Pusat -->
</div>
<div v-else-if="lokasiTab === 'upbjj'">
  <!-- Konten UPBJJ -->
</div>

<!-- Tampilkan grid atau tabel berdasarkan jenisStok -->
<div v-if="jenisStok === 'item' || jenisStok === 'paket'">
  <!-- Grid dengan thumbnail -->
</div>
<div v-else-if="jenisStok === 'lokasi'">
  <!-- Tabel -->
</div>
```

**3. Two-Way Data Binding**:
```html
<input v-model="searchText" placeholder="Cari bahan ajar...">
```

**4. Event Handling**:
```html
<button @click="ubahLokasiTab('pusat')">Pusat</button>
<button @click="ubahJenisStok('item')">Stok Item</button>
<input @input="handleSearchInput">
```

**5. Computed Properties**:
- `filteredStok`: Filter stok berdasarkan pencarian
- `filteredStokUPBJJ`: Filter stok UPBJJ
- `stokLokasiPusat`: Data stok lokasi pusat
- `stokLokasiUPBJJ`: Data stok lokasi UPBJJ
- `totalStok`: Total jumlah stok

**6. Methods**:
- `ubahLokasiTab()`: Mengubah tab lokasi
- `ubahJenisStok()`: Mengubah jenis stok
- `handleSearchInput()`: Menangani input pencarian
- `handleImageError()`: Menangani error gambar
- `tampilkanAlert()`: Menampilkan alert
- `loadStokData()`: Memuat data stok

**7. Watchers**:
- `searchText`: Memantau perubahan pencarian
- `lokasiTab`: Memantau perubahan tab lokasi
- `jenisStok`: Memantau perubahan jenis stok
- `filteredStok`: Memantau perubahan hasil filter

**8. Lifecycle Hook**:
```javascript
mounted() {
  this.loadStokData();
  this.tampilkanAlert('Selamat datang di halaman Stok Bahan Ajar', 'info');
}
```

---

### 📄 Halaman 2: tracking.html (Tracking DO)

#### Fitur Utama:
1. **Form Pencarian**: Input No. Billing untuk mencari tracking
2. **Detail Tracking**: Menampilkan informasi lengkap tracking
3. **Data Mahasiswa**: Informasi pribadi mahasiswa
4. **Data Pengiriman**: Informasi pengiriman dengan timeline
5. **Data Pembayaran**: Informasi pembayaran lengkap

#### Konsep Vue.js yang Digunakan:

**1. Data Properties**:
```javascript
data() {
  return {
    noBilling: '',           // Input No. Billing
    trackingData: null,      // Data tracking yang ditemukan
    isSearching: false,      // Status sedang mencari
    hasSearched: false,      // Status sudah pernah mencari
    hasError: false,         // Status error
    alertMessage: '',        // Pesan alert
    alertType: 'info',       // Tipe alert
    statusPencarian: '',     // Status pencarian
    dataTracking: []         // Array data tracking
  }
}
```

**2. Conditional Rendering**:
```html
<!-- Tampilkan data tracking jika ada -->
<div v-if="trackingData">
  <!-- Detail tracking -->
</div>

<!-- Tampilkan empty state jika belum ada pencarian -->
<div v-else-if="!isSearching" class="empty-state">
  <!-- Empty state -->
</div>

<!-- Tampilkan loading jika sedang mencari -->
<div v-if="isSearching">
  <h3>Mencari...</h3>
</div>
```

**3. Two-Way Data Binding**:
```html
<input v-model="noBilling" placeholder="Masukkan No. Billing...">
```

**4. One-Way Data Binding**:
```html
<!-- Binding class dinamis -->
<input :class="{ error: hasError }">

<!-- Binding disabled -->
<button :disabled="!noBilling || noBilling.trim() === ''">

<!-- Binding src gambar -->
<img :src="item.thumbnail">
```

**5. Event Handling**:
```html
<button @click="cariTracking">Cari</button>
<input @keyup.enter="cariTracking">
<input @input="handleInputChange">
```

**6. Computed Properties**:
- `isInputValid`: Validasi input No. Billing
- `statusTracking`: Status pengiriman
- `jumlahDetailPerjalanan`: Jumlah detail perjalanan

**7. Methods**:
- `cariTracking()`: Mencari data tracking
- `performSearch()`: Melakukan pencarian
- `handleInputChange()`: Menangani perubahan input
- `formatTanggal()`: Format tanggal
- `formatDateTime()`: Format tanggal dan waktu
- `formatCurrency()`: Format currency
- `getStatusBadgeClass()`: Mendapatkan class badge berdasarkan status
- `tampilkanAlert()`: Menampilkan alert
- `loadTrackingData()`: Memuat data tracking

**8. Watchers**:
- `noBilling`: Memantau perubahan input
- `trackingData`: Memantau perubahan data tracking
- `statusTracking`: Memantau perubahan status
- `hasError`: Memantau perubahan error state

**9. Lifecycle Hook**:
```javascript
mounted() {
  this.loadTrackingData();
  this.tampilkanAlert('Selamat datang di halaman Tracking DO...', 'info');
}
```

---

## Penjelasan Code Penting

### 1. Struktur Dasar Vue.js App

```javascript
var app = Vue.createApp({
  // Options API
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
    // Lifecycle hook - dipanggil setelah component di-mount
  }
}).mount('#app')  // Mount ke elemen dengan id="app"
```

**Penjelasan**:
- `Vue.createApp()`: Membuat instance Vue app baru
- `data()`: Fungsi yang mengembalikan object berisi data properties
- `computed`: Object berisi computed properties
- `methods`: Object berisi methods/functions
- `watch`: Object berisi watchers
- `mounted()`: Lifecycle hook yang dipanggil setelah component di-mount ke DOM
- `.mount('#app')`: Mount Vue app ke elemen dengan id="app"

### 2. Event Handling dengan @click

```html
<button @click="ubahLokasiTab('pusat')">Pusat</button>
```

**Penjelasan**:
- `@click` adalah shorthand untuk `v-on:click`
- Saat button diklik, method `ubahLokasiTab('pusat')` akan dipanggil
- Parameter bisa langsung diberikan dalam kurung

### 3. Class Binding Dinamis

```html
<button :class="{ active: lokasiTab === 'pusat' }">Pusat</button>
```

**Penjelasan**:
- `:class` adalah shorthand untuk `v-bind:class`
- Class `active` akan ditambahkan jika kondisi `lokasiTab === 'pusat'` bernilai `true`
- Bisa juga menggunakan array: `:class="['alert', 'alert-' + alertType]"`

### 4. v-model untuk Two-Way Binding

```html
<input v-model="searchText">
```

**Penjelasan**:
- `v-model` membuat two-way data binding
- Perubahan di input langsung memperbarui `searchText` di Vue instance
- Perubahan `searchText` di Vue instance langsung memperbarui value input

### 5. v-for untuk Loop

```html
<div v-for="item in filteredStok" :key="item.id">
  {{ item.nama }}
</div>
```

**Penjelasan**:
- `v-for` digunakan untuk loop/iterasi
- `item` adalah variable untuk setiap elemen dalam array
- `:key="item.id"` penting untuk performa dan tracking elemen (harus unique)

### 6. Computed Property untuk Filtering

```javascript
computed: {
  filteredStok() {
    if (!this.searchText || this.searchText.trim() === '') {
      return this.stokPusat.stokItem;
    }
    
    const searchLower = this.searchText.toLowerCase().trim();
    return this.stokPusat.stokItem.filter(item => {
      return item.nama.toLowerCase().includes(searchLower);
    });
  }
}
```

**Penjelasan**:
- Computed property akan dihitung ulang otomatis saat `searchText` atau `stokPusat.stokItem` berubah
- Hasil di-cache dan tidak dihitung ulang jika dependencies tidak berubah
- Lebih efisien daripada menggunakan method untuk perhitungan

### 7. Watcher untuk Side Effects

```javascript
watch: {
  searchText(newValue, oldValue) {
    console.log(`Berubah dari "${oldValue}" menjadi "${newValue}"`);
    // Side effects: update alert, log, dll
  }
}
```

**Penjelasan**:
- Watcher dipanggil saat `searchText` berubah
- `newValue`: Nilai baru
- `oldValue`: Nilai lama
- Cocok untuk side effects seperti logging, validasi, API calls

### 8. $nextTick untuk Menunggu DOM Update

```javascript
this.$nextTick(() => {
  const jumlahHasil = this.filteredStok.length;
  // Code di sini akan dijalankan setelah DOM di-update
});
```

**Penjelasan**:
- `$nextTick` menunggu Vue selesai meng-update DOM
- Penting saat ingin mengakses nilai yang baru dihitung setelah perubahan data

---

## Cara Menggunakan

### 1. Persiapan
- Pastikan file `vue.min.js` sudah ada di folder `js/`
- Pastikan file `data/data.js` sudah ada dengan data `SITTA_DATA`

### 2. Membuka Aplikasi
1. Buka file `index.html` di browser
2. Atau serve melalui web server (XAMPP, Laragon, dll)
3. Akses melalui URL: `http://localhost/TUWEB3/Tugas2/index.html`

### 3. Navigasi
- Dari `index.html`, klik menu "Stok Bahan Ajar" untuk ke `stok.html`
- Atau klik menu "Tracking DO" untuk ke `tracking.html`
- Setiap halaman memiliki menu navigasi di header

### 4. Menggunakan Halaman Stok
1. Pilih lokasi: **Pusat** atau **UPBJJ**
2. Pilih jenis stok: **Stok Item**, **Stok Paket**, atau **Stok per Lokasi**
3. Gunakan search box untuk mencari bahan ajar (jika memilih Item atau Paket)
4. Data akan otomatis ter-filter sesuai pencarian

### 5. Menggunakan Halaman Tracking
1. Masukkan **No. Billing** di input field
2. Klik tombol **Cari** atau tekan **Enter**
3. Detail tracking akan ditampilkan jika data ditemukan
4. Informasi yang ditampilkan:
   - Data Pribadi Mahasiswa
   - Data Pengiriman Bahan Ajar (dengan timeline)
   - Data Pembayaran

### 6. Data Testing

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
- Pelajari konsep **data**, **computed**, **methods**, dan **watch**
- Pahami kapan menggunakan masing-masing

### 2. Conditional Rendering
- Gunakan **v-if** untuk kondisi yang jarang berubah
- Gunakan **v-show** untuk toggle yang sering berubah

### 3. Data Binding
- **v-model**: Untuk form input (two-way binding)
- **v-bind** (`:`): Untuk atribut HTML (one-way binding)

### 4. Computed vs Methods
- **Computed**: Untuk perhitungan/transformasi data (di-cache)
- **Methods**: Untuk aksi/fungsi yang perlu dipanggil manual

### 5. Watcher
- Gunakan untuk side effects (logging, validasi, API calls)
- Jangan gunakan untuk perhitungan (gunakan computed)

### 6. Best Practices
- Selalu gunakan `:key` pada `v-for`
- Gunakan `$nextTick` jika perlu mengakses DOM setelah update
- Pisahkan logic ke methods untuk reusability
- Gunakan computed untuk performa yang lebih baik

---

## Kesimpulan

Proyek ini telah mengimplementasikan semua konsep Vue.js yang diperlukan untuk Tugas Praktik 2:

✅ **Sistem Perorganisasian Kode**: Struktur Vue.js standar dengan pemisahan file  
✅ **Menampilkan Data**: Mustaches `{{ }}` dan directive `v-text`  
✅ **Conditional Rendering**: `v-if`, `v-else-if`, `v-else`, dan `v-show`  
✅ **Data Binding**: `v-model` (two-way) dan `v-bind` (one-way)  
✅ **Computed & Methods**: Computed properties dan methods untuk logika bisnis  
✅ **Watcher**: Monitoring perubahan data dengan watchers  

Dengan memahami dokumentasi ini, mahasiswa diharapkan dapat menjelaskan dan memahami implementasi Vue.js dalam proyek Mobile SITTA.

---

**Dokumentasi dibuat untuk Tugas Praktik 2 - Mobile SITTA dengan Vue.js**  
*Versi 1.0*

