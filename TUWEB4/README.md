# TUWEB 4 — Pembahasan Components dalam JavaScript (Vue.js)

Dokumentasi ini ditujukan untuk mahasiswa agar memahami konsep Components dalam Vue.js. Setiap folder berisi contoh praktis untuk satu aspek komponen Vue.js, dari template, data property, computed/methods/watch, hingga slot dan props.

## 📚 Tujuan Pembelajaran

Setelah menyelesaikan materi ini, mahasiswa diharapkan dapat:
- Memahami struktur dan konsep dasar Components dalam Vue.js
- Menggunakan Template untuk menentukan struktur komponen
- Mengelola Data Property untuk state management
- Memahami perbedaan dan penggunaan Computed, Methods, dan Watch
- Mengimplementasikan Slot untuk konten dinamis
- Menggunakan Props untuk komunikasi antar komponen
- Memahami dan menggunakan Custom Directive untuk manipulasi DOM
- Menggunakan Canvas API untuk menggambar Rectangles
- Menggunakan Canvas API untuk menggambar Paths yang kompleks

## 📁 Struktur Proyek

```
TUWEB4/
├── Template/              # Pembahasan Template dalam Component
│   ├── index.html
│   ├── apps.js
│   ├── style.css
│   └── vue.min.js
├── Multiline/             # Pembahasan Multiline Template
│   ├── index.html
│   ├── apps.js
│   ├── style.css
│   └── vue.min.js
├── DataProperty/          # Pembahasan Data Property
│   ├── index.html
│   ├── apps.js
│   ├── style.css
│   └── vue.min.js
├── ComputedMethodsWatch/  # Pembahasan Computed, Methods, Watch
│   ├── index.html
│   ├── apps.js
│   ├── style.css
│   └── vue.min.js
├── Slot/                  # Pembahasan Slot
│   ├── index.html
│   ├── apps.js
│   ├── style.css
│   └── vue.min.js
├── Props/                 # Pembahasan Props
│   ├── index.html
│   ├── apps.js
│   ├── style.css
│   └── vue.min.js
├── CustomDirective/       # Canvas - Custom Directive
│   ├── index.html
│   ├── apps.js
│   ├── style.css
│   └── vue.min.js
├── Rectangles/            # Canvas - Rectangles
│   ├── index.html
│   ├── apps.js
│   ├── style.css
│   └── vue.min.js
├── Paths/                 # Canvas - Paths
│   ├── index.html
│   ├── apps.js
│   ├── style.css
│   └── vue.min.js
└── README.md              # Dokumentasi ini
```

## 🚀 Cara Menjalankan

1. Pilih salah satu folder pembahasan (mis. `Template/`).
2. Jalankan server lokal (pilih salah satu):
   - Python: `python -m http.server 8000`
   - PHP: `php -S localhost:8000`
   - Node: `npx http-server -p 8000`
3. Akses di browser: `http://localhost:8000`

> **Catatan:** Anda juga bisa membuka langsung `index.html`, namun beberapa fitur relatif lebih stabil dengan server lokal.

---

## 📖 Ringkasan Pembahasan

### 1. Template

**Lokasi:** `Template/`

**Konsep:**
- Template adalah bagian HTML yang menentukan struktur dan tampilan component
- Template berisi markup HTML yang akan di-render oleh Vue
- Template dapat menggunakan data binding dengan sintaks `{{ }}` dan directives

**Contoh yang Dipelajari:**
- Component sederhana dengan template dasar
- Template dengan data binding dinamis
- Template dengan interaksi real-time (update waktu setiap detik)

**File Kunci:**
- `Template/apps.js` - Mendefinisikan komponen dengan template
- `Template/index.html` - Halaman demonstrasi

---

### 2. Multiline Template

**Lokasi:** `Multiline/`

**Konsep:**
- Multiline template memungkinkan penulisan template kompleks dengan beberapa baris
- Menggunakan template literal (backtick) untuk template multiline
- Berguna untuk komponen dengan struktur HTML yang lebih rumit

**Contoh yang Dipelajari:**
- Product card dengan template multiline
- Article card dengan struktur lengkap (header, body, footer)
- Template dengan multiple sections

**File Kunci:**
- `Multiline/apps.js` - Contoh template multiline dengan struktur kompleks

---

### 3. Data Property

**Lokasi:** `DataProperty/`

**Konsep:**
- Data Property adalah properti untuk menyimpan data reaktif dalam component
- Fungsi `data()` mengembalikan objek berisi data yang dapat diubah
- Perubahan data property otomatis memperbarui tampilan
- Data property harus berupa fungsi (bukan objek langsung) untuk isolasi instance

**Contoh yang Dipelajari:**
- User profile dengan berbagai tipe data (string, number, boolean, array, object)
- Counter dengan data property sederhana
- Shopping cart dengan array dan object kompleks

**Tipe Data yang Dibahas:**
- String, Number, Boolean
- Array
- Object
- Nested Object

**File Kunci:**
- `DataProperty/apps.js` - Demonstrasi berbagai tipe data property

---

### 4. Computed, Methods, Watch Property

**Lokasi:** `ComputedMethodsWatch/`

**Konsep:**

#### Computed Property
- Dihitung secara otomatis berdasarkan data property lainnya
- Hasilnya di-cache dan hanya dihitung ulang ketika dependencies berubah
- Cocok untuk transformasi data dan perhitungan

#### Methods
- Fungsi yang dapat dipanggil dari template atau kode lainnya
- Dijalankan setiap kali dipanggil dan tidak di-cache
- Cocok untuk event handlers dan operasi yang perlu dieksekusi saat dipanggil

#### Watch
- Memantau perubahan pada data property
- Menjalankan fungsi ketika perubahan terjadi
- Berguna untuk side effects seperti API calls, validasi, logging

**Contoh yang Dipelajari:**
- Computed: Perhitungan luas dan keliling persegi panjang
- Methods: Todo list dengan CRUD operations
- Watch: Validasi input dan pencarian dengan logging

**File Kunci:**
- `ComputedMethodsWatch/apps.js` - Demonstrasi computed, methods, dan watch

---

### 5. Slot

**Lokasi:** `Slot/`

**Konsep:**
- Slot adalah mekanisme untuk memasukkan konten dinamis ke dalam component
- Memungkinkan parent component mengirim konten HTML ke child component
- Memberikan fleksibilitas dalam komposisi component

**Jenis Slot:**
1. **Default Slot** - Slot tanpa nama (konten utama)
2. **Named Slot** - Slot dengan nama spesifik (header, body, footer, dll)
3. **Slot dengan Konten Default** - Slot yang memiliki konten default jika parent tidak mengirim konten

**Contoh yang Dipelajari:**
- Default slot untuk konten fleksibel
- Named slot untuk struktur component yang kompleks
- Multiple slots untuk layout artikel

**File Kunci:**
- `Slot/apps.js` - Demonstrasi berbagai jenis slot
- `Slot/index.html` - Contoh penggunaan slot dari parent component

---

### 6. Props

**Lokasi:** `Props/`

**Konsep:**
- Props (Properties) adalah cara untuk mengirim data dari parent component ke child component
- Props membuat component reusable dengan menerima data eksternal
- Props bersifat read-only dalam child component (immutable)

**Fitur Props:**
- Type checking
- Validasi
- Nilai default
- Required/Optional

**Contoh yang Dipelajari:**
- Props sederhana (string, number)
- Props dengan validasi (product card)
- Props dengan object dan array (profile card)
- Dynamic props dari input user

**File Kunci:**
- `Props/apps.js` - Demonstrasi berbagai jenis props dan validasi

---

### 7. Custom Directive (Canvas)

**Lokasi:** `CustomDirective/`

**Konsep:**
- Custom Directive memungkinkan manipulasi DOM secara langsung
- Sangat berguna untuk bekerja dengan Canvas API
- Memiliki lifecycle hooks: `mounted`, `updated`, `unmounted`
- Dapat mengakses elemen canvas dan konteks rendering

**Contoh yang Dipelajari:**
- Custom directive untuk canvas dasar
- Directive dengan konteks dan methods
- Directive untuk animasi canvas dengan requestAnimationFrame

**File Kunci:**
- `CustomDirective/apps.js` - Implementasi custom directive untuk canvas

---

### 8. Rectangles (Canvas)

**Lokasi:** `Rectangles/`

**Konsep:**
- Rectangles adalah bentuk dasar yang paling umum dalam Canvas API
- Metode utama: `fillRect()`, `strokeRect()`, `clearRect()`
- Dapat menggunakan warna solid, gradient, atau pattern

**Contoh yang Dipelajari:**
- Persegi panjang dasar (fill dan stroke)
- Variasi warna dan pattern
- Persegi panjang interaktif dengan mouse
- Gradient (linear dan radial) pada rectangles

**File Kunci:**
- `Rectangles/apps.js` - Demonstrasi berbagai metode rectangles

---

### 9. Paths (Canvas)

**Lokasi:** `Paths/`

**Konsep:**
- Paths adalah serangkaian titik yang dihubungkan untuk membentuk bentuk apapun
- Lebih fleksibel daripada rectangles karena dapat membuat bentuk kompleks
- Metode utama: `beginPath()`, `moveTo()`, `lineTo()`, `arc()`, `quadraticCurveTo()`, `bezierCurveTo()`, `closePath()`

**Contoh yang Dipelajari:**
- Path dasar (garis dan poligon)
- Arcs dan circles
- Kurva Bézier dan quadratic
- Path interaktif (menggambar bebas)
- Path kompleks (bintang, spiral, heart shape)

**File Kunci:**
- `Paths/apps.js` - Demonstrasi berbagai jenis paths

---

## 🔑 Konsep Kunci Vue.js Components

### Inisialisasi Component
```javascript
const MyComponent = {
  template: `...`,
  data() { return {...} },
  props: {...},
  computed: {...},
  methods: {...},
  watch: {...}
};
```

### Registrasi Component
```javascript
const app = Vue.createApp({
  components: {
    'my-component': MyComponent
  }
}).mount('#app');
```

### Penggunaan di Template
```html
<my-component 
  :prop-name="value"
  prop-string="text"
>
  <p>Slot content</p>
</my-component>
```

---

## 💡 Tips Belajar

1. **Pelajari Secara Bertahap**
   - Mulai dari Template, lalu Data Property, kemudian Computed/Methods/Watch
   - Pahami Slot sebelum Props (konsep terkait)

2. **Praktik Aktif**
   - Ubah nilai di `data()` dan amati efeknya
   - Modifikasi props dari parent component
   - Coba tambahkan validasi pada props

3. **Perbandingan Konsep**
   - Kapan menggunakan computed vs methods?
   - Kapan menggunakan props vs data?
   - Kapan menggunakan slot vs props?

4. **Eksperimen**
   - Buat component baru dengan kombinasi semua konsep
   - Coba komunikasi antar component (parent-child)
   - Implementasikan validasi dan error handling

---

## 📝 Latihan Tambahan

Setelah memahami semua konsep, coba buat:

1. **Dashboard Component** dengan:
   - Multiple cards (props)
   - Dynamic data (data property)
   - Computed statistics
   - Methods untuk filtering
   - Watch untuk auto-refresh

2. **Form Component** dengan:
   - Props untuk form fields
   - Data property untuk form state
   - Computed untuk validasi
   - Methods untuk submit
   - Watch untuk auto-save

3. **Card List Component** dengan:
   - Slot untuk konten custom
   - Props untuk card data
   - Computed untuk filtering
   - Methods untuk pagination

---

## 📚 Referensi

- [Vue.js Documentation - Components Basics](https://vuejs.org/guide/essentials/component-basics.html)
- [Vue.js Documentation - Props](https://vuejs.org/guide/components/props.html)
- [Vue.js Documentation - Slots](https://vuejs.org/guide/components/slots.html)
- [Vue.js Documentation - Computed Properties](https://vuejs.org/guide/essentials/computed.html)
- [Vue.js Documentation - Watchers](https://vuejs.org/guide/essentials/watchers.html)
- [Vue.js Documentation - Custom Directives](https://vuejs.org/guide/reusability/custom-directives.html)
- [MDN - Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [MDN - Canvas Tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)

---

## ✅ Output yang Diharapkan

Setelah menyelesaikan materi TUWEB 4, mahasiswa mampu:
- ✅ Membuat component Vue.js dengan struktur yang benar
- ✅ Menggunakan template, data property, computed, methods, dan watch dengan tepat
- ✅ Mengimplementasikan komunikasi antar component menggunakan props
- ✅ Menggunakan slot untuk membuat component yang fleksibel
- ✅ Memahami kapan menggunakan setiap konsep sesuai kebutuhan
- ✅ Membuat custom directive untuk manipulasi DOM dan Canvas
- ✅ Menggambar rectangles dan paths pada Canvas
- ✅ Membuat aplikasi interaktif dengan Canvas API

---

**Dibuat untuk:** Mata Kuliah Pemrograman Web  
**Versi:** 1.0  
**Tahun:** 2024

