function verificarlogin() {
    let txtlogin = document. getElementsById("txtlogin");
    let txtsenha = document. getElementsById("txtsenha");

    let login ="teste";
    let senha ="teste";

    if (txtlogin.value == login && txtsenha.value == senha) { 
        console.log("logado com sucesso!");
    } else {
        console.log("login ou senha incorrectos! Digite e tente novamente.");
    }
}    