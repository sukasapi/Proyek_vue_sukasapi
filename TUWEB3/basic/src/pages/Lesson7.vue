<script setup>
import { ref } from 'vue'
import { lessonData } from '../data/lessons.js'

const isActive = ref(lessonData.lesson7.isActive)
const fontSize = ref(lessonData.lesson7.fontSize)
const color = ref(lessonData.lesson7.color)
const count = ref(lessonData.lesson7.count)
const theme = ref(lessonData.lesson7.theme)
</script>

<template>
  <div class="lesson-container">
    <div class="lesson-header">
      <h1>🎨 Dynamic Class & Style</h1>
      <p class="lesson-description">
        Belajar cara mengubah class CSS dan inline style secara dinamis berdasarkan kondisi atau data.
      </p>
    </div>

    <div class="lesson-content">
      <section class="usage-section">
        <h2>📖 Cara Penggunaan</h2>
        <div class="usage-content">
          <h3>Kapan Menggunakan Dynamic Class & Style?</h3>
          <ul>
            <li>Ketika class atau style CSS perlu berubah berdasarkan kondisi/data</li>
            <li>Untuk membuat UI yang responsif terhadap state aplikasi</li>
            <li>Ketika ingin memberikan feedback visual kepada user</li>
          </ul>
          
          <h3>Cara Menggunakan Class:</h3>
          <ol>
            <li><strong>Object syntax:</strong> <code>:class="{ active: isActive }"</code></li>
            <li><strong>Array syntax:</strong> <code>:class="['base-class', { active: isActive }]"</code></li>
            <li><strong>Computed:</strong> <code>:class="classObject"</code> (lebih kompleks)</li>
          </ol>

          <h3>Cara Menggunakan Style:</h3>
          <ol>
            <li><strong>Object syntax:</strong> <code>:style="{ color: textColor, fontSize: size + 'px' }"</code></li>
            <li><strong>Array syntax:</strong> <code>:style="[baseStyle, dynamicStyle]"</code></li>
          </ol>

          <h3>Tips Penting:</h3>
          <ul>
            <li>✅ Gunakan object syntax untuk conditional class yang sederhana</li>
            <li>✅ Gunakan computed property untuk logic yang kompleks</li>
            <li>✅ Untuk style, gunakan camelCase (fontSize, bukan font-size)</li>
            <li>✅ Bisa menggabungkan static class dengan dynamic class</li>
            <li>❌ Jangan lupa unit untuk style (px, %, em, dll)</li>
          </ul>
        </div>
      </section>

      <section class="example-section">
        <h2>1. Dynamic Class dengan Object Syntax</h2>
        <div class="code-example">
          <code>&lt;div :class="{ active: isActive, disabled: !isActive }"&gt;...&lt;/div&gt;</code>
        </div>
        <div class="demo-box">
          <button @click="isActive = !isActive">
            Toggle Class ({{ isActive ? 'Active' : 'Inactive' }})
          </button>
          <div :class="{ active: isActive, inactive: !isActive }" class="dynamic-class-box">
            Status: {{ isActive ? 'Active' : 'Inactive' }}
          </div>
        </div>
      </section>

      <section class="example-section">
        <h2>2. Dynamic Class dengan Array Syntax</h2>
        <div class="code-example">
          <code>&lt;div :class="['base-class', { active: isActive }, 'rounded']"&gt;...&lt;/div&gt;</code>
        </div>
        <div class="demo-box">
          <div :class="['base-class', { active: isActive }, { highlight: count > 5 }, 'rounded']">
            Multiple Classes
            <p>Count: {{ count }}</p>
          </div>
          <button @click="isActive = !isActive">Toggle Active</button>
          <button @click="count++">Tambah Count</button>
        </div>
      </section>

      <section class="example-section">
        <h2>3. Dynamic Class dengan Computed</h2>
        <div class="code-example">
          <code>const classObject = computed(() => ({</code><br>
          <code>&nbsp;&nbsp;active: isActive,</code><br>
          <code>&nbsp;&nbsp;large: fontSize > 20</code><br>
          <code>}))</code>
        </div>
        <div class="demo-box">
          <div :class="{ active: isActive, large: fontSize > 20, small: fontSize < 16 }" class="size-demo">
            Font Size: {{ fontSize }}px
          </div>
          <input v-model.number="fontSize" type="number" min="12" max="30" />
          <button @click="isActive = !isActive">Toggle Active</button>
        </div>
      </section>

      <section class="example-section">
        <h2>4. Inline Style dengan Object</h2>
        <div class="code-example">
          <code>&lt;div :style="{ color: color, fontSize: fontSize + 'px' }"&gt;...&lt;/div&gt;</code>
        </div>
        <div class="demo-box">
          <div 
            :style="{ 
              color: color, 
              fontSize: fontSize + 'px',
              fontWeight: isActive ? 'bold' : 'normal',
              padding: '20px',
              backgroundColor: '#f8f9fa',
              border: `3px solid ${color}`
            }" 
            class="style-demo"
          >
            Dynamic Inline Style
          </div>
          <label>
            Pilih Warna:
            <select v-model="color">
              <option value="blue">Blue</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="purple">Purple</option>
            </select>
          </label>
          <label>
            Font Size: {{ fontSize }}px
            <input v-model.number="fontSize" type="range" min="12" max="30" />
          </label>
        </div>
      </section>

      <section class="example-section">
        <h2>5. Inline Style dengan Array</h2>
        <div class="code-example">
          <code>&lt;div :style="[baseStyle, dynamicStyle]"&gt;...&lt;/div&gt;</code>
        </div>
        <div class="demo-box">
          <div 
            :style="[
              { padding: '20px', borderRadius: '8px' },
              { backgroundColor: theme === 'light' ? '#fff' : '#333' },
              { color: theme === 'light' ? '#333' : '#fff' },
              { fontSize: fontSize + 'px' }
            ]"
            class="array-style-demo"
          >
            Array Style Binding
            <p>Theme: {{ theme }}</p>
          </div>
          <button @click="theme = theme === 'light' ? 'dark' : 'light'">
            Toggle Theme
          </button>
        </div>
      </section>

      <section class="example-section">
        <h2>6. Conditional Style dengan Ternary</h2>
        <div class="code-example">
          <code>&lt;div :style="{ color: count > 10 ? 'green' : 'red' }"&gt;...&lt;/div&gt;</code>
        </div>
        <div class="demo-box">
          <div 
            :style="{ 
              color: count > 10 ? 'green' : count > 5 ? 'orange' : 'red',
              fontSize: (count + 16) + 'px',
              fontWeight: 'bold',
              padding: '20px',
              backgroundColor: count > 10 ? '#d4edda' : count > 5 ? '#fff3cd' : '#f8d7da'
            }"
            class="conditional-style-demo"
          >
            Count: {{ count }}
          </div>
          <button @click="count++">Tambah Count</button>
          <button @click="count = 0">Reset</button>
        </div>
      </section>

      <section class="example-section">
        <h2>7. Binding Class dan Style Bersamaan</h2>
        <div class="code-example">
          <code>&lt;div :class="classObject" :style="styleObject"&gt;...&lt;/div&gt;</code>
        </div>
        <div class="demo-box">
          <div 
            :class="{ active: isActive, rounded: true, shadow: count > 5 }"
            :style="{ 
              color: color,
              fontSize: fontSize + 'px',
              transform: `rotate(${count * 5}deg)`
            }"
            class="combined-demo"
          >
            Class + Style Binding
          </div>
          <div class="controls">
            <button @click="isActive = !isActive">Toggle Active</button>
            <button @click="count++">Rotate</button>
            <label>
              Color:
              <select v-model="color">
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
              </select>
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
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
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
  background: linear-gradient(135deg, #ffecd215 0%, #fcb69f15 100%);
  padding: 30px;
  border-radius: 12px;
  margin-bottom: 30px;
  border: 2px solid #fcb69f;
}

.usage-section h2 {
  color: #fcb69f;
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
  border-bottom: 2px solid #fcb69f;
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
  color: #fcb69f;
}

.usage-content code {
  background: #f8f9fa;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
  color: #fcb69f;
  font-weight: bold;
}

.example-section {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 8px;
  margin-bottom: 25px;
  border-left: 5px solid #fcb69f;
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

.dynamic-class-box {
  padding: 20px;
  margin: 15px 0;
  text-align: center;
  font-weight: bold;
  font-size: 1.2em;
  border-radius: 8px;
  transition: all 0.3s;
}

.active {
  background: #d4edda;
  color: #155724;
  border: 3px solid #28a745;
}

.inactive {
  background: #f8d7da;
  color: #721c24;
  border: 3px solid #dc3545;
}

.base-class {
  padding: 20px;
  margin: 15px 0;
  background: #e9ecef;
  text-align: center;
  font-weight: bold;
}

.highlight {
  background: #fff3cd !important;
  border: 3px solid #ffc107;
}

.rounded {
  border-radius: 12px;
}

.size-demo {
  padding: 20px;
  margin: 15px 0;
  background: #f8f9fa;
  text-align: center;
  border: 2px solid #ddd;
  border-radius: 8px;
}

.size-demo.large {
  font-size: 24px !important;
  background: #fff3cd;
}

.size-demo.small {
  font-size: 14px !important;
  background: #d1ecf1;
}

.style-demo {
  margin: 15px 0;
  text-align: center;
  border-radius: 8px;
  transition: all 0.3s;
}

.array-style-demo {
  margin: 15px 0;
  text-align: center;
  transition: all 0.3s;
}

.conditional-style-demo {
  margin: 15px 0;
  text-align: center;
  border-radius: 8px;
  transition: all 0.3s;
}

.combined-demo {
  padding: 30px;
  margin: 15px 0;
  text-align: center;
  transition: all 0.3s;
  border-radius: 8px;
}

.shadow {
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

button {
  background: #fcb69f;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  margin: 10px 5px 10px 0;
  transition: all 0.3s;
}

button:hover {
  background: #fb9b7a;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

input[type="number"], input[type="range"], select {
  padding: 8px;
  margin: 10px;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

input[type="range"] {
  width: 200px;
}

label {
  display: block;
  margin: 10px 0;
  font-weight: bold;
}

.controls {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
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

