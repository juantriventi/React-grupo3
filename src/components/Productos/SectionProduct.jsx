import React, {useState, useEffect} from 'react';
import BuscarProducto from './BuscarProducto';
import ListaProductos from './ListaProductos';

const SectionProduct = () => {

    const [productos, setProductos] = useState([]);
    const [cantiadProducts, setCantiadProducts] = useState(0);
   

    const cargarProductos = async() => {
        const request = await fetch('http://localhost:3030/api/products');
        const response = await request.json();

        const {products} = response.data;
        const{total} = response.meta;
       
        setProductos(products);
        setCantiadProducts(total);
    }

    useEffect(() => {
        cargarProductos();
    }, []);

    
    return (
        <div>
            <section>
                <h2>Buscar producto: </h2>
                <div className='card'>
                    <BuscarProducto />
                </div>
                
            </section>
            <section>
                
                <ListaProductos productos={productos} cantidadProducts={cantiadProducts}/>
            </section>
           
        </div>
    )
}

export default SectionProduct
