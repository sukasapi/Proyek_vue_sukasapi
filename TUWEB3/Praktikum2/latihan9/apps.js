var app = Vue.createApp({
  data() {
    return {
      bil1: '',
      bil2: '',
      operasi: null
    }
  }, 
  computed: { // Menggunakan computed untuk menghitung hasil
    hasil() {
      if (this.bil1 === '' || this.bil2 === '' || this.operasi === null) {
        return '';
      }
      const num1 = parseFloat(this.bil1);
      const num2 = parseFloat(this.bil2);
      if (isNaN(num1) || isNaN(num2)) {
        return '';
      }
      switch (this.operasi) {
        case '+':
          return num1 + num2;
        case '-':
          return num1 - num2;
        case '*':
          return num1 * num2;
        case '/':
          return num2 !== 0 ? num1 / num2 : 'Error';
        default:
          return '';
      }
    }
  }
}).mount('#app')

