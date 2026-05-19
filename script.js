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
    }function fazerLogin() {

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if(usuario == "admin" && senha == "123") {

        alert("Login realizado com sucesso!");

        window.location.href = "index.html";

    } else {

        alert("Usuário ou senha incorretos!");
    }
}
}