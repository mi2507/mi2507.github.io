// Crie uma função com dois argumentos, que retorna a subtração deles.
?function nome() { }
// ou //
var nome = function () { }

// -->> function é um bloco de código que pode ser chamado .

function nome(argumento1, argumento2) {
    returne argumento1 - argumento2;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando "5" ao resultado retornado da função.
?var x = sub(50, 5) + 5

    // Qual o valor atualizado dessa variável?
    ? 50

        // Declare uma nova variável, sem valor.
        ? var michelle;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a seguinte mensagem:
    "O novo valor da minha variável agora é VALOR."
    (onde VALOR é o novo valor da variável).
*/
function nome(x) {
    var string = "O novo valor da minha variável agora é "
    return string + x
}

michelle = 15;
function chamaMichelle() {
    michelle = 15
    console.log("o novo valor da minha variavel é " + michelle);
}



// Invoque a função criada acima.
?

// Qual o retorno da função? (Use comentários de bloco).
?

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando "2" ao resultado da multiplicação.
*/
?

function nome(arg1, arg2, arg3) {
    if (arg1 == undefined || arg2 == undefined || arg3 == undefined) {
        console.log("preencha todos os valores corretamente")
    }

    else {
        return arg1 * arg2 * arg3 + 2;
    }
}


// Invoque a função criada acima, passando só dois números como argumento.
?imprimi("preencha todos os valores corretamente")

    // Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
    ?
    nome(1, 1, 1)
3
nome(2, 2, 2)
10
nome(2, 5)
preencha todos os valores corretamente

    // Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
    ?

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
?

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne "entrou no if".
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano "false".
6. E ainda, se nenhuma das condições acima forem atendidas, retorne "null".
*/
?
            function tres(x, y, z) {
                // Se somente um argumento for passado, retorne "entrou no if//
                if (x && !y && !z) {
                    console.log("entrou na primeira condicao")
                }

                // Se dois argumentos forem passados, retorne a soma dos dois argumentos.//
                else if (x, y && !z) {
                    console.log("entrou na segunda condicao")
                    console.log(x + y)
                }

                else if (x, y, z) {
                    //  Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.//
                    console.log((x + y) / 2)
                }


                else if (x == undefined && y == undefined && z == undefined) {
                    //Se nenhum argumento for passado, retorne o valor booleano "false"//
                    console.log(false)
                }
                else {
                    console.log(null)
                }

            }



// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.