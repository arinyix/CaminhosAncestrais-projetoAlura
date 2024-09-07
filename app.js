// Função de pesquisa
function pesquisar() {
  let sectionResultados = document.getElementById("resultados-pesquisa");
  let sectionMensagem = document.getElementById("mensagem-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // Limpa o conteúdo dos dois contêineres
  sectionResultados.innerHTML = "";
  sectionMensagem.innerHTML = "";

  // Verifica se o campo de pesquisa está vazio
  if (campoPesquisa === "") {
    sectionMensagem.innerHTML = `
        <div class="mensagem-sem-resultados">
            <p>Nenhum povo tradicional encontrado. Você não buscou por um Estado</p>
        </div>
    `;
    sectionMensagem.style.display = "block"; // Mostra a mensagem de erro
    sectionResultados.style.display = "none"; // Esconde a seção de resultados
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  let resultados = '';
  let titulo = "";
  let descricao = "";
  let tags = "";

  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();

    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Saiba mais</a>
        </div>
      `;
    }
  }

  // Verifica se não encontrou resultados
  if (!resultados) {
    sectionMensagem.innerHTML = `
        <div class="mensagem-sem-resultados">
            <p>Nada foi encontrado</p>
        </div>
    `;
    sectionMensagem.style.display = "block"; // Mostra a mensagem de erro
    sectionResultados.style.display = "none"; // Esconde a seção de resultados
  } else {
    sectionResultados.innerHTML = resultados;
    sectionResultados.style.display = "grid"; // Mostra a seção de resultados
    sectionMensagem.style.display = "none"; // Esconde a mensagem de erro
  }
}

// Adiciona o evento de 'Enter' para ativar a pesquisa
document.getElementById("campo-pesquisa").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    pesquisar();
  }
});
