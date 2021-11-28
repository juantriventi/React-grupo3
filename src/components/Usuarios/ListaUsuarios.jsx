import React from 'react'
import UserListItem from './UserListItem.jsx';

function ListaUsuarios(props) {

const {user} = props; 


return (
<>
    {
    
    <ul className='list-item'>
        { user.map(user => 
            <UserListItem  user={user} />
        )}
    </ul>
    }
</>
)
}

export default ListaUsuarios