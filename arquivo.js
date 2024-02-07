const sorteio = document.querySelector(".botao-sortear"); //indo no HTML procurando por alguém

function cliqueiNoBotao(){

    const min = Math.ceil(document.querySelector(".num1").value); //pega o valor digitado no input
    const max = Math.floor(document.querySelector(".num2").value);

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

     document.querySelector(".numberSorteado").innerHTML = result;

}

sorteio.addEventListener("click", cliqueiNoBotao);

