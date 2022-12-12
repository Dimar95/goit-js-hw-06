const btnCreateRef = document.querySelector('button[data-create]');
// console.log("🎅 ~ btnCreateRef", btnCreateRef)
const btnDestroyRef = document.querySelector('button[data-destroy]');
// console.log("🎅 ~ btnDestroyRef", btnDestroyRef)
const divBoxRef = document.querySelector('#boxes');
// console.log("🎅 ~ divBoxRef", divBoxRef)
const divRef = document.querySelector('#controls');
const inputRef = divRef.firstElementChild;
const divElArray = [];
let colectionBox = document.querySelector('.item');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  console.log('amount', amount)
  for (let i = 0; i < amount; i++) {
    let withBox = 0;
    withBox += 30 + ([i] * 10)
    let color = getRandomHexColor()

    const divEl = document.createElement('div');
    divEl.classList.add('item');

    divEl.style.width = `${withBox}px`;
    divEl.style.height = `${withBox}px`;
    divEl.style.backgroundColor = `${color}`;
    divEl.style.margin = '10px';
    divEl.style.display = 'inline-flex';

    divElArray.push(divEl);
    
  }
  return divBoxRef.append(...divElArray);
}


let totalBox;
inputRef.addEventListener('input', () => {
  console.log("🎅 ~ inputRef.value", inputRef.value)
  console.log("🎅 ~ totalBox", totalBox)
  return totalBox = inputRef.valueAsNumber;
  
})
  
  

btnCreateRef.addEventListener('click', () => createBoxes(totalBox));

btnDestroyRef.addEventListener('click', () => destroyBoxes());


function destroyBoxes() {
  divBoxRef.innerHTML = '';
  divElArray.splice(0, divElArray.length)
}
