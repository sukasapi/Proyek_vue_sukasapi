// Data untuk semua pembelajaran Template Syntax Vue 3

export const lessons = [
  {
    id: 1,
    title: 'Interpolasi (Text Binding)',
    description: 'Belajar cara menampilkan data menggunakan {{ }}',
    icon: '📝'
  },
  {
    id: 2,
    title: 'Attribute Binding (v-bind)',
    description: 'Belajar cara mengikat atribut HTML dengan data',
    icon: '🔗'
  },
  {
    id: 3,
    title: 'Event Handling (v-on)',
    description: 'Belajar cara menangani event seperti click, keyup, dll',
    icon: '🖱️'
  },
  {
    id: 4,
    title: 'Conditional Rendering (v-if, v-show)',
    description: 'Belajar cara menampilkan elemen berdasarkan kondisi',
    icon: '🔀'
  },
  {
    id: 5,
    title: 'List Rendering (v-for)',
    description: 'Belajar cara menampilkan list data dengan loop',
    icon: '📋'
  },
  {
    id: 6,
    title: 'Two-Way Binding (v-model)',
    description: 'Belajar cara binding dua arah untuk form input',
    icon: '↔️'
  },
  {
    id: 7,
    title: 'Dynamic Class & Style',
    description: 'Belajar cara mengubah class dan style secara dinamis',
    icon: '🎨'
  },
  {
    id: 8,
    title: 'Shorthand Syntax',
    description: 'Belajar singkatan syntax seperti : dan @',
    icon: '⚡'
  }
]

// Data untuk contoh-contoh pembelajaran
export const lessonData = {
  lesson1: {
    message: 'Halo dari Vue!',
    name: 'Budi',
    age: 25,
    count: 0
  },
  lesson2: {
    imageUrl: 'https://via.placeholder.com/150',
    linkUrl: 'https://vuejs.org',
    isActive: false,
    placeholder: 'Masukkan teks...'
  },
  lesson3: {
    clickCount: 0,
    keyPressed: '',
    inputValue: ''
  },
  lesson4: {
    isVisible: true,
    score: 0,
    isLoggedIn: false,
    userRole: 'guest'
  },
  lesson5: {
    fruits: ['Apel', 'Jeruk', 'Pisang', 'Mangga', 'Anggur'],
    users: [
      { id: 1, name: 'Ahmad', email: 'ahmad@example.com' },
      { id: 2, name: 'Budi', email: 'budi@example.com' },
      { id: 3, name: 'Citra', email: 'citra@example.com' }
    ],
    numbers: [1, 2, 3, 4, 5]
  },
  lesson6: {
    message: '',
    age: 0,
    email: '',
    selectedFruit: '',
    isChecked: false
  },
  lesson7: {
    isActive: false,
    fontSize: 16,
    color: 'blue',
    count: 0,
    theme: 'light'
  },
  lesson8: {
    name: 'Vue',
    count: 0,
    isVisible: true,
    link: 'https://vuejs.org'
  }
}

