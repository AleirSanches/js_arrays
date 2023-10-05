const nomes = ["Pedro", "Maria", "Tereza", " Tiago"];

nomes.forEach((aluno) =>{
    console.log(aluno);

});

function nomeAlunos(aluno){
    console.log(aluno);
}

nomes.forEach(nomeAlunos);