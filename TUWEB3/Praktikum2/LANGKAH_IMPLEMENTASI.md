# Langkah-Langkah Implementasi Latihan 1-11 - Vue 3

## Struktur Folder

Proyek ini memiliki struktur folder sebagai berikut:
```
Praktikum2/
├── nama_folder 1/    (Latihan 1 - Mustache syntax)
├── nama_folder 2/    (Latihan 1 - v-text directive)
├── nama_folder 3/    (Latihan 3 - Operasi Aritmatika)
├── nama_folder 4/    (Latihan 4 - v-if Directive)
├── nama_folder 5/    (Latihan 5 - v-if/v-else-if/v-else)
├── nama_folder 6/    (Latihan 6 - v-bind :href)
├── nama_folder 7/    (Latihan 7 - Dynamic Class Binding)
├── nama_folder 8/    (Latihan 8 - Text Alignment dengan Radio)
├── nama_folder 9/    (Latihan 9 - Simple Calculator)
├── nama_folder 10/   (Latihan 10 - Counter dengan Methods)
└── nama_folder 11/   (Latihan 11 - Konversi Suhu)
```

Setiap folder berisi:
- `index.html` - File HTML utama
- `apps.js` - Logika aplikasi Vue 3
- `style.css` - Styling CSS
- `vue.min.js` - Library Vue 3 (minified)

---

## Latihan 1: Data Binding dengan Mustache dan v-text

### nama_folder 1 (Mustache Syntax)
- Menggunakan **Mustache syntax** `{{tampil}}` untuk menampilkan data
- Menampilkan teks "Ini latihan pertama, tulisan ini berasal dari Data Property" dengan warna orange

### nama_folder 2 (v-text Directive)
- Menggunakan **v-text directive** `v-text="tampil"` untuk menampilkan data
- Hasil yang sama dengan folder 1, hanya berbeda cara implementasi

---

## Latihan 3: Operasi Aritmatika

**Konsep yang dipelajari:** v-text dengan operasi aritmatika

**Fitur:**
- Menampilkan dua angka (8 dan 5)
- Menampilkan hasil penjumlahan, pengurangan, perkalian, dan pembagian
- Menggunakan `v-text` dengan ekspresi aritmatika langsung: `v-text="angka1 + angka2"`

**Data Property:**
- `angka1: 8`
- `angka2: 5`

**Hasil:**
- Penjumlahan: 13
- Pengurangan: 3
- Perkalian: 40
- Pembagian: 1.6

---

## Latihan 4: Conditional Rendering dengan v-if

**Konsep yang dipelajari:** v-if directive untuk conditional rendering

**Fitur:**
- Box hanya tampil jika `tampil` bernilai `true`
- Jika `tampil` bernilai `false`, elemen tidak di-render sama sekali

**Data Property:**
- `tampil: false` (ubah ke `true` untuk melihat box)
- `box: "box ini tampil"`

**Styling:**
- Box dengan background honeydew, border biru dashed
- Ukuran 150px, padding 20px, text center

---

## Latihan 5: v-if, v-else-if, v-else

**Konsep yang dipelajari:** Conditional rendering dengan multiple conditions

**Fitur:**
- Menampilkan pesan dengan warna berbeda berdasarkan nilai `warna`
- Menggunakan `v-if`, `v-else-if`, dan `v-else`

**Kondisi:**
- `warna == 'merah'` → Background merah
- `warna == 'kuning'` → Background kuning (text hitam)
- `warna == 'hijau'` → Background hijau
- `warna == 'biru'` → Background biru
- Selain itu → Background abu-abu

**Data Properties:**
- `warna: ''` (ubah nilainya untuk melihat perubahan)
- `pesan1` sampai `pesan5`

---

## Latihan 6: v-bind untuk Attribute Binding

**Konsep yang dipelajari:** v-bind shorthand (`:`) untuk binding atribut HTML

**Fitur:**
- Binding atribut `href` pada tag `<a>` menggunakan `:href`
- Tiga link menggunakan dynamic binding, satu link static

**Data Properties:**
- `home: 'home.html'`
- `profile: 'profile.html'`
- `product: 'product.html'`

**Perbedaan:**
- `:href="home"` → Dynamic binding (akan berubah jika data berubah)
- `href="about"` → Static binding (tidak berubah)

---

## Latihan 7: Dynamic Class Binding dengan v-model

**Konsep yang dipelajari:** v-model untuk two-way binding dan dynamic class binding

**Fitur:**
- Input text untuk memasukkan nama warna
- Teks "Tulisan Berubah warna" akan berubah warna sesuai input
- Menggunakan `v-model="warna"` dan `:class="warna"`

**Data Property:**
- `warna: ''`

**CSS Classes yang Tersedia:**
- `.merah` → red
- `.hijau` → green
- `.kuning` → yellow
- `.orange` → orange
- `.biru` → blue
- `.ungu` → purple
- `.pink` → pink

**Cara Menggunakan:**
- Ketikkan nama warna (misal: "merah", "biru") pada input
- Teks akan otomatis berubah warna

---

## Latihan 8: Dynamic Class Binding dengan Radio Buttons

**Konsep yang dipelajari:** v-model dengan radio buttons untuk mengubah alignment

**Fitur:**
- Paragraf Lorem ipsum dengan alignment dinamis
- Radio buttons untuk memilih alignment: Kiri, Tengah, Kanan-Kiri (justify), Kanan
- Menggunakan `v-model="align"` dan `:class="align"`

**Data Property:**
- `align: ''`

**CSS Classes:**
- `.kiri` → text-align: left
- `.tengah` → text-align: center
- `.kanankiri` → text-align: justify
- `.kanan` → text-align: right

**Styling:**
- Paragraf dengan border orange dashed, padding 20px
- Form dengan text-align center

---

## Latihan 9: Simple Calculator dengan Computed Property

**Konsep yang dipelajari:** Computed properties untuk perhitungan otomatis

**Fitur:**
- Input untuk Bilangan 1 dan Bilangan 2
- Dropdown untuk memilih operasi (+, -, x, /)
- Hasil kalkulasi ditampilkan otomatis menggunakan computed property
- Tidak menggunakan `eval()` untuk keamanan

**Data Properties:**
- `bil1: ''`
- `bil2: ''`
- `operasi: null`

**Computed Property:**
- `hasil()` → Menghitung hasil berdasarkan `bil1`, `bil2`, dan `operasi`
- Menggunakan switch case untuk operasi
- Validasi untuk menghindari error (pembagian dengan 0, input kosong)

**Styling:**
- Input dan select dengan border hijau, border-radius 5px
- Hasil dengan background hijau, text putih

---

## Latihan 10: Counter dengan Methods

**Konsep yang dipelajari:** Methods dan event handling dengan @click

**Fitur:**
- Menampilkan angka counter
- Tombol "count" untuk menambah counter
- Tombol "reset" untuk mengembalikan counter ke 0

**Data Property:**
- `hasil: 0`

**Methods:**
- `count()` → Menambah `hasil` dengan 1
- `reset()` → Mengembalikan `hasil` ke 0

**Event Binding:**
- `@click="count"` → Eksekusi method saat tombol diklik
- `@click` adalah shorthand dari `v-on:click`

**Styling:**
- Paragraf dengan font-size xx-large, border dashed
- Button dengan padding 10px, width 150px

---

## Latihan 11: Konversi Suhu

**Konsep yang dipelajari:** Methods untuk konversi suhu, v-html untuk rendering HTML

**Fitur:**
- Input untuk suhu dalam Celsius
- Tombol "ke Fahrenheit" untuk konversi ke Fahrenheit
- Tombol "ke Kelvin" untuk konversi ke Kelvin
- Hasil ditampilkan dengan format yang tepat (termasuk simbol derajat)

**Data Properties:**
- `celcius: 0`
- `hasil: ''`

**Methods:**
- `fahrenheit()` → Konversi Celsius ke Fahrenheit: `(C × 9/5) + 32`
- `kelvin()` → Konversi Celsius ke Kelvin: `C + 273.15`

**Konsep Tambahan:**
- `v-html="hasil"` → Menampilkan HTML (untuk simbol `<sup>o</sup>F`)
- Input besar (80px height) dengan font besar dan bold
- Layout menggunakan table dengan rowspan

**Formulas:**
- Fahrenheit: `(celcius × 9) / 5 + 32`
- Kelvin: `celcius + 273.15`

---

## Cara Menjalankan Aplikasi

1. **Buka folder yang ingin dijalankan** (nama_folder 1 sampai 11)

2. **Jalankan server lokal** menggunakan salah satu metode berikut:

   **Metode 1: Menggunakan Python (jika terinstall)**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```

   **Metode 2: Menggunakan PHP (Laragon sudah include PHP)**
   ```bash
   php -S localhost:8000
   ```

   **Metode 3: Menggunakan Node.js http-server**
   ```bash
   npx http-server -p 8000
   ```

3. **Buka browser** dan akses:
   ```
   http://localhost:8000
   ```

---

## Penjelasan Umum File

### index.html
- File HTML utama yang menghubungkan semua file
- Memuat `style.css` untuk styling
- Memuat `vue.min.js` untuk library Vue 3
- Memuat `apps.js` untuk logika aplikasi
- Berisi `<div id="app">` sebagai mount point untuk Vue instance

### apps.js
- Berisi inisialisasi Vue 3 instance menggunakan `Vue.createApp()`
- Mendefinisikan data properties, computed properties, dan methods
- Mount ke elemen dengan id `app`

### style.css
- Mendefinisikan styling untuk elemen HTML
- Menggunakan class dan ID selector
- Menerapkan warna, padding, border, dll.

### vue.min.js
- File library Vue 3 (minified version)
- Sudah terdownload dari CDN jsdelivr

---

## Catatan Penting Vue 3

1. **Vue 3 vs Vue 2:**
   - Vue 3 menggunakan `Vue.createApp()` bukan `new Vue()`
   - Syntax data menggunakan function `data()` yang return object
   - Syntax methods menggunakan object `methods: {}`
   - Computed properties menggunakan `computed: {}`

2. **Directives Vue 3:**
   - `v-text="data"` → Menampilkan text
   - `{{ data }}` → Mustache syntax (shorthand v-text)
   - `v-if="condition"` → Conditional rendering
   - `v-else-if="condition"` → Conditional rendering else-if
   - `v-else` → Conditional rendering else
   - `v-model="data"` → Two-way data binding
   - `:attr="data"` → v-bind shorthand untuk attribute binding
   - `@click="method"` → v-on shorthand untuk event binding
   - `v-html="data"` → Menampilkan HTML (hati-hati dengan XSS)

3. **Computed vs Methods:**
   - Computed: Cached, hanya dihitung ulang jika dependency berubah
   - Methods: Dipanggil setiap kali di-render, tidak cached

4. **Two-way Binding:**
   - `v-model` membuat input dan data property tersinkronisasi
   - Perubahan input akan update data property
   - Perubahan data property akan update input

---

## Ringkasan Konsep yang Dipelajari

| Latihan | Konsep Utama | Directives/Features |
|---------|--------------|---------------------|
| 1 | Data Binding | `{{ }}`, `v-text` |
| 3 | Ekspresi Aritmatika | `v-text` dengan ekspresi |
| 4 | Conditional Rendering | `v-if` |
| 5 | Multiple Conditions | `v-if`, `v-else-if`, `v-else` |
| 6 | Attribute Binding | `:href` (v-bind) |
| 7 | Class Binding & v-model | `:class`, `v-model` |
| 8 | v-model dengan Radio | `v-model`, `:class` |
| 9 | Computed Properties | `computed` |
| 10 | Methods & Events | `methods`, `@click` |
| 11 | Methods untuk Konversi | `methods`, `v-html` |
