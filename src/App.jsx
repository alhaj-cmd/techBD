
import { useState } from 'react'
import './App.css'
import Home from './Home/Home';
import { useEffect } from 'react'

function App() {

  const [product, setProduct] = useState([]);

  useEffect(()=>{
    fetch('./data.json')
    .then(res=> res.json())
    .then(data =>{
      setProduct(data)
    })
  }, [])

  // console.log(dolls)

  return (
    <>
    <div>
    {
        product.map((pd)=>(
          <Home products={pd} key={pd.id}></Home>
        ))
      }
    </div>
    </>
  )
}

export default App
