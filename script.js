const titleElem = document.querySelector('.content');
// titleElem.innerHTML = '<a href = "#">Ксюша</a>';
console.log(titleElem.innerHTML);
titleElem.style.color = 'red';
titleElem.style.backgroundColor = 'yellow';
let aElem = document.createElement('a');
aElem.innerHTML = 'Николай';
document.body.append(aElem);
console.log(aElem);
aElem.href = "https://www.google.com/";
let inputElem = document.createElement('input');
// inputElem.innerHTML = 'Ксюша';
document.body.append(inputElem);
inputElem.type = "button";
inputElem.value = "Ксюша";
inputElem.setAttribute("Ярик", "yellow");
inputElem.getAttribute("Ярик");
console.log(inputElem.getAttribute("Ярик"));
// Неправильно
inputElem.Ярик = "blue";

// Дабавляет класс
inputElem.classList.add("Egogogor");
// Назначаем классы
inputElem.className = "Artur EhAndrey";
// Убирает класс
inputElem.classList.remove("Artur");
// console.log
// alert, confirm, prompt
// style - ...
// backgroundColor 
// createElement
// append
// innerHTML
// type,value,href 
// setAttribute
// getAttribute
// classList
// add,remove
// className