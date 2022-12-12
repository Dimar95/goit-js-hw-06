const inputRef = document.querySelector('input[data-length="6"]');

inputRef.addEventListener('blur', () => {
    if (inputRef.value.length == inputRef.dataset.length) {
        checkClass();
        return inputRef.classList.add('valid')
    } 
    checkClass();
    return inputRef.classList.add('invalid');
})

function checkClass() {
    if (inputRef.classList.contains('valid')) {
        inputRef.classList.remove('valid')
    } else if (inputRef.classList.contains('invalid')) {
        inputRef.classList.remove('invalid')
    }
    return
}
