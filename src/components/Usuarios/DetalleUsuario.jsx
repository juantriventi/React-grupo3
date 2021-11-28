import React from 'react'

const DetalleUsuario = (props) => {

    const {firstName, lastName, email} = props.user;

    return (
        <div style={customStyle}>
            <p>Nombre: <span>{firstName}</span></p>
            <p>Apellido: <span>{lastName}</span></p>
            <p>Email: <span>{email}</span></p>
        </div>
    )
}

const customStyle = {
    borderStyle:'dashed', 
    borderColor:'blue'
}


export default DetalleUsuario