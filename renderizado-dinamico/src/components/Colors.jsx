import { useState } from "react"
import { COLORS } from "./data/colors"

function Colors() {

    const [color, setColor] = useState('')

    function changeColor(formData) {
        const colorElegido = formData.get("colors")
        setColor(colorElegido)
    }

    return (
        <>
            <h1>Data</h1>

            <form action={changeColor}>
                <label htmlFor="colors">Selector de colores</label>
                <select name="colors" id="colors" defaultValue="">
                    <option value="" disabled>--Elige un color--</option>
                    {COLORS.map(color => {
                        return (
                            <option key={color.id} value={color.hex}>{color.name}</option>
                        )
                    })}
                </select>

                <button>Aplicar</button>
            </form>

            <div className="circle" style={{ backgroundColor: color }}></div>
        </>
    )
}

export default Colors
