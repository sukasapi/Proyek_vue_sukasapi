// Canvas Paths
// Demonstrasi penggunaan paths pada Canvas API

const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      isDrawing: false,
      drawColor: '#667eea',
      lineWidth: 5,
      curveType: 'quadratic',
      starPoints: 5,
      savedPaths: []
    }
  },
  mounted() {
    this.drawBasicPaths();
    this.drawArcs();
    this.drawCurves();
    this.drawComplexPaths();
  },
  methods: {
    // 1. Path Dasar
    drawBasicPaths() {
      const canvas = this.$refs.basicPathCanvas;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Triangle
      ctx.beginPath();
      ctx.moveTo(100, 50);
      ctx.lineTo(50, 150);
      ctx.lineTo(150, 150);
      ctx.closePath();
      ctx.fillStyle = '#ff6b6b';
      ctx.fill();
      ctx.strokeStyle = '#333';
      ctx.lineWidth = 3;
      ctx.stroke();
      
      // Pentagon
      ctx.beginPath();
      const centerX = 280;
      const centerY = 100;
      const radius = 50;
      for (let i = 0; i < 5; i++) {
        const angle = (i * 2 * Math.PI / 5) - Math.PI / 2;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
      ctx.fillStyle = '#4ecdc4';
      ctx.fill();
      ctx.strokeStyle = '#333';
      ctx.lineWidth = 3;
      ctx.stroke();
      
      // Zigzag line
      ctx.beginPath();
      ctx.strokeStyle = '#f7b731';
      ctx.lineWidth = 4;
      ctx.moveTo(50, 200);
      for (let x = 70; x < 350; x += 20) {
        const y = x % 40 === 10 ? 180 : 220;
        ctx.lineTo(x, y);
      }
      ctx.stroke();
      
      // Labels
      ctx.fillStyle = '#333';
      ctx.font = '12px Arial';
      ctx.fillText('Triangle', 75, 170);
      ctx.fillText('Pentagon', 250, 160);
      ctx.fillText('Zigzag Line', 180, 240);
    },
    
    // 2. Arcs dan Circles
    drawArcs() {
      const canvas = this.$refs.arcCanvas;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Full circle
      ctx.beginPath();
      ctx.arc(100, 100, 50, 0, Math.PI * 2);
      ctx.fillStyle = '#667eea';
      ctx.fill();
      ctx.strokeStyle = '#333';
      ctx.lineWidth = 3;
      ctx.stroke();
      
      // Half circle (semicircle)
      ctx.beginPath();
      ctx.arc(250, 100, 50, 0, Math.PI);
      ctx.fillStyle = '#f093fb';
      ctx.fill();
      ctx.strokeStyle = '#333';
      ctx.lineWidth = 3;
      ctx.stroke();
      
      // Arc (quarter circle)
      ctx.beginPath();
      ctx.arc(100, 200, 40, 0, Math.PI / 2);
      ctx.lineWidth = 5;
      ctx.strokeStyle = '#fa709a';
      ctx.stroke();
      
      // Partial arc
      ctx.beginPath();
      ctx.arc(250, 200, 40, Math.PI / 4, Math.PI * 1.5);
      ctx.lineWidth = 5;
      ctx.strokeStyle = '#fee140';
      ctx.stroke();
      
      // Labels
      ctx.fillStyle = '#333';
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Full Circle', 100, 165);
      ctx.fillText('Semicircle', 250, 165);
      ctx.fillText('Arc (90°)', 100, 250);
      ctx.fillText('Partial Arc', 250, 250);
    },
    
    // 3. Kurva Bézier dan Quadratic
    drawCurves() {
      const canvas = this.$refs.curveCanvas;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (this.curveType === 'quadratic') {
        // Quadratic curves
        ctx.strokeStyle = '#667eea';
        ctx.lineWidth = 4;
        
        // Curve 1
        ctx.beginPath();
        ctx.moveTo(50, 200);
        ctx.quadraticCurveTo(100, 50, 150, 200);
        ctx.stroke();
        
        // Control point
        ctx.fillStyle = '#f093fb';
        ctx.beginPath();
        ctx.arc(100, 50, 5, 0, Math.PI * 2);
        ctx.fill();
        
        // Curve 2
        ctx.beginPath();
        ctx.moveTo(200, 200);
        ctx.quadraticCurveTo(250, 100, 300, 200);
        ctx.stroke();
        
        // Control point
        ctx.fillStyle = '#f093fb';
        ctx.beginPath();
        ctx.arc(250, 100, 5, 0, Math.PI * 2);
        ctx.fill();
        
        // Labels
        ctx.fillStyle = '#333';
        ctx.font = '14px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Quadratic Curves', 200, 50);
        ctx.font = '10px Arial';
        ctx.fillText('Control Point', 100, 45);
        ctx.fillText('Control Point', 250, 95);
      } else {
        // Bézier curves
        ctx.strokeStyle = '#f5576c';
        ctx.lineWidth = 4;
        
        // Curve 1
        ctx.beginPath();
        ctx.moveTo(50, 200);
        ctx.bezierCurveTo(100, 50, 150, 150, 200, 200);
        ctx.stroke();
        
        // Control points
        ctx.fillStyle = '#fa709a';
        ctx.beginPath();
        ctx.arc(100, 50, 5, 0, Math.PI * 2);
        ctx.arc(150, 150, 5, 0, Math.PI * 2);
        ctx.fill();
        
        // Curve 2
        ctx.beginPath();
        ctx.moveTo(220, 200);
        ctx.bezierCurveTo(270, 100, 320, 100, 350, 200);
        ctx.stroke();
        
        // Control points
        ctx.beginPath();
        ctx.arc(270, 100, 5, 0, Math.PI * 2);
        ctx.arc(320, 100, 5, 0, Math.PI * 2);
        ctx.fill();
        
        // Labels
        ctx.fillStyle = '#333';
        ctx.font = '14px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Bézier Curves', 200, 50);
        ctx.font = '10px Arial';
        ctx.fillText('Control Points', 125, 100);
        ctx.fillText('Control Points', 295, 95);
      }
    },
    
    // 4. Path Interaktif
    startDrawing(event) {
      this.isDrawing = true;
      const canvas = this.$refs.interactivePathCanvas;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      ctx.beginPath();
      ctx.moveTo(event.offsetX, event.offsetY);
    },
    
    draw(event) {
      if (!this.isDrawing) return;
      
      const canvas = this.$refs.interactivePathCanvas;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      ctx.lineTo(event.offsetX, event.offsetY);
      ctx.strokeStyle = this.drawColor;
      ctx.lineWidth = this.lineWidth;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke();
    },
    
    stopDrawing() {
      this.isDrawing = false;
    },
    
    clearPath() {
      const canvas = this.$refs.interactivePathCanvas;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    },
    
    savePath() {
      const canvas = this.$refs.interactivePathCanvas;
      if (!canvas) return;
      
      // Simpan sebagai gambar (opsional)
      const image = canvas.toDataURL();
      const link = document.createElement('a');
      link.download = 'canvas-drawing.png';
      link.href = image;
      link.click();
    },
    
    // 5. Path Kompleks
    drawComplexPaths() {
      const canvas = this.$refs.complexPathCanvas;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Star
      ctx.beginPath();
      const centerX = 200;
      const centerY = 150;
      const outerRadius = 60;
      const innerRadius = 30;
      const points = this.starPoints;
      
      for (let i = 0; i < points * 2; i++) {
        const angle = (i * Math.PI) / points - Math.PI / 2;
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
      ctx.fillStyle = '#ffd700';
      ctx.fill();
      ctx.strokeStyle = '#ff8c00';
      ctx.lineWidth = 3;
      ctx.stroke();
      
      // Spiral
      ctx.beginPath();
      ctx.strokeStyle = '#667eea';
      ctx.lineWidth = 3;
      const spiralCenterX = 100;
      const spiralCenterY = 250;
      for (let angle = 0; angle < Math.PI * 4; angle += 0.1) {
        const radius = angle * 5;
        const x = spiralCenterX + radius * Math.cos(angle);
        const y = spiralCenterY + radius * Math.sin(angle);
        if (angle === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
      
      // Heart shape
      ctx.beginPath();
      const heartX = 300;
      const heartY = 250;
      ctx.moveTo(heartX, heartY);
      ctx.bezierCurveTo(heartX, heartY - 20, heartX - 25, heartY - 30, heartX - 25, heartY - 10);
      ctx.bezierCurveTo(heartX - 25, heartY - 30, heartX - 50, heartY - 20, heartX - 50, heartY);
      ctx.bezierCurveTo(heartX - 50, heartY + 20, heartX, heartY + 40, heartX, heartY + 50);
      ctx.bezierCurveTo(heartX, heartY + 40, heartX + 50, heartY + 20, heartX + 50, heartY);
      ctx.bezierCurveTo(heartX + 50, heartY - 20, heartX + 25, heartY - 30, heartX + 25, heartY - 10);
      ctx.bezierCurveTo(heartX + 25, heartY - 30, heartX, heartY - 20, heartX, heartY);
      ctx.fillStyle = '#ff69b4';
      ctx.fill();
      ctx.strokeStyle = '#c71585';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Labels
      ctx.fillStyle = '#333';
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(`${points}-Pointed Star`, centerX, 230);
      ctx.fillText('Spiral', spiralCenterX, 280);
      ctx.fillText('Heart', heartX, 310);
    }
  },
  watch: {
    curveType() {
      this.drawCurves();
    },
    starPoints() {
      this.drawComplexPaths();
    }
  }
});

app.mount('#app');

