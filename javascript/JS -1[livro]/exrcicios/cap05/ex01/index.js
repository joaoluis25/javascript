const frm = document.querySelector('form')
const resp = document.querySelector('pre')

frm.addEventListener('submit', (e)=>{
    const numero = Number(frm.inNum.value)
    const repeticao = Number(frm.inRep.value)
    let resposta = ''
    for (let i = 1; i <= repeticao; i++){
        resposta = resposta + numero + 'x' + i + '=' + (numero * i) + '\n'
    }
    resp.innerText = resposta
    e.preventDefault()
})