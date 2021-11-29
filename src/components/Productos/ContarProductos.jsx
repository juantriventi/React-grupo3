import React from 'react';



const ContarProducto = () => {

    const countProduct = async(name) => {
       
        const request = await fetch(`http://localhost:3030/api/products` );
        product = product.length;
        alert(product)
    }



}



export default ContarProducto