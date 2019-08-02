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

    elementoBotaoApagar.onclick = apagar;

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

var confirmacao = confirm('Deseja realmente apagar?');
if(confirmacao == true){
var elemento = event.target;
var elementoTd = elemento.parentNode;
var elementoTr = elementoTd.parentNode;
var elementoBody = elementoTr.parentNode;
elementoBody.removeChild(elementoTr);
console.log(elemento)
}
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
    texto = '';
    if (nome.trim().length == 0) {
        texto = 'Nome deve ser preenchido';
    }
    else if (nome.trim().length < 3) {
        texto = 'Nome deve ter no minimo 3 caracteres';
    }
    else if (nome.trim().length > 20) {
        texto = 'Nome deve ter no máximo 20 caracteres';
    }

    var elementos = document.getElementsByClassName('span-erro');
    for (var i = 0; i < elementos.length; i++) {
        var elemento = elementos[i];
        var elementoPai = elemento.parentNode;
        elementoPai.removeChild(elemento);
    }

    if (texto != '') {
        campo.classList.add('border-danger', 'text-danger');
        var spanErro = document.createElement('span');
        spanErro.innerHTML = texto;
        spanErro.classList.add('span-erro', 'text-danger', 'font-weight-bold')



        var elementoPaiDoInput = campo.parentNode;
        elementoPaiDoInput.appendChild(spanErro);




        campo.focus();
        return false;
    }

    return true;


}