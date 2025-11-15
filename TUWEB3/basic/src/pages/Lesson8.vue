<script setup>
import { ref } from 'vue'
import { lessonData } from '../data/lessons.js'

const name = ref(lessonData.lesson8.name)
const count = ref(lessonData.lesson8.count)
const isVisible = ref(lessonData.lesson8.isVisible)
const link = ref(lessonData.lesson8.link)
</script>

<template>
  <div class="lesson-container">
    <div class="lesson-header">
      <h1>⚡ Shorthand Syntax</h1>
      <p class="lesson-description">
        Vue menyediakan shorthand syntax untuk mempersingkat penulisan directive yang sering digunakan.
      </p>
    </div>

    <div class="lesson-content">
      <section class="usage-section">
        <h2>📖 Cara Penggunaan</h2>
        <div class="usage-content">
          <h3>Apa itu Shorthand Syntax?</h3>
          <ul>
            <li>Vue menyediakan singkatan untuk directive yang sering digunakan</li>
            <li>Membuat kode lebih ringkas dan mudah dibaca</li>
            <li>Fungsionalitas sama, hanya penulisan yang berbeda</li>
          </ul>
          
          <h3>Shorthand yang Tersedia:</h3>
          <ol>
            <li><strong>v-bind → :</strong> <code>v-bind:id</code> menjadi <code>:id</code></li>
            <li><strong>v-on → @</strong> <code>v-on:click</code> menjadi <code>@click</code></li>
            <li><strong>v-slot → #</strong> <code>v-slot:header</code> menjadi <code>#header</code> (tidak dibahas di lesson ini)</li>
          </ol>

          <h3>Cara Menggunakan:</h3>
          <ul>
            <li>Ganti <code>v-bind:</code> dengan <code>:</code> (colon/titik dua)</li>
            <li>Ganti <code>v-on:</code> dengan <code>@</code> (at sign)</li>
            <li>Bisa digabungkan dengan modifier: <code>@click.prevent</code>, <code>:class.bind</code></li>
          </ul>

          <h3>Tips Penting:</h3>
          <ul>
            <li>✅ <strong>Disarankan</strong> menggunakan shorthand untuk kode yang lebih bersih</li>
            <li>✅ Shorthand lebih mudah dibaca dan ditulis</li>
            <li>✅ Fungsionalitas persis sama dengan full syntax</li>
            <li>✅ Bisa dicampur dengan full syntax jika perlu</li>
            <li>⚠️ Pastikan tidak salah mengetik (colon vs at sign)</li>
          </ul>
        </div>
      </section>

      <section class="example-section">
        <h2>1. v-bind Shorthand: : (colon)</h2>
        <div class="code-example">
          <code>&lt;!-- Full syntax --&gt;</code><br>
          <code>&lt;div v-bind:id="name"&gt;...&lt;/div&gt;</code><br>
          <code>&lt;!-- Shorthand --&gt;</code><br>
          <code>&lt;div :id="name"&gt;...&lt;/div&gt;</code>
        </div>
        <div class="demo-box">
          <div :id="`user-${name.toLowerCase()}`" class="shorthand-demo">
            ID: user-{{ name.toLowerCase() }}
          </div>
          <input v-model="name" placeholder="Ubah nama" class="demo-input" />
          <p>Element ID akan berubah sesuai nama</p>
        </div>
      </section>

      <section class="example-section">
        <h2>2. v-on Shorthand: @ (at sign)</h2>
        <div class="code-example">
          <code>&lt;!-- Full syntax --&gt;</code><br>
          <code>&lt;button v-on:click="count++"&gt;Click&lt;/button&gt;</code><br>
          <code>&lt;!-- Shorthand --&gt;</code><br>
          <code>&lt;button @click="count++"&gt;Click&lt;/button&gt;</code>
        </div>
        <div class="demo-box">
          <p>Count: <strong>{{ count }}</strong></p>
          <button @click="count++">Tambah (+1)</button>
          <button @click="count--">Kurangi (-1)</button>
          <button @click="count = 0">Reset</button>
        </div>
      </section>

      <section class="example-section">
        <h2>3. Kombinasi Shorthand</h2>
        <div class="code-example">
          <code>&lt;a :href="link" @click.prevent="handleClick"&gt;</code><br>
          <code>&nbsp;&nbsp;Link dengan shorthand&lt;/a&gt;</code>
        </div>
        <div class="demo-box">
          <a 
            :href="link" 
            @click.prevent="alert('Link diklik (prevented default)')"
            class="demo-link"
            target="_blank"
          >
            🌐 Kunjungi Vue.js (dengan @click.prevent)
          </a>
          <p>URL: {{ link }}</p>
          <input v-model="link" placeholder="Ubah URL" class="demo-input" />
        </div>
      </section>

      <section class="example-section">
        <h2>4. Shorthand dengan Event Modifiers</h2>
        <div class="code-example">
          <code>&lt;input @keyup.enter="submit" /&gt;</code><br>
          <code>&lt;form @submit.prevent="handleSubmit"&gt;...&lt;/form&gt;</code><br>
          <code>&lt;button @click.stop="handleClick"&gt;...&lt;/button&gt;</code>
        </div>
        <div class="demo-box">
          <input 
            @keyup.enter="count++"
            placeholder="Tekan Enter untuk increment"
            class="demo-input"
          />
          <p>Count akan bertambah saat Enter ditekan: <strong>{{ count }}</strong></p>
          <form @submit.prevent="alert('Form submitted (prevented)')" class="demo-form">
            <input placeholder="Masukkan data" class="demo-input" />
            <button type="submit">Submit (prevented)</button>
          </form>
        </div>
      </section>

      <section class="example-section">
        <h2>5. Shorthand dengan Dynamic Attributes</h2>
        <div class="code-example">
          <code>&lt;img :src="`/images/${name}.jpg`" :alt="`Foto ${name}`" /&gt;</code><br>
          <code>&lt;div :class="`box-${name}`"&gt;...&lt;/div&gt;</code>
        </div>
        <div class="demo-box">
          <div :class="`box-${name.toLowerCase()}`" class="dynamic-box">
            Class: box-{{ name.toLowerCase() }}
          </div>
          <img 
            :src="`https://via.placeholder.com/150?text=${name}`" 
            :alt="`Logo ${name}`"
            class="demo-image"
          />
          <input v-model="name" placeholder="Ubah nama" class="demo-input" />
        </div>
      </section>

      <section class="example-section">
        <h2>6. Shorthand dengan Conditional</h2>
        <div class="code-example">
          <code>&lt;div :class="{ active: isVisible }"&gt;...&lt;/div&gt;</code><br>
          <code>&lt;button @click="isVisible = !isVisible"&gt;Toggle&lt;/button&gt;</code>
        </div>
        <div class="demo-box">
          <button @click="isVisible = !isVisible">
            {{ isVisible ? 'Sembunyikan' : 'Tampilkan' }}
          </button>
          <div :class="{ active: isVisible, inactive: !isVisible }" class="conditional-box">
            Status: {{ isVisible ? 'Visible' : 'Hidden' }}
          </div>
        </div>
      </section>

      <section class="example-section">
        <h2>7. Ringkasan Semua Shorthand</h2>
        <div class="comparison-table">
          <div class="comparison-row">
            <div class="full-syntax">
              <strong>Full Syntax</strong>
            </div>
            <div class="shorthand-syntax">
              <strong>Shorthand</strong>
            </div>
          </div>
          <div class="comparison-row">
            <div class="full-syntax">
              <code>v-bind:id="id"</code>
            </div>
            <div class="shorthand-syntax">
              <code>:id="id"</code>
            </div>
          </div>
          <div class="comparison-row">
            <div class="full-syntax">
              <code>v-bind:class="className"</code>
            </div>
            <div class="shorthand-syntax">
              <code>:class="className"</code>
            </div>
          </div>
          <div class="comparison-row">
            <div class="full-syntax">
              <code>v-on:click="handler"</code>
            </div>
            <div class="shorthand-syntax">
              <code>@click="handler"</code>
            </div>
          </div>
          <div class="comparison-row">
            <div class="full-syntax">
              <code>v-on:keyup.enter="handler"</code>
            </div>
            <div class="shorthand-syntax">
              <code>@keyup.enter="handler"</code>
            </div>
          </div>
          <div class="comparison-row">
            <div class="full-syntax">
              <code>v-on:submit.prevent="handler"</code>
            </div>
            <div class="shorthand-syntax">
              <code>@submit.prevent="handler"</code>
            </div>
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
  background: linear-gradient(135deg, #ffd89b 0%, #19547b 100%);
  border-radius: 12px;
  color: white;
}

.lesson-header h1 {
  margin: 0 0 10px 0;
  font-size: 2.5em;
}

.lesson-description {
  font-size: 1.1em;
  opacity: 0.95;
  margin: 0;
}

.lesson-content {
  margin-bottom: 30px;
}

.usage-section {
  background: linear-gradient(135deg, #ffd89b15 0%, #19547b15 100%);
  padding: 30px;
  border-radius: 12px;
  margin-bottom: 30px;
  border: 2px solid #ffd89b;
}

.usage-section h2 {
  color: #ffd89b;
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
  border-bottom: 2px solid #ffd89b;
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
  color: #ffd89b;
}

.usage-content code {
  background: #f8f9fa;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
  color: #ffd89b;
  font-weight: bold;
}

.example-section {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 8px;
  margin-bottom: 25px;
  border-left: 5px solid #ffd89b;
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
  padding: 10px;
  margin: 10px 0;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

.shorthand-demo {
  padding: 20px;
  margin: 15px 0;
  background: #f8f9fa;
  border: 2px solid #ffd89b;
  border-radius: 8px;
  font-weight: bold;
  text-align: center;
}

button {
  background: #ffd89b;
  color: #19547b;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  margin: 10px 5px 10px 0;
  font-weight: bold;
  transition: all 0.3s;
}

button:hover {
  background: #19547b;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.demo-link {
  display: inline-block;
  padding: 12px 24px;
  background: #19547b;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  margin: 10px 0;
  transition: all 0.3s;
}

.demo-link:hover {
  background: #ffd89b;
  color: #19547b;
}

.demo-form {
  margin: 15px 0;
}

.dynamic-box {
  padding: 20px;
  margin: 15px 0;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
  background: #f8f9fa;
  border: 2px solid #ffd89b;
}

.box-vue {
  background: #42b883 !important;
  color: white;
}

.demo-image {
  display: block;
  margin: 15px auto;
  border-radius: 8px;
}

.conditional-box {
  padding: 20px;
  margin: 15px 0;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
  transition: all 0.3s;
}

.conditional-box.active {
  background: #d4edda;
  color: #155724;
  border: 3px solid #28a745;
}

.conditional-box.inactive {
  background: #f8d7da;
  color: #721c24;
  border: 3px solid #dc3545;
}

.comparison-table {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid #e0e0e0;
}

.comparison-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 1px solid #e0e0e0;
}

.comparison-row:last-child {
  border-bottom: none;
}

.comparison-row:first-child {
  background: #19547b;
  color: white;
  font-size: 1.1em;
}

.full-syntax, .shorthand-syntax {
  padding: 15px;
  display: flex;
  align-items: center;
}

.full-syntax {
  border-right: 1px solid #e0e0e0;
  background: #f8f9fa;
}

.shorthand-syntax {
  background: #fff3cd;
}

.comparison-row code {
  background: transparent;
  color: inherit;
  padding: 0;
  font-size: 0.95em;
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

