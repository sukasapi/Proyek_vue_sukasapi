var app = Vue.createApp({
  data() {
    return {
      hasil: 0 
    }
  },
  methods: {
    reset() {
      this.hasil = 0;
    },
    count() {
      this.hasil++;
    }
  }
}).mount('#app')

