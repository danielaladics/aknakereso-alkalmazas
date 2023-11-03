const images = document.getElementsByid("hidden");
const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext("2d");

let size = 50;
const x= 0;
const y= 0;

ctx.drawImage(images, x, y, size, size);
ctx.drawImage(images, x+size, y, size, size);