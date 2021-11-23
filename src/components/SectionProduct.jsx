import React, {useState, useEffect} from 'react';
import BuscarProducto from './BuscarProducto';
import ListaProductos from './ListaProductos';

const SectionProduct = () => {

    const [productos, setProductos] = useState([]);
   

    const cargarProductos = async() => {
        const request = await fetch('http://localhost:3030/api/products');
        const response = await request.json();

        const {products} = response.data;
       
        setProductos(products);
        console.log(products);
    }

    useEffect(() => {
        cargarProductos();
    }, []);

    
    return (
        <div>
            <section>
                <h2>Productos</h2>
                <ListaProductos productos={productos}/>
            </section>
            <section>
                <h2>Busqueda</h2>
                <BuscarProducto />
            </section>
        </div>
    )
}

export default SectionProduct
