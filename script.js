document.addEventListener('DOMContentLoaded', function () {
    // Validação do formulário
    var form = document.getElementById('cadastroForm');
    
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();
        
        if (form.checkValidity() === false) {
            form.classList.add('was-validated');
        } else {
            alert('Formulário enviado com sucesso!');
            form.reset();  // Reseta os campos do formulário
            form.classList.remove('was-validated');  // Remove a classe de validação para que as mensagens de erro não apareçam após o reset
        }
    }, false);
    
    // Máscara de telefone
    $('#telefone').mask('(00) 00000-0000');

    // Prevenir números no campo Nome
    document.getElementById('nome').addEventListener('input', function (event) {
        this.value = this.value.replace(/[0-9]/g, '');
    });

    // Prevenir letras no campo Telefone
    document.getElementById('telefone').addEventListener('input', function (event) {
        this.value = this.value.replace(/[^0-9()-\s]/g, '');
    });
});
