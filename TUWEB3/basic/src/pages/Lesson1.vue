<script setup>
import { ref } from 'vue'
import { lessonData } from '../data/lessons.js'

const message = ref(lessonData.lesson1.message)
const name = ref(lessonData.lesson1.name)
const age = ref(lessonData.lesson1.age)
const count = ref(lessonData.lesson1.count)

// Helper untuk menampilkan {{ }} dalam code example
const doubleBrace = '{' + '{'
const doubleBraceClose = '}' + '}'
</script>

<template>
  <div class="lesson-container">
    <div class="lesson-header lesson-1">
      <h1>📝 Interpolasi (Text Binding)</h1>
      <p class="lesson-description">
        Interpolasi adalah cara menampilkan data dari JavaScript ke dalam template menggunakan double curly braces {{ doubleBrace }} {{ doubleBraceClose }}.
      </p>
    </div>

    <div class="lesson-content">
      <section class="usage-section lesson-1">
        <h2>📖 Cara Penggunaan</h2>
        <div class="usage-content">
          <h3>Kapan Menggunakan Interpolasi?</h3>
          <ul>
            <li>Ketika ingin menampilkan data dari JavaScript ke dalam template</li>
            <li>Untuk menampilkan nilai variabel, hasil ekspresi, atau hasil method</li>
            <li>Sebagai cara paling dasar untuk binding data di Vue</li>
          </ul>
          
          <h3>Cara Menggunakan:</h3>
          <ol>
            <li><strong>Definisikan data di script:</strong> Buat variabel atau data yang ingin ditampilkan</li>
            <li><strong>Gunakan double curly braces:</strong> Tulis {{ doubleBrace }} namaVariabel {{ doubleBraceClose }} di template</li>
            <li><strong>Bisa juga dengan ekspresi:</strong> Gunakan ekspresi JavaScript seperti {{ doubleBrace }} count + 1 {{ doubleBraceClose }}</li>
          </ol>

          <h3>Tips Penting:</h3>
          <ul>
            <li>✅ Interpolasi hanya bekerja di dalam elemen HTML atau sebagai teks</li>
            <li>✅ Bisa menggunakan ekspresi JavaScript sederhana di dalam {{ doubleBrace }} {{ doubleBraceClose }}</li>
            <li>❌ Tidak bisa menggunakan statement JavaScript (if, for, dll) di dalam interpolasi</li>
            <li>❌ Tidak bisa digunakan untuk atribut HTML (gunakan v-bind untuk itu)</li>
          </ul>
        </div>
      </section>

      <section class="example-section lesson-1">
        <h2>1. Interpolasi Sederhana</h2>
        <div class="code-example">
          <code>&lt;p&gt;{{ doubleBrace }} message {{ doubleBraceClose }}&lt;/p&gt;</code>
        </div>
        <div class="demo-box">
          <p><strong>Pesan:</strong> {{ message }}</p>
        </div>
      </section>

      <section class="example-section lesson-1">
        <h2>2. Interpolasi dengan Variabel</h2>
        <div class="code-example">
          <code>&lt;p&gt;Nama: {{ doubleBrace }} name {{ doubleBraceClose }}&lt;/p&gt;</code><br>
          <code>&lt;p&gt;Umur: {{ doubleBrace }} age {{ doubleBraceClose }}&lt;/p&gt;</code>
        </div>
        <div class="demo-box">
          <p><strong>Nama:</strong> {{ name }}</p>
          <p><strong>Umur:</strong> {{ age }} tahun</p>
        </div>
      </section>

      <section class="example-section lesson-1">
        <h2>3. Interpolasi dengan Ekspresi Matematika</h2>
        <div class="code-example">
          <code>&lt;p&gt;Count + 5 = {{ doubleBrace }} count + 5 {{ doubleBraceClose }}&lt;/p&gt;</code><br>
          <code>&lt;p&gt;Count * 2 = {{ doubleBrace }} count * 2 {{ doubleBraceClose }}&lt;/p&gt;</code>
        </div>
        <div class="demo-box">
          <button @click="count++" class="lesson-1">Tambah Count ({{ count }})</button>
          <p><strong>Count + 5:</strong> {{ count + 5 }}</p>
          <p><strong>Count * 2:</strong> {{ count * 2 }}</p>
        </div>
      </section>

      <section class="example-section lesson-1">
        <h2>4. Interpolasi dengan Method</h2>
        <div class="code-example">
          <code>&lt;p&gt;{{ doubleBrace }} name.toUpperCase() {{ doubleBraceClose }}&lt;/p&gt;</code><br>
          <code>&lt;p&gt;{{ doubleBrace }} name.toLowerCase() {{ doubleBraceClose }}&lt;/p&gt;</code>
        </div>
        <div class="demo-box">
          <p><strong>Nama Uppercase:</strong> {{ name.toUpperCase() }}</p>
          <p><strong>Nama Lowercase:</strong> {{ name.toLowerCase() }}</p>
        </div>
      </section>

      <section class="example-section lesson-1">
        <h2>5. Interpolasi dengan Template Literal</h2>
        <div class="code-example">
          <code>&lt;p&gt;{{ doubleBrace }} `Halo, saya ${name}, umur ${age} tahun` {{ doubleBraceClose }}&lt;/p&gt;</code>
        </div>
        <div class="demo-box">
          <p><strong>Pesan Lengkap:</strong> {{ `Halo, saya ${name}, umur ${age} tahun` }}</p>
        </div>
      </section>
    </div>

    <div class="lesson-footer">
      <button @click="$emit('back')" class="back-button">← Kembali ke Menu</button>
    </div>
  </div>
</template>

