import react, {useState, useCallback, useEffect}  from 'react'

const ListaProductos = () => {
    const [productos,setProductos] = useState([])
    const getProductos = async () =>{
        const p = await fetch("http://localhost:3030/api/products")
        const data = await p.json()
        
        const {products} = data 
        setProductos([...productos,products])
        console.log(productos)
    }
    useEffect(()=>{
        fetch("http://localhost:3030/api/products").then(response => response.json())
        .then(data => {setProductos([data.products])})
        
    },[])
    return (
        
        <div>
        {console.log(productos)}
            <h2>Lista de productos</h2>
            <ul>
                {productos.map((producto) => (<li key={producto.id}>{producto.name}</li>))}
            </ul>
        </div>

    )
}

export default ListaProductos
