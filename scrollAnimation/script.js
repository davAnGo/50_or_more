const boxes = document.querySelectorAll('.box');
window.addEventListener('scroll', checkBoxes);

checkBoxes()

function checkBoxes(){
    console.log(window.innerHeight);
    const triggerHeight = window.innerHeight / 5 * 4

    boxes.forEach(box =>{
        // this function returns data about the 'DOMrect' (rectangle) as well as data about its position in the viewport. In this specific case we are using it to get the tops location
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop<triggerHeight){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    })
}