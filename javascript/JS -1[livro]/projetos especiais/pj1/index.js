const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
  e.preventDefault() // evita recarregar a página

  const horaAtual = Number(frm.inHora.value)
  const regiaoMoradia = frm.regMoradia.value
  const regiaoDestino = frm.regDestino.value

  // Se a pessoa escolher a mesma região:
  if (regiaoMoradia === regiaoDestino) {
    alert('O horário não se altera, pois você já está nessa região.')
    resp.innerText = `O horário continua o mesmo: ${horaAtual}:00`
    return
  }

  // Função para pegar o fuso de cada cor
  function getFuso(regiao) {
    switch (regiao) {
      case 'vermelho': return -5
      case 'amarelo': return -4
      case 'verde': return -3
      case 'azul': return -2
      default: return 0
    }
  }

  const fusoMoradia = getFuso(regiaoMoradia)
  const fusoDestino = getFuso(regiaoDestino)

  // Diferença de fuso entre regiões
  const diferenca = fusoDestino - fusoMoradia
  let novaHora = horaAtual + diferenca

  // Ajusta caso passe de 24h ou fique negativo
  if (novaHora >= 24) {
    novaHora -= 24
  } else if (novaHora < 0) {
    novaHora += 24
  }

  resp.innerText = `O horário na região ${regiaoDestino.toUpperCase()} será ${novaHora}:00`
})