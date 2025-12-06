# MATERI 13 — Penerapan Animasi pada Pemrograman Web

Dokumentasi ini ditujukan untuk mahasiswa agar memahami konsep Transition dan Animation dalam Vue.js untuk menciptakan pengalaman pengguna yang lebih menarik dan interaktif.

## 📚 Tujuan Pembelajaran

Setelah menyelesaikan materi ini, mahasiswa diharapkan dapat:
- Memahami konsep Transition dan Animation dalam Vue.js
- Mengimplementasikan transition dengan komponen `<transition>` dan `<transition-group>`
- Membuat animasi CSS dengan @keyframes
- Menggunakan JavaScript untuk kontrol animasi yang lebih kompleks
- Menerapkan animasi pada aplikasi web modern

## 📁 Struktur Proyek

```
MATERI 13/
├── Transition/            # Pembahasan Transition
│   ├── index.html
│   ├── apps.js
│   ├── style.css
│   └── vue.min.js
├── Animation/             # Pembahasan Animation
│   ├── index.html
│   ├── apps.js
│   ├── style.css
│   └── vue.min.js
└── README.md              # Dokumentasi ini
```

## 🚀 Cara Menjalankan

1. Pilih salah satu folder pembahasan (mis. `Transition/`).
2. Jalankan server lokal (pilih salah satu):
   - Python: `python -m http.server 8000`
   - PHP: `php -S localhost:8000`
   - Node: `npx http-server -p 8000`
3. Akses di browser: `http://localhost:8000`

> **Catatan:** Anda juga bisa membuka langsung `index.html`, namun beberapa fitur relatif lebih stabil dengan server lokal.

---

## 📖 Ringkasan Pembahasan

### 1. Transition

**Lokasi:** `Transition/`

**Konsep:**
- Transition terjadi ketika elemen masuk, keluar, atau berubah state
- Vue menyediakan komponen `<transition>` untuk wrap elemen tunggal
- Vue menyediakan komponen `<transition-group>` untuk list items
- Vue otomatis menambahkan class CSS pada saat-saat tertentu dalam siklus transisi

**Class Transition:**
- `v-enter-from` / `v-leave-to` - State awal/akhir
- `v-enter-active` / `v-leave-active` - Selama transisi berlangsung
- `v-enter-to` / `v-leave-from` - State akhir/masuk

**Contoh yang Dipelajari:**
1. **Fade Transition** - Elemen muncul/menghilang dengan efek fade
2. **Slide Transition** - Elemen bergeser saat masuk/keluar
3. **Bounce Transition** - Elemen muncul dengan efek pantulan
4. **Transition Mode** - `out-in` dan `in-out` untuk kontrol urutan transisi
5. **Transition Group** - Animasi pada list items dengan efek stagger
6. **JavaScript Hooks** - Kontrol transisi sepenuhnya dengan JavaScript

**JavaScript Hooks:**
- `@before-enter` - Sebelum elemen masuk
- `@enter` - Selama elemen masuk
- `@after-enter` - Setelah elemen masuk
- `@before-leave` - Sebelum elemen keluar
- `@leave` - Selama elemen keluar
- `@after-leave` - Setelah elemen keluar

**File Kunci:**
- `Transition/apps.js` - Implementasi berbagai jenis transition
- `Transition/style.css` - CSS untuk transition effects

---

### 2. Animation

**Lokasi:** `Animation/`

**Konsep:**
- Animation dapat berjalan terus menerus atau dikontrol secara manual
- Dapat dibuat menggunakan CSS @keyframes atau JavaScript
- Memberikan kontrol lebih detail untuk animasi kompleks
- Dapat digunakan untuk loading indicators, progress bars, dan efek visual lainnya

**Jenis Animation:**
1. **CSS Keyframe Animation** - Animasi yang didefinisikan dengan @keyframes
2. **Data Binding Animation** - Animasi yang dikontrol melalui data Vue
3. **Loop Animation** - Animasi yang berulang terus menerus
4. **Progress Animation** - Animasi untuk menunjukkan progress
5. **Canvas Animation** - Animasi menggunakan HTML5 Canvas dengan JavaScript
6. **Stagger Animation** - Animasi berurutan pada multiple elements

**Contoh yang Dipelajari:**
1. **CSS Keyframes** - Rotate, Pulse, Bounce, Shake animations
2. **Data Binding** - Kontrol transform (rotate, scale, translate) dengan slider
3. **Loading Animation** - Dots animation dengan delay bertahap
4. **Progress Bar** - Progress bar dengan animasi shimmer effect
5. **Canvas Animation** - Animasi lingkaran berputar dengan gradient dinamis
6. **Stagger Effect** - Cards muncul secara berurutan dengan delay

**CSS Animations:**
- `@keyframes` - Mendefinisikan animasi
- `animation-name` - Nama keyframe
- `animation-duration` - Durasi animasi
- `animation-timing-function` - Fungsi timing (ease, linear, etc.)
- `animation-iteration-count` - Jumlah pengulangan (infinite untuk loop)
- `animation-delay` - Delay sebelum animasi dimulai

**JavaScript Animation:**
- `requestAnimationFrame()` - Untuk animasi yang smooth
- Kontrol manual start/stop/pause
- Perhitungan frame-by-frame untuk kontrol penuh

**File Kunci:**
- `Animation/apps.js` - Implementasi berbagai jenis animation
- `Animation/style.css` - CSS keyframes dan styles

---

## 🔑 Konsep Kunci

### Perbedaan Transition vs Animation

**Transition:**
- Terjadi ketika ada perubahan state
- Berdurasi singkat (biasanya < 1 detik)
- Automatik trigger oleh Vue
- Cocok untuk: hover effects, modal muncul/hilang, list items

**Animation:**
- Dapat berjalan terus menerus
- Dapat memiliki durasi lebih panjang
- Dikontrol secara manual atau loop
- Cocok untuk: loading indicators, progress bars, efek visual berkelanjutan

### Transition Component

```html
<transition name="fade">
  <div v-if="show">Konten</div>
</transition>
```

```css
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
```

### Animation dengan @keyframes

```css
@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.element {
  animation: rotate 2s linear infinite;
}
```

### JavaScript Animation

```javascript
function animate() {
  // Update properties
  element.style.transform = `translateX(${x}px)`;
  
  // Continue animation
  if (playing) {
    requestAnimationFrame(animate);
  }
}
```

---

## 💡 Tips Belajar

1. **Mulai dari Dasar**
   - Pelajari transition sederhana (fade) terlebih dahulu
   - Pahami class-class yang diterapkan Vue secara otomatis
   - Baru kemudian lanjut ke animation yang lebih kompleks

2. **Gunakan Browser DevTools**
   - Inspect elemen untuk melihat class yang diterapkan
   - Gunakan timeline untuk melihat performa animasi
   - Test dengan berbagai kecepatan animasi

3. **Perhatikan Performance**
   - Gunakan `transform` dan `opacity` untuk animasi yang smooth
   - Hindari animasi pada `width`, `height`, `top`, `left` (reflow)
   - Gunakan `will-change` untuk optimasi (dengan hati-hati)

4. **Praktik Langsung**
   - Ubah durasi dan timing function
   - Coba kombinasi berbagai efek
   - Buat animasi custom untuk project Anda

---

## 📝 Latihan Tambahan

Setelah memahami semua konsep, coba buat:

1. **Modal dengan Transition**
   - Modal muncul dengan fade + scale
   - Overlay dengan fade transition
   - Close button dengan hover effect

2. **Image Gallery dengan Animation**
   - Image slider dengan slide transition
   - Thumbnail dengan stagger animation
   - Loading animation saat image dimuat

3. **Progress Indicator**
   - Circular progress dengan animation
   - Step indicator dengan transition
   - Success animation saat selesai

4. **Interactive Card**
   - Card dengan hover animation (3D transform)
   - Card flip animation
   - Card dengan loading skeleton

---

## 📚 Referensi

- [Vue.js Documentation - Transitions](https://vuejs.org/guide/built-ins/transition.html)
- [Vue.js Documentation - TransitionGroup](https://vuejs.org/guide/built-ins/transition-group.html)
- [MDN - CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [MDN - CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions)
- [MDN - requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
- [Can I Use - CSS Animations](https://caniuse.com/css-animation)

---

## ✅ Output yang Diharapkan

Setelah menyelesaikan materi ini, mahasiswa mampu:
- ✅ Memahami perbedaan transition dan animation
- ✅ Mengimplementasikan transition dengan Vue.js
- ✅ Membuat animasi CSS dengan @keyframes
- ✅ Menggunakan JavaScript untuk kontrol animasi
- ✅ Menerapkan animasi pada elemen interaktif
- ✅ Mengoptimalkan performa animasi

---

## 🎨 Best Practices

1. **Performance**
   - Gunakan `transform` dan `opacity` untuk animasi
   - Hindari animasi pada layout properties
   - Gunakan `will-change` dengan bijak

2. **Accessibility**
   - Respect `prefers-reduced-motion`
   - Berikan opsi untuk disable animasi
   - Pastikan animasi tidak mengganggu penggunaan

3. **User Experience**
   - Durasi animasi yang wajar (200-500ms untuk transition)
   - Gunakan timing function yang sesuai
   - Jangan berlebihan dengan animasi

---

**Dibuat untuk:** Mata Kuliah Pemrograman Web  
**Versi:** 1.0  
**Tahun:** 2024

