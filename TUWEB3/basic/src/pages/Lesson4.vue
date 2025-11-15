<script setup>
import { ref } from 'vue'
import { lessonData } from '../data/lessons.js'

const isVisible = ref(lessonData.lesson4.isVisible)
const isLoggedIn = ref(lessonData.lesson4.isLoggedIn)
const score = ref(lessonData.lesson4.score)
const doubleBrace = '{' + '{'
const doubleBraceClose = '}' + '}'
</script>

<template>
  <div class="lesson-container">
    <div class="lesson-header lesson-4">
      <h1>🔀 Conditional Rendering (v-if, v-show)</h1>
      <p class="lesson-description">
        v-if, v-else-if, v-else dan v-show digunakan untuk menampilkan elemen berdasarkan kondisi tertentu.
      </p>
    </div>

    <div class="lesson-content">
      <section class="usage-section lesson-4">
        <h2>📖 Cara Penggunaan</h2>
        <div class="usage-content">
          <h3>Kapan Menggunakan v-if, v-else-if, v-else?</h3>
          <ul>
            <li>Ketika ingin menampilkan/menyembunyikan elemen berdasarkan kondisi</li>
            <li>Untuk conditional rendering yang kompleks</li>
            <li>Ketika elemen tidak perlu ada di DOM jika kondisi false (v-if)</li>
          </ul>
          
          <h3>Cara Menggunakan:</h3>
          <ol>
            <li><strong>v-if:</strong> Menampilkan elemen jika kondisi true</li>
            <li><strong>v-else-if:</strong> Menampilkan jika kondisi sebelumnya false dan kondisi ini true</li>
            <li><strong>v-else:</strong> Menampilkan jika semua kondisi sebelumnya false</li>
            <li><strong>v-show:</strong> Selalu render di DOM, hanya toggle CSS display</li>
          </ol>

          <h3>Tips Penting:</h3>
          <ul>
            <li>✅ Gunakan v-if untuk kondisi yang jarang berubah (lebih efisien)</li>
            <li>✅ Gunakan v-show untuk toggle yang sering berubah (lebih cepat)</li>
            <li>✅ v-if menghapus elemen dari DOM, v-show hanya menyembunyikan dengan CSS</li>
            <li>❌ Jangan gunakan v-if dan v-else-if di elemen yang berbeda (harus bersaudara)</li>
          </ul>
        </div>
      </section>

      <section class="example-section lesson-4">
        <h2>1. v-if Sederhana</h2>
        <div class="code-example">
          <code>&lt;p v-if="isVisible"&gt;Pesan ini hanya muncul jika isVisible = true&lt;/p&gt;</code>
        </div>
        <div class="demo-box">
          <button @click="isVisible = !isVisible" class="lesson-4">
            Toggle Visibility ({{ isVisible ? 'Hide' : 'Show' }})
          </button>
          <p v-if="isVisible" class="conditional-box active">
            ✓ Pesan ini hanya muncul jika isVisible = true
          </p>
        </div>
      </section>

      <section class="example-section lesson-4">
        <h2>2. v-if dengan v-else</h2>
        <div class="code-example">
          <code>&lt;p v-if="isLoggedIn"&gt;Selamat datang!&lt;/p&gt;</code><br>
          <code>&lt;p v-else&gt;Silakan login&lt;/p&gt;</code>
        </div>
        <div class="demo-box">
          <button @click="isLoggedIn = !isLoggedIn" class="lesson-4">
            Toggle Login Status
          </button>
          <p v-if="isLoggedIn" class="conditional-box active">
            ✓ Selamat datang! Anda sudah login
          </p>
          <p v-else class="conditional-box inactive">
            ✗ Silakan login terlebih dahulu
          </p>
        </div>
      </section>

      <section class="example-section lesson-4">
        <h2>3. v-if, v-else-if, v-else</h2>
        <div class="code-example">
          <code>&lt;p v-if="score >= 90"&gt;Excellent!&lt;/p&gt;</code><br>
          <code>&lt;p v-else-if="score >= 70"&gt;Good!&lt;/p&gt;</code><br>
          <code>&lt;p v-else-if="score >= 50"&gt;Passed&lt;/p&gt;</code><br>
          <code>&lt;p v-else&gt;Failed&lt;/p&gt;</code>
        </div>
        <div class="demo-box">
          <label>
            Score: 
            <input type="number" v-model="score" min="0" max="100" />
          </label>
          <div v-if="score >= 90" class="conditional-box success">
            🎉 Excellent! ({{ score }})
          </div>
          <div v-else-if="score >= 70" class="conditional-box info">
            👍 Good! ({{ score }})
          </div>
          <div v-else-if="score >= 50" class="conditional-box warning">
            ✅ Passed ({{ score }})
          </div>
          <div v-else class="conditional-box error">
            ❌ Failed ({{ score }})
          </div>
        </div>
      </section>

      <section class="example-section lesson-4">
        <h2>4. v-show</h2>
        <div class="code-example">
          <code>&lt;p v-show="isVisible"&gt;Pesan ini selalu ada di DOM, hanya display yang berubah&lt;/p&gt;</code>
        </div>
        <div class="demo-box">
          <button @click="isVisible = !isVisible" class="lesson-4">
            Toggle Show ({{ isVisible ? 'Hide' : 'Show' }})
          </button>
          <p v-show="isVisible" class="conditional-box active">
            ✓ Pesan ini selalu ada di DOM, hanya display yang berubah
          </p>
        </div>
      </section>

      <section class="example-section lesson-4">
        <h2>5. Ternary Operator</h2>
        <div class="code-example">
          <code>&lt;p&gt;{{ doubleBrace }} isLoggedIn ? 'Anda sudah login' : 'Silakan login' {{ doubleBraceClose }}&lt;/p&gt;</code>
        </div>
        <div class="demo-box">
          <button @click="isLoggedIn = !isLoggedIn" class="lesson-4">
            Toggle Login Status
          </button>
          <p class="ternary-result">
            Status: <strong>{{ isLoggedIn ? 'Anda sudah login ✓' : 'Silakan login ✗' }}</strong>
          </p>
          <p class="ternary-result">
            Count: {{ score }}, Status: <strong>{{ score > 50 ? 'Lulus' : 'Tidak Lulus' }}</strong>
          </p>
        </div>
      </section>
    </div>

    <div class="lesson-footer">
      <button @click="$emit('back')" class="back-button">← Kembali ke Menu</button>
    </div>
  </div>
</template>
