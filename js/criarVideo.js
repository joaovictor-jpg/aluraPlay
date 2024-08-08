import { connectaApi } from "./connectaApi.js";

const formulario = document.querySelector('[data-formulario]');

async function criarVideo(evento) {
    evento.preventDefault();

    const url = document.querySelector('[data-url]').value;
    const titulo = document.querySelector('[data-titulo]').value;
    const imagem = document.querySelector('[data-imagem]').value;
    const descricao = Math.floor(Math.random() * 10).toString();

    await connectaApi.criaVideo(titulo, descricao, url, imagem);

    window.location.href = '../pages/envio-concluido.html';

}

formulario.addEventListener('submit', evento => criarVideo(evento));