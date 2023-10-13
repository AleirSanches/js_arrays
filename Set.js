const nomes = ['Aleir', 'João', 'Marina','Marina','Marina', 'Carol', 'Carol', 'Carol', 'Aleir'];

const meuSet = new Set(nomes); // metodo Set não deixa repetir elementos de nomes(array que foi passada como parametro)
 
const meuSet2 = [...new Set(nomes)]; // trandorma o Set direto o Array usando ...sprint desgragmentando



console.log(meuSet);
console.log(meuSet2);
