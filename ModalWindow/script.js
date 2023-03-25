// Находи елемент с тегом "main"
const main = document.querySelector("main");
//Находи елемент с тегом ".modal-window"
const modalWindow = document.querySelector(".modal-window");
//Находи елемент с тегом ".close"
const closeButton = document.querySelector(".close");
//Находи елемент с тегом ".item-order form"
const orderForm = document.querySelector(".item-order form");
// Создаёт  функцию показует размытие 
function showCover(){
    // Создаём елемент с тегом "div"
    const cover = document.createElement("div");
    // Добавляем класс "cover"
    cover.classList.add("cover");
    // Добавляем в "main" размытие
    main.appendChild(cover);
}
// Создаём функцию прячит размытие окна
function hideCover(){
    // удаляем размытие
    document.querySelector(".cover").remove();   

}
// Создание функции showModalWindow
function showModalWindow(){
    // Присваивание flex свойству display у модального окна
    modalWindow.style.display = "flex";
    // Вызов функции showCover
    showCover();
}
// Создание функции hideModalWindow
function hideModalWindow(){
    // Присваивание none свойству display у модального окна
    modalWindow.style.display = "none";
    // Вызов функции hideCover
    hideCover();
}
// функція яка мінусує "count"
function minusCount(){
    if (+count.innerHTML > 1){
        +count.innerHTML --;
    }
}
// функція яка плюсує "count"
function plusCount(){
    +count.innerHTML ++;
}
// Додаємо івенти з функціями до елементів
// на івент якщо ми натискаємо
cart.addEventListener("click", showModalWindow );
closeButton.addEventListener("click", hideModalWindow );
minusButton.addEventListener('click', minusCount);
plusButton.addEventListener('click', plusCount);
// на івент який говорить що ми відправляємо форму
orderForm.addEventListener('submit', hideModalWindow);