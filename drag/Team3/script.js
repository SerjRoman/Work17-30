// Алексей  создания функции класлита и селектора
function startDrag(event){
    // 
    event.target.classList.add("selected");
    // 
    event.dataTransfer.setData("html/div", event.target.innerHTML);
}//?
function endDrag(event){
    document.querySelector(".selected").classList.remove("selected");
}//наводит на функцию 
function enterDrag(event){
    if (event.target.tagName === "div" && event.target.classList.contains("selected")) {
        event.target.classList.add("drop");
    }
    else{
        event.target.closest("div").classList.add("drop");
    }
    
}
function leaveDrag(event){
    if (document.elementFromPoint(event.clientX, event.clientY).classList.contains("box")){
        document.querySelector(".drop").classList.remove("drop");
    }
}
// Создание функции без которой не сработает функция dropDrag
function overDrag(event){
    // Отмена действие по умолчанию
    event.preventDefault();
}
// Создание функции для сброса элемента
function dropDrag(event){
    // создание переменной и записывание в неё передоваемые данные
    let data = event.dataTransfer.getData("html/div");
    // создание переменной и записывание в неё елемент который держим
    let holding = document.querySelector(".selected");
    // создание переменной и записывание в неё елемент на который мы наводимся
    let current = document.querySelector(".drop");
    // изменение данных между зажатым елементом и на который наводимся
    [holding.innerHTML, current.innerHTML] = [current.innerHTML, data];
    
}
// создание nodeList со всеми елементами с классом language
let listBlocks = document.querySelectorAll('.language');


for ( let block of listBlocks ) {
    block.addEventListener('dragstart', startDrag);
    block.addEventListener('dragend', endDrag);
    block.addEventListener('dragover', overDrag);
    block.addEventListener('dragleave', leaveDrag);
    block.addEventListener('drop', dropDrag);
    block.addEventListener('dragenter', enterDrag);
}