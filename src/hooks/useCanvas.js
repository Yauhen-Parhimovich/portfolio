import {useEffect} from 'react';

const useCanvas = () => {
  useEffect(() => {
    window.requestAnimFrame = (function () {
      return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        function (callback) {
          window.setTimeout(callback, 1000 / 60);
        };
    })();

    const canvasWrapper = document.querySelector('.animate-background');
    const canvas = document.querySelector('#canvas');

    const ctx = canvas.getContext('2d');
    const cw = canvasWrapper.clientWidth;
    const ch = canvasWrapper.clientHeight;

    const fireworks = [];
    const particles = [];

    let hue = 120;
    const limiterTotal = 5;
    let limiterTick = 0;
    const timerTotal = 80;
    let timerTick = 0;
    let mousedown = false;
    let mx;
    let my;

    let offsetX = window.innerWidth > 1200 ? 300 : 0;

    canvas.width = cw;
    canvas.height = ch;

    function random(min, max) {
      return Math.random() * (max - min) + min;
    }

    function calculateDistance(p1x, p1y, p2x, p2y) {
      const xDistance = p1x - p2x;
      const yDistance = p1y - p2y;
      return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
    }

    class Firework {
      constructor(sx, sy, tx, ty) {
        this.x = sx - offsetX;
        this.y = sy;
        this.sx = sx - offsetX;
        this.sy = sy;
        this.tx = tx - offsetX;
        this.ty = ty;
        this.distanceToTarget = calculateDistance(sx, sy, tx, ty);
        this.distanceTraveled = 0;
        this.coordinates = [];
        this.coordinateCount = 3;
        while (this.coordinateCount--) {
          this.coordinates.push([this.x, this.y]);
        }
        this.angle = Math.atan2(ty - sy, tx - sx);
        this.speed = 2;
        this.acceleration = 1.05;
        this.brightness = random(50, 70);
        this.targetRadius = 1;
      }

      update(index) {
        this.coordinates.pop();
        this.coordinates.unshift([this.x, this.y]);

        if (this.targetRadius < 8) {
          this.targetRadius += 0.3;
        } else {
          this.targetRadius = 1;
        }

        this.speed *= this.acceleration;

        const vx = Math.cos(this.angle) * this.speed;
        const vy = Math.sin(this.angle) * this.speed;
        this.distanceTraveled = calculateDistance(this.sx, this.sy, this.x + vx, this.y + vy);

        if (this.distanceTraveled >= this.distanceToTarget) {
          createParticles(this.tx, this.ty);
          fireworks.splice(index, 1);
        } else {
          this.x += vx;
          this.y += vy;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.moveTo(this.coordinates[this.coordinates.length - 1][0], this.coordinates[this.coordinates.length - 1][1]);
        ctx.lineTo(this.x, this.y);
        ctx.strokeStyle = 'hsl(' + hue + ', 100%, ' + this.brightness + '%)';
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(this.tx, this.ty, this.targetRadius, 0, Math.PI * 2);
        ctx.stroke();
      }
    }

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.coordinates = [];
        this.coordinateCount = 5;
        while (this.coordinateCount--) {
          this.coordinates.push([this.x, this.y]);
        }
        this.angle = random(0, Math.PI * 2);
        this.speed = random(1, 10);
        this.friction = 0.95;
        this.gravity = 1;
        this.hue = random(hue - 20, hue + 20);
        this.brightness = random(50, 80);
        this.alpha = 1;
        this.decay = random(0.015, 0.03);
      }

      update(index) {
        this.coordinates.pop();
        this.coordinates.unshift([this.x, this.y]);
        this.speed *= this.friction;
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed + this.gravity;
        this.alpha -= this.decay;

        if (this.alpha <= this.decay) {
          particles.splice(index, 1);
        }
      }

      draw() {
        ctx.beginPath();
        ctx.moveTo(this.coordinates[this.coordinates.length - 1][0], this.coordinates[this.coordinates.length - 1][1]);
        ctx.lineTo(this.x, this.y);
        ctx.strokeStyle = 'hsla(' + this.hue + ', 100%, ' + this.brightness + '%, ' + this.alpha + ')';
        ctx.stroke();
      }
    }

    function createParticles(x, y) {
      let particleCount = 50;
      while (particleCount--) {
        particles.push(new Particle(x, y));
      }
    }

    function loop() {
      window.requestAnimFrame(loop);

      hue += 0.5;

      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
      ctx.fillRect(0, 0, cw, ch);
      ctx.globalCompositeOperation = 'lighter';

      let i = fireworks.length;
      while (i--) {
        fireworks[i].draw();
        fireworks[i].update(i);
      }

      let j = particles.length;
      while (j--) {
        particles[j].draw();
        particles[j].update(j);
      }

      if (timerTick >= timerTotal) {
        if (!mousedown) {
          fireworks.push(new Firework(cw / 2, ch, random(0, cw), random(0, ch / 2)));
          timerTick = 0;
        }
      } else {
        timerTick++;
      }

      if (limiterTick >= limiterTotal) {
        if (mousedown) {
          fireworks.push(new Firework(cw / 2, ch, mx, my));
          limiterTick = 0;
        }
      } else {
        limiterTick++;
      }
    }

    canvas.addEventListener('mousemove', function (event) {
      mx = event.pageX - canvas.offsetLeft;
      my = event.pageY - canvas.offsetTop;
    });

    canvas.addEventListener('mousedown', function (event) {
      mousedown = true;
    });

    canvas.addEventListener('mouseup', function (event) {
      mousedown = false;
    });

    canvas.addEventListener('click', () => {
      mousedown = true;
      setTimeout(() => {
        mousedown = false;
      }, 0)
    })

    loop();




  }, []);
};

export default useCanvas;
