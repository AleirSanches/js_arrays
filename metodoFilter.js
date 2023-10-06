const alunos = [ " Luiz", "Igor", "Alisom", "Rafael"];

const notas = [7.2, 8, 6.3, 10];

const reprovados = alunos.filter((_, indice) =>{
    return notas[indice]<7;
});

console.log(reprovados);