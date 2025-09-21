// Programa Amigo Secreto

let amigos = [];

// Función para agregar un nuevo nombre 
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre == "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar el nombre al array 
    amigos.push(nombre);

    // Mostrar en la lista 
    mostrarLista();

    // Limpiar el campo
    input.value = "";
    input.focus();
}

// Función para actualizar la lista de nombres 
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(function(amigo) {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear amigos
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos un nombre antes de sortear.");
        return;
    }

    // Generar índice aleatorio 
    const indice = Math.floor(Math.random() * amigos.length);

    // Mostrar resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> El amigo secreto es: <strong>${amigos[indice]}</strong></li>`;
}
