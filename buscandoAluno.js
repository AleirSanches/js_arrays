const alunos = ["Pedro", "Gisela", "Vinicius", "Erika"];
const notas = [8,10,7.5,9.8];

const turma = [alunos, notas];

function buscandoAlunoMedia(aluno){
    if (turma[0].includes(aluno)){
     const indice = turma[0].indexOf(aluno);
     const media = turma[1][indice];
     console.log( "O aluno "+ aluno + ' tem a média ' + media)
    }
    else {
        console.log(" Aluno não encontrado")
    }
}

buscandoAlunoMedia("Gisela")

