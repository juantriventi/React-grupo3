import React, {useState} from 'react';
import DetalleProducto from './DetalleProducto';

const BuscarProducto = () => {

    const [nombre, setNombre] = useState("")
    const [product, setProduct] = useState(null)

    const handleOnChange = (event)=> {

        setNombre(event.target.value);
    }

    const getProductByName = async(name) => {
       
        const request = await fetch(`http://localhost:3030/api/products/name/${nombre}` );
        const response = await request.json();
        console.log(response)
        let product = null;

        if(!response.message.includes('ERROR')){
           product = response.data.product;
        }
        
        setProduct(product);
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        getProductByName(nombre);
    }

    return (
        <div>
           <form className='form-prod' onSubmit={handleOnSubmit}>
                <label htmlFor="name">Nombre del producto</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    onChange={handleOnChange} 
                    value={nombre}
                    />

                <button className='button-prod' type="submit">Buscar</button>   
            </form> 
            <section>
                { product === null? 
                    <p style={{color:'red'}}>No se encontro producto</p>
                    :
                    <div>
                        <h3>Detalle</h3>
                        <DetalleProducto product={product}/>
                    </div>
                    
                }
            </section>
        </div>
    )
}

export default BuscarProducto;
