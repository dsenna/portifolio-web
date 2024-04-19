//Seu JavaScript de validação aqui

// Função para validar o formato do email
function validarEmail(email) {
    // Expressão regular para validar o formato do email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

// Obtém os elementos de entrada
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const assuntoInput = document.getElementById('assunto');
const mensagemInput = document.getElementById('mensagem');

// Adiciona um ouvinte de evento para o envio do formulário
document.querySelector('.formcontato__form').addEventListener('submit', function(event) {
    // Verifica se o campo de nome está em branco ou vazio
    if (nomeInput.value.trim() === '') {
        alert('Por favor, preencha o campo Nome.');
        event.preventDefault(); // Impede o envio do formulário
        return;
    }

    // Verifica se o campo de nome excede 50 caracteres
    if (nomeInput.value.length > 50) {
        alert('O campo Nome deve conter no máximo 50 caracteres.');
        event.preventDefault(); // Impede o envio do formulário
        return;
    }

    // Verifica se o campo de email está em branco ou vazio
    if (emailInput.value.trim() === '') {
        alert('Por favor, preencha o campo Email.');
        event.preventDefault(); // Impede o envio do formulário
        return;
    }

    // Verifica se o formato do email é válido
    if (!validarEmail(emailInput.value.trim())) {
        alert('Por favor, insira um endereço de email válido.');
        event.preventDefault(); // Impede o envio do formulário
        return;
    }

    // Verifica se o campo de assunto está em branco ou vazio
    if (assuntoInput.value.trim() === '') {
        alert('Por favor, preencha o campo Assunto.');
        event.preventDefault(); // Impede o envio do formulário
        return;
    }

    // Verifica se o campo de assunto excede 50 caracteres
    if (assuntoInput.value.length > 50) {
        alert('O campo Assunto deve conter no máximo 50 caracteres.');
        event.preventDefault(); // Impede o envio do formulário
        return;
    }

    // Verifica se o campo de mensagem está em branco ou vazio
    if (mensagemInput.value.trim() === '') {
        alert('Por favor, preencha o campo Mensagem.');
        event.preventDefault(); // Impede o envio do formulário
        return;
    }
    
    // Verifica se o campo de mensagem exede 300 caracteres
    if (mensagemInput.value.length > 300) {
        alert('O campo Mensagem deve conter no máximo 300 caracteres.');
        event.preventDefault(); // Impede o envio do formulário
        return;
    }

    // Se todas as verificações passarem, o formulário será enviado normalmente
});
