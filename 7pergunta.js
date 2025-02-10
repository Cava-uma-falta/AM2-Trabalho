<script>
    // Seleciona o formulário
    const form = document.getElementById('formContato');

    // Adiciona um "ouvinte" de evento para o envio do formulário
    form.addEventListener('submit', function(event) {
        // Impede o envio do formulário se houver erros
        event.preventDefault();

        // Limpa mensagens de erro anteriores
        limparErros();

        // Valida os campos
        const nomeValido = validarCampo('nome', 'Por favor, insira seu nome.');
        const emailValido = validarEmail('email', 'Por favor, insira um e-mail válido.');
        const mensagemValida = validarCampo('mensagem', 'Por favor, insira uma mensagem.');

        // Se todos os campos forem válidos, envia o formulário
        if (nomeValido && emailValido && mensagemValida) {
            alert('Formulário enviado com sucesso!');
            form.reset(); // Limpa o formulário
        }
    });

    // Função para validar campos obrigatórios
    function validarCampo(campoId, mensagemErro) {
        const campo = document.getElementById(campoId);
        const valor = campo.value.trim();

        if (valor === '') {
            exibirErro(campoId, mensagemErro);
            return false;
        }
        return true;
    }

    // Função para validar e-mail
    function validarEmail(campoId, mensagemErro) {
        const campo = document.getElementById(campoId);
        const valor = campo.value.trim();
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (valor === '' || !regexEmail.test(valor)) {
            exibirErro(campoId, mensagemErro);
            return false;
        }
        return true;
    }

    // Função para exibir mensagens de erro
    function exibirErro(campoId, mensagemErro) {
        const erroSpan = document.getElementById(`erro${campoId.charAt(0).toUpperCase() + campoId.slice(1)}`);
        erroSpan.textContent = mensagemErro;
    }

    // Função para limpar mensagens de erro
    function limparErros() {
        const erros = document.querySelectorAll('.erro');
        erros.forEach(erro => erro.textContent = '');
    }
</script>