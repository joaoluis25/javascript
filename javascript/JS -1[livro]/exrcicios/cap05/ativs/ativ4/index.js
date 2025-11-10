const frm = document.querySelector('form')
const resp = document.querySelector('h4')

frm.addEventListener('submit', (e)=>{
    e.preventDefault()

    const capivaras = Number(frm.inCap.value)
    const anos = Number(frm.inNum.value)

    if (capivaras >= 2){
        let quantidade = capivaras 
        let resposta = `Ano 1: ${quantidade} capivaras\n.`

        for (let i = 2; i <= anos; i++){
            quantidade *= 3
            resposta += `Ano ${i}: ${quantidade} capivaras\n.`
        }

        resp.innerText = resposta
    } else {
        resp.innerText = '⚠️ O numero inicial de capivaras deve ser pelo menos 2.'
    }
})