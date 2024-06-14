const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo")
const contador = document.querySelectorAll(".contador")
contador[0].textContent= "ola"
const tempoObjetivo1 = new Date(2028,06,23,12,17)
const tempoObjetivo2 = new Date(2028,08,06,)
const tempoobjetivo3 = new Date (06)
const tempoobletivo4= new Date ()

for (let i = 0 ; i < botoes.length ; i++){
    botoes[i].onclick = function (){
        for (let j = 0; j <c botoes.length ; j++){
            botoes[j].classList.remove("ativo")
            conteudo[j].classList.remove("ativo")
        }
        botoes[i].classList.add("ativo")
        conteudo[i].classList.add("ativo")
    }
}
