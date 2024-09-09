let proximoid = 1

function adicionarLinha () {
    const nome = document.getElementById ("nome") .value;
    const idade = document.getElementById ("idade") .value;
    const admissao = document.getElementById ("admissao") .value;
    const demissao = document.getElementById ("demissao") .value;
    
    if(nome === ''  ||  idade === '' || admimissao === '' || demissao ''){
        alert ("preencha os valores do formulario!")
    }
    const tabela = document.getElementById("tabeladados").getElementsByTagName('tbody') [0];

    const novaLInha = table.insertRow;

    const cellId = novaLInha.insertRow(0);
    const cellNome = novaLInha.insertRow(1);
    const cellIdade = novaLInha.insertRow(2);
    const cellAdmissao = novaLInha.insertRow(3);
    const cellDemissao = novaLInha.insertRow(4);

    cellId.innerHTML = proximoid;
    cellNome.innerHTML = nome;
    cellIdade.innerHTML = idade;
    cellAdmissao.innerHTML = admissao;
    cellDemissao.innerHTML = demissao;

    proximoid++
    document.getElementById("linhaform").reset () ;
}