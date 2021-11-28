import React from 'react'
import ProductListItem from './ProductListItem';

function ListaProductos(props) {

const {productos} = props; 


return (
<>
    {
    productos.length === 0?
    <h3>No hay productos cargados</h3>
    :
    <ul className='list-item'>
        { productos.map(product => 
            <ProductListItem key={product.id} producto={product} />
        )}
    </ul>
    }
</>
)
}

export default ListaProductos