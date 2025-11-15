<script setup>
import { ref } from 'vue'
import { lessonData } from '../data/lessons.js'

const clickCount = ref(lessonData.lesson3.clickCount)
const keyPressed = ref(lessonData.lesson3.keyPressed)
const inputValue = ref(lessonData.lesson3.inputValue)
const message = ref('')
</script>

<template>
  <div class="lesson-container">
    <div class="lesson-header lesson-3">
      <h1>🖱️ Event Handling (v-on)</h1>
      <p class="lesson-description">
        v-on digunakan untuk menangani event seperti click, keyup, input, dll. Bisa disingkat dengan @ (at sign).
      </p>
    </div>

    <div class="lesson-content">
      <section class="usage-section lesson-3">
        <h2>📖 Cara Penggunaan</h2>
        <div class="usage-content">
          <h3>Kapan Menggunakan v-on?</h3>
          <ul>
            <li>Ketika ingin menangani event seperti click, keyup, submit, dll</li>
            <li>Untuk membuat aplikasi yang interaktif dengan user</li>
            <li>Ketika perlu menjalankan fungsi saat event tertentu terjadi</li>
          </ul>
          
          <h3>Cara Menggunakan:</h3>
          <ol>
            <li><strong>Full syntax:</strong> Gunakan <code>v-on:event="handler"</code></li>
            <li><strong>Shorthand (disarankan):</strong> Gunakan <code>@event="handler"</code></li>
            <li><strong>Contoh:</strong> <code>&lt;button @click="increment"&gt;Click&lt;/button&gt;</code></li>
            <li><strong>Inline handler:</strong> Bisa langsung tulis ekspresi seperti <code>@click="count++"</code></li>
          </ol>

          <h3>Tips Penting:</h3>
          <ul>
            <li>✅ Gunakan shorthand <code>@</code> untuk kode yang lebih ringkas</li>
            <li>✅ Gunakan event modifiers seperti <code>.prevent</code>, <code>.stop</code>, <code>.once</code></li>
            <li>✅ Untuk keyboard events, gunakan modifiers seperti <code>.enter</code>, <code>.esc</code></li>
            <li>❌ Jangan lupa tanda kurung jika memanggil method dengan parameter</li>
          </ul>
        </div>
      </section>

      <section class="example-section lesson-3">
        <h2>1. Click Event</h2>
        <div class="code-example">
          <code>&lt;button v-on:click="clickCount++"&gt;Klik Saya&lt;/button&gt;</code><br>
          <code>&lt;!-- Shorthand: --&gt;</code><br>
          <code>&lt;button @click="clickCount++"&gt;Klik Saya&lt;/button&gt;</code>
        </div>
        <div class="demo-box">
          <p>Count: <strong>{{ clickCount }}</strong></p>
          <button @click="clickCount++" class="lesson-3">Tambah (+1)</button>
          <button @click="clickCount--" class="lesson-3">Kurangi (-1)</button>
          <button @click="clickCount = 0" class="lesson-3">Reset</button>
        </div>
      </section>

      <section class="example-section lesson-3">
        <h2>2. Method Handler</h2>
        <div class="code-example">
          <code>&lt;button @click="handleClick"&gt;Klik&lt;/button&gt;</code>
        </div>
        <div class="demo-box">
          <p>Pesan: <strong>{{ message }}</strong></p>
          <button @click="message = 'Tombol diklik!'" class="lesson-3">Klik untuk Pesan</button>
          <button @click="message = ''" class="lesson-3">Hapus Pesan</button>
        </div>
      </section>

      <section class="example-section lesson-3">
        <h2>3. Keyboard Events</h2>
        <div class="code-example">
          <code>&lt;input @keyup="keyPressed = $event.key" /&gt;</code><br>
          <code>&lt;input @keyup.enter="alert('Enter ditekan!')" /&gt;</code><br>
          <code>&lt;input @keyup.esc="reset" /&gt;</code>
        </div>
        <div class="demo-box">
          <input 
            v-model="inputValue"
            @keyup="keyPressed = $event.key"
            placeholder="Tekan tombol keyboard..."
            class="keyboard-input"
          />
          <p>Tombol Terakhir: <strong>{{ keyPressed || '-' }}</strong></p>
          <input 
            @keyup.enter="message = 'Enter ditekan!'"
            placeholder="Tekan Enter untuk pesan"
            class="keyboard-input"
          />
          <p v-if="message">{{ message }}</p>
        </div>
      </section>

      <section class="example-section lesson-3">
        <h2>4. Event Modifiers</h2>
        <div class="code-example">
          <code>&lt;form @submit.prevent="handleSubmit"&gt;...&lt;/form&gt;</code><br>
          <code>&lt;button @click.stop="handleClick"&gt;...&lt;/button&gt;</code><br>
          <code>&lt;button @click.once="handleOnce"&gt;...&lt;/button&gt;</code>
        </div>
        <div class="demo-box">
          <form @submit.prevent="message = 'Form submitted!'" class="demo-form">
            <input v-model="inputValue" placeholder="Masukkan nama" />
            <button type="submit">Submit (prevent default)</button>
          </form>
          <p v-if="message">{{ message }}</p>
          <div @click="message = 'Parent diklik'" class="parent-box">
            Parent Box
            <button @click.stop="message = 'Child diklik (stop propagation)'" class="child-btn">
              Child Button
            </button>
          </div>
        </div>
      </section>

      <section class="example-section lesson-3">
        <h2>5. Mouse Events</h2>
        <div class="code-example">
          <code>&lt;div @mouseenter="message = 'Mouse masuk'"&gt;...&lt;/div&gt;</code><br>
          <code>&lt;div @mouseleave="message = 'Mouse keluar'"&gt;...&lt;/div&gt;</code><br>
          <code>&lt;div @mousemove="updatePosition"&gt;...&lt;/div&gt;</code>
        </div>
        <div class="demo-box">
          <p>Status: <strong>{{ message || 'Arahkan mouse ke kotak' }}</strong></p>
          <div 
            @mouseenter="message = 'Mouse masuk ke kotak'"
            @mouseleave="message = 'Mouse keluar dari kotak'"
            class="mouse-box"
          >
            Hover Me!
          </div>
        </div>
      </section>

      <section class="example-section lesson-3">
        <h2>6. Inline Handler dengan Parameter</h2>
        <div class="code-example">
          <code>&lt;button @click="sayHello('Budi')"&gt;Sapa Budi&lt;/button&gt;</code><br>
          <code>&lt;button @click="count = count + 5"&gt;Tambah 5&lt;/button&gt;</code>
        </div>
        <div class="demo-box">
          <button @click="message = 'Halo Budi!'">Sapa Budi</button>
          <button @click="message = 'Halo Ahmad!'">Sapa Ahmad</button>
          <button @click="clickCount = clickCount + 5">Tambah 5</button>
          <button @click="clickCount = clickCount + 10">Tambah 10</button>
          <p v-if="message">{{ message }}</p>
          <p>Count: <strong>{{ clickCount }}</strong></p>
        </div>
      </section>
    </div>

    <div class="lesson-footer">
      <button @click="$emit('back')" class="back-button">← Kembali ke Menu</button>
    </div>
  </div>
</template>

