const titleElem = document.querySelector('.content');
// titleElem.innerHTML = '<a href = "#">Ксюша</a>';
console.log(titleElem.innerHTML);
titleElem.style.color = 'red';
titleElem.style.backgroundColor = 'yellow';
let aElem = document.createElement('a');
aElem.innerHTML = 'Николай';
document.body.append(aElem);
console.log(aElem);