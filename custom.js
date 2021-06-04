function mockSendForm() {
    isValidForm = (document.getElementById("nome").checkValidity() && document.getElementById("CPF").checkValidity() && document.getElementById("celular").checkValidity()&& document.getElementById("Endereco").checkValidity())
    if (isValidForm) {
        document.getElementById("mensagem_sucesso").style.display = "block";
    }
}