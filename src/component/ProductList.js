
import React from 'react'



  const ProductList = ({ products, onChange }) => (
    <>
      <div className='auto__container'>
        <fieldset>
          <legend>Build Your Order</legend>
          <form>
            {products.map((product, i) => (
              <div className='auto__row'>
                <div className='auto__col25'>
                  <label>{product.title}</label>
                </div>
                <div className='auto__col75' key={i}>
                  {product.size}
                </div>
  
                <input
                  className='auto__input'
                  type='text'
                  value={product.count}
                  onChange={(e) => onChange(i, parseInt(e.target.value) || 0)}
                />
              </div>
            ))}
          </form>
     
        </fieldset>
      
      </div>
    </>
  );

  export default ProductList;