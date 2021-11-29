import React from 'react'
import SectionProduct from './Productos/SectionProduct'
import SectionUsers from './Usuarios/SectionUsers'
import Header from './Generales/Header'


const Dashboardcontainer = () => {
    return (
        <div>
            <section>
                <Header/>                
            </section>
            <section>
                <SectionProduct/>                
            </section>

        </div>

        
    )
}

export default Dashboardcontainer