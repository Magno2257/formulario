const colaborador = [
    {nome: "Beatriz", matricula: 4453169, trabalho: "Hábito ✅"}, 
    {nome: "Carlos Henrique", matricula: 4876523, trabalho: "Hábito ✅"}, 
    {nome: "Daniel", matricula: 7769723, trabalho: "Hábito ✅"}, 
    {nome: "Ana", matricula: 7490364, trabalho: "Pendentes ❌"}, 
    {nome: "Bruno", matricula: 7264923, trabalho: "Pendentes ❌"}, 
    {nome: "André", matricula: 7769723, trabalho: "Pendentes ❌"} 
];

const btn = document.getElementById('pesquisa');

btn.addEventListener("click", function (e) {
    e.preventDefault();

    const nomeOuMatricula = document.getElementById('busca').value;
    const colaboradorEcontrado = colaborador.find(colaborador =>
        colaborador.nome.toLowerCase() === nomeOuMatricula.toLowerCase() ||
        colaborador.matricula.toString() === nomeOuMatricula
    );

    if (colaboradorEcontrado) {
        resultado.textContent = `O treinamento de ${colaboradorEcontrado.nome} está ${colaboradorEcontrado.trabalho}`; 
    }
    else {
        resultado.textContent = `Colaborador não encontrado`;
    }
});





