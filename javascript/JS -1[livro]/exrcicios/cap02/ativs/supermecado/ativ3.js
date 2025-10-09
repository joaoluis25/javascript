const frm = document.querySelector('form')
const resp1 = document.querySelector('#outResp1') //promoção
const resp2 = document.querySelector('#outResp2') //terceiro produto

frm.addEventListener('submit' , (e) =>{
    const produto = frm.inNome.value
    const valor = Number(frm.inPreco.value)

    const terceiro = valor / 2
    const total = (valor * 2) + terceiro

    resp1.innerText = `${produto} - Promoção: Leve 3 por R$:${total.toFixed(2)}`
    resp2.innerText = `O terceiro produto sai por apenas R$:${terceiro.toFixed(2)}`

    e.preventDefault()
})