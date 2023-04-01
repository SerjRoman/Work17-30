// Находит елемент с тегом modal-window
const modalWindow = document.querySelector('.modal-window');
// Находит елемент с тегом list-tasks
const ul = document.querySelector('.list-tasks')
// Создаёт функцию показует размытие
function showCover(){
    const cover = document.createElement('div');
    cover.classList.add('cover');
    document.body.appendChild(cover);
}
// Создаём функцию прячит размытие окна
function hideCover(){
    const cover = document.querySelector('.cover');
    cover.remove();
}
// Меняет дисплей на флекс и вызывает функцию showCover()
function showModalWindow(){
    modalWindow.style.display = 'flex';
    showCover();
}
// Меняет дисплей на none и вызывает функцию hideCover()
function hideModalWindow(){
    modalWindow.style.display = 'none';
    hideCover();
}
// создаём функция удаления таска
function deleteTask (event) {
    // создаём переменную в которой находится ли в котором мы нажали на крестик
    const target = event.target.closest('li');
    // удаляем таск
    target.remove();
}
// создаем функцию для создание задач
function createTask(){
    // проверки на пустоту полей
    if (nameTask.value == ''){
        alert("Поле ім'я порожнє")
    }else if (descriptionTask.value == ''){
        alert("Поле опису порожнє")
    }
    // создание елементов для задачи
    const li = document.createElement('li');
    const divText = document.createElement('div');
    const divDelete = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    // наполнение елементов задачи
    h1.innerHTML = nameTask.value;
    p.innerHTML = descriptionTask.value;
    divDelete.innerHTML = '&Cross;';
    // добавление классов для елементов задач
    li.classList.add('task')
    divText.classList.add('text-task')
    divDelete.classList.add('delete-task')
    // добавление действия удаления при нажатие на divDelete
    divDelete.addEventListener('click', deleteTask)
    // обьеденения всех елементов
    divText.append(h1)
    divText.append(p)
    li.append(divText);
    li.append(divDelete);
    ul.append(li)
    // закрытия модального окна
    hideModalWindow()
}
// Додаємо івенти з функціями до елементів
// на івент якщо ми натискаємо
buttonModalWindow.addEventListener('click', showModalWindow);
buttonCreateTask.addEventListener('click', createTask);

// 
for (let batton of document.querySelectorAll('.delete-task')){
    batton.addEventListener('click', deleteTask);
}

