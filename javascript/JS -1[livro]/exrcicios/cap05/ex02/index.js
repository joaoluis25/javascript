const frm = document.querySelector('form')
const resp = document.querySelector('h4')

frm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const numero = Number(frm.inNum.value)
    const decrescente = Number(frm.inDec.value)
    /*
    FORMA INICIAL DE SE RESOLVER POREM FICA SOBRANDO UM ',' AO FINAL DA LISTAGEM DE NUMEROS, OQUE GERA ESTRANHESA E DEIXA A RESPOSTA FEIA.

    let resposta = `Entre ${numero} e ${decrescente}:`
    for(let i = numero; i > 0; i = i - decrescente){
        resposta = resposta + i + ',' 
    }
    */
   // CORRIGINDO O PROBLEMA DA VIRGULA
   let resposta = `Entre ${numero} e 1: ${numero}`
   for (let i = numero - 1; i > 0; i = i - decrescente){
    resposta = resposta + ',' + i
   }
    resp.innerText = resposta

})