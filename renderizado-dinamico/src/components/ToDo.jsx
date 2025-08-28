import { useState } from "react"

function ToDo() {

    const [misTareas, setMisTareas] = useState([])
    const [errorMessage, setErrorMessage] = useState(false)

    function addToDo(formData) {
        const tarea = formData.get("toDo")
        // como validamos que el usuario no ingrese una tarea igual

        if (misTareas.find(e => e === tarea)) {
            setErrorMessage(true)
            return
        }

        setErrorMessage(false)

        setMisTareas((prevMisTareas) => {
            return [
                ...prevMisTareas,
                tarea
            ]
        })
    }

    function deleteToDo(id) {
        // tarea como borrar.
        setMisTareas(prevMisTareas => prevMisTareas.filter(e => e !== id))
    }

    const renderToDos = misTareas.map(tarea => {
        return (
            <div key={tarea} className="todo-container">
                <li >{tarea}</li>
                <button onClick={() => deleteToDo(tarea)} className="delete-btn">X</button>
            </div>
        )
    })

    return (
        <>
            <h1>Todo</h1>

            <form action={addToDo}>
                <label htmlFor="toDo">Ingresar tarea</label>
                <input
                    id="toDo"
                    type="text"
                    name="toDo"
                    placeholder="e.g Lavar la ropa"
                />

                <button className="add-btn">Agregar</button>
            </form>
            {errorMessage && <p className="errorMessage">Esa tarea ya esta ingresada</p>}
            <ul>
                {/* aca vamos a renderizar lo que el usuario agregue */}
                {renderToDos}
            </ul>
        </>
    )
}

export default ToDo


// tareas para practicar

// ! Como hago que la tarea que se agrega se muestre al comienzo y no al final
// ! como podria agregar un MODAL de confirmacion al momento de eliminar
// ! como prevengo que el usuario agregue algo vacio...