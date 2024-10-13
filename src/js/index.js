const listaSelecaoFeiticeiros = document.querySelectorAll(".feiticeiro");

listaSelecaoFeiticeiros.forEach(feiticeiro =>{
    feiticeiro.addEventListener("click", () => {
        fechandoFeiticeiroAtual();

        const idFeiticeiroSelecionado = feiticeiro.attributes.id.value;
        
        const idDoCartaoFeiticeiroParaAbrir = identificandoNovoIdDoFeiticeiroSelecionado(idFeiticeiroSelecionado);

        mostrandoFeiticeiroSelecionado(idDoCartaoFeiticeiroParaAbrir);

        escondendoAntigoFeiticeiroAtivoNaListagem();

        mostrarNovoFeiticeiroAtivoNaListagem(idFeiticeiroSelecionado);
    })
})
function identificandoNovoIdDoFeiticeiroSelecionado(idFeiticeiroSelecionado) {
    return "cartao-" + idFeiticeiroSelecionado;
}

function fechandoFeiticeiroAtual() {
    const cartaoFeiticeiroAberto = document.querySelector(".aberto");
    cartaoFeiticeiroAberto.classList.remove("aberto");
}

function mostrandoFeiticeiroSelecionado(idDoCartaoFeiticeiroParaAbrir) {
    const cartaoFeiticeiroParaAbrir = document.getElementById(idDoCartaoFeiticeiroParaAbrir);
    cartaoFeiticeiroParaAbrir.classList.add("aberto");
}

function escondendoAntigoFeiticeiroAtivoNaListagem() {
    const feiticeiroAtivoNaListagem = document.querySelector(".ativo");
    feiticeiroAtivoNaListagem.classList.remove("ativo");
}

function mostrarNovoFeiticeiroAtivoNaListagem(idFeiticeiroSelecionado) {
    const feiticeiroSelecionadoNaListagem = document.getElementById(idFeiticeiroSelecionado);
    feiticeiroSelecionadoNaListagem.classList.add("ativo");
}

