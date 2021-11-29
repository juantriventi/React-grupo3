import React from 'react'
import ProductListItem from './ProductListItem';

function ListaProductos(props) {

const {productos, cantidadProducts} = props; 

const colorCantidad = cantidadProducts < 3? 'red' : 'blue';

return (
<>
    <section>
        <h2>Productos</h2>

        <p>Cantidad Productos <span style={{color:colorCantidad, fontSize:30}}>{cantidadProducts}</span></p>
    </section>

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