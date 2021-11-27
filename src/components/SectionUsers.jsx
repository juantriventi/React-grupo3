import React, {useState, useEffect} from 'react';
import BuscarUsuario from './BuscarUsuario';
import ListaUsuarios from './ListaUsuarios';

const SectionUsers = () => {

    const [usuario, setUsuario] = useState([]);
   

    const cargarUsuario = async() => {
        const request = await fetch('http://localhost:3030/api/users');
        const response = await request.json();

        const {usuario} = response.data;
       
        setUsuario(usuario);
        console.log(usuario);
    }

    useEffect(() => {
        cargarUsuario();
    }, []);

    
    return (
        <div>
            <section>
                <h2>Usuarios</h2>
                <ListaUsuarios usuario={usuario}/>
            </section>
            <section>
                <h2>Busqueda</h2>
                <BuscarUsuario />
            </section>
        </div>
    )
}

export default SectionUsers