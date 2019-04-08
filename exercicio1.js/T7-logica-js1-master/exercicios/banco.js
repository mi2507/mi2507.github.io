/*
Crie um objeto que simule uma conta corrente, com as seguintes chaves: nome, agencia, conta e saldo.
Depois, crie funções para depositar dinheiro, remover dinheiro, consultar saldo da conta e mostrar todos os dados da conta;
*/

var conta = {
    nome: "michelle",
    agencia:99,
    conta: 031,
    saldo: 1,
}

var depositarDinheiro = function (valor){
     var valor;
     conta.saldo= conta.saldo + valor ;
     //conta.saldo += valor; -> outra forma de usar .
     return conta.saldo;
}

var removerDinheiro = function (valor){
var valor;
conta.saldo = conta.saldo-valor;
 //conta.saldo -= valor; -> outra forma de usar .
return conta.saldo ;
}

var consultarSaldo = function () {
    console.log ("saldo: " + conta.saldo);
}

var mostrarTudo = function () {
    console.log ("nome:" + conta.nome);
    console.log ("nome:" + conta.agencia);
    console.log ("nome:" + conta.conta);
    console.log ("nome:" + conta.saldo);

}