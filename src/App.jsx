
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {

  const [dolls, setDolls] = useState([]);

  useEffect(()=>{
    fetch('./data.json')
    .then(res=> res.json())
    .then(data =>{
      setDolls(data)
    })
  }, [])

  // console.log(dolls)

  return (
    <>
    <div className="card bg-base-100 w-96 shadow-xl">
      {
        dolls.map((dols)=><>
        
        <h1>{dols?.name}</h1></>)
      }
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{dolls.dolls?.name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    </>
  )
}

export default App
