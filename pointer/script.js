// Создание переменной и присвоение ей отловленого елемента с классом side-menu
const sideMenu = document.querySelector(".side-menu");
// Создание функции отображения меню
function overMenu(event){
    // Создание переменной включающюю елемент переданый от event
    let elem = event.target;
    // Изменение непрозрачности елемента
    elem.style.opacity = 1;
}
// Создание функции скрытия меню
function hideMenu(event){
    // Создание изменяемой переменной с элементом на который навелись с другого элемента
    let elem = event.relatedTarget;
    // Создание изменяемой переменной с ближайшим родительским элементом или сам элемент
    let parentDivElem = elem.closest('div');
    // Проверка с условием, что если ближайший родительский клас не "side-menu"
    if (!parentDivElem.classList.contains('side-menu')){
        // Если проверка прошла, то изменяем непрозрачность элемента на котором произошло событие
        event.target.style.opacity = 0;
    // Фигурная скобка закрывающая блок проверки "if"
    }
}
// Добавляем собьтие pointerover которое запускает функцию overMenu 
sideMenu.addEventListener("pointerover", overMenu);
// Добавляем собьтие pointerout  которое запускает функцию hideMenu  
sideMenu.addEventListener("pointerout", hideMenu);
