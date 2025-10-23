const frm = document.querySelector('form')
const resp1 = document.querySelector('h3')
const resp2 = document.querySelector('h4')

frm.addEventListener('submit' , (e) =>{
    e.preventDefault()
    const nome = frm.inName.value //nome do aluno
    const num1 = Number(frm.inNota1.value) //nota 1 
    const num2 = Number(frm.inNota2.value) // nota 2 
    const s = (num1 + num2) / 2

    resp1.innerText = `A média do aluno/a ${nome} foi de ${s.toFixed(1)}`
    /* 
    codigo somente com 2 condições
    if ( s >= 7 ){
        resp2.innerText = 'O aluno/a foi APROVADO!'
        resp2.style.color = 'blue'
    } else {
        resp2.innerText = 'O aluno/a foi REPROVADO!'
        resp2.style.color = 'red'
    }
    */

    if ( s >= 7 ){
        resp2.innerText = 'O aluno/a foi APROVADO!'
        resp2.style.color = 'blue'
    } else if(s >= 5){
        resp2.innerText = 'O aluno/a esta de RECUPERAÇÃO!'
        resp2.style.color = 'green'
    } else {
        resp2.innerText = 'O aluno/a foi REPROVADO!'
        resp2.style.color = 'red'
    }
})