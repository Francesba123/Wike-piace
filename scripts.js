document.getElementById("search-form")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const query = document.getElementById("search-input").value.toLowerCase();

    // Simula a busca filtrando os artigos
    alert("Buscando por: " + query);

    // Implemente a lógica real para buscar artigos
});

document.getElementById("comentario-form")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const comentario = document.getElementById("comentario").value;

    // Simular a adição do comentário
    const comentariosContainer = document.getElementById("comentarios-container");
    comentariosContainer.innerHTML += `<p><strong>${nome}:</strong> ${comentario}</p>`;

    // Limpar o formulário
    document.getElementById("comentario-form").reset();
});
