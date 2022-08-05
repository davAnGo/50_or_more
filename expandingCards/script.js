// start by setting a variable that retreives all of the divs
// we specifically use querySelectorAll so that we can get all the panels and pu them into a node list
const panels = document.querySelectorAll('.panel')

// using the forEach (high order array method) method to loop through the panels
// we want to loop through the panels in order add an event listener to each one and to remove the active class from each panel 
// then at the end of this function we will add back the active class to the panel that was clicked thus giving it the properties built in the style page 
panels.forEach((panel) => {
    panel.addEventListener('click', () =>{
        removeActiveClass()
        panel.classList.add('active')
    })
})

function removeActiveClass(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

