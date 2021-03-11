'use strict'
//объявляю переменные
let bookParent = document.querySelectorAll('.books');
let book = document.querySelectorAll('.book');
let adv = document.querySelector('.adv');
let li = document.querySelectorAll('li');
let a = document.querySelectorAll('a');

//console.log(li);
//console.log(book);
//делаю правильный порядок книг
bookParent[0].append(book[2]);
bookParent[0].prepend(book[1]);
book[3].before(book[4]);

//заменяю картинку
document.body.style.backgroundImage = 'url(image/you-dont-know-js.jpg)';

//изменяю заголовок
a[4].textContent = 'Книга 3. this и Прототипы Объектов';

//делаю правильный порядок в списке
li[3].after(li[6]);
li[6].after(li[8]);
li[9].after(li[2]);
li[54].before(li[51]);
li[47].after(li[55]);
li[52].after(li[48]);
li[50].after(li[48]);

//делаю adblock
adv.remove();

//добавляю элемент в 6 книгу
const newElem = document.createElement('li');
newElem.textContent = 'Глава 8: За пределами ES6';
li[25].insertAdjacentElement('beforeend', newElem);