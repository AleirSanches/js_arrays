const notas = [8,10,7.5,9.8];
let media=0;
notas.forEach( function (nota, indice){
    console.log( indice+"="+ nota);
    media+=nota;
    
})
console.log(' A media e igual a '+media/notas.length);