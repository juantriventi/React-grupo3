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
            <div className="cont-general">
            <section className="cont-prod">
                <SectionProduct/>                
            </section>
            <section className="cont-usuarios">
                <SectionUsers/>
            </section>
            </div>
        </div>
        
           
        
        
    )
}

export default Dashboardcontainer