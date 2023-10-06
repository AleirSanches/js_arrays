const notas= [8, 10, 7.8, 9.7, 8.4];

const notasAtualizadas =notas.map((nota) =>{ // metodo map não altera o Array origiral, por esse motivo criei uma variavel
    return nota+1 >=10? 10: nota+1;
});

console.log(notasAtualizadas);