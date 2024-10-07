
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

  const handleCart = (tk) =>{
    const isNumber = count.find(item => item.id == tk.id);
    console.log(isNumber)
    setCount([])
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
        {/* {
          count.map((Count)=>(
            console.log(Count)
          ))
        } */}
      </div>
    </div>
  )
}

export default App
