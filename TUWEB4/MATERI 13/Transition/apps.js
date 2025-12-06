// Penerapan Animasi - Transition
// Demonstrasi penggunaan Transition dalam Vue.js

const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      showFade: true,
      showSlide: false,
      showBounce: false,
      toggleMode: true,
      mode: 'out-in',
      newItem: '',
      items: ['Item 1', 'Item 2', 'Item 3'],
      showHook: false
    }
  },
  methods: {
    addItem() {
      if (this.newItem.trim()) {
        this.items.push(this.newItem.trim());
        this.newItem = '';
      }
    },
    removeItem(index) {
      this.items.splice(index, 1);
    },
    // JavaScript Hooks untuk transition
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.transform = 'translateX(-50px)';
      console.log('before-enter');
    },
    enter(el, done) {
      // Menggunakan requestAnimationFrame untuk animasi yang lebih halus
      let start = null;
      const duration = 500; // 500ms
      
      const animate = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        
        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        el.style.opacity = easeOut;
        el.style.transform = `translateX(${-50 + (50 * easeOut)}px)`;
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          done(); // Memanggil done() saat animasi selesai
        }
      };
      
      requestAnimationFrame(animate);
      console.log('enter');
    },
    afterEnter(el) {
      console.log('after-enter');
    },
    beforeLeave(el) {
      console.log('before-leave');
    },
    leave(el, done) {
      let start = null;
      const duration = 300;
      
      const animate = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        
        const easeIn = Math.pow(progress, 3);
        
        el.style.opacity = 1 - easeIn;
        el.style.transform = `translateX(${0 - (30 * easeIn)}px)`;
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          done();
        }
      };
      
      requestAnimationFrame(animate);
      console.log('leave');
    },
    afterLeave(el) {
      console.log('after-leave');
    }
  }
});

app.mount('#app');

