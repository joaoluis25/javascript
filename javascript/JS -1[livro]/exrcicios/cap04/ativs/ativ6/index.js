const frm = document.querySelector('form')
const resp1 = document.querySelector('h3#resp1')
const resp2 = document.querySelector('h3#resp2')

frm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const valor = Number(frm.inNum.value)
    let tempo = 0
    let troco = 0

    if (valor < 1){ //valores insuficientes
        resp1.innerText = 'Valor insuficiente para estacionar!'
    } else if (valor < 1.75){ 
        tempo = 30
        troco = valor - 1
        resp1.innerText = `Tempo: ${tempo}min.`
        resp2.innerText = `Troco: R$${troco.toFixed(2)}.`
    } else if (valor < 3) {
        tempo = 60
        troco = valor - 1.75
        resp1.innerText = `Tempo: ${tempo} min`
        resp2.innerText = `Troco: R$ ${troco.toFixed(2)}`
    } else {
        tempo = 120
        troco = valor - 3
        resp1.innerText = `Tempo: ${tempo} min`
        resp2.innerText = `Troco: R$ ${troco.toFixed(2)}`
    }

 
})