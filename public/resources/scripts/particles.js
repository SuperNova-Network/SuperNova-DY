document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    resizeCanvas();
  
    let stars = [];
    const numStars = 500;
    const speed = .002;
  
    class Star {
      constructor() {
        this.x = (Math.random() - 0.5) * canvas.width;
        this.y = (Math.random() - 0.5) * canvas.height;
        this.size = Math.random() * 0.3;
        this.z = Math.random();
        this.opacity = 0;
      }
  
      update() {
        this.z -= speed;
        if (this.z < 0.001) {
          this.z = 1;
          this.x = (Math.random() - 0.5) * canvas.width;
          this.y = (Math.random() -0.5) * canvas.height;
          this.size = Math.random() * 0.9;
          this.opacity = 0;
        }
        this.opacity += 0.01;
        if (this.opacity > 1) {
          this.opacity = 1;
        }
        const distanceToCenter = Math.sqrt((this.x ** 2) + (this.y ** 2));
        const minDistanceToCenter = Math.min(canvas.width, canvas.height) * 0.2;
        if (distanceToCenter < minDistanceToCenter) {
          const angle = Math.atan2(this.y, this.x);
          const newDistance = minDistanceToCenter;
          this.x = Math.cos(angle) * newDistance;
          this.y = Math.sin(angle) * newDistance;
        }
      }
  
      draw() {
        const x = this.x / this.z + canvas.width / 2;
        const y = this.y / this.z + canvas.height / 2;
        const size = this.size / this.z;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }
    }
  
    for (let i = 0; i < numStars; i++) {
      stars.push(new Star());
    }
  
    function draw() {
      ctx.fillStyle = '#111';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
  
      for (const star of stars) {
        star.update();
        star.draw();
      }
  
      requestAnimationFrame(draw);
    }
  
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  
    window.addEventListener('resize', resizeCanvas);
  
    draw();
  });
  