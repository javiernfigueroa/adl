import React from 'react'

function ProductCard({ nombre, precio, sku, stock, disponibilidad, style }) {
    return (
        <div>
            <h1>{nombre}</h1>
            <p>Precio: {precio}</p>
            <p>SKU: {sku}</p>
            <p style={{ color: style }}>Stock: {stock}</p>
            <p>Disponibilidad: {disponibilidad}</p>
        </div>
    )
}

export default ProductCard