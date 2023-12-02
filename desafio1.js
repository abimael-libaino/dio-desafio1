const prompt = require("prompt-sync")({sigint: true})
let xp = prompt("Por favor, diga a quantidade de Experiencia(xp):")
let nome = prompt("Por favor, me diga o nome do Héroi: ")
let nivel = ""
if(xp<1001){
 nivel = "Ferro"
} else if(xp>1000 && xp<2001){
    nivel = "Bronze"
} else if(xp>2000 && xp<5001){
    nivel = "Prata"
} else if(xp>6000 && xp<7001){
    nivel = "Ouro"
} else if(xp>7000 && xp<8001){
    nivel = "Platina"
} else if(xp>8000 && xp<9001){
    nivel = "Ascendente"
} else if(xp>9000 && xp<10001){
    nivel = "Imortal"
} else if(xp>10000){
    nivel = "Radiante"}
console.log("O Héroi de nome " + nome + " está no nível de " + nivel)