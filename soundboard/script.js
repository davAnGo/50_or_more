const sounds = ["Song Of Time", "Inverted Song of Time", "Double Song of Time", "Song of Healing", "Epona's Song", "Song of Soaring", "Song of Storms", "Sonata of Awakening", "Goron Lullaby", "New Wave Bossa Nova", "Elegy of Emptiness", "Oath to Order"];

// sounds.forEach(sound => {
//     const btn = document.createElement('button')
//     btn.classList.add('btn')

//     btn.innerText = sound

//     document.getElementById('buttons').appendChild(btn)
// })
for(let i = 0; i<sounds.length; i++){
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sounds[i];
    document.body.appendChild(btn);
    
    btn.addEventListener('click', ()=>{
        stopSongs();

        document.getElementById(sounds[i]).play();
        btn.style.animation = 'buttonAnimation 4s 10';
        console.log("should be playing");
    })
}

function stopSongs(){
    for(let i = 0; i<sounds.length; i++){
        const song = document.getElementById(sounds[i]);
        song.pause();
        song.currentTime = 0;
    }
}