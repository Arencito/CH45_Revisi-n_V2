var formulario = document.querySelector(".formulario");

formulario.onsubmit = function(e) {
  e.preventDefault(); // Prevenir el envío del formulario

  var n = formulario.elements[0]; // Nombre
  var e = formulario.elements[1]; // Edad
  var na = formulario.elements[2]; // Nacionalidad

  var nombre = n.value;
  var edad = e.value;

  var i = na.selectedIndex;
  var nacionalidad = na.options[i].value;
  
  // Comprobación de errores en los campos
  if (nombre.length === 0) {
    n.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error");
  }

  // Si todo está correcto, se agrega el invitado
  if (nombre.length > 0 && (edad >= 18 && edad <= 120)) {
    agregarInvitado(nombre, edad, nacionalidad);
    n.value = ''; // Limpiar el campo de nombre
    e.value = ''; // Limpiar el campo de edad
    na.selectedIndex = 0; // Reiniciar el select
  }
};

// Agregar el evento para eliminar el invitado
function agregarInvitado(nombre, edad, nacionalidad) {
  // Mapeo de nacionalidad
  switch (nacionalidad) {
    case "ar":
      nacionalidad = "Argentina";
      break;
    case "mx":
      nacionalidad = "Mexicana";
      break;
    case "vnzl":
      nacionalidad = "Venezolana";
      break;
    case "per":
      nacionalidad = "Peruana";
      break;
  }

  // Crear elementos para mostrar en la lista
  var lista = document.getElementById("lista-de-invitados");
  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista", "border", "p-3", "mb-2", "bg-light");
  
  // Crear contenido
  crearElemento("Nombre", nombre, elementoLista);
  crearElemento("Edad", edad, elementoLista);
  crearElemento("Nacionalidad", nacionalidad, elementoLista);

  // Botón para eliminar el invitado
  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.className = "btn btn-danger btn-sm mt-2";
  botonBorrar.onclick = function() {
    elementoLista.remove(); // Remover el elemento de la lista
  };
  elementoLista.appendChild(botonBorrar);
  
  // Agregar el elemento a la lista
  lista.appendChild(elementoLista);
}

// Función para crear elementos
function crearElemento(descripcion, valor, contenedor) {
  var spanNombre = document.createElement("span");
  spanNombre.textContent = descripcion + ": " + valor + " ";
  contenedor.appendChild(spanNombre);
}
