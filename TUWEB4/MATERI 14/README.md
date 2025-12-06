# MATERI 14 — HTTP Request Library: Axios

Dokumentasi ini ditujukan untuk mahasiswa agar memahami cara menggunakan Axios untuk melakukan HTTP requests dalam aplikasi Vue.js, termasuk integrasi dengan database MySQL.

## 📚 Tujuan Pembelajaran

Setelah menyelesaikan materi ini, mahasiswa diharapkan dapat:
- Memahami konsep HTTP Request Library dan kegunaan Axios
- Mengintegrasikan Axios dengan Vue.js melalui jalur online (CDN) dan offline (file lokal)
- Melakukan operasi CRUD (Create, Read, Update, Delete) menggunakan Axios
- Membuat backend API dengan PHP untuk berinteraksi dengan database MySQL
- Menerapkan Axios dalam aplikasi web modern

## 📁 Struktur Proyek

```
MATERI 14/
├── AxiosOnline/          # Integrasi Axios Online (CDN)
│   ├── index.html
│   ├── apps.js
│   ├── style.css
│   └── vue.min.js
├── AxiosOffline/         # Integrasi Axios Offline (File Lokal)
│   ├── index.html
│   ├── apps.js
│   ├── style.css
│   └── vue.min.js
├── CRUD/                 # CRUD dengan Database
│   ├── index.html
│   ├── apps.js
│   ├── style.css
│   ├── api.php           # Backend API
│   ├── database.sql      # Script SQL
│   └── vue.min.js
└── README.md             # Dokumentasi ini
```

## 🚀 Cara Menjalankan

### 1. Axios Online & Axios Offline
1. Buka folder yang diinginkan (`AxiosOnline/` atau `AxiosOffline/`)
2. Jalankan server lokal:
   - Python: `python -m http.server 8000`
   - PHP: `php -S localhost:8000`
   - Node: `npx http-server -p 8000`
3. Akses di browser: `http://localhost:8000`

### 2. CRUD dengan Database
**Persyaratan:**
- XAMPP/Laragon/WAMP dengan MySQL aktif
- Database `vue_db1` sudah dibuat
- PHP enabled

**Langkah-langkah:**
1. Import database:
   ```sql
   -- Jalankan file database.sql di phpMyAdmin atau MySQL client
   ```
   
2. Pastikan konfigurasi di `api.php` sesuai:
   ```php
   $host = 'localhost';
   $dbname = 'vue_db1';
   $username = 'root';
   $password = 'root';
   ```

3. Buka folder `CRUD/` melalui server web (tidak bisa langsung double-click)
   - Pastikan server web (Apache/Nginx) berjalan
   - Akses melalui: `http://localhost/TUWEB4/MATERI 14/CRUD/`

> **Catatan:** Untuk AxiosOffline, pastikan file `axios.min.js` sudah ada di folder `dist/`

---

## 📖 Ringkasan Pembahasan

### 1. Axios Online (CDN)

**Lokasi:** `AxiosOnline/`

**Konsep:**
- Menggunakan Axios dari CDN (Content Delivery Network)
- Tidak perlu download file secara manual
- Memerlukan koneksi internet
- Lebih mudah untuk development dan testing

**CDN yang Tersedia:**
1. **jsDelivr:**
   ```html
   <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
   ```

2. **unpkg:**
   ```html
   <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
   ```

**Contoh yang Dipelajari:**
- GET Request - Mengambil data dari API publik
- POST Request - Mengirim data ke API
- Multiple Requests - Concurrent requests dengan Promise.all
- Error Handling - Menangani berbagai jenis error

**Keuntungan:**
- ✅ Tidak perlu mengelola file lokal
- ✅ Selalu menggunakan versi terbaru (jika diinginkan)
- ✅ Caching oleh CDN untuk performa lebih baik

---

### 2. Axios Offline (File Lokal)

**Lokasi:** `AxiosOffline/`

**Konsep:**
- Menggunakan Axios dari file yang didownload dan disimpan lokal
- Aplikasi dapat berjalan tanpa koneksi internet
- Lebih cocok untuk production environment

**Langkah-langkah Integrasi:**
1. Download Axios dari: https://github.com/axios/axios
2. Extract file hasil download
3. Copy folder `dist` ke dalam project
4. Include di HTML:
   ```html
   <script src="./dist/axios.min.js"></script>
   ```

**Contoh yang Dipelajari:**
- Test ketersediaan Axios
- GET Request ke API lokal
- POST Request ke API lokal

**Keuntungan:**
- ✅ Tidak memerlukan koneksi internet
- ✅ Kontrol versi yang digunakan
- ✅ Privasi lebih baik (tidak bergantung pada CDN pihak ketiga)

---

### 3. CRUD dengan Database

**Lokasi:** `CRUD/`

**Konsep:**
- Implementasi lengkap CRUD (Create, Read, Update, Delete)
- Backend API dengan PHP
- Database MySQL: `vue_db1`
- Integrasi Vue.js + Axios + PHP + MySQL

**Struktur Database:**
```sql
Database: vue_db1
Table: mahasiswa
Columns:
- id (INT, AUTO_INCREMENT, PRIMARY KEY)
- nim (VARCHAR(20), UNIQUE)
- nama (VARCHAR(100))
- email (VARCHAR(100))
- jurusan (VARCHAR(50))
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
```

**Fitur yang Dipelajari:**

1. **CREATE** - Tambah data mahasiswa baru
   - Form input: NIM, Nama, Email, Jurusan
   - Validasi di frontend dan backend
   - Check duplikasi NIM

2. **READ** - Tampilkan semua data
   - Tabel dengan data mahasiswa
   - Auto-refresh setelah operasi
   - Loading indicator

3. **UPDATE** - Edit data yang ada
   - Form edit dengan data yang sudah diisi
   - Update hanya field yang diubah
   - Cancel editing

4. **DELETE** - Hapus data
   - Konfirmasi sebelum delete
   - Refresh tabel setelah delete

**File Backend (`api.php`):**
- Endpoint: `api.php?action=create|read|update|delete`
- Method: GET (read) dan POST (create/update/delete)
- Response format: JSON
- Error handling lengkap

---

## 🔑 Konsep Kunci

### Axios Methods

```javascript
// GET Request
axios.get(url)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

// POST Request
axios.post(url, data)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

// Async/Await (Recommended)
async function fetchData() {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
```

### Error Handling

```javascript
try {
  const response = await axios.get(url);
} catch (error) {
  if (error.response) {
    // Server responded with error status
    console.log(error.response.status);
    console.log(error.response.data);
  } else if (error.request) {
    // Request made but no response
    console.log(error.request);
  } else {
    // Error in setting up request
    console.log('Error', error.message);
  }
}
```

### Concurrent Requests

```javascript
// Multiple requests simultaneously
const [users, posts] = await Promise.all([
  axios.get('/api/users'),
  axios.get('/api/posts')
]);
```

---

## 💡 Tips Belajar

1. **Mulai dari Online Integration**
   - Lebih mudah untuk testing
   - Tidak perlu setup file lokal
   - Cocok untuk belajar konsep dasar

2. **Pahami HTTP Methods**
   - GET: Mengambil data
   - POST: Mengirim data baru
   - PUT/PATCH: Update data
   - DELETE: Hapus data

3. **Error Handling**
   - Selalu handle error dalam aplikasi production
   - Berikan feedback ke user
   - Log error untuk debugging

4. **Security**
   - Validasi di frontend dan backend
   - Sanitize input untuk prevent SQL injection
   - Gunakan prepared statements di PHP

---

## 📝 Latihan Tambahan

Setelah memahami semua konsep, coba buat:

1. **Aplikasi Todo List dengan Database**
   - CRUD untuk todo items
   - Filter berdasarkan status
   - Search functionality

2. **Aplikasi Blog**
   - Create, Read, Update, Delete artikel
   - Upload gambar
   - Pagination

3. **Aplikasi E-commerce Sederhana**
   - CRUD produk
   - Keranjang belanja
   - Checkout

---

## 📚 Referensi

- [Axios Documentation](https://axios-http.com/docs/intro)
- [Axios GitHub](https://github.com/axios/axios)
- [Vue.js + Axios](https://vuejs.org/guide/scaling-up/ssr.html)
- [PHP PDO Documentation](https://www.php.net/manual/en/book.pdo.php)
- [MySQL Documentation](https://dev.mysql.com/doc/)

---

## ✅ Output yang Diharapkan

Setelah menyelesaikan materi ini, mahasiswa mampu:
- ✅ Memahami konsep HTTP Request Library
- ✅ Mengintegrasikan Axios dengan Vue.js (online dan offline)
- ✅ Melakukan GET, POST, PUT, DELETE requests
- ✅ Menangani error dengan baik
- ✅ Membuat backend API dengan PHP
- ✅ Melakukan operasi CRUD dengan database MySQL
- ✅ Membuat aplikasi web full-stack sederhana

---

## ⚠️ Troubleshooting

### Error: Axios is not defined
- Pastikan script Axios sudah di-include sebelum script aplikasi
- Check apakah CDN dapat diakses (untuk online)
- Pastikan path file benar (untuk offline)

### Error: CORS Policy
- Tambahkan header CORS di PHP:
  ```php
  header('Access-Control-Allow-Origin: *');
  ```

### Error: Database Connection Failed
- Pastikan MySQL service berjalan
- Check username dan password
- Pastikan database sudah dibuat
- Check konfigurasi di `api.php`

### Error: Table doesn't exist
- Import file `database.sql` ke MySQL
- Atau buat tabel secara manual sesuai script

---

**Dibuat untuk:** Mata Kuliah Pemrograman Web  
**Versi:** 1.0  
**Tahun:** 2024

