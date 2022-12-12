const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');
console.log("🎅 ~ spanRef", spanRef)
console.dir(inputRef)
inputRef.addEventListener('input', () =>  spanRef.style.fontSize = `${inputRef.valueAsNumber}px`)




// valueAsNumber