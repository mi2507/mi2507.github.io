var elogios = [
    "diva sem defeito",
    "não é o git hub, mas é um gatinho",
    "maquina de vencer",
    "universal",
    "icone encopmpreendido",
    "responsivo #SQN",
    "MARAVILINDO",
    "fada sensata",
    "cristal",
    "maravigold",
    "zero defeitos",
    "joia rara",
    "bombonzinho",
    "um nenem",
    "um pão",
];

function elogiar(){
    var random = Math.floor(Math.random() * elogios.length);
    document.getElementById("titulo").innerHTML = elogios[random];
}