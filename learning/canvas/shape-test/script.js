window.addEventListener('load', () => {
    /** @type {HTMLCanvasElement} */ 
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');

    canvas.height = window.innerHeight - 8;
    canvas.width = window.innerWidth - 6;
    
    function drawRect() {
        ctx.strokeStyle = 'rgba(132, 212, 33, .4)';
        ctx.strokeRect(100, 100, 100, 100);
        ctx.fillStyle = 'rgba(132, 112, 133, .4)';
        ctx.fillRect(200, 200, 200, 200);
    }

    function drawCicle() {
        ctx.beginPath();
        ctx.arc(450, 450, 70, 0, Math.PI * 2, false);
        ctx.fillStyle = 'skyblue';
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.moveTo(500, 500);
        ctx.lineTo(600, 600);
        ctx.lineTo(600, 500);
        ctx.lineTo(500, 500);
        ctx.moveTo(600, 600);
        ctx.lineTo(500, 500);
        // 梯形
        ctx.moveTo(700, 550);
        ctx.lineTo(600, 500);
        ctx.lineTo(900, 500);
        ctx.lineTo(800, 550);
        ctx.lineTo(700, 550);
        // 贝塞尔曲线
        ctx.moveTo(900, 500);
        ctx.quadraticCurveTo(650, 0, 200, 100);
        ctx.stroke();
        ctx.closePath();
    }

    drawRect();
    drawCicle();
});