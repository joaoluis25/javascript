const frm = document.querySelector('form')
const resp = document.querySelector('h4')

frm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const fruta = frm.inFruta.value
    const num = Number(frm.inNum.value)

    let resposta = ''
    for (let i = 1; i <= num; i++){
        resposta += fruta
        if (i < num) resposta += '*'
    }
    resp.innerText = resposta
})