// Penerapan Animasi - Animation
// Demonstrasi penggunaan Animation dalam Vue.js

const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      animationsPlaying: true,
      rotation: 0,
      scale: 1,
      positionX: 0,
      loadingText: 'Memuat...',
      progress: 0,
      isRunning: false,
      progressInterval: null,
      canvasPlaying: false,
      canvasSpeed: 3,
      canvasAnimationId: null,
      canvasAngle: 0,
      cards: [
        { id: 1 },
        { id: 2 },
        { id: 3 }
      ],
      nextCardId: 4
    }
  },
  mounted() {
    this.startLoadingAnimation();
    this.initCanvas();
  },
  beforeUnmount() {
    this.stopProgress();
    this.stopCanvasAnimation();
  },
  methods: {
    toggleAnimations() {
      this.animationsPlaying = !this.animationsPlaying;
      const boxes = document.querySelectorAll('.animated-box');
      boxes.forEach(box => {
        if (this.animationsPlaying) {
          box.style.animationPlayState = 'running';
        } else {
          box.style.animationPlayState = 'paused';
        }
      });
    },
    resetTransform() {
      this.rotation = 0;
      this.scale = 1;
      this.positionX = 0;
    },
    startLoadingAnimation() {
      const texts = ['Memuat...', 'Memproses...', 'Hampir selesai...'];
      let index = 0;
      setInterval(() => {
        this.loadingText = texts[index % texts.length];
        index++;
      }, 2000);
    },
    startProgress() {
      if (this.progress >= 100) {
        this.progress = 0;
      }
      this.isRunning = true;
      this.progressInterval = setInterval(() => {
        if (this.progress < 100) {
          this.progress += 1;
        } else {
          this.stopProgress();
        }
      }, 50);
    },
    pauseProgress() {
      this.stopProgress();
    },
    resetProgress() {
      this.stopProgress();
      this.progress = 0;
    },
    stopProgress() {
      this.isRunning = false;
      if (this.progressInterval) {
        clearInterval(this.progressInterval);
        this.progressInterval = null;
      }
    },
    initCanvas() {
      const canvas = this.$refs.canvas;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      this.canvasCtx = ctx;
      this.canvasEl = canvas;
    },
    toggleCanvasAnimation() {
      if (this.canvasPlaying) {
        this.stopCanvasAnimation();
      } else {
        this.startCanvasAnimation();
      }
    },
    startCanvasAnimation() {
      this.canvasPlaying = true;
      this.animateCanvas();
    },
    stopCanvasAnimation() {
      this.canvasPlaying = false;
      if (this.canvasAnimationId) {
        cancelAnimationFrame(this.canvasAnimationId);
        this.canvasAnimationId = null;
      }
    },
    animateCanvas() {
      if (!this.canvasPlaying || !this.canvasCtx) return;
      
      const ctx = this.canvasCtx;
      const canvas = this.canvasEl;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update angle
      this.canvasAngle += 0.02 * this.canvasSpeed;
      
      // Draw animated circles
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      for (let i = 0; i < 5; i++) {
        const angle = this.canvasAngle + (i * Math.PI * 2 / 5);
        const radius = 80;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        const size = 20 + Math.sin(this.canvasAngle * 2 + i) * 10;
        
        // Gradient
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
        gradient.addColorStop(0, `hsl(${(this.canvasAngle * 50 + i * 60) % 360}, 70%, 60%)`);
        gradient.addColorStop(1, `hsl(${(this.canvasAngle * 50 + i * 60) % 360}, 70%, 40%)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
        
        // Outline
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 2;
        ctx.stroke();
      }
      
      // Center circle
      ctx.fillStyle = `hsl(${(this.canvasAngle * 50) % 360}, 70%, 50%)`;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 30, 0, Math.PI * 2);
      ctx.fill();
      
      this.canvasAnimationId = requestAnimationFrame(() => this.animateCanvas());
    },
    addCard() {
      this.cards.push({ id: this.nextCardId++ });
    },
    removeCard() {
      if (this.cards.length > 0) {
        this.cards.pop();
      }
    }
  },
  watch: {
    canvasSpeed() {
      // Kecepatan berubah, animasi tetap berjalan
    }
  }
});

app.mount('#app');

