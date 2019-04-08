var pessoa ={
    nome: "josi",
    idade: 22,
    aniversario :function () {
    pessoa.idade= pessoas.idade+1

    }
}

//crie uma função para converter bitcoin em reais 
// dada uma quantidade e uma cotação 

var conversao = function (){
var bitcoin = prompt ("quantos bitcoins voce quer converter");
var cotacao = prompt ("quantos reais valem um bitcoin hj");

var resultado = bitcoin * cotacao;
return resultado;
}