<script setup>
import { ref } from 'vue'
import { lessonData } from '../data/lessons.js'

const message = ref(lessonData.lesson6.message)
const age = ref(lessonData.lesson6.age)
const email = ref(lessonData.lesson6.email)
const selectedFruit = ref(lessonData.lesson6.selectedFruit)
const isChecked = ref(lessonData.lesson6.isChecked)
const fruits = ['Apel', 'Jeruk', 'Pisang', 'Mangga']

// Helper untuk menampilkan {{ }} dalam code example
const doubleBrace = '{' + '{'
const doubleBraceClose = '}' + '}'
</script>

<template>
  <div class="lesson-container">
    <div class="lesson-header">
      <h1>↔️ Two-Way Binding (v-model)</h1>
      <p class="lesson-description">
        v-model membuat binding dua arah antara form input dan data. Ketika input berubah, data otomatis update, dan sebaliknya.
      </p>
    </div>

    <div class="lesson-content">
      <section class="usage-section">
        <h2>📖 Cara Penggunaan</h2>
        <div class="usage-content">
          <h3>Kapan Menggunakan v-model?</h3>
          <ul>
            <li>Ketika ingin binding dua arah (two-way binding) untuk form input</li>
            <li>Untuk input, textarea, checkbox, radio, dan select</li>
            <li>Ketika input berubah, data otomatis update, dan sebaliknya</li>
          </ul>
          
          <h3>Cara Menggunakan:</h3>
          <ol>
            <li><strong>Text input:</strong> <code>&lt;input v-model="message" /&gt;</code></li>
            <li><strong>Number:</strong> <code>&lt;input v-model.number="age" type="number" /&gt;</code></li>
            <li><strong>Checkbox:</strong> <code>&lt;input v-model="isChecked" type="checkbox" /&gt;</code></li>
            <li><strong>Select:</strong> <code>&lt;select v-model="selected"&gt;...&lt;/select&gt;</code></li>
          </ol>

          <h3>Modifiers:</h3>
          <ul>
            <li><code>.number</code> - Konversi input ke angka</li>
            <li><code>.trim</code> - Hapus spasi di awal/akhir</li>
            <li><code>.lazy</code> - Update saat blur (bukan saat input)</li>
          </ul>

          <h3>Tips Penting:</h3>
          <ul>
            <li>✅ v-model adalah singkatan dari <code>:value</code> + <code>@input</code></li>
            <li>✅ Gunakan modifiers untuk format data sesuai kebutuhan</li>
            <li>✅ Untuk checkbox, v-model akan berisi boolean atau array</li>
            <li>❌ v-model hanya untuk form input, tidak untuk atribut lain</li>
          </ul>
        </div>
      </section>

      <section class="example-section">
        <h2>1. v-model dengan Text Input</h2>
        <div class="code-example">
          <code>&lt;input v-model="message" placeholder="Masukkan pesan" /&gt;</code><br>
          <code>&lt;p&gt;Pesan: {{ doubleBrace }} message {{ doubleBraceClose }}&lt;/p&gt;</code>
        </div>
        <div class="demo-box">
          <input v-model="message" placeholder="Masukkan pesan..." class="demo-input" />
          <p class="result"><strong>Pesan:</strong> {{ message || '(kosong)' }}</p>
          <p class="info">Coba ubah teks di input, hasil akan langsung berubah!</p>
        </div>
      </section>

      <section class="example-section">
        <h2>2. v-model dengan Number Input</h2>
        <div class="code-example">
          <code>&lt;input v-model.number="age" type="number" /&gt;</code><br>
          <code>&lt;p&gt;Umur: {{ doubleBrace }} age {{ doubleBraceClose }} (tipe: {{ doubleBrace }} typeof age {{ doubleBraceClose }})&lt;/p&gt;</code>
        </div>
        <div class="demo-box">
          <input v-model.number="age" type="number" placeholder="Masukkan umur" class="demo-input" />
          <p class="result"><strong>Umur:</strong> {{ age || 0 }} tahun</p>
          <p class="result"><strong>Tipe data:</strong> {{ typeof age }}</p>
          <p class="result" v-if="age > 0">
            <strong>Status:</strong> 
            <span :style="{ color: age >= 18 ? 'green' : 'orange' }">
              {{ age >= 18 ? 'Dewasa' : 'Anak-anak' }}
            </span>
          </p>
        </div>
      </section>

      <section class="example-section">
        <h2>3. v-model dengan Textarea</h2>
        <div class="code-example">
          <code>&lt;textarea v-model="message"&gt;&lt;/textarea&gt;</code><br>
          <code>&lt;p&gt;{{ doubleBrace }} message {{ doubleBraceClose }}&lt;/p&gt;</code>
        </div>
        <div class="demo-box">
          <textarea v-model="message" placeholder="Tulis pesan panjang di sini..." class="demo-textarea"></textarea>
          <p class="result"><strong>Pesan:</strong> {{ message || '(kosong)' }}</p>
          <p class="info">Panjang karakter: {{ message.length }}</p>
        </div>
      </section>

      <section class="example-section">
        <h2>4. v-model dengan Checkbox</h2>
        <div class="code-example">
          <code>&lt;input v-model="isChecked" type="checkbox" /&gt;</code><br>
          <code>&lt;p v-if="isChecked"&gt;Checkbox dicentang!&lt;/p&gt;</code>
        </div>
        <div class="demo-box">
          <label class="checkbox-label">
            <input v-model="isChecked" type="checkbox" />
            <span>Saya setuju dengan syarat dan ketentuan</span>
          </label>
          <div v-if="isChecked" class="success-box">
            ✓ Checkbox dicentang!
          </div>
          <div v-else class="info-box">
            Silakan centang checkbox
          </div>
        </div>
      </section>

      <section class="example-section">
        <h2>5. v-model dengan Radio Button</h2>
        <div class="code-example">
          <code>&lt;input v-model="selectedFruit" type="radio" value="Apel" /&gt; Apel</code><br>
          <code>&lt;input v-model="selectedFruit" type="radio" value="Jeruk" /&gt; Jeruk</code>
        </div>
        <div class="demo-box">
          <p><strong>Pilih buah favorit:</strong></p>
          <label class="radio-label">
            <input v-model="selectedFruit" type="radio" value="Apel" />
            <span>🍎 Apel</span>
          </label>
          <label class="radio-label">
            <input v-model="selectedFruit" type="radio" value="Jeruk" />
            <span>🍊 Jeruk</span>
          </label>
          <label class="radio-label">
            <input v-model="selectedFruit" type="radio" value="Pisang" />
            <span>🍌 Pisang</span>
          </label>
          <label class="radio-label">
            <input v-model="selectedFruit" type="radio" value="Mangga" />
            <span>🥭 Mangga</span>
          </label>
          <p v-if="selectedFruit" class="result">
            <strong>Buah favorit Anda:</strong> {{ selectedFruit }}
          </p>
        </div>
      </section>

      <section class="example-section">
        <h2>6. v-model dengan Select Dropdown</h2>
        <div class="code-example">
          <code>&lt;select v-model="selectedFruit"&gt;</code><br>
          <code>&nbsp;&nbsp;&lt;option v-for="fruit in fruits" :key="fruit"&gt;{{ doubleBrace }} fruit {{ doubleBraceClose }}&lt;/option&gt;</code><br>
          <code>&lt;/select&gt;</code>
        </div>
        <div class="demo-box">
          <label>
            <strong>Pilih buah:</strong>
            <select v-model="selectedFruit" class="demo-select">
              <option value="">-- Pilih buah --</option>
              <option v-for="fruit in fruits" :key="fruit" :value="fruit">
                {{ fruit }}
              </option>
            </select>
          </label>
          <p v-if="selectedFruit" class="result">
            <strong>Anda memilih:</strong> {{ selectedFruit }}
          </p>
        </div>
      </section>

      <section class="example-section">
        <h2>7. v-model Modifiers</h2>
        <div class="code-example">
          <code>&lt;input v-model.trim="message" /&gt; &lt;!-- Hapus spasi di awal/akhir --&gt;</code><br>
          <code>&lt;input v-model.number="age" /&gt; &lt;!-- Konversi ke number --&gt;</code><br>
          <code>&lt;input v-model.lazy="message" /&gt; &lt;!-- Update saat blur --&gt;</code>
        </div>
        <div class="demo-box">
          <div class="modifier-box">
            <label>
              <strong>.trim</strong> - Hapus spasi di awal/akhir:
              <input v-model.trim="message" placeholder="Coba tambah spasi di awal/akhir" class="demo-input" />
              <p class="info">Panjang: {{ message.length }} karakter</p>
            </label>
          </div>
          <div class="modifier-box">
            <label>
              <strong>.number</strong> - Konversi ke angka:
              <input v-model.number="age" type="text" placeholder="Masukkan angka" class="demo-input" />
              <p class="info">Nilai: {{ age }}, Tipe: {{ typeof age }}</p>
            </label>
          </div>
        </div>
      </section>
    </div>

    <div class="lesson-footer">
      <button @click="$emit('back')" class="back-button">← Kembali ke Menu</button>
    </div>
  </div>
</template>

<style scoped>
.lesson-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 30px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.lesson-header {
  text-align: center;
  margin-bottom: 40px;
  padding: 20px;
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  border-radius: 12px;
  color: #2d3436;
}

.lesson-header h1 {
  margin: 0 0 10px 0;
  font-size: 2.5em;
}

.lesson-description {
  font-size: 1.1em;
  opacity: 0.9;
  margin: 0;
}

.lesson-content {
  margin-bottom: 30px;
}

.usage-section {
  background: linear-gradient(135deg, #a8edea15 0%, #fed6e315 100%);
  padding: 30px;
  border-radius: 12px;
  margin-bottom: 30px;
  border: 2px solid #a8edea;
}

.usage-section h2 {
  color: #a8edea;
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 2em;
  text-align: center;
}

.usage-content h3 {
  color: #35495e;
  margin-top: 25px;
  margin-bottom: 15px;
  font-size: 1.3em;
  border-bottom: 2px solid #a8edea;
  padding-bottom: 8px;
}

.usage-content ul,
.usage-content ol {
  margin: 15px 0;
  padding-left: 25px;
  line-height: 1.8;
}

.usage-content li {
  margin: 10px 0;
  font-size: 1.05em;
}

.usage-content strong {
  color: #a8edea;
}

.usage-content code {
  background: #f8f9fa;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
  color: #a8edea;
  font-weight: bold;
}

.example-section {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 8px;
  margin-bottom: 25px;
  border-left: 5px solid #a8edea;
}

.example-section h2 {
  color: #35495e;
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 1.5em;
}

.code-example {
  background: #2d2d2d;
  color: #f8f8f2;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 15px;
  font-family: 'Courier New', monospace;
  font-size: 0.95em;
  overflow-x: auto;
}

.demo-box {
  background: white;
  padding: 20px;
  border-radius: 5px;
  border: 2px solid #e0e0e0;
}

.demo-input {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s;
}

.demo-input:focus {
  outline: none;
  border-color: #a8edea;
  box-shadow: 0 0 5px rgba(168, 237, 234, 0.3);
}

.demo-textarea {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  min-height: 100px;
  font-family: inherit;
  resize: vertical;
}

.demo-textarea:focus {
  outline: none;
  border-color: #a8edea;
  box-shadow: 0 0 5px rgba(168, 237, 234, 0.3);
}

.demo-select {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  background: white;
}

.result {
  padding: 15px;
  background: #f8f9fa;
  border-radius: 5px;
  margin: 10px 0;
  font-size: 1.1em;
}

.info {
  color: #6c757d;
  font-style: italic;
  margin: 10px 0;
}

.checkbox-label, .radio-label {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  margin: 8px 0;
  background: #f8f9fa;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

.checkbox-label:hover, .radio-label:hover {
  background: #e9ecef;
}

.checkbox-label input[type="checkbox"],
.radio-label input[type="radio"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.success-box {
  background: #d4edda;
  color: #155724;
  padding: 15px;
  border-radius: 5px;
  margin: 10px 0;
  border: 2px solid #28a745;
  font-weight: bold;
}

.info-box {
  background: #d1ecf1;
  color: #0c5460;
  padding: 15px;
  border-radius: 5px;
  margin: 10px 0;
  border: 2px solid #17a2b8;
}

.modifier-box {
  background: #f8f9fa;
  padding: 15px;
  margin: 15px 0;
  border-radius: 5px;
  border: 2px dashed #ddd;
}

.modifier-box label {
  display: block;
}

.modifier-box strong {
  color: #a8edea;
  background: #2d2d2d;
  padding: 2px 8px;
  border-radius: 3px;
  color: #fed6e3;
}

.lesson-footer {
  text-align: center;
  margin-top: 40px;
}

.back-button {
  display: inline-block;
  padding: 12px 30px;
  background: #6c757d;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s;
}

.back-button:hover {
  background: #5a6268;
  transform: translateX(-5px);
}
</style>

