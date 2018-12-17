'use strict'

//blur before loading
window.onload = function(){
  let list = document.querySelectorAll('.container div');
  for(let item of list){
    item.style.filter = 'blur(0px)';
  }
}

function move(el, eX, eY, maxX, maxY){
  let x = (eX / maxX - 0.5) * el.getAttribute('data-x');
  let y = (eY/ maxY - 0.5) * el.getAttribute('data-y');
  el.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;

}

//noise
setInterval(()=> el4.style.transform = `scale(2.5) rotate(${Math.random()*3600}deg)`, 5)

document.onmousemove = function(e){
  // move(el0, e);
  let x = e.x;
  let y = e.y;
  let maxX = window.innerWidth;
  let maxY = window.innerHeight;

  move(el1, x, y, maxX, maxY);
  move(el2, x, y, maxX, maxY);
  move(el3, x, y, maxX, maxY);

}

function handleOrientation(event) {
  var y = event.beta;  // In degree in the range [-180,180]
  var x = event.gamma; // In degree in the range [-90,90]

  x += 130;
  y += 90;


  let maxX = 260;
  let maxY = 180;

  move(el1, x, y, maxX, maxY);
  move(el2, x, y, maxX, maxY);
  move(el3, x, y, maxX, maxY);

}

window.addEventListener('deviceorientation', handleOrientation);
