const frm = document.querySelector('form')
const resp = document.querySelector('h4')

frm.addEventListener('submit', (e)=>{
    e.preventDefault()

    let cidadeA = Number(frm.inA.value)
    let cidadeB = Number(frm.inB.value)
    const taxaA = Number(frm.inTaxaA.value)
    const taxaB = Number(frm.inTaxaB.value)

    let anos = 0
    let resultado = ''

    while (cidadeA < cidadeB){
        anos++
        cidadeA = cidadeA + taxaA
        cidadeB = cidadeB + taxaB
        resultado += `Ano${anos}: A = ${cidadeA.toFixed(0)} | B = ${cidadeB.toFixed(0)}\n.`
    }

    resultado += `\n CidadeA ultrapassa a CidadeB em ${anos} anos.`
    resp.innerText = resultado

})