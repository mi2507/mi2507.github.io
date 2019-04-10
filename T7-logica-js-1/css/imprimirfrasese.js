var frases= [
    "nao sei.",
    "to tentanto aprender.",
    "vou conseguir.",
    "ja deu tudo certo.",
    "ja sei programar.",
    "agora sou analista.",
];

function sorteio() {

    var random = Math.floor(Math.random()*6);
    document.getElementById('pergunta').innerHTML= frases[random];
};

var fotos =[
    `<img src="./img/img1.jpg" alt="todas as imagens">`,
    `<img src="./img/img2.png" alt="todas as imagens">`,
    `<img src="./img/img3.jpg" alt="todas as imagens">`,
    `<img src="./img/img4.jpeg" alt="todas as imagens">`

];

function sorteiofotos() {

    var random = Math.floor(Math.random()*4);
    document.getElementById('img').innerHTML= fotos[random];
};
