const body = document.querySelector('body');

const IMG_NUMBER = 4;
const IMAGE = 'bgImage';

function paintImg(imgNumber) {
  const img = new Image();
  img.src = `images/${imgNumber + 1}.jpg`;
  img.classList.add(IMAGE);
  body.appendChild(img);
}

function getRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNum = getRandom();
  paintImg(randomNum);
}

init();
