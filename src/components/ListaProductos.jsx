import React from 'react'

function ListaProductos(props) {

const {productos} = props; 


return (
<>
    {
    productos.length === 0?
    <h3>No hay productos cargados</h3>
    :
    <ul>
        { productos.map(product => (
        <li key={product.id}>{product.name}</li>)
        )}
    </ul>
    }
</>
)
}

export default ListaProductos