const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e)=>{
    const pessoas = Number(frm.inPessoas.value)
    const peixes = Number(frm.inPeixes.value)

    let valor
    if (pessoas === peixes){
        valor = pessoas * 20
        resp.innerText = `O valor total da pescaria para ${pessoas} ficou R$${valor}.`
    } else if (peixes > pessoas){
        let valorextra
        valorextra = (peixes - pessoas) * 12
        valor = (pessoas * 20) + valorextra
        resp.innerText = `O total de peixes ${peixes} foi maior que o de pessoas ${pessoas} por isso teve um acrescimo na sua conta de R$${valorextra}, o total da sua conta é de R$${valor}.`
    }
    e.preventDefault()
})