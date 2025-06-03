import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/CartSlice';

    

export const ReduxProductDataList = () => {

  //useDispatch --> action..
  const dispatch = useDispatch()
  
    const [data, setdata] = useState([{
        id:101,
        name:"iphone16",
        price:1200,
        description:"128 gb"
    },
    {
        id:102,
        name:"charger",
        price:100,
        description:"c pin"
    },
    {
        id:103,
        name:"cover",
        price:50,
        description:"kjjhkjkk"
    }
])

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Product Display</h1>
      <div className="row">
        {data && data.length > 0 ? (
          data.map((product, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">
                    <strong>Price:</strong> ${product.price}
                  </p>
                  <button onClick={()=>{dispatch(addToCart(product))}} className='btn btn-primary'>ADD TO CART</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <p>No products available.</p>
          </div>
        )}
      </div>
    </div>
  );
};
