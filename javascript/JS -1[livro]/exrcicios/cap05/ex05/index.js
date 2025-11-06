const frm = document.querySelector('form')
const resp1 = document.querySelector('pre#resp1')
const resp2 = document.querySelector('pre#resp2')

let resposta = ''
let numContas = 0
let total = 0

frm.addEventListener('submit' ,(e)=>{
    e.preventDefault()

    const desc = frm.inConta.value
    const valor = Number(frm.inVal.value)

    numContas++
    total = total + valor
    resposta = resposta + desc + '- R$:' + valor.toFixed(2) + '\n'
    resp1.innerText = `${resposta} ---------------------------`
    resp2.innerText = `${numContas} Contas(s) - Total R$: ${total.toFixed(2)}`

    frm.inConta.value = ''
    frm.inVal.value = ""
    frm.inConta.focus()
})