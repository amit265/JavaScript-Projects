let canvas = document.querySelector("canvas");
let body = document.querySelector("body");

const randColor = () => {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase()
  );
};

body.style.margin = 0;
body.style.background = randColor();
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext("2d");
// canvas.style.border = `5px solid ${randColor()}`;

// for(let i = 0; i< 50; i++){
//     let x = Math.random() * window.innerWidth;;
//     let y = Math.random() * window.innerHeight;
//     let a = Math.random() * 150;
//     let b = Math.random() * 150;
//     c.fillStyle = randColor();
//     c.fillRect(x, y, a, b);
//     c.fillStyle = randColor();
//     c.fillRect(x, y, a, b);
//     c.fillStyle = randColor();
//     c.fillRect(x, y, a, b);

// }

//line

// for(let i = 0; i < 25; i++){
//     let x = Math.random() * 750;
//     let y = Math.random() * 850;
//     let a = Math.random() * 50;
//     let b = Math.random() * 50;
//     c.moveTo(x, y);
//     c.lineTo(a, b);

//     c.strokeStyle = randColor();
//     c.stroke();
//     c.beginPath()

// }
//arc/circle

// for(let i = 0; i < 50; i++) {
//     let x = Math.random() * window.innerWidth;;
//     let y = Math.random() * window.innerHeight;;
//     let r = Math.random() * 130;
//     c.beginPath();
//     c.arc(x, y, r, 0, Math.PI * 2, false);
//     c.strokeStyle = randColor();
//     c.stroke();

// // }

// let x = Math.random() * window.innerWidth;;
// let y = Math.random() * window.innerHeight;
// let dx = 4;
// let dy = 4;
// let r = Math.random() * 130;

// function animate(){
//     requestAnimationFrame(animate);
//     c.clearRect(0,0,innerWidth,innerHeight);
//     c.beginPath();
//     c.arc(x, y, r, 0, Math.PI * 2, false);
//     c.strokeStyle = "blue";
//     c.stroke();
//     if(x + r > innerWidth || x - r < 0){
//         dx = -dx;
//     }

//     if(y + r > innerHeight || y - r < 0){
//         dy = -dy;
//     }

//     x += dx;
//     y += dy;
// }
// animate();

//     }

// c.strokeStyle = randColor();
class Circle {
  constructor(x, y, dx, dy, r) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = r;
    this.draw = function () {
      c.beginPath();
      c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
      // c.strokeStyle = randColor();
      c.stroke();
      // c.fill();
    };

    this.update = function () {
      if (this.x + this.r > innerWidth || this.x - this.r < 0) {
        this.dx = -this.dx;
      }
      if (this.y + this.r > innerHeight || this.y - this.r < 0) {
        this.dy = -this.dy;
      }
      this.x += this.dx;
      this.y += this.dy;
      this.draw();
    };
  }
}

var circleArray = [];
for (let i = 0; i < 120; i++) {
  let r = Math.random() * 130;
  let x = Math.random() * (innerWidth - r * 2) + r;
  let dx = (Math.random() - 0.5) * 1.5;
  let dy = (Math.random() - 0.5) * 1.5;
  let y = Math.random() * (innerHeight - r * 2) + r;
  circleArray.push(new Circle(x, y, dx, dy, r));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

canvas.addEventListener("click", () => {
  body.style.background = randColor();
});

setInterval(() => {
  body.style.background = randColor();
}, 3000);

animate();
