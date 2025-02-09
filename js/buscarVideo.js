import { connectaApi } from "./connectaApi.js";
import constroiCard from './mostrarVideos.js';

async function buscaVideo(evento) {
    evento.preventDefault();

    const dadosDePesquisa = document.querySelector('[data-pesquisa]').value;
    const busca = await connectaApi.buscarVideo(dadosDePesquisa);

    const lista = document.querySelector('[data-lista]');
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    busca.forEach(element => {
        lista.appendChild(
            constroiCard(element.titulo, element.descricao, element.url, element.imagem)
        )
    });

    if (busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não Existe vídeos com esse termo</h2>`;
    }
}

const botaoDePequisa = document.querySelector('[data-botao-pesquisa]');

botaoDePequisa.addEventListener('click', evento => buscaVideo(evento));