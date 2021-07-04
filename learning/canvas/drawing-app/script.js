window.addEventListener('load', () => {
    /**
     * @type { HTMLCanvasElement }
     */
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    console.log(canvas);
    console.log(ctx);
    canvas.height = window.innerHeight - 8;
    canvas.width = window.innerWidth - 6;


    // ctx.beginPath();
    // ctx.moveTo(100, 100);
    // ctx.lineTo(500, 100);
    // ctx.stroke();

    // ctx.strokeStyle = 'red';
    // ctx.lineWidth = 2;
    // ctx.strokeRect(100, 100, 200, 500);
    // ctx.strokeStyle = 'blue';
    // ctx.lineWidth = 2;
    // ctx.strokeRect(200, 200, 200, 500);

    let painting = false;

    function startPosition(e) {
        painting = true;
        draw(e)
        console.log(painting);
    }

    function finishedPosition() {
        painting = false;
        console.log(painting);
        ctx.beginPath();
    }

    function draw(e) {
        if (!painting) return;
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }

    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw);

});