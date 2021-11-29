import React from 'react'
import SectionProduct from './Productos/SectionProduct'
import SectionUsers from './Usuarios/SectionUsers'


const Dashboardcontainer = () => {
    return (
        <div>
            <section>
                <SectionProduct/>
            </section>
            {/* <section>
                <SectionUsers/>
            </section>  */}
        </div>

        
    )
}

export default Dashboardcontainer