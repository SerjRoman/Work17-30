let nameUser = document.createElement('div');
let emailUser = document.createElement('div');
let passwordUser = document.createElement('div');

nameUser.innerHTML = 'чёта'
nameUser.style.background = 'yellow'
nameUser.className = 'nameUser common';

emailUser.innerHTML = 'чёта'
emailUser.style.background = 'red'
emailUser.className = 'emailUser common'

passwordUser.innerHTML = 'чёта'
passwordUser.style.background = 'blue'
passwordUser.className = 'passwordUser common'


document.body.append(nameUser)
document.body.append(emailUser)
document.body.append(passwordUser)
