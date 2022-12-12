const btnRef = document.querySelector('.change-color');
const spanRef = document.querySelector('.color');
const bodyRef = document.querySelector('body');

console.log("🎅 ~ btnRef", btnRef, spanRef)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


btnRef.addEventListener('click', () => {
  const color = getRandomHexColor();
  spanRef.textContent = `${color}`;
bodyRef.style.backgroundColor = `${color}`;
})