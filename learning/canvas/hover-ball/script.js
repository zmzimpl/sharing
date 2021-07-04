window.addEventListener('load', () => {
    /** @type { HTMLCanvasElement }  */
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    console.log(canvas);
    console.log(ctx);
    canvas.style.backgroundColor = 'black';
    canvas.height = window.innerHeight - 8;
    canvas.width = window.innerWidth - 6;

    const mouse = {
        x: 0,
        y: 0
    }

    window.addEventListener('mousemove', (evt) => {
        mouse.x = evt.x;
        mouse.y = evt.y;
    });


    function Circle(x, y, dx, dy, radius, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;

        this.draw = function () {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.strokeStyle = color;
            ctx.stroke();
            ctx.fillStyle = color;
            ctx.fill();
        }

        this.update = function () {
            if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
                this.dx = -this.dx;
            }
            this.x += this.dx;
            if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
                this.dy = -this.dy;
            }
            this.y += this.dy;

            if (mouse.x - this.x < 50 && mouse.x - this.x > -50 &&
                mouse.y - this.y < 50 && mouse.y - this.y > -50) {
                if (this.radius < 40) {
                    this.radius += 2;
                }
            } else if (this.radius > 3) {
                this.radius -= 2;
            }
            this.draw();
        }
        this.draw();
    }

    const circleArray = [];
    for (let index = 0; index < 2000; index++) {
        let radius = Math.random() * 5 + 1;
        let x = Math.random() * (innerWidth - radius * 2) + radius;
        let y = Math.random() * (innerHeight - radius * 2) + radius;
        let dx = (Math.random() - 0.5) * 2;
        let dy = (Math.random() - 0.5) * 2;
        circleArray.push(new Circle(x, y, dx, dy, radius, `rgba(
            ${(Math.random() * 255)},
            ${(Math.random() * 255)},
            ${(Math.random() * 255)},
            ${Math.random()})`));
    }
    console.log(circleArray);
    function animation() {
        requestAnimationFrame(animation);
        ctx.clearRect(0, 0, innerWidth, innerHeight);

        for (let index = 0; index < circleArray.length; index++) {
            const circle = circleArray[index];
            circle.update();
        }
    }
    animation();
});