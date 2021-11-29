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
                <h2>Buscar producto </h2>
                <div className='m-4 card '>
                    <BuscarProducto />
                </div>
                
            </section>
            <section>
                <h2>Lista de productos</h2>
                <ListaProductos productos={productos}/>
            </section>
           
        </div>
    )
}

export default SectionProduct
