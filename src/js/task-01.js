const itemRef = document.querySelectorAll('.item')
console.log(`Number of categories: ${itemRef.length}`)

function onTitleName(arrayEl) {
    arrayEl.forEach(item =>
        {console.log(`Category: ${item.firstElementChild.textContent}`)
        console.log(`Elements: ${item.children[1].children.length}`)})
}
onTitleName(itemRef)

