// Variables
let nombre = '';
let email = '';
let numero = '';
let mensaje = '';

// Funciones esenciales
function validarCampos() {
    let campos = [nombre, email, numero, mensaje];
    let nombresCampos = ["nombre", "email", "numero", "mensaje"];

    for (let i = 0; i < campos.length; i++) {
        if (campos[i] === "") {
            alert("Por favor, ingrese su " + nombresCampos[i] + ".");
            return false;
        }
    }

    return true;
}

function validarEmail() {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, ingrese un email válido.");
        return false;
    }

    return true;
}

function limpiarCampos() {
    nombre = '';
    email = '';
    numero = '';
    mensaje = '';

    document.getElementById('nombre').value = '';
    document.getElementById('email').value = '';
    document.getElementById('numero').value = '';
    document.getElementById('mensaje').value = '';
}

// Objeto de ejemplo
let usuario = {
    nombre: '',
    email: '',
    numero: ''
};

// Array de objetos
let usuarios = [];

// Método de búsqueda en el array
function buscarUsuario(email) {
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email === email) {
            return usuarios[i];
        }
    }

    return null;
}

// Método de filtrado en el array
function filtrarUsuarios(nombre) {
    return usuarios.filter(function(usuario) {
        return usuario.nombre.toLowerCase().includes(nombre.toLowerCase());
    });
}

document.getElementById('contacto').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener valores de los campos
    nombre = document.getElementById('nombre').value;
    email = document.getElementById('email').value;
    numero = document.getElementById('numero').value;
    mensaje = document.getElementById('mensaje').value;

    if (!validarCampos() || !validarEmail()) {
        return;
    }

    console.log("Formulario válido, puede ser enviado.");

    document.getElementById('status').innerHTML = "Enviado correctamente 📨";

    // Agregar usuario al array
    let nuevoUsuario = {
        nombre: nombre,
        email: email,
        numero: numero
    };

    usuarios.push(nuevoUsuario);

    // Limpiar campos
    limpiarCampos();
});
