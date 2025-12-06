var app = Vue.createApp({
  data() {
    return {
      hasil: 1 
    }
  }, 
  methods: {
    reset() {
      this.hasil = 1;
    },
    count() {
      this.hasil++;
    }
  }
}).mount('#app')

