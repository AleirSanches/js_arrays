const alunos= ["Aleir",
"Corol",
"João",
"Marina",
"Neia",
"Celio",];
console.log(alunos);
alunos.splice(2,2, "Sophia"); // remove o João que esta no inicice 2 e como o segundo paremetro e 2 removeo 2 valores no caso Marina, 
//e  adiciona Sophia no lugar

console.log(alunos);

const peixes =["Tubarão","Baleia","Golfinho", "Boto Rosa"];

peixes.splice(1,0,"Peixe Palhaço");

console.log(peixes);
peixes.splice(3,2, "Polvo");
console.log(peixes);

