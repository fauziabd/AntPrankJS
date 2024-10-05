// ant-walker.js
(function () {
    function initAntWalker(config) {
      const canvas = document.createElement('canvas');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '9999';
      document.body.appendChild(canvas);
      const ctx = canvas.getContext('2d');
  
      class Ant {
        constructor() {
          this.baseSize = config.antSize;
          this.init();
        }
  
        init() {
          this.x = 0;
          this.y = 0;
          this.angle = 0;
          this.speed = 2;
          this.targetSpeed = 2;
          this.sizeMultiplier = 0.7 + Math.random() * 0.3;
          this.size = this.baseSize * this.sizeMultiplier;
          this.legPhase = 0;
          this.legAmplitude = 0.4;
          this.legFrequency = 0.3;
          this.legLength = 1.2;
  
          const side = Math.floor(Math.random() * 4);
          switch (side) {
            case 0: // Left
              this.x = this.size;
              this.y =
                Math.random() * (canvas.height - 2 * this.size) + this.size;
              this.angle = -Math.PI / 4 + (Math.random() * Math.PI) / 2;
              break;
            case 1: // Right
              this.x = canvas.width - this.size;
              this.y =
                Math.random() * (canvas.height - 2 * this.size) + this.size;
              this.angle = (3 * Math.PI) / 4 + (Math.random() * Math.PI) / 2;
              break;
            case 2: // Top
              this.x = Math.random() * (canvas.width - 2 * this.size) + this.size;
              this.y = this.size;
              this.angle = Math.random() * Math.PI;
              break;
            case 3: // Bottom
              this.x = Math.random() * (canvas.width - 2 * this.size) + this.size;
              this.y = canvas.height - this.size;
              this.angle = Math.PI + Math.random() * Math.PI;
              break;
          }
        }
  
        move() {
          this.speed += (this.targetSpeed - this.speed) * 0.1;
          this.x += Math.cos(this.angle) * this.speed;
          this.y += Math.sin(this.angle) * this.speed;
  
          const margin = 50;
          if (this.x < margin) {
            this.x = margin;
            this.angle = Math.random() * Math.PI - Math.PI / 2;
          }
          if (this.x > canvas.width - margin) {
            this.x = canvas.width - margin;
            this.angle = Math.PI / 2 + Math.random() * Math.PI;
          }
          if (this.y < margin) {
            this.y = margin;
            this.angle = Math.random() * Math.PI;
          }
          if (this.y > canvas.height - margin) {
            this.y = canvas.height - margin;
            this.angle = Math.PI + Math.random() * Math.PI;
          }
  
          this.angle += (Math.random() - 0.5) * 0.1;
  
          if (Math.random() < 0.01) {
            this.targetSpeed = 1 + Math.random() * 3;
          }
  
          this.legPhase += this.legFrequency * this.speed;
        }
  
        draw() {
          ctx.save();
          ctx.translate(this.x, this.y);
          ctx.rotate(this.angle);
          ctx.scale(this.sizeMultiplier, this.sizeMultiplier);
  
          // Shadow
          ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
          ctx.shadowBlur = 5;
          ctx.shadowOffsetX = 2;
          ctx.shadowOffsetY = 2;
  
          // Body segments
          const segments = 3;
          const segmentColors = [
            config.antColor,
            config.antColor,
            config.antColor,
          ];
          for (let i = 0; i < segments; i++) {
            ctx.fillStyle = segmentColors[i];
            ctx.beginPath();
            ctx.ellipse(
              i * this.baseSize * 0.6 - this.baseSize * 0.6,
              0,
              this.baseSize * 0.4,
              this.baseSize * 0.3,
              0,
              0,
              2 * Math.PI
            );
            ctx.fill();
          }
  
          // Head
          ctx.fillStyle = config.antColor;
          ctx.beginPath();
          ctx.ellipse(
            this.baseSize * 0.6,
            0,
            this.baseSize * 0.25,
            this.baseSize * 0.2,
            0,
            0,
            2 * Math.PI
          );
          ctx.fill();
  
          // Reset shadow for details
          ctx.shadowColor = 'transparent';
  
          // Eyes
          ctx.fillStyle = 'black';
          ctx.beginPath();
          ctx.arc(
            this.baseSize * 0.75,
            -this.baseSize * 0.1,
            this.baseSize * 0.05,
            0,
            2 * Math.PI
          );
          ctx.arc(
            this.baseSize * 0.75,
            this.baseSize * 0.1,
            this.baseSize * 0.05,
            0,
            2 * Math.PI
          );
          ctx.fill();
  
          // Antenna
          ctx.strokeStyle = config.antColor;
          ctx.lineWidth = this.baseSize * 0.05;
          ctx.beginPath();
          ctx.moveTo(this.baseSize * 0.7, -this.baseSize * 0.1);
          ctx.quadraticCurveTo(
            this.baseSize * 1.2,
            -this.baseSize * 0.5,
            this.baseSize * 0.9,
            -this.baseSize * 0.4
          );
          ctx.moveTo(this.baseSize * 0.7, this.baseSize * 0.1);
          ctx.quadraticCurveTo(
            this.baseSize * 1.2,
            this.baseSize * 0.5,
            this.baseSize * 0.9,
            this.baseSize * 0.4
          );
          ctx.stroke();
  
          // Legs
          ctx.strokeStyle = config.antColor;
          ctx.lineWidth = this.baseSize * 0.05;
          for (let i = 0; i < 3; i++) {
            for (let j = -1; j <= 1; j += 2) {
              const legX = (i - 1) * this.baseSize * 0.5;
              const legY = this.baseSize * 0.3 * j;
              const phase = this.legPhase + (i * Math.PI) / 3;
              const legEndX =
                legX +
                Math.cos(phase) *
                  this.baseSize *
                  this.legAmplitude *
                  this.legLength;
              const legEndY =
                legY +
                Math.abs(Math.sin(phase)) *
                  this.baseSize *
                  0.5 *
                  j *
                  this.legLength;
  
              // Leg shadow
              ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
              ctx.shadowBlur = 2;
              ctx.shadowOffsetX = 1;
              ctx.shadowOffsetY = 1;
  
              ctx.beginPath();
              ctx.moveTo(legX, legY);
              ctx.quadraticCurveTo(legEndX, legY, legEndX, legEndY);
              ctx.stroke();
  
              // Reset shadow
              ctx.shadowColor = 'transparent';
            }
          }
  
          ctx.restore();
        }
      }
  
      let ants = [new Ant()];
      let antPool = [];
  
      function addAnts() {
        if (ants.length >= config.maxAnts) return;
  
        const newAntsCount = Math.min(ants.length, config.maxAnts - ants.length);
        for (let i = 0; i < newAntsCount; i++) {
          if (antPool.length > 0) {
            const ant = antPool.pop();
            ant.init();
            ants.push(ant);
          } else {
            ants.push(new Ant());
          }
        }
      }
  
      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ants.forEach(ant => {
          ant.move();
          ant.draw();
        });
        requestAnimationFrame(animate);
      }
  
      window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ants.forEach(ant => ant.init());
      });
  
      setInterval(addAnts, config.addInterval);
      animate();
    }
  
    window.initAntWalker = initAntWalker;
  })();
  