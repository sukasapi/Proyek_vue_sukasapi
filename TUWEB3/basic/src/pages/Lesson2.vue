<script setup>
import { ref } from 'vue'
import { lessonData } from '../data/lessons.js'

const imageUrl = ref(lessonData.lesson2.imageUrl)
const linkUrl = ref(lessonData.lesson2.linkUrl)
const isActive = ref(lessonData.lesson2.isActive)
const placeholder = ref(lessonData.lesson2.placeholder)
const inputValue = ref('')
</script>

<template>
  <div class="lesson-container">
    <div class="lesson-header lesson-2">
      <h1>🔗 Attribute Binding (v-bind)</h1>
      <p class="lesson-description">
        v-bind digunakan untuk mengikat atribut HTML dengan data JavaScript. Bisa disingkat dengan : (colon).
      </p>
    </div>

    <div class="lesson-content">
      <section class="usage-section lesson-2">
        <h2>📖 Cara Penggunaan</h2>
        <div class="usage-content">
          <h3>Kapan Menggunakan v-bind?</h3>
          <ul>
            <li>Ketika ingin mengikat atribut HTML dengan data JavaScript</li>
            <li>Untuk atribut dinamis seperti src, href, class, style, disabled, dll</li>
            <li>Ketika nilai atribut perlu berubah berdasarkan data</li>
          </ul>
          
          <h3>Cara Menggunakan:</h3>
          <ol>
            <li><strong>Full syntax:</strong> Gunakan <code>v-bind:atribut="data"</code></li>
            <li><strong>Shorthand (disarankan):</strong> Gunakan <code>:atribut="data"</code> (hanya satu colon)</li>
            <li><strong>Contoh:</strong> <code>&lt;img :src="imageUrl" :alt="description" /&gt;</code></li>
          </ol>

          <h3>Tips Penting:</h3>
          <ul>
            <li>✅ Gunakan shorthand <code>:</code> untuk kode yang lebih ringkas</li>
            <li>✅ Bisa binding ke class, style, atau atribut HTML apapun</li>
            <li>✅ Untuk boolean attributes (disabled, readonly), gunakan v-bind atau :</li>
            <li>❌ Jangan lupa gunakan v-bind untuk atribut yang dinamis</li>
          </ul>
        </div>
      </section>

      <section class="example-section lesson-2">
        <h2>1. Binding Atribut Sederhana</h2>
        <div class="code-example">
          <code>&lt;img v-bind:src="imageUrl" v-bind:alt="'Foto'" /&gt;</code><br>
          <code>&lt;!-- Shorthand: --&gt;</code><br>
          <code>&lt;img :src="imageUrl" :alt="'Foto'" /&gt;</code>
        </div>
        <div class="demo-box">
          <img :src="`https://via.placeholder.com/200?text=${inputValue || 'Vue'}`" :alt="`Foto ${inputValue || 'Vue'}`" />
          <input v-model="inputValue" :placeholder="placeholder" />
        </div>
      </section>

      <section class="example-section lesson-2">
        <h2>2. Binding href pada Link</h2>
        <div class="code-example">
          <code>&lt;a v-bind:href="linkUrl" target="_blank"&gt;Vue.js&lt;/a&gt;</code><br>
          <code>&lt;!-- Shorthand: --&gt;</code><br>
          <code>&lt;a :href="linkUrl" target="_blank"&gt;Vue.js&lt;/a&gt;</code>
        </div>
        <div class="demo-box">
          <a :href="linkUrl" target="_blank" class="demo-link">🌐 Kunjungi Vue.js</a>
          <p>URL: {{ linkUrl }}</p>
        </div>
      </section>

      <section class="example-section lesson-2">
        <h2>3. Binding Class Dinamis</h2>
        <div class="code-example">
          <code>&lt;div v-bind:class="{ active: isActive }"&gt;...&lt;/div&gt;</code><br>
          <code>&lt;!-- Shorthand: --&gt;</code><br>
          <code>&lt;div :class="{ active: isActive }"&gt;...&lt;/div&gt;</code>
        </div>
        <div class="demo-box">
          <button @click="isActive = !isActive" class="lesson-2">
            Toggle Class ({{ isActive ? 'Active' : 'Inactive' }})
          </button>
          <div :class="{ active: isActive, inactive: !isActive }" class="class-demo">
            Status: {{ isActive ? 'Active' : 'Inactive' }}
          </div>
        </div>
      </section>

      <section class="example-section lesson-2">
        <h2>4. Binding Multiple Classes</h2>
        <div class="code-example">
          <code>&lt;div :class="['box', { active: isActive }, 'rounded']"&gt;...&lt;/div&gt;</code>
        </div>
        <div class="demo-box">
          <div :class="['box-demo', { active: isActive }, 'rounded']">
            Multiple Classes
          </div>
          <button @click="isActive = !isActive">Toggle Active</button>
        </div>
      </section>

      <section class="example-section lesson-2">
        <h2>5. Binding Inline Style</h2>
        <div class="code-example">
          <code>&lt;div :style="{ color: isActive ? 'green' : 'red' }"&gt;...&lt;/div&gt;</code>
        </div>
        <div class="demo-box">
          <div :style="{ 
            color: isActive ? 'green' : 'red', 
            fontSize: '20px',
            fontWeight: 'bold',
            padding: '15px',
            backgroundColor: isActive ? '#d4edda' : '#f8d7da'
          }">
            Style Dinamis
          </div>
          <button @click="isActive = !isActive">Toggle Style</button>
        </div>
      </section>

      <section class="example-section lesson-2">
        <h2>6. Binding Disabled Attribute</h2>
        <div class="code-example">
          <code>&lt;button :disabled="!isActive"&gt;Submit&lt;/button&gt;</code>
        </div>
        <div class="demo-box">
          <label>
            <input type="checkbox" v-model="isActive" />
            Enable Button
          </label>
          <button :disabled="!isActive" class="submit-btn">
            Submit Form
          </button>
        </div>
      </section>
    </div>

    <div class="lesson-footer">
      <button @click="$emit('back')" class="back-button">← Kembali ke Menu</button>
    </div>
  </div>
</template>

