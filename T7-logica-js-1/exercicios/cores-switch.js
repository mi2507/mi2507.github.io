/*
Usando a estrutura SWITH, crie uma função que transforme quatro cores passadas por parâmetro em formato 'string', para os equivalentes hexadecimais.
Se a cor passada não estiver entre as que você selecionou, mostre a seguinte frase "Não temos o equivalente hexadecimal para [cor]".
*/

function quatroCores(cores) {
    switch (cores) {
        case 'yellow':
            console.log(" o exadecimal de " + cores + "é #FFFF00");
            break;
        
        case 'purple':
        console.log(" o exadecimal de " + cores + "é #800080");
        break;

        case 'blue':
        console.log(" o exadecimal de " + cores + "é ##0000FF");
        break;

        case 'red':
        console.log(" o exadecimal de " + cores + "é #FF0000");
        break;

        default:
            console.log("Não temos o equivalente hexadecimal para" + cores)
    }
}
