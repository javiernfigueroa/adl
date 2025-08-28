function Form() {

    function sendData(formData) {
        const objDataFromForm = Object.fromEntries(formData)
        const favoriteFoods = formData.getAll('favoriteFoods')

        const allData = {
            ...objDataFromForm,
            favoriteFoods: favoriteFoods
        }

        console.log(allData)
    }

    return (
        <>
            <h1>Forumularios</h1>

            <form action={sendData}>
                <label htmlFor="email">Correo</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="javi@mail.com"
                />

                <label htmlFor="password">Contraseña</label>
                <input
                    id="password"
                    defaultValue="password123"
                    type="password"
                    name="password" />

                <label htmlFor="description">Descripcion</label>
                <textarea
                    id="description"
                    name="description"
                    defaultValue="Esto es una descripcion">
                </textarea>

                <fieldset>
                    <legend>Como te sientes?</legend>
                    <label>
                        <input type="radio" name="emotionalStatus" value="feliz" />
                        Feliz
                    </label>
                    <label>
                        <input type="radio" name="emotionalStatus" value="amargado" />
                        Amargado
                    </label>
                    <label>
                        <input type="radio" name="emotionalStatus" value="furioso" />
                        Furioso
                    </label>
                </fieldset>

                <fieldset>
                    <legend>Selecciona tus comidas favoritas</legend>
                    <label>
                        <input type="checkbox" name="favoriteFoods" value="pizza" />
                        Pizza
                    </label>
                    <label>
                        <input type="checkbox" name="favoriteFoods" value="hamburguesas" />
                        Hamburguesas
                    </label>
                    <label>
                        <input type="checkbox" name="favoriteFoods" value="enselada" />
                        Ensalada
                    </label>
                </fieldset>

                <label htmlFor="favColor">Cual es tu color favorito?</label>
                <select id="favColor" name="favColor" defaultValue="" required>
                    <option value="" disabled>-- Elige un color --</option>
                    <option value="red">Rojo</option>
                    <option value="orange">Naranja</option>
                    <option value="yellow">Amarillo</option>
                    <option value="green">Verde</option>
                    <option value="blue">Azul</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violeta</option>
                </select>

                <button className="add-btn">ENVIAR</button>
            </form>


        </>
    )
}

export default Form
