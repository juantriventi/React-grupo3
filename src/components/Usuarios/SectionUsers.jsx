import React, {useState, useEffect} from 'react';
import BuscarUsuario from './BuscarUsuario';
import ListaUsuarios from './ListaUsuarios';

const SectionUsers = () => {

    const [users, setUsers] = useState([]);
    const [cantidadUsers, setcantidadUsers] = useState(0);
   

    const cargarUsuario = async() => {
        const request = await fetch('http://localhost:3030/api/users');
        const response = await request.json();

        const {total} =  response.meta;
        const {list} =   response.data;
       
        setUsers(list);
        setcantidadUsers(total);
    }

    useEffect(() => {
        cargarUsuario();
    }, []);

    
    return (
        <div>
            
            <section>
                <h2>Buscar usuario:</h2>
                <div className='card'>
                <BuscarUsuario />
                </div>
            </section>
            <section>
                <ListaUsuarios users={users} cantidadUsers={cantidadUsers}/>
            </section>
        </div>
    )
}

export default SectionUsers