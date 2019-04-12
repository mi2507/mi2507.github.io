function palindromo(){
    var palavra = document.getElementById("input").value.toLowerCase();
    var resposta = document.getElementById("resposta");

    for(var i = 0; i < palavra.length; i++){
     if(palavra[i] !== palavra[palavra.length -1 -i]) {
         resposta.innerHTML = "Não é 😔"

     }
     else{
         resposta.innerHTML = "SIM !!! 😀"
     }

    }

}