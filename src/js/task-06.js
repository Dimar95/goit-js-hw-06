const inputRef = document.querySelector('input[data-length="6"]');
inputRef.addEventListener('blur', () => {
    if (inputRef.value.length == inputRef.dataset.length) {
        return inputRef.classList.add('valid')
    } 
        return inputRef.classList.toggle('invalid')
})
