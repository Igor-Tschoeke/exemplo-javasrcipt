alert('Ola Mundo')
confirm('Deseja receber este vírus?')

function concatenar() {
    var campoNome = document.getElementById("nome");
    var campoSobrenome = document.getElementById("sobrenome");

    var nome = campoNome.value;
    var sobrenome = campoSobrenome.value;

    var nomeCompleto = nome + " " + sobrenome;
    alert('Nome Completo: ' + nomeCompleto);
}