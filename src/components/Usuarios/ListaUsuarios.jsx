import React from 'react'
import UserListItem from './UserListItem.jsx';

function ListaUsuarios(props) {

const {users, cantidadUsers} = props; 
const colorCantidad = cantidadUsers < 3? 'red' : 'blue';

return (
<>
<section>
    <h2>Usuarios</h2>

    <p className="titulo-contador">USUARIOS REGISTRADOS <span style={{color:colorCantidad, fontSize:30}}>{cantidadUsers}</span></p>
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