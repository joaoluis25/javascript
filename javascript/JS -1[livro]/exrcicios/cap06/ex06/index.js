const frm = document.querySelector('form')
const respErros = document.querySelector('#outErros')
const respChances = document.querySelector('#outChances')
const respDica = document.querySelector('#outDica')

const erros = [] //vetor de escopo global com numeros ja apostados 
const sorteado = Math.floor(Math.random() * 100) + 1 //numero aleatorio sorteado
const chances = 6 //numero maximo de chances para se jogar

frm.addEventListener('submit', (e)=>{
    e.preventDefault()

    const numero = Number(frm.inNum.value)
    if (numero == sorteado){ // se acertou
        respDica.innerText = `Parabens!! Numero sorteado: ${sorteado}`
        frm.btSubmit.disabled = true //troca status do botão
        frm.btNovo.className = "exibe"
    } else {
        if (erros.includes(numero)) { //se numero existe no vetor erros (já apostou)
            alert(`Voce ja apostou o numero ${numero}. Tente outro numero...`)
        } else {
            erros.push(numero) //adiciona numero a vetor
            const numErros = erros.length //obtem o tamanho do vetor
            const numChances = chances - numErros //calcula o numero de chances 
            //exibe o numero de erros, conteudo do vetor e numero de chances 
            respErros.innerText = numChances
            if (numChances == 0){
                alert('Suas chances acabaram...')
                frm.btSubmit.disabled = true
                frm.btNovo.className = "exibe"
                respDica.innerText = `Game Over! Numero sorteado: ${sorteado}`
            } else {
                // usa operador ternario para a mensagem de dica
                const dica = numero < sorteado ? 'maior' : 'menor'
                respDica.innerText = `Dica: Tente um numero ${dica} que ${numero}.`
            }
        }
    }
    frm.inNumero.value
    frm.inNumero.focus()
})

frm.btNovo.addEventListener('click', ()=>{
    location.reload()
})