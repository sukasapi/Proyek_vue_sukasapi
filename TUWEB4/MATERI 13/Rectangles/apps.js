// Canvas Rectangles
// Demonstrasi penggunaan rectangles pada Canvas API

const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      rectWidth: 50,
      rectHeight: 50,
      rectangles: [],
      mouseX: 0,
      mouseY: 0
    }
  },
  mounted() {
    this.drawBasic();
    this.drawColorVariation();
    this.drawPattern();
  },
  methods: {
    // 1. Persegi Panjang Dasar
    drawBasic() {
      const canvas = this.$refs.basicCanvas;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Fill rectangle
      ctx.fillStyle = '#4facfe';
      ctx.fillRect(50, 50, 150, 100);
      
      // Stroke rectangle
      ctx.strokeStyle = '#333';
      ctx.lineWidth = 3;
      ctx.strokeRect(220, 50, 150, 100);
      
      // Combined (fill + stroke)
      ctx.fillStyle = '#f093fb';
      ctx.fillRect(50, 20, 100, 20);
      ctx.strokeStyle = '#764ba2';
      ctx.lineWidth = 2;
      ctx.strokeRect(50, 20, 100, 20);
      
      // Text labels
      ctx.fillStyle = '#333';
      ctx.font = '14px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('fillRect()', 125, 115);
      ctx.fillText('strokeRect()', 295, 115);
    },
    
    // 2. Variasi Warna
    drawColorVariation() {
      const canvas = this.$refs.colorCanvas;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Grid of colored rectangles
      const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f7b731', '#5f27cd', '#00d2d3'];
      const cols = 6;
      const rows = 4;
      const rectWidth = (canvas.width - 40) / cols;
      const rectHeight = (canvas.height - 40) / rows;
      
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = 20 + col * rectWidth;
          const y = 20 + row * rectHeight;
          const index = (row * cols + col) % colors.length;
          
          // Fill
          ctx.fillStyle = colors[index];
          ctx.fillRect(x, y, rectWidth - 5, rectHeight - 5);
          
          // Border
          ctx.strokeStyle = '#333';
          ctx.lineWidth = 2;
          ctx.strokeRect(x, y, rectWidth - 5, rectHeight - 5);
        }
      }
    },
    
    // 3. Interaktif
    drawInteractive(event) {
      const canvas = this.$refs.interactiveCanvas;
      if (!canvas) return;
      
      this.mouseX = event.offsetX;
      this.mouseY = event.offsetY;
      
      this.redrawInteractive();
    },
    
    redrawInteractive() {
      const canvas = this.$refs.interactiveCanvas;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background grid
      ctx.strokeStyle = '#e0e0e0';
      ctx.lineWidth = 1;
      for (let i = 0; i < canvas.width; i += 20) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
      }
      for (let i = 0; i < canvas.height; i += 20) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
      }
      
      // Draw existing rectangles
      this.rectangles.forEach(rect => {
        ctx.fillStyle = rect.color;
        ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 2;
        ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
      });
      
      // Draw preview rectangle at mouse position
      ctx.fillStyle = 'rgba(79, 172, 254, 0.5)';
      ctx.fillRect(
        this.mouseX - this.rectWidth / 2,
        this.mouseY - this.rectHeight / 2,
        this.rectWidth,
        this.rectHeight
      );
      ctx.strokeStyle = '#4facfe';
      ctx.lineWidth = 2;
      ctx.strokeRect(
        this.mouseX - this.rectWidth / 2,
        this.mouseY - this.rectHeight / 2,
        this.rectWidth,
        this.rectHeight
      );
    },
    
    addRectangle(event) {
      const canvas = this.$refs.interactiveCanvas;
      if (!canvas) return;
      
      const x = event.offsetX - this.rectWidth / 2;
      const y = event.offsetY - this.rectHeight / 2;
      
      // Generate random color
      const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f7b731', '#5f27cd', '#00d2d3', '#fd79a8', '#55efc4'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      
      this.rectangles.push({
        x,
        y,
        width: this.rectWidth,
        height: this.rectHeight,
        color: randomColor
      });
      
      this.redrawInteractive();
    },
    
    clearInteractive() {
      this.rectangles = [];
      this.redrawInteractive();
    },
    
    // 4. Pattern dan Gradient
    drawPattern() {
      const canvas = this.$refs.patternCanvas;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw pattern rectangles
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 6; j++) {
          const x = i * 50;
          const y = j * 50;
          const size = 45;
          
          // Alternate colors
          ctx.fillStyle = (i + j) % 2 === 0 ? '#667eea' : '#764ba2';
          ctx.fillRect(x, y, size, size);
        }
      }
    },
    
    drawGradient() {
      const canvas = this.$refs.patternCanvas;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      
      // Linear gradient
      const gradient1 = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient1.addColorStop(0, '#667eea');
      gradient1.addColorStop(1, '#764ba2');
      
      ctx.fillStyle = gradient1;
      ctx.fillRect(50, 50, 150, 200);
      
      // Radial gradient
      const gradient2 = ctx.createRadialGradient(275, 150, 10, 275, 150, 100);
      gradient2.addColorStop(0, '#f093fb');
      gradient2.addColorStop(1, '#f5576c');
      
      ctx.fillStyle = gradient2;
      ctx.fillRect(200, 50, 150, 200);
      
      // Labels
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 14px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Linear Gradient', 125, 270);
      ctx.fillText('Radial Gradient', 275, 270);
    }
  },
  watch: {
    rectWidth() {
      this.redrawInteractive();
    },
    rectHeight() {
      this.redrawInteractive();
    }
  }
});

app.mount('#app');

