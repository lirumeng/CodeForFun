let canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');
let w = 200;
let h = 200;
canvas.width = w;
canvas.height = h;
canvas.style.background = 'rgba(0,0,0,1)';
document.body.appendChild(canvas);

let r = 40;
let angle = 1;
let limitAngle = 45;
let bodyColor = 'yellow';
let mouthColor = 'transparent';
let opening = true;
let interval = 30;
let openAngle = 0;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.fillStyle = mouthColor;
    ctx.strokeStyle = mouthColor;
    ctx.lineWidth = 40;
    ctx.arc(w / 2, h / 2, r, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();
    ctx.restore();

    openAngle = (Math.PI / 180) * angle;

    ctx.beginPath();
    ctx.strokeStyle = bodyColor;
    ctx.lineWidth = 60;
    ctx.arc(w / 2, h / 2, r - 10, -openAngle, openAngle, true);
    ctx.stroke();
    ctx.restore();
}

function animate() {
    setInterval(() => {
        draw();
        if (opening) {
            ++angle;
        } else {
            --angle;
        }

        if (angle <= 1 || angle >= limitAngle) {
            opening = angle <= 1 ? true : false;
        }
    }, interval);
}

animate();