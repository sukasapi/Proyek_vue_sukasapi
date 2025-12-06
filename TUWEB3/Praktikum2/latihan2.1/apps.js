var app = Vue.createApp({
  data() {
    return {
      // Data untuk mustache & v-text
      judul: 'Ini contoh data binding menggunakan Mustache {{ }}',
      deskripsi: 'Ini contoh data binding menggunakan directive v-text.',

      // Data untuk v-html
      htmlKonten: '<h1>Teks tebal</h1> ini berasal dari data dan dirender dengan v-html.',

      // Data untuk attribute binding
      tautan: { 
        href: 'https://vuejs.org',
        title: 'Dokumentasi Resmi Vue.js'
      },
      gambar: {
        src: 'https://via.placeholder.com/150x100?text=Vue+Binding',
        alt: 'Gambar contoh binding',
        title: 'Contoh :src binding'
      },

      // Data untuk class binding 
      warna: '',
      isAktif: false, 

      // Data untuk style binding
      ukuranFont: 10,
      warnaTeks: 'orange'
    }
  }
}).mount('#app')



