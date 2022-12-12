let counterValue = 0;
const decrementRef = document.querySelector('button[data-action="decrement"]')
const incrementRef = document.querySelector('button[data-action="increment"]')
const counterRef = document.querySelector('#value')
decrementRef.addEventListener('click', () => counterRef.textContent = counterValue -= 1)
incrementRef.addEventListener('click', () => counterRef.textContent = counterValue += 1)
