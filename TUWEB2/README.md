# Mobile SITTA

**Sistem Informasi Tracking Bahan Ajar**

Aplikasi berbasis website prototype untuk mengelola dan melacak informasi bahan ajar mahasiswa. Aplikasi ini dibuat menggunakan HTML, CSS, dan JavaScript murni tanpa framework atau plugin eksternal.

## 📋 Daftar Isi

- [Fitur Utama](#fitur-utama)
- [Struktur File](#struktur-file)
- [Cara Menggunakan](#cara-menggunakan)
- [Akun Login](#akun-login)
- [Fitur Detail](#fitur-detail)
- [Validasi](#validasi)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)

## ✨ Fitur Utama

### 1. **Autentikasi Pengguna**
- Login dengan email dan password
- Validasi lengkap untuk semua input
- Session management
- Tombol Daftar dan Lupa Password dengan alert

### 2. **Dashboard**
- Halaman utama setelah login
- Search engine untuk tracking pengiriman bahan ajar
- Cari dengan No. Billing pembayaran
- Tampilan informasi tracking dan detail perjalanan paket

### 3. **Tracking Pengiriman**
- Pencarian detail tracking dengan No. Billing
- Data Pribadi Mahasiswa
- Data Pengiriman Bahan Ajar dengan timeline
- Data Pembayaran lengkap

### 4. **Informasi Bahan Ajar**
- Pilih lokasi: Pusat atau UPBJJ
- Tampilan Stok Item dengan thumbnail
- Tampilan Stok Paket dengan thumbnail
- Tampilan Stok per Lokasi
- Grid layout responsif dengan card design

### 5. **Laporan Monitoring**
- Laporan Progress DO dengan progress bar
- Laporan Pengiriman DO
- Grafik Rekap Keluhan Bahan Ajar

### 6. **Histori Bahan Ajar**
- Pencarian dengan NIM mahasiswa
- Tampilan histori transaksi bahan ajar
- Detail setiap transaksi

### 7. **Profil Pengguna**
- Informasi profil pengguna yang login
- Validasi session

## 📁 Struktur File

```
TUWEB2/
├── index.html                    # Halaman login (root)
├── html/                         # Folder halaman HTML
│   ├── dashboard.html            # Dashboard utama
│   ├── tracking.html             # Tracking pengiriman
│   ├── informasi-bahan-ajar.html # Informasi stok bahan ajar
│   ├── laporan-monitoring.html   # Laporan monitoring
│   ├── histori-bahan-ajar.html   # Histori transaksi
│   └── profil.html               # Profil pengguna
├── css/
│   └── style.css                 # Styling aplikasi
├── js/
│   └── main.js                   # JavaScript utama
├── data/
│   └── data.js                   # Data dummy aplikasi
└── README.md                     # Dokumentasi
```

## 🚀 Cara Menggunakan

1. **Buka aplikasi**
   - Buka file `index.html` di browser
   - Atau serve melalui web server (XAMPP, Laragon, dll)

2. **Login**
   - Masukkan email dan password
   - Klik tombol "Login"
   - Akan diarahkan ke dashboard jika login berhasil

3. **Navigasi**
   - Gunakan menu di header untuk berpindah halaman
   - Setiap halaman memiliki fitur pencarian/filter

4. **Logout**
   - Klik tombol "Logout" di menu header
   - Session akan dihapus dan kembali ke halaman login

## 🔐 Akun Login

### Admin
- **Email:** `admin@sitta.ac.id`
- **Password:** `admin123`

### Mahasiswa 1
- **Email:** `mahasiswa1@student.sitta.ac.id`
- **Password:** `mahasiswa123`

### Mahasiswa 2
- **Email:** `mahasiswa2@student.sitta.ac.id`
- **Password:** `mahasiswa123`

## 📊 Data Testing

### Tracking Pengiriman
- **No. Billing:** `BLG-2024-001`, `BLG-2024-002`, `BLG-2024-003`

### Histori Transaksi
- **NIM:** `M001`, `M002`, `M003`, `M004`, `M005`

## 🔍 Fitur Detail

### Validasi Login
- ✅ Email tidak boleh kosong
- ✅ Password tidak boleh kosong
- ✅ Validasi user tidak dikenal
- ✅ Validasi password salah
- ✅ Alert untuk tombol Daftar (hubungi admin)
- ✅ Alert untuk tombol Lupa Password (hubungi admin)

### Validasi Search Tracking
- ✅ No. Billing tidak boleh kosong
- ✅ Validasi No. Billing tidak ditemukan
- ✅ Tampilkan informasi tracking jika ditemukan

### Validasi Histori
- ✅ NIM tidak boleh kosong
- ✅ Validasi format NIM (minimal 3 karakter)
- ✅ Validasi NIM tidak ditemukan

### Session Management
- ✅ Auto redirect ke login jika belum login
- ✅ Session disimpan di sessionStorage
- ✅ Validasi session di setiap halaman

## 🎨 Desain

### Styling
- **Tema:** Resmi dan profesional
- **Color Scheme:** Biru dan abu-abu (netral)
- **Login Page:** Background polos (#f5f5f5) tanpa warna mencolok
- **Responsive:** Mobile-friendly design
- **Card Layout:** Modern card design dengan shadow

### Thumbnail Bahan Ajar
- Menggunakan gambar dari Unsplash
- Fallback image jika gambar gagal dimuat
- Grid layout responsif
- Hover effect pada card

## ⚙️ Teknologi yang Digunakan

- **HTML5** - Struktur halaman
- **CSS3** - Styling dan layout
- **JavaScript (Vanilla)** - Logika aplikasi
- **SessionStorage** - Penyimpanan session
- **No Framework** - Murni HTML, CSS, JavaScript

## 📝 Catatan Penting

1. **Data Storage**
   - Semua data disimpan di `data/data.js`
   - Data menggunakan format JavaScript object
   - Session disimpan di browser sessionStorage

2. **Path File**
   - Pastikan struktur folder sesuai dengan dokumentasi
   - File `index.html` harus berada di root
   - Semua halaman HTML berada di folder `html/`

3. **Browser Compatibility**
   - Direkomendasikan menggunakan browser modern
   - SessionStorage harus didukung
   - JavaScript harus diaktifkan

4. **Thumbnail Images**
   - Menggunakan URL dari Unsplash
   - Memerlukan koneksi internet untuk load gambar
   - Fallback placeholder jika gambar gagal

## 🛠️ Pengembangan

### Menambah Data Baru
Edit file `data/data.js`:
- Tambahkan user baru di array `users`
- Tambahkan tracking baru di array `tracking`
- Tambahkan stok baru di object `stokBahanAjar`
- Tambahkan histori baru di array `historiTransaksi`

### Menambah Fitur Baru
1. Tambahkan fungsi di `js/main.js`
2. Buat halaman HTML baru di folder `html/`
3. Tambahkan route di navigation
4. Update validasi sesuai kebutuhan

## 📄 Lisensi

Prototype aplikasi untuk keperluan akademik dan pengembangan.

## 👤 Kontak

Untuk pertanyaan atau dukungan, hubungi Admin SITTA.

---

**Mobile SITTA** - Sistem Informasi Tracking Bahan Ajar
*Versi Prototype*

