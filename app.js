// El array que maneja la lista de amigos
let amigo = []; 

//La función para agregar el nombre del amigo, si se intenta sólo dar click activará una alerta
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    if (!nombreAmigo) {
    alert("Por favor, inserte un nombre.");
    return;
}
amigo.push(nombreAmigo)
inputAmigo.value = "";
inputAmigo.focus();
renderizarAmigos();
};

// Actualiza la lista de amigos de forma dinámica y no fija en el html
function renderizarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for(let i = 0; i < amigo.length; i++){
        let item = document.createElement("li");
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);
    }
}

// Sortear Amigos
function sortearAmigo() {
    if (amigo.length === 0) {
        alert("Sin amigos para sortear");
        return;
    }
    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)]; 
    let resultado = document.getElementById ("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
    
    //Para borrar la lista una vez efectuado el sorteo
    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
}