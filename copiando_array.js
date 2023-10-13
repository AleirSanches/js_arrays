const numeros = [2,5,7,3,33];
//const numerosAlterados = numeros; // desta forma altera o array original
const numerosAlterados = [...numeros]; // desta forma o array numeros fica intecto e como se declararmos que 
//numnerosAlterados e = [2,5,7,3,33], o mesmo conteudo do array original desmenbrado.

numerosAlterados.push(50);

console.log(' O array de numeros e :'+ numeros);
console.log(' O array de numeros e :'+ numerosAlterados);