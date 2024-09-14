// Simulação de postagem de artigo
document.getElementById('publicar-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const categoria = document.getElementById('categoria').value;
    const tags = document.getElementById('tags').value;
    const conteudo = document.getElementById('conteudo').value;

    // Aqui você adicionaria a lógica para enviar os dados para o servidor
    console.log('Título:', titulo);
    console.log('Categoria:', categoria);
    console.log('Tags:', tags);
    console.log('Conteúdo:', conteudo);

    alert('Artigo publicado com sucesso!');
});

// Simulação de login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Aqui você adicionaria a lógica para autenticar o usuário
    console.log('E-mail:', email);
    console.log('Senha:', senha);

    alert('Login realizado com sucesso!');
});

// Simulação de registro
document.getElementById('registro-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Aqui você adicionaria a lógica para registrar o usuário
    console.log('Nome:', nome);
    console.log('E-mail:', email);
    console.log('Senha:', senha);

    alert('Registro realizado com sucesso!');
});
