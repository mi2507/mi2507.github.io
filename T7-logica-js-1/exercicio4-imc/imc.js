function calcularIMC(){
    var altura = prompt ("qual a sua altura");
    var peso = prompt ("qual seu peso");
    var calculo= (peso/ (altura * altura));


if ( calculo <18.5){
    alert ("voce esta abaixo de seu peso. Seu indice é: " + calculo);
}

else if (calculo >=18.5 && calculo<24.9){
    alert("voce esta normal . seu indice é : " + calculo);
}

else if (calculo >=25 && calculo<29.9){
    alert("voce esta comm sobre peso. seu indice é : " + calculo);
}

else {
    alert("voce esta com obesidade . seu indice é : " + calculo);
}


}
