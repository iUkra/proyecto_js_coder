document.getElementById('contacto').addEventListener('submit', function(event) {
    event.preventDefault();

    //Valores
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var numero = document.getElementById('numero').value;
    var mensaje = document.getElementById('mensaje').value;

    // Validación
    var campos = [nombre, email, numero, mensaje];
    var nombresCampos = ["nombre", "email", "numero", "mensaje"];

    for (var i = 0; i < campos.length; i++) {
        if (campos[i] === "") {
            alert("Por favor, ingrese su " + nombresCampos[i] + ".");
            return;
        }
    }

    // Validación de email
    var emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, ingrese un email válido.");
        return;
    }

   
    console.log("Formulario válido, puede ser enviado.");

    
    document.getElementById('status').innerHTML = "Enviado correctamente 📨";

    // Limpiar
    document.getElementById('nombre').value = '';
    document.getElementById('email').value = '';
    document.getElementById('numero').value = '';
    document.getElementById('mensaje').value = '';
});