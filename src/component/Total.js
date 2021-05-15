import React from 'react'


  const Total = ({ products }) => (

    
    <div className='pc__total'>
      <h3>
        Price: ${products.reduce((sum, i) => (sum += i.count * i.price), 0)}
      </h3>
    </div>
    
  );

  export default Total;