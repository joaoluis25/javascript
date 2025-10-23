const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit' , (e)=>{
    e.preventDefault()
    const valor = Number(frm.inTotal.value)

    const aux = Math.floor(valor/20)

    let parcelas
    if (aux === 0){
        parcelas = 1
    } else if (aux > 6){
        parcelas = 6
    } else {
        parcelas = aux
    }

    const valortotal = valor/parcelas

    resp.innerText = `Pode pagar em ${parcelas}x de R$: ${valortotal.toFixed(2)}.`
})