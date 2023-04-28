const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const logo = new Image();
logo.src = 'https://www.mcdonalds.com.sg/sites/default/files/2021-09/Vanilla%20Cone.png';

const logo2 = new Image();
logo2.src = 'https://api.time.com/wp-content/uploads/2014/03/mcdonalds-bacon-clubhouse-burger.png';

// logo.onload = function () {
//   animate();
// };


const logos = [logo, logo2]
let ctr = -1
// function nextLogo () {
//   ctr++
//   ctr %= logos.length
//   return logos[ctr]
// }

let angle = 0;
const speed = 0.05;

function animate() {
  requestAnimationFrame(animate);
  // const logo = nextLogo()
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate(angle);
  ctx.drawImage(logo, -logo.width / 2, -logo.height / 2);
  ctx.restore();
  angle += speed;
}

setTimeout(() => {
  animate()
}, 1000)