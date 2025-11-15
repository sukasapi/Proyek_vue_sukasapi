<script setup>
import { ref } from 'vue'
import { lessons } from './data/lessons.js'
import Lesson1 from './pages/Lesson1.vue'
import Lesson2 from './pages/Lesson2.vue'
import Lesson3 from './pages/Lesson3.vue'
import Lesson4 from './pages/Lesson4.vue'
import Lesson5 from './pages/Lesson5.vue'
import Lesson6 from './pages/Lesson6.vue'
import Lesson7 from './pages/Lesson7.vue'
import Lesson8 from './pages/Lesson8.vue'

const currentView = ref(null)

const lessonComponents = {
  1: Lesson1,
  2: Lesson2,
  3: Lesson3,
  4: Lesson4,
  5: Lesson5,
  6: Lesson6,
  7: Lesson7,
  8: Lesson8
}

function navigateToLesson(lessonId) {
  currentView.value = lessonId
}

function backToMenu() {
  currentView.value = null
}
</script>

<template>
  <div v-if="currentView === null" class="home-container">
    <div class="header">
      <h1>📚 Tutorial Vue.js Template Syntax</h1>
      <p class="subtitle">Pelajari dasar-dasar template syntax Vue.js dengan mudah dan interaktif</p>
    </div>

    <div class="lessons-grid">
      <div
        v-for="lesson in lessons"
        :key="lesson.id"
        class="lesson-card"
        @click="navigateToLesson(lesson.id)"
      >
        <div class="lesson-icon">{{ lesson.icon }}</div>
        <h2>{{ lesson.title }}</h2>
        <p>{{ lesson.description }}</p>
        <div class="lesson-number">Lesson {{ lesson.id }}</div>
      </div>
    </div>

    <div class="footer">
      <p>Pilih salah satu lesson di atas untuk memulai belajar! 🚀</p>
    </div>
  </div>

  <component
    v-else
    :is="lessonComponents[currentView]" 
    @back="backToMenu"
  />
</template>
