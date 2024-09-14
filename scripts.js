// Simulando submissão de publicação
document.getElementById("publicar-form")?.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Artigo publicado com sucesso!");
});

// Função de busca simulada
document.getElementById("search-form")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const query = document.getElementById("search-input").value;
    alert("Procurando artigos sobre: " + query);
});