import React from 'react'

const UserListItem = (props)=> {
    
    const {firstName, lastName, email} = props.usuario
    
    return (
      <li>
          <div className='list-item-container'>
            <p>Nombre: <span>{firstName}</span></p>
            <p>Apellido: <span>{lastName}</span></p>
            <p>Email: <span>{email}</span></p>
          </div>
        
      </li>
    );
}

export default UserListItem