<script setup>
import { ref } from 'vue'
import { lessonData } from '../data/lessons.js'

const fruits = ref([...lessonData.lesson5.fruits])
const users = ref([...lessonData.lesson5.users])
const numbers = ref([...lessonData.lesson5.numbers])
const newFruit = ref('')
const newUserName = ref('')
const newUserEmail = ref('')

// Code examples - menggunakan HTML entities untuk kurung kurawal
const codeExample1 = `  {` + `{ index + 1 }` + `}. {` + `{ item }` + `}`
const codeExample2 = `  <p>{` + `{ user.name }` + `} - {` + `{ user.email }` + `}</p>`
const codeExample3 = `  Index: {` + `{ index }` + `}, Value: {` + `{ item }` + `}`
const codeExample4 = `  {` + `{ key }` + `}: {` + `{ value }` + `}`
const codeExample5 = `  <div v-if="fruit.length > 5">{` + `{ fruit }` + `}</div>`
const codeExample6a = `  <h3>{` + `{ user.name }` + `}</h3>`
const codeExample6b = `  <span v-for="(value, key) in user" :key="key">{` + `{ key }` + `}</span>`
</script>

<template>
  <div class="lesson-container">
    <div class="lesson-header lesson-5">
      <h1>📋 List Rendering (v-for)</h1>
      <p class="lesson-description">
        v-for digunakan untuk menampilkan list data dengan melakukan loop/iterasi. Harus selalu menyertakan :key.
      </p>
    </div>

    <div class="lesson-content">
      <section class="usage-section lesson-5">
        <h2>📖 Cara Penggunaan</h2>
        <div class="usage-content">
          <h3>Kapan Menggunakan v-for?</h3>
          <ul>
            <li>Ketika ingin menampilkan list data (array atau object)</li>
            <li>Untuk membuat daftar dinamis seperti menu, tabel, atau card</li>
            <li>Ketika perlu iterasi/loop untuk menampilkan data</li>
          </ul>
          
          <h3>Cara Menggunakan:</h3>
          <ol>
            <li><strong>Array:</strong> <code>v-for="(item, index) in items" :key="index"</code></li>
            <li><strong>Object:</strong> <code>v-for="(value, key) in object" :key="key"</code></li>
            <li><strong>Number:</strong> <code>v-for="n in 10" :key="n"</code> (1 sampai 10)</li>
            <li><strong>String:</strong> <code>v-for="char in 'Vue'" :key="char"</code></li>
          </ol>

          <h3>Tips Penting:</h3>
          <ul>
            <li>✅ SELALU gunakan <code>:key</code> untuk identifikasi unik setiap item</li>
            <li>✅ Gunakan <code>index</code> sebagai key hanya jika list tidak berubah urutannya</li>
            <li>✅ Untuk array yang berubah, gunakan ID unik sebagai key (jangan index)</li>
            <li>❌ Jangan lupa <code>:key</code> - ini sangat penting untuk performa Vue</li>
          </ul>
        </div>
      </section>

      <section class="example-section lesson-5">
        <h2>1. v-for dengan Array Sederhana</h2>
        <div class="code-example">
          <code>&lt;li v-for="fruit in fruits" :key="fruit"&gt;{{ doubleBrace }} fruit {{ doubleBraceClose }}&lt;/li&gt;</code>
        </div>
        <div class="demo-box">
          <ul class="fruit-list">
            <li v-for="fruit in fruits" :key="fruit" class="fruit-item">
              {{ fruit }}
            </li>
          </ul>
        </div>
      </section>

      <section class="example-section lesson-5">
        <h2>2. v-for dengan Index</h2>
        <div class="code-example">
          <code>&lt;li v-for="(fruit, index) in fruits" :key="index"&gt;</code><br>
          <code v-html="'&nbsp;&nbsp;' + codeExample1.replace(/</g, '&lt;').replace(/>/g, '&gt;')"></code><br>
          <code>&lt;/li&gt;</code>
        </div>
        <div class="demo-box">
          <ul class="fruit-list">
            <li v-for="(fruit, index) in fruits" :key="index" class="fruit-item">
              {{ index + 1 }}. {{ fruit }}
            </li>
          </ul>
        </div>
      </section>

      <section class="example-section lesson-5">
        <h2>3. v-for dengan Object Array</h2>
        <div class="code-example">
          <code>&lt;div v-for="user in users" :key="user.email"&gt;</code><br>
          <code v-html="'&nbsp;&nbsp;' + codeExample2.replace(/</g, '&lt;').replace(/>/g, '&gt;')"></code><br>
          <code>&lt;/div&gt;</code>
        </div>
        <div class="demo-box">
          <div v-for="user in users" :key="user.email" class="user-card">
            <strong>{{ user.name }}</strong>
            <span>{{ user.email }}</span>
          </div>
        </div>
      </section>

      <section class="example-section lesson-5">
        <h2>4. v-for dengan Object</h2>
        <div class="code-example">
          <code>&lt;div v-for="(value, key) in user" :key="key"&gt;</code><br>
          <code v-html="'&nbsp;&nbsp;' + codeExample4.replace(/</g, '&lt;').replace(/>/g, '&gt;')"></code><br>
          <code>&lt;/div&gt;</code>
        </div>
        <div class="demo-box">
          <div v-for="(value, key) in users[0]" :key="key" class="object-item">
            <strong>{{ key }}:</strong> {{ value }}
          </div>
        </div>
      </section>

      <section class="example-section lesson-5">
        <h2>5. v-for dengan Number</h2>
        <div class="code-example">
          <code>&lt;div v-for="n in 10" :key="n"&gt;{{ doubleBrace }} n {{ doubleBraceClose }}&lt;/div&gt;</code>
        </div>
        <div class="demo-box">
          <div v-for="n in numbers" :key="n" class="number-item">
            <span class="index-badge">{{ n }}</span>
            <span class="value">Number {{ n }}</span>
            <span class="square">² = {{ n * n }}</span>
          </div>
        </div>
      </section>

      <section class="example-section lesson-5">
        <h2>6. v-for dengan v-if</h2>
        <div class="code-example">
          <code>&lt;div v-for="fruit in fruits" :key="fruit"&gt;</code><br>
          <code v-html="'&nbsp;&nbsp;' + codeExample5.replace(/</g, '&lt;').replace(/>/g, '&gt;')"></code><br>
          <code>&lt;/div&gt;</code>
        </div>
        <div class="demo-box">
          <p class="info-box">Menampilkan buah dengan panjang nama lebih dari 5 karakter:</p>
          <ul class="fruit-list">
            <li v-for="fruit in fruits" :key="fruit">
              <div v-if="fruit.length > 5" class="filtered-item">
                {{ fruit }}
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section class="example-section lesson-5">
        <h2>7. v-for dengan Nested Loop</h2>
        <div class="code-example">
          <code>&lt;div v-for="user in users" :key="user.id"&gt;</code><br>
          <code v-html="'&nbsp;&nbsp;' + codeExample6a.replace(/</g, '&lt;').replace(/>/g, '&gt;')"></code><br>
          <code v-html="'&nbsp;&nbsp;' + codeExample6b.replace(/</g, '&lt;').replace(/>/g, '&gt;')"></code><br>
          <code>&lt;/div&gt;</code>
        </div>
        <div class="demo-box">
          <div v-for="user in users" :key="user.email" class="nested-card">
            <h3>{{ user.name }}</h3>
            <div class="nested-items">
              <span v-for="(value, key) in user" :key="key" class="nested-tag">
                {{ key }}: {{ value }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section class="example-section lesson-5">
        <h2>8. Menambah dan Menghapus Item</h2>
        <div class="code-example">
          <code>&lt;button @click="fruits.push(newFruit)"&gt;Tambah&lt;/button&gt;</code><br>
          <code>&lt;button @click="fruits = fruits.filter(f => f !== fruit)"&gt;Hapus&lt;/button&gt;</code>
        </div>
        <div class="demo-box">
          <div class="add-form">
            <input 
              v-model="newFruit" 
              @keyup.enter="if(newFruit) { fruits.push(newFruit); newFruit = ''; }"
              placeholder="Masukkan buah baru..."
            />
            <button @click="if(newFruit) { fruits.push(newFruit); newFruit = ''; }" class="lesson-5">
              Tambah Buah
            </button>
          </div>
          <ul class="fruit-list">
            <li v-for="(fruit, index) in fruits" :key="index" class="fruit-item">
              {{ index + 1 }}. {{ fruit }}
            </li>
          </ul>
        </div>
      </section>
    </div>

    <div class="lesson-footer">
      <button @click="$emit('back')" class="back-button">← Kembali ke Menu</button>
    </div>
  </div>
</template>
