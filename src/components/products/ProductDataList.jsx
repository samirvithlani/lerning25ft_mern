import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';
    

export const ProductDataList = () => {
  const { data } = useContext(ProductContext);

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
