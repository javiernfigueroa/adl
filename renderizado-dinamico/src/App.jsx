import { useState } from "react"
import { productos as items } from "./data/productos"
import ProductCard from "./components/ProductCard"

function App() {

  const [productos, setProductos] = useState(items)

  return (
    <>
      <h1>Cards</h1>
      {productos.map(producto => {
        return (
          producto.disponibilidad === "Agotado" ? null :
            <ProductCard
              key={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              sku={producto.sku}
              stock={producto.stock}
              disponibilidad={producto.disponibilidad}
              style={producto.stock <= 50 ? 'red' : null}
            />
        )
      })}
    </>
  )
}

export default App
