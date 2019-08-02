tarefas = [];
var indiceParaEditar = -1;

function salvar(e) {
    //13 é codigo do enter no no teclado
    if (e.keyCode == 13) {
        adicionarEditar();
    }
}


function adicionarEditar() {
    if (indiceParaEditar == -1) {
        adicionar();
    }
    else {
        editar();
    }
}

function adicionar() {
    var campoNome = document.getElementById('nome', 'mt-3');
    var nome = campoNome.value;
    valido = validarCampo(nome, campoNome)
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
    elementoBotaoEditar.onclick = preencherCampo;

    var elementoBotaoApagar = document.createElement("button");
    elementoBotaoApagar.innerHTML = "Apagar";
    elementoBotaoApagar.classList.add("btn", "btn-danger", "mr-1")

    elementoBotaoApagar.onclick = apagar;

    elementoTdAcao.appendChild(elementoBotaoEditar);
    elementoTdAcao.appendChild(elementoBotaoApagar);

    elementoTr.appendChild(elementoIdNome);
    elementoTr.appendChild(elementoTdAcao);

    document.getElementById("registros").appendChild(elementoTr);
    tarefas.push(nome);
    limparCampos(campoNome);

    atualizarQuantidade();
}

function apagar() {

    var confirmacao = confirm('Deseja realmente apagar?');
    if (confirmacao == true) {
        var elemento = event.target;
        var elementoTd = elemento.parentNode;
        var elementoTr = elementoTd.parentNode;
        var elementoBody = elementoTr.parentNode;

        var elementoTdNome = elementoTr.childNodes[0];
        var nome = elementoTdNome.innerHTML;
        tarefas.pop(nome);
        atualizarQuantidade();


        elementoBody.removeChild(elementoTr);
    }
}

function preencherCampo() {
    var elementoBotaoEditar = event.target;
    var elementoTr = elementoBotaoEditar.parentNode.parentNode;
    var elementoTdNome = elementoTr.childNodes[0];
    var nome = elementoTdNome.innerHTML;
    indiceParaEditar = tarefas.indexOf(nome);
    document.getElementById('nome').value = nome;
    document.getElementById('nome').focus();
}

function editar() {
    var nome = document.getElementById('nome').value;
    tarefas[indiceParaEditar] = nome;

    //atualizar tabela
    var trs = document.getElementById('registros').childNodes;
    var elementoTr = trs[indiceParaEditar];
    elementoTr.childNodes[0].innerHTML = nome;

    indiceParaEditar = -1;
    document.getElementById('nome').value = '';
    document.getElementById('nome').focus();

    

}

function atualizarQuantidade() {
    document.getElementById("quantidade").innerHTML = tarefas.length;

}

function limparCampos(campo) {
    campo.value = "";
    campo.focus();
}

function validarCampo(nome, campo) {
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

function validar{
    var campo = document.getElementById('nome');
    var nome = campo.value;
    return validarCampo(nome, campo);

}

// pulblic void teste(string nome, int numero){
//
//}
//public void teste(int numero, string letra){  
//
// }

//string,int ! int, string

//sobrecarga de método ==> metodos iguais com parametros diferentes