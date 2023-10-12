const salaJS = [7,8,4,7.8,10];
const salaJava = [2,6,7,5.6,7.9];
const salaPython = [9,8,7,8.3];

function calculaMedia(notaSala){
    const somaGeral= notaSala.reduce((acumulador, nota) => acumulador + nota, 0);
    const media = somaGeral /notaSala.length;
    return media;
}

console.log(' A média da sala de Java e  = '+ calculaMedia(salaJava));
console.log(' A média da sala de JS e  = '+ calculaMedia(salaJS));
console.log(' A média da sala de Python e  = '+ calculaMedia(salaPython));

