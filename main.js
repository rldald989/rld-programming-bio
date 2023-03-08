let background = document.getElementById('background');
let context = background.getContext('2d');
background.width = 100;
background.height = 100;

context.fillStyle = "red";
context.fillRect(10, 10, 100, 100);