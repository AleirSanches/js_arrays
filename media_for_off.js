const notas =[7,8,7.7,9.1];

for ( let indice of notas){
   // console.log(indice);
}; 

const nota1= [1,4,7];
const nota2 = [ 8.1, 7.6, 9];
const nota3 = [ 6, 5.4,4];

const totalNotas= [ nota1, nota2, nota3];

//console.log(totalNotas);
let media = 0;
for ( let i= 0; i< totalNotas.length; i++){
    for ( let y = 0; y< totalNotas[i].length; y++ ){

        media+=totalNotas[i][y] / totalNotas[i].length;
    }
}

console.log(media);