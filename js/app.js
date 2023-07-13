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

// Cargar usuarios del Storage si existen y mostrarlos en el DOM
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
mostrarUsuarios();

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

// Mostrar usuarios en el DOM
function mostrarUsuarios() {
    let listaUsuarios = document.getElementById('lista-usuarios');
    listaUsuarios.innerHTML = '';

    usuarios.forEach(function(usuario) {
        let itemUsuario = document.createElement('li');
        itemUsuario.textContent = `Nombre: ${usuario.nombre}, Email: ${usuario.email}, Número: ${usuario.numero}`;
        listaUsuarios.appendChild(itemUsuario);
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

    // Guardar usuarios en el Storage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    // Mostrar usuarios en el DOM
    mostrarUsuarios();

    // Limpiar campos
    limpiarCampos();
});

// Mostrar u ocultar lista de usuarios filtrados
document.getElementById('filtro-nombre').addEventListener('input', function() {
    let filtroNombre = this.value.trim();
    let usuariosFiltrados = filtrarUsuarios(filtroNombre);
    let listaFiltrada = document.getElementById('lista-filtrada');

    if (filtroNombre !== '') {
        listaFiltrada.innerHTML = '';
        usuariosFiltrados.forEach(function(usuario) {
            let itemUsuario = document.createElement('li');
            itemUsuario.textContent = `Nombre: ${usuario.nombre}, Email: ${usuario.email}, Número: ${usuario.numero}`;
            listaFiltrada.appendChild(itemUsuario);
        });

        listaFiltrada.style.display = 'block';
    } else {
        listaFiltrada.style.display = 'none';
    }
});
