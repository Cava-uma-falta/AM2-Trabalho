document.addEventListener("DOMContentLoaded", () => {
    window.onpopstate = () => carregarPagina(null, location.pathname.substring(1) || 'sobre');
    carregarPagina(null, 'sobre'); // Carrega a seção "Sobre" por padrão
});

function carregarPagina(event, pagina) {
    if (event) event.preventDefault();

    history.pushState({}, "", pagina);

    const conteudo = document.getElementById("conteudo");

    if (pagina === "sobre") {
        conteudo.innerHTML = `
            <section class="bloco bloco1">
                <h2>Sobre Nós</h2>
                <p>Somos um site focado em acessibilidade e boas práticas na web.</p>
                <button onclick="alert('Olá, mundo!')">Clique aqui!</button>
            </section>
        `;
    } else if (pagina === "artigos") {
        conteudo.innerHTML = `
            <section class="bloco bloco2">
                <h2>Últimos Artigos</h2>
                <article>
                    <h3>Como Melhorar a Acessibilidade</h3>
                    <p>Entenda como utilizar HTML semântico para tornar seu site mais acessível.</p>
                </article>
            </section>
        `;
    } else if (pagina === "contato") {
        conteudo.innerHTML = `
            <section class="bloco bloco3">
                <h2>Contato</h2>
                <p>Entre em contato conosco para mais informações.</p>
                
                <form id="formContato">
                    <div>
                        <label for="nome">Nome:</label>
                        <input type="text" id="nome" name="nome">
                        <span class="erro" id="erroNome"></span>
                    </div>
                    <div>
                        <label for="email">E-mail:</label>
                        <input type="email" id="email" name="email">
                        <span class="erro" id="erroEmail"></span>
                    </div>
                    <div>
                        <label for="mensagem">Mensagem:</label>
                        <textarea id="mensagem" name="mensagem"></textarea>
                        <span class="erro" id="erroMensagem"></span>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </section>
        `;

        configurarFormulario();
    }
}

function configurarFormulario() {
    const form = document.getElementById('formContato');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        limparErros();

        const nomeValido = validarCampo('nome', 'Por favor, insira seu nome.');
        const emailValido = validarEmail('email', 'Por favor, insira um e-mail válido.');
        const mensagemValida = validarCampo('mensagem', 'Por favor, insira uma mensagem.');

        if (nomeValido && emailValido && mensagemValida) {
            alert('Formulário enviado com sucesso!');
            form.reset();
        }
    });
}

function validarCampo(campoId, mensagemErro) {
    const campo = document.getElementById(campoId);
    if (campo.value.trim() === '') {
        exibirErro(campoId, mensagemErro);
        return false;
    }
    return true;
}

function validarEmail(campoId, mensagemErro) {
    const campo = document.getElementById(campoId);
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(campo.value.trim())) {
        exibirErro(campoId, mensagemErro);
        return false;
    }
    return true;
}

function exibirErro(campoId, mensagemErro) {
    document.getElementById(`erro${campoId.charAt(0).toUpperCase() + campoId.slice(1)}`).textContent = mensagemErro;
}

function limparErros() {
    document.querySelectorAll('.erro').forEach(erro => erro.textContent = '');
}

