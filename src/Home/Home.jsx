import React, { useState } from 'react';

const Home = ({ products, handleCart }) => {

  const [imgSrc, setImgSrc] = useState(products.img);

  const handleImageError = () => {
    setImgSrc("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ_2oII-AssPFNOvcLQ6ecJ6ZWQlUbKU3j8w&s");
  };
  // console.log(products, 'hello heros')
  return (
    <div className=''>
      <div className="card bg-base-100  shadow-xl">

        <figure>
        <img
          src={imgSrc}
          onError={handleImageError}
        />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Taka</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <p>{products.price}</p>
            <button onClick={()=>handleCart(products)} className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;