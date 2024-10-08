import React from 'react';

const Home = ({ products, handleCart }) => {
  // console.log(products, 'hello heros')
  return (
    <div className=''>
      <div className="card bg-base-100  shadow-xl">

        <figure>
          <img
            src={(products.img ? 'https://www.walmart.com/ip/Gerber-Baby-Boy-or-Girl-Unisex-White-Short-Sleeve-Cotton-Bodysuit-3-Pack-Sizes-Preemie-24-Months/2275547541?classType=VARIANT&from=/search')}
            alt="Gerber Clothing" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Taka</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button  className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;