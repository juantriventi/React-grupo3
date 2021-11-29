import React from 'react'
import UserListItem from './UserListItem.jsx';

function ListaUsuarios(props) {

const {users, cantidadUsers} = props; 


return (
<>
<section>
    <h2>Usuarios</h2>

    <p>Usuarios Registrados <span>{cantidadUsers}</span></p>
    {
    <ul className='list-item'>
        { users.map(user => 
            <UserListItem key={user.id} user={user} />
        )}
    </ul>
    }
    </section>
</>
)
}

export default ListaUsuarios