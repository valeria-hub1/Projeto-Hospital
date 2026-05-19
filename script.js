function entrar(event) {

    event.preventDefault();

    alert("Login realizado!");

    window.location.href = "medico.html";
}

function editar() {
    alert("Editar cadastro");
}

function confirmarExclusao() {

    let resposta = confirm(
        "Tem certeza que deseja apagar este item?"
    );

    if (resposta == true) {
        alert("Item apagado com sucesso!");
    } else {
        alert("Operação cancelada!");
    }
}