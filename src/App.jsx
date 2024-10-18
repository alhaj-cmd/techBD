
import { useState } from 'react'
// import './App.css'
import Home from './Home/Home';
import { useEffect } from 'react'

function App() {

  const [product, setProduct] = useState([]);
  const [count, setCount] = useState([]);

  useEffect(() => {
    fetch('./data.json')
      .then(res => res.json())
      .then(data => {
        setProduct(data)
      })
  }, [])

  const handleCart = (p) =>{
    // console.log('tk peyeci', p)
    const isNumber = count.find((item) => item.id ==  p.id);
    // console.log(isNumber);
    if (!isNumber){
      setCount([...count, p])
    }
    else{
      alert('Al ready exit')
    }
    
    // isNumber
    setCount([p])
  }



  // console.log(dolls)

  return (

    <div className="grid grid-cols-2 gap-2 m-4 p-4">
      <div className='grid grid-cols-2 gap-2'>
        {
          product.map((pd) => (
            <Home products={pd} handleCart={handleCart} key={pd.id}></Home>
          ))
        }
      </div>
      <div className="text-center">
        <h1 className='text-3xl'>This is Summary</h1>
        {
          count.map((Count)=>(
            <p>{Count.price}</p>
            
          ))
        }
      </div>
    </div>
  )
}

export default App
