const estudantes = ["Pedro", "Gisela", "Vinicius", "Erika"];
const notas = [8,10,7.5,9.8];

const turma = [estudantes, notas];

function buscandoAlunoMedia(aluno){
    if (turma[0].includes(aluno)){
     //const alunos = turma[0];
     //const media = turma[1];
     const [alunos, media] = turma; // esta forma funciano igual as de cima
     const indice = alunos.indexOf(aluno);
     
     const mediaAluno = media[indice];
     console.log( "O aluno "+ aluno + ' tem a média ' + mediaAluno)
    }
    else {
        console.log(" Aluno não encontrado")
    }
}

buscandoAlunoMedia("Vinicius")
