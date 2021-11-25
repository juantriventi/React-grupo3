import React from 'react'

const ProductListItem = (props)=> {
    
    const {name, image} = props.producto
    
    return (
      <li>
          <div className='list-item-container'>
            <p>Nombre: <span>{name}</span></p>
            <img src={image} alt={name} width={50} />
          </div>
        
      </li>
    );
}

export default ProductListItem
