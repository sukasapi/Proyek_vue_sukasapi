var app = Vue.createApp({
  data() {
    return {
      celcius: 0,
      hasil: ''
    }
  }, 
  methods: {
    fahrenheit() {
      const f = ((parseInt(this.celcius) * 9) / 5) + 32;
      this.hasil = f + ' <sup>o</sup>F'; 
    },
    kelvin() {
      const k = parseInt(this.celcius) + 273.15;
      this.hasil = k + ' K';
    }
  }
}).mount('#app')

