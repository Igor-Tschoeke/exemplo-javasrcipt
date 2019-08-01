tarefas = [];

function salvar(e) {
    //13 é codigo do enter no no teclado
    if (e.keyCode == 13) {
        adicionar();
    }
}


function adicionar() {
    var campoNome = document.getElementById("nome");
    var nome = campoNome.value;
    valido = validar(nome, campoNome)
    if (valido == false) {
        // mostrar feedback
        return;
    }
    var elementoTr = document.createElement("tr");
    var elementoIdNome = document.createElement("td");
    elementoIdNome.innerHTML = nome;

    var elementoTdAcao = document.createElement("td");
    //add botões na coluna ação
    var elementoBotaoEditar = document.createElement("button");
    elementoBotaoEditar.innerHTML = "Editar";
    elementoBotaoEditar.classList.add("btn", "btn-primary", "mr-2");

    var elementoBotaoApagar = document.createElement("button");
    elementoBotaoApagar.innerHTML = "Apagar";
    elementoBotaoApagar.classList.add("btn", "btn-danger")

    elementoTdAcao.appendChild(elementoBotaoApagar);
    elementoTdAcao.appendChild(elementoBotaoEditar);

    elementoTr.appendChild(elementoIdNome);
    elementoTr.appendChild(elementoTdAcao);

    document.getElementById("registros").appendChild(elementoTr);
    tarefas.push(nome);
    limparCampos(campoNome);

    atualizarQuantidade();
}

function apagar() {

}

function preencherCampo() {

}

function editar() {

}

function atualizarQuantidade() {
    document.getElementById("quantidade").innerHTML = tarefas.length;

}

function limparCampos(campo) {
    campo.value = "";
    campo.focus();
}

function validar(nome, campo) {

}