async function listaVideos() {
    const conexao = await fetch('http://localhost:3000/videos');
    const conexaoConvertida = conexao.json();
    return conexaoConvertida;
}

export const connectaApi = {
    listaVideos
};