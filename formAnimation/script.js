// javascript is going to be used to turn each letter in the labels into individual spans that will transition in a astaggered time

const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) =>`<span style="transition-delay:${idx * 50}ms" >${letter}</span>`)
        .join('')

})