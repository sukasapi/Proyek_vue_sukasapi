// Custom Directive untuk Canvas
// Custom directive memungkinkan manipulasi DOM langsung, sangat berguna untuk Canvas API

const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      canvasConfig: {
        color: '#4facfe',
        lineWidth: 5
      },
      colors: ['#4facfe', '#f093fb', '#fa709a', '#fee140', '#30cfd0'],
      colorIndex: 0,
      
      drawConfig: {
        x: 200,
        y: 150,
        radius: 50,
        color: '#667eea'
      },
      
      animateConfig: {
        playing: false,
        speed: 3,
        position: 0
      },
      
      animationId: null
    }
  },
  methods: {
    changeColor() {
      this.colorIndex = (this.colorIndex + 1) % this.colors.length;
      this.canvasConfig.color = this.colors[this.colorIndex];
    },
    changeSize() {
      this.canvasConfig.lineWidth = Math.random() * 10 + 2;
    },
    toggleAnimation() {
      this.animateConfig.playing = !this.animateConfig.playing;
    }
  }
});

// Custom Directive 1: Canvas Basic
// Directive sederhana untuk menggambar di canvas
app.directive('canvas-basic', {
  mounted(el, binding) {
    const ctx = el.getContext('2d');
    const config = binding.value;
    
    function draw() {
      // Clear canvas
      ctx.clearRect(0, 0, el.width, el.height);
      
      // Draw rectangle
      ctx.fillStyle = config.color;
      ctx.fillRect(50, 50, el.width - 100, el.height - 100);
      
      // Draw border
      ctx.strokeStyle = '#333';
      ctx.lineWidth = config.lineWidth;
      ctx.strokeRect(50, 50, el.width - 100, el.height - 100);
      
      // Draw text
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 20px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Custom Directive Canvas', el.width / 2, el.height / 2 - 10);
      ctx.font = '14px Arial';
      ctx.fillText(`Warna: ${config.color}`, el.width / 2, el.height / 2 + 15);
    }
    
    // Initial draw
    draw();
    
    // Store draw function for updates
    el._drawCanvas = draw;
  },
  updated(el, binding) {
    // Re-draw when config changes
    if (el._drawCanvas) {
      el._drawCanvas();
    }
  }
});

// Custom Directive 2: Canvas Draw
// Directive dengan kemampuan menggambar dinamis
app.directive('canvas-draw', {
  mounted(el, binding) {
    const ctx = el.getContext('2d');
    
    function draw() {
      const config = binding.value;
      
      // Clear canvas
      ctx.clearRect(0, 0, el.width, el.height);
      
      // Draw grid background
      ctx.strokeStyle = '#e0e0e0';
      ctx.lineWidth = 1;
      for (let i = 0; i < el.width; i += 20) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, el.height);
        ctx.stroke();
      }
      for (let i = 0; i < el.height; i += 20) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(el.width, i);
        ctx.stroke();
      }
      
      // Draw circle
      ctx.fillStyle = config.color;
      ctx.beginPath();
      ctx.arc(config.x, config.y, config.radius, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw center point
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(config.x, config.y, 3, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw coordinates
      ctx.fillStyle = '#333';
      ctx.font = '12px Arial';
      ctx.textAlign = 'left';
      ctx.fillText(`(${config.x}, ${config.y})`, config.x + config.radius + 5, config.y);
    }
    
    // Initial draw
    draw();
    
    // Store draw function
    el._drawCanvas = draw;
  },
  updated(el, binding) {
    if (el._drawCanvas) {
      el._drawCanvas();
    }
  }
});

// Custom Directive 3: Canvas Animate
// Directive untuk animasi canvas
app.directive('canvas-animate', {
  mounted(el, binding) {
    const ctx = el.getContext('2d');
    let animationFrame;
    
    function animate() {
      const config = binding.value;
      
      if (!config.playing) {
        return;
      }
      
      // Clear canvas
      ctx.clearRect(0, 0, el.width, el.height);
      
      // Update position
      config.position += config.speed;
      if (config.position > el.width + 50) {
        config.position = -50;
      }
      
      // Draw multiple circles
      for (let i = 0; i < 5; i++) {
        const x = config.position + (i * 100);
        const y = el.height / 2 + Math.sin((config.position + i * 50) / 20) * 30;
        const radius = 20 + Math.sin((config.position + i * 30) / 10) * 10;
        
        ctx.fillStyle = `hsl(${(config.position / 2 + i * 60) % 360}, 70%, 60%)`;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
      
      animationFrame = requestAnimationFrame(animate);
    }
    
    // Watch for playing state changes
    const checkPlay = () => {
      if (binding.value.playing) {
        animate();
      } else {
        cancelAnimationFrame(animationFrame);
      }
    };
    
    // Start if playing
    if (binding.value.playing) {
      animate();
    }
    
    // Store cleanup function
    el._animateCanvas = { checkPlay, cancel: () => cancelAnimationFrame(animationFrame) };
  },
  updated(el, binding) {
    if (el._animateCanvas) {
      el._animateCanvas.checkPlay();
    }
  },
  unmounted(el) {
    if (el._animateCanvas) {
      el._animateCanvas.cancel();
    }
  }
});

app.mount('#app');

