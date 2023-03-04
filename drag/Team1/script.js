// когда начинаем перетягивать елемент
function startDrag(event) {
    // елемент котрый мы держим добавляем клас Selecred
    event.target.classList.add('selected');
    // Передаём данные содержимого html на которого мы перевелись
    event.dataTransfer.setData('html', event.target.innerHTML)
}
// Завершение перетягивания елеманта
function endDrag(event) {
    // елемент котрый мы держим добавляем клас Selecred
    const deleteElement = document.querySelector('.selected');
    // Удаляет клас елементу который мы перетягиваем
    deleteElement.classList.remove('selected');

}
// ???
function enterDrag(event) {
    // 
    const element = event.target.closest('div');
    // елемент котрый мы держим добавляем клас Selecred
    const drag = document.querySelector('.selected')
    if (element != drag){
        element.classList.add('drop')
    }
}
// Когда перетягиваемый елемент покидает область
function leaveDrag(event) {
    const position = document.elementFromPoint(event.clientX, eventClientY);
    
    if (position.classList.contains('container')){
        const elementTaken = document.querySelector('.drop');
        elementTaken.classList.remove('drop');
    }
}
// 
function overDrag(event) {
    event.preventDefault()
}

// Artur
// создаёться функция dropDrag
function dropDrag(event) {
    // передаём в переменную елементы с классом .drop
    const elementTaken = document.querySelector('.drop');
    // передаём в переменную полученные данные
    const data = event.dataTransfer.getData('html');
    // передаём в переменную елементы с классом .selector
    const selectedElement = document.querySelector('.selected');
    
    // переносим данные с того что переносим к елементу на который мы навелись
    selectedElement.innerHTML = elementTaken.innerHTML;
    // короче тоже самое что и в 50 строке, только наоборот
    elementTaken.innerHTML = data;
}
// переменная в которой находится все елементы с классом .coding

let listBlocks = document.querySelectorAll('.coding')
// начинаем перебирать елементы с переменной listBlock
for (let block of listBlocks) {
    // добавляет события к елементам
    block.addEventListener('dragstart', startDrag);
    block.addEventListener('dragend', endDrag);
    block.addEventListener('dragenter', enterDrag);
    block.addEventListener('dragleave', leaveDrag);
    block.addEventListener('drop', dropDrag);
    block.addEventListener('dragover', overDrag);
}