const formulario = document.querySelector('[data-formulario]');

function criarVideo() {
    const url = document.querySelector('[data-url]').value;
    const titulo = documet.querySelector('[data-titulo]').value;
    const imagem = document.querySelector('[data-imagem]').value;
    const descricao = Math.floor(Math.random() * 10).toString();

}

formulario.addEventListener('submit', evento => criarVideo(evento));