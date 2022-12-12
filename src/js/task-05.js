const inputRef = document.querySelector('#name-input')
const outputRef = document.querySelector('#name-output')
console.dir(inputRef)


inputRef.addEventListener('input', (event) => {
    if (inputRef.value === '') {
        return outputRef.textContent = 'Anonymous'
    } else {
        return outputRef.textContent = event.currentTarget.value
    }
})









// const onInput = (event) => {
//     if (inputRef.value === '') {
//         return outputRef.textContent = 'Anonymous'
//     } else {
//         return outputRef.textContent = event.currentTarget.value
//     }
// }


// const onStatusInput = () => 
// inputRef.addEventListener('focus', onInput)
// inputRef.addEventListener('blur', onInput)




// inputRef.addEventListener('input', (event) => {
//     if (inputRef.textContent === '') {
//         return outputRef.textContent = 'Anonymous'
//     } else {
//         return outputRef.textContent = event.currentTarget.value
//     }
// })




// inputRef.addEventListener('focus', onInput)
// inputRef.addEventListener ('blur', () => outputRef.textContent = 'Anonymous')
// const onInput = () => 