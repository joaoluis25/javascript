const frm = document.querySelector('form')
const resp = document.querySelector('h4')

frm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const numero = Number(frm.inNum.value)
    const decrescente = Number(frm.inDec.value)

    let resposta = `Entre ${numero} e ${decrescente}:`
    for(let i = numero; i > 0; i = i - decrescente){
        resposta = resposta + i + ',' 
    }
    resp.innerText = resposta
})