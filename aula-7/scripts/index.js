function executar(evento) {
    evento.preventDefault();

    limparForm();

    const nome = document.querySelector("#nome").value;
    const erroNome = document.querySelector("#erro-nome");
    if(nome === ""){
        erroNome.textContent = "Nome não pode estar vazio";
        erroNome.classList.add("erro");
        erroNome.classList.remove("oculto");
    }

    const idade = document.querySelector("#idade").value;
    const erroIdade = document.querySelector("#erro-idade");
    if(idade === ""){
        erroIdade.textContent = "Idade não pode estar vazio";
        erroIdade.classList.add("erro");
        erroIdade.classList.remove("oculto");
    } else if (Number(idade) < 18){
        erroIdade.textContent = "É necessário ter 18 anos";
        erroIdade.classList.add("erro");
        erroIdade.classList.remove("oculto");
    }

}

//VALIDAR O EMAIL COM REGEX

function limparForm() {
    document.querySelectorAll(".erro").forEach( (item) => {
        item.classList.remove("erro");
        item.classList.add("oculto");
    } );

}