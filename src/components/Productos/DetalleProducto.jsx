import React from 'react'

const DetalleProducto = (props) => {

    const {name, description, price, state, stock} = props.product;

    return (
        <div style={customStyle}>
            <p>Nombre: <span>{name}</span></p>
            <p>Descripcion: <span>{description}</span></p>
            <p>Precio: $<span>{price}</span></p>
            <p>Estado: <span>{state}</span></p>
            <p>Stock: <span>{stock}</span></p>
            
        </div>
    )
}

const customStyle = {
    borderStyle:'', 
    borderColor:'black'
}


export default DetalleProducto
