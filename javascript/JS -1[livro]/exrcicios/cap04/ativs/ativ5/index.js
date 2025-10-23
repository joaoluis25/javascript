const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const permitida = Number(frm.inVper.value)
    const condutor = Number(frm.inVcon.value)

    const velocidade = permitida * 1.2 

    //Anotar que quando voce estiver comparando dois valores (condutor e permitida) sempre  verificar se aquilo que voce esta comprando primeiro é o valor volatil ou não. Exemplo nesse codigo o correto em comparar a velocidade do condutor em relação a velocidade da via, e não a velocidade da via(valor fixo) com a velocidade do condutor(velocidade volatil), caso isso ocorra a um erro logico no codigo.

    if (condutor <= permitida){
        resp.innerText = 'Voce esta dentro do limite de velocidade da via!'
    } else if (condutor <= velocidade){
        resp.innerText  = `MULTA LEVE!`
    } else {
        resp.innerText = 'MULTA GRAVE!'
    }

})