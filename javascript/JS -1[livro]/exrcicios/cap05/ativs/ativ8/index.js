const frm = document.querySelector('form')
const resp = document.querySelector('h4')

frm.addEventListener('submit', (e)=>{
    e.preventDefault()

    const num = Number(frm.inNum.value)
    let fatorial = 1
    let passos = ''

    for (let i = num; i > 1; i--){
        fatorial = fatorial * i
        passos = passos + i + 'x' //vai calculando os passos do 5 ao 1, porem na hora de escrever o passo ele so vai de 5 ate 2.
    }

    passos = passos + '1 = ' + fatorial //escreve o ultimo passo faltando [1] + escreve a resposta do calculo do fatorial dentro da tag [passos], que acaba se tornando o caminho + o resultado final.
    
    resp.innerText = `Calculo: ${passos}`
})