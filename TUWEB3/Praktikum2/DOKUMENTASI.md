## Praktikum 2 — Belajar Dasar Vue 3 (Latihan 1–12)

Dokumentasi ini ditujukan untuk mahasiswa agar memahami apa yang dipelajari dan dibangun pada Praktikum 2 menggunakan Vue 3. Setiap latihan fokus pada satu konsep inti Vue, dari data binding, conditional rendering, binding atribut/kelas, v-model, computed, methods & event handling, hingga studi kasus kecil.

### Tujuan Pembelajaran
- Memahami cara kerja data binding di Vue 3 (mustache, v-text).
- Menggunakan directives dasar: `v-if`, `v-else-if`, `v-else`, `v-bind (:)`, `v-model`, `v-html`, dan event `v-on (@)`.
- Menerapkan computed properties untuk perhitungan/transformasi data.
- Mengelola interaksi pengguna dengan methods dan event handling.

### Prasyarat
- Dasar HTML & CSS.
- Pemahaman JavaScript dasar (variabel, fungsi).
- Mengetahui cara menjalankan server lokal (opsional namun disarankan).

### Struktur Proyek (ringkas)
- Setiap folder `latihanX/` berisi:
  - `index.html` (halaman utama),
  - `apps.js` (logika Vue 3),
  - `style.css` (gaya),
  - `vue.min.js` (library Vue 3).

### Cara Menjalankan
1. Buka salah satu folder latihan (mis. `latihan5/`).
2. Jalankan server lokal (pilih salah satu):
   - Python: `python -m http.server 8000`
   - PHP: `php -S localhost:8000`
   - Node: `npx http-server -p 8000`
3. Akses di browser: `http://localhost:8000`

> Catatan: Anda juga bisa membuka langsung `index.html`, namun beberapa fitur relatif lebih stabil dengan server lokal.

---

### Ringkasan Tiap Latihan

1) Latihan 1 — Data Binding (Mustache)  
- File kunci: `latihan 1/index.html`, `latihan 1/apps.js`  
- Konsep: Menampilkan teks dari state menggunakan Mustache `{{tampil}}`.  
- Tujuan: Memahami alur data dari `data()` ke template.  
- Perilaku: Teks pada `<p>` berasal dari properti `tampil`.

2) Latihan 2 — Data Binding (v-text)  
- File kunci: `latihan2/index.html`, `latihan2/apps.js`  
- Konsep: Menampilkan teks menggunakan directive `v-text="tampil"`.  
- Tujuan: Menunjukkan alternatif penulisan selain Mustache.  
- Perbedaan: Hasil sama dengan Latihan 1, namun menggunakan directive.

3) Latihan 3 — Ekspresi Aritmatika dengan v-text  
- File kunci: `latihan3/index.html`, `latihan3/apps.js`  
- Konsep: Menggunakan ekspresi di template untuk hitung (+, −, ×, ÷).  
- Tujuan: Memahami ekspresi sederhana di template.  
- Perilaku: Nilai `angkal` dan `angka2` ditampilkan, beserta hasil operasinya.

4) Latihan 4 — Conditional Rendering (v-if)  
- File kunci: `latihan4/index.html`, `latihan4/apps.js`  
- Konsep: `v-if` untuk render elemen hanya saat kondisi bernilai true.  
- Tujuan: Mengerti DOM tidak di-render saat kondisi false.  
- Perilaku: Box muncul hanya jika `tampil: true`.

5) Latihan 5 — Kondisi Berjenjang (v-if, v-else-if, v-else)  
- File kunci: `latihan5/index.html`, `latihan5/apps.js`  
- Konsep: Menentukan konten/warna berdasarkan nilai `warna`.  
- Tujuan: Mengelola multi-kondisi pada tampilan.  
- Perilaku: Pesan dan warna background berubah mengikuti `warna`.

6) Latihan 6 — Attribute Binding (:href)  
- File kunci: `latihan6/index.html`, `latihan6/apps.js`  
- Konsep: Mengikat atribut HTML (`href`) secara dinamis dengan `:href`.  
- Tujuan: Bedakan atribut dinamis vs statis.  
- Perilaku: Link mengikuti nilai data (`home`, `profile`, `product`).

7) Latihan 7 — Dynamic Class Binding + v-model  
- File kunci: `latihan7/index.html`, `latihan7/apps.js`  
- Konsep: `v-model` sinkronisasi input teks dan `:class="warna"` untuk ubah warna.  
- Tujuan: Memahami two-way binding dan efeknya ke styling.  
- Perilaku: Ketik nama warna (mis. `merah`, `biru`) dan teks berubah warna.

8) Latihan 8 — v-model (Radio) untuk Alignment Teks  
- File kunci: `latihan8/index.html`, `latihan8/apps.js`  
- Konsep: `v-model` pada radio dan `:class="align"` untuk alignment.  
- Tujuan: Praktik pemilihan satu nilai (radio) dan efeknya ke paragraf.  
- Perilaku: Pilih Kiri/Tengah/Justify/Kanan → paragraf berubah alignment.

9) Latihan 9 — Simple Calculator (Computed Property)  
- File kunci: `latihan9/index.html`, `latihan9/apps.js`  
- Konsep: `computed` menghitung hasil otomatis berdasar `bil1`, `bil2`, `operasi`.  
- Tujuan: Pahami computed yang ter-cache dan validasi input sederhana.  
- Perilaku: Hasil berubah real-time; tangani pembagian 0 dan input kosong.

10) Latihan 10 — Counter (Methods & @click)  
- File kunci: `latihan10/index.html`, `latihan10/apps.js`  
- Konsep: Event handling `@click`, methods `count()` dan `reset()`.  
- Tujuan: Mengelola state melalui aksi pengguna.  
- Perilaku: Tombol menaikkan counter dan mereset ke 0.

11) Latihan 11 — Konversi Suhu (Methods + v-html)  
- File kunci: `latihan11/index.html`, `latihan11/apps.js`  
- Konsep: Konversi C → F/K via methods; `v-html` untuk simbol derajat.  
- Tujuan: Studi kasus kecil transformasi input ke output terformat.  
- Perilaku: Klik tombol untuk konversi dan tampilkan hasil dengan satuan.

12) Latihan 12 — Filter String & Event Handling Lanjutan  
- File kunci: `latihan12/index.html`, `latihan12/apps.js`  
- Konsep: Filter daftar buah via `computed` (`filteredBuah`) dan beragam event (`@input`, `@click`, `@keyup`, `@keyup.enter`, `@submit`, `@focus/@blur/@input`).  
- Tujuan: Memahami interaksi form/keyboard dan umpan balik UI real-time.  
- Perilaku: Pencarian buah case-insensitive; tombol mengubah/mereset teks; input menangani keyup/enter; form men-submit nama; satu input mendemokan multiple handlers.

---

### Konsep Kunci Vue 3 yang Digunakan
- Inisialisasi Aplikasi: `Vue.createApp({...}).mount('#app')`
- Data: `data() { return { ... } }`
- Methods: `methods: { aksi() { ... } }`
- Computed: `computed: { nilai() { ... } }`
- Directives:
  - `{{ data }}` / `v-text` — menampilkan teks
  - `v-if / v-else-if / v-else` — conditional rendering
  - `v-bind:attr` atau `:attr` — binding atribut
  - `v-model` — two-way binding form
  - `v-html` — render HTML (gunakan hati-hati)
  - `v-on:event` atau `@event` — event handling (mis. `@click`, `@keyup`, `@submit`)

### Tips Belajar
- Ubah nilai di `data()` dan amati efeknya pada tampilan.
- Coba tambahkan validasi sederhana pada input (angka kosong, pembagian 0).
- Bandingkan kapan sebaiknya memakai `computed` vs `methods`.
- Gunakan class CSS terpisah untuk menjaga template tetap bersih.

### Output yang Diharapkan
Setelah menyelesaikan Praktikum 2, mahasiswa mampu:
- Menjelaskan perbedaan `computed` dan `methods` serta penggunaannya.
- Mengimplementasikan data binding, conditional rendering, dan event handling dasar.
- Membangun komponen UI kecil yang responsif terhadap input pengguna dengan Vue 3.

---

Jika Anda membutuhkan panduan langkah-per-langkah lebih detail, lihat juga `LANGKAH_IMPLEMENTASI.md` pada folder ini.


