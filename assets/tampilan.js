const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
const li = document.querySelector('nav ul li');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});
// li.addEventListener('click', function(){
//     nav.classList.value('klik');
// });