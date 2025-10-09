const frm = document.querySelector('form')
const resp1 = document.querySelector('#outResp1') //promoção
const resp2 = document.querySelector('#outResp2') //total
const resp3 = document.querySelector('#outResp3')//desconto

frm.addEventListener('submit' , (e) => {
    const remedio = frm.inRemedio.value
    const preco = Number(frm.inPreco.value)

    const promocao =   Math.floor(preco * 2) //valor da promoção
    const total = preco * 2 //valot total do produto
    const desconto = total - promocao //valor do desconto dado
    resp1.innerText = `Na promoção o medicamento ${remedio} fica R$${promocao.toFixed(2)}`
    resp2.innerText = `Valor total do medicamento é de R$${total.toFixed(2)}`
    resp3.innerText = `Valor do desconto dado é de R$${desconto.toFixed(2)}`
    
    e.preventDefault()
})