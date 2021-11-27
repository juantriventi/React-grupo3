import React from 'react'
import UserListItem from './UserListItem.jsx';

function ListaUsuarios(props) {

const {user} = props; 


return (
<>
    {
    // usuarios.length === 0?
    // <h3>No hay usuarios cargados</h3>
    // :
    <ul className='list-item'>
        { user.map(user => 
            <UserListItem key={user.id} user={user} />
        )}
    </ul>
    }
</>
)
}

export default ListaUsuarios