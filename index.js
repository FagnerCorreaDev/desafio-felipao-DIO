// Desafio Felipão DIO: 
// Crie uma variável para armazenar o nome e a quantidade de experiência(XP), de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000 = Imortal
// Se XP for maior que 10.001 = Radiante

//  SAÍDA
// "O herói de nome **{nome}** está no nível de **{nível}**"

let heroi = ["Fagner", 0]
let terminar = false

while (heroi[1] <= 10001) {
    heroi[1] += 500;


    if (heroi[1] < 1000) {
        console.log("O herói de nome " + heroi[0] + " está no nível Ferro");
    } else if (heroi[1] >= 1000 && heroi[1] <= 2000) {
        console.log("O herói de nome " + heroi[0] + " está no nível Bronze");
    } else if (heroi[1] >= 2001 && heroi[1] <= 5000) {
        console.log("O herói de nome " + heroi[0] + " está no nível Prata");
    }
    else if (heroi[1] >= 5001 && heroi[1] <= 7000) {
        console.log("O herói de nome " + heroi[0] + " está no nível Ouro");
    }
    else if (heroi[1] >= 7001 && heroi[1] <= 8000) {
        console.log("O herói de nome " + heroi[0] + " está no nível Platina");
    }
    else if (heroi[1] >= 8001 && heroi[1] <= 9000) {
        console.log("O herói de nome " + heroi[0] + " está no nível Ascendente");
    }
    else if (heroi[1] >= 9001 && heroi[1] <= 10000) {
        console.log("O herói de nome " + heroi[0] + " está no nível Imortal");
    } else {
        console.log("O herói de nome " + heroi[0] + " está no nível Radiante");
    }
}
