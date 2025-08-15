// donde vamos a guardar las tareas
let tareas = []
console.log(tareas)

// vamos a tomar control de el html
const input = document.getElementById('input-tarea')
const btn = document.getElementById('btn-agregar')
const lista = document.getElementById('lista-tareas')

// funcion que sirva para renderizar
function renderTareas(arr) {
  lista.innerHTML = arr
    .map(
      (tarea, index) => `
  <li>${tarea}</li>
  <button onClick="eliminarTarea(${index})">Eliminar</button>`
    )
    .join('')
}

// funcion para eliminar

function eliminarTarea(i) {
  tareas.splice(i, 1)
  renderTareas(tareas)
}

// evento que agrega algo
btn.addEventListener('click', () => {
  const nuevaTarea = input.value.trim()
  if (nuevaTarea) {
    tareas.push(nuevaTarea)
    renderTareas(tareas)
    input.value = ''
    console.log(tareas)
  }
})
