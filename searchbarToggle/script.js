const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const icon = document.querySelector('.icon');
const input = document.querySelector('.input');

btn.addEventListener('click', ()=> {
    search.classList.toggle('active');
    input.focus();
})