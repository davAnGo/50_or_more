const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');
const marvelVote = document.getElementById('marvelVote');
const dcVote = document.getElementById('dcVote');

let dcCounter = document.querySelector('.dcCounter');
let marvelCounter = document.querySelector('.marvelCounter');

function addToDCCount(){
    console.log(dcCounter.innerHTML++);
}
function addToMarvelCount(){
    console.log(marvelCounter.innerHTML++);
}

left.addEventListener('mouseenter', () => container.classList.add('hover-left'));
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'));
right.addEventListener('mouseenter', () => container.classList.add('hover-right'));
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'));