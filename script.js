const resultado = document.querySelector('.resultado')
const humanScore = document.querySelector('#score-humano')
const machineScore = document.querySelector('#score-maquina')

let humanScoreNumber = 0
let machineScoreNumber = 0

//ESCOLHA DO USUÁRIO, CHAMANDO ESCOLHA DO USUÁRIO E ESCOLHA DA MÁQUINA 
const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

//ESCOLHA DA MÁQUINA
const playMachine = () => {
    const choices = ['pedra', 'papel', 'tesoura']
    const randomNuber = Math.floor(Math.random() * 3)
    return choices[randomNuber]
}

//LÓGICA DO JOGO APLICADA EM UMA FUNÇAO
const playTheGame = (human, machine) => {
    console.log('Humano ' + human + ' Maquina ' + machine)

    if (human === machine) {
        resultado.innerHTML = "EMPATE!"
    } else if (
        (human === 'papel' && machine === 'pedra') ||
        (human === 'pedra' && machine === 'tesoura') ||
        (human === 'tesoura' && machine === 'papel')
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        resultado.innerHTML = `VOCÊ GANHOU! MÁQUINA ESCOLHEU ${machine.toUpperCase()}`
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        resultado.innerHTML = `VOCÊ PERDEU! MÁQUINA ESCOLHEU ${machine.toUpperCase()}!`
    }
}