// PROGRAMA DECRESCENTE SUBSTITUINDO FOR[PARA] POR WHILE[ENQUANTO]

const frm = document.querySelector('form')
const resp = document.querySelector('h4')

frm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const numero = Number(frm.inNum.value)
    const decrescente = Number(frm.inDec.value)

    let resposta = `Entre ${numero} e 1: ${numero},`
    let i = numero - 1

    
    while (i > 0){
        resposta = resposta + i +','
        i = i - decrescente
    }    

    resp.innerText = resposta

})