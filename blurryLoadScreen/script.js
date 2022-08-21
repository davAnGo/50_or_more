const percentage = document.querySelector('.loading-text');
const background = document.querySelector('.bg');
let loadTime = 0;


//setting the setInterval function with our functions specific parameters to a variable that we can manipulate later. The entire function will run off of the iteration of this interval
// these parameters are the function that you are calling and the frequency in which you are calling it. this is in milliseconds 
let interval = setInterval(blurring, 30);

function blurring(){
    loadTime = loadTime +1;

    // conditional statement set to call the end of the setInterval function as it reaches 100 iterations 
    if (loadTime > 99){
        clearInterval(interval);
    }
    // changes count according to load
    percentage.innerText = `${loadTime}%`;
    // changes opacity to fade out text as blur goes away and load reaches 100
    percentage.style.opacity = scale(loadTime, 0, 100, 1, 0);
    background.style.filter = `blur(${scale(loadTime, 0, 100, 30, 0)}px)`;
    console.log(loadTime);
}




// mapping a range of numbers to a different range of other numbers using a function found on stack over flow. 
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}