window.addEventListener('load', () => {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    console.log(canvas);
    console.log(ctx);

    canvas.height = window.innerHeight - 8;
    canvas.width = window.innerWidth - 6;

    // ctx.beginPath();
    // ctx.arc(200, 200, 25, 0, Math.PI * 2, true);
    // ctx.closePath();
    // ctx.strokeStyle = 'blue';
    // ctx.stroke();

    function Circle(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;

        this.draw = function() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.strokeStyle = 'blue';
            ctx.stroke();
        }

        this.update = function() {
            if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
                this.dx = -this.dx;
            }
            this.x += this.dx;
            if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
                this.dy = -this.dy;
            }
            this.y += this.dy;

            this.draw();
        }
        this.draw();
    }

    const circleArray = [];
    for (let index = 0; index < 100; index++) {
        let radius = 30;
        let x = Math.random() * (innerWidth - radius * 2) + radius;
        let y = Math.random() * (innerHeight - radius * 2) + radius;
        let dx = (Math.random() - 0.5) * 8;
        let dy = (Math.random() - 0.5) * 8;
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
    console.log(circleArray);
    function animation() {
        requestAnimationFrame(animation);
        ctx.clearRect(0, 0, innerWidth, innerHeight);

        for (let index = 0; index < circleArray.length; index++) {
            const circle = circleArray[index];
            circle.update();
        }
        // ctx.beginPath();
        // ctx.arc(x, y, radius, 0, Math.PI * 2, false);
        // ctx.strokeStyle = 'blue';
        // ctx.stroke();
        // if (x + radius > (innerWidth - 8) || x - radius < 0) {
        //     dx = -dx;
        // }
        // x +=dx;

        // if (y + radius > (innerHeight - 8) || y - radius < 0) {
        //     dy = -dy;
        // }
        // y +=dy;
    }
    animation();
});