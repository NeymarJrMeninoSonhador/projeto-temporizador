const tempo = document.getElementById('tempo')

let tempoRestante = 60

setInterval(() =>{
    
    tempo.innerText = `${tempoRestante} segs`
    tempoRestante = tempoRestante - 1
}, 1000)