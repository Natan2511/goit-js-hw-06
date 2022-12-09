let categories = document.querySelectorAll(`li.item`);
console.log(`Number of categories: `, categories.length);

categories.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`)
});