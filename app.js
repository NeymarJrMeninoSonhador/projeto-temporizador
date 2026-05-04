const tempo = document.getElementById('tempo')
const diminuirBtn = document.getElementById('diminuir')
const aumentarBtn = document.getElementById('aumentar')
const valorAtualInput = document.getElementById('valor-atual')

let tempoRestante = 60
let valorAtual = 75

diminuirBtn.addEventListener('click' , () => {
    if(valorAtual - 10 <= 0){
        valorAtual = 1
    } else {
        valorAtual -= 10
    }

    valorAtualInput.value = valorAtual

})

aumentarBtn.addEventListener('click' , () => {
valorAtual += 10

   valorAtualInput.value =valorAtual
})

setInterval(() =>{
    
    tempo.innerText = `${tempoRestante} segs`
    tempoRestante = tempoRestante - 1
}, 1000)