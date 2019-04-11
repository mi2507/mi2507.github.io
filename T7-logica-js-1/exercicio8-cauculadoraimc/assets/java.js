function calculoIMC() {
var peso = document.getElementById("peso").value;
var altura = document.getElementById("altura").value;
var resposta = document.getElementById("resposta");
var lugarGif = document.getElementById("lugarGif")
var gif;
var resultado = peso / (altura * altura)
var text;
var cssclass;


if (resultado < 18){
    text = "ta linda, linda ❤️"
    gif = `<img src="https://media.giphy.com/media/hrGBJwxreTNB0Px7Vd/giphy.gif" alt="">`
    cssclass = "linha1";
}


else if (resultado >=18 && resultado < 25){
    text = "eita, delicia! 😍"
    gif = `<img src="https://media.giphy.com/media/l0MYGjD0IYcmPGOcM/giphy.gif" alt="">`
    cssclass = "linha2";
}

else if (resultado >= 25 && resultado <30){
    text = "ooooo, que maravigold!💛"
    gif = `<img src="https://media.giphy.com/media/82qMxlJXU7CZ7KJrhe/giphy.gif" alt="">`
    cssclass = "linha3";
}

else if (resultado>=30 && resultado < 40){
    text= "divas sem defeitos!😻"
    gif = `<img src="https://media.giphy.com/media/14aUO0Mf7dWDXW/giphy.gif" alt="">`
    cssclass = "linha4";
}

else{
    text = "ai meu coração!💟"
    gif = `<img src="https://media.giphy.com/media/sjHvauKYiyqas/giphy.gif" alt="">`
    cssclass = "linha5";
}

resposta.innerHTML  = resultado.toFixed(2) + ' - ' + text;
resposta.className = cssclass;
lugarGif.innerHTML = gif;

}