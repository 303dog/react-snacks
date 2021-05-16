import React from 'react'



const Ordered = ({ products }) => (
    <>
        <div className='order__container'>
            <fieldset>
                <legend>Check Your Order</legend>
                <ul>
                    {products.map((item, i) => (
                        <div className='order__row'>
                            <div className='order__col25'>
                            </div>
                                <ul>
                                <label>{item.title}</label>
                            <li className='oreder__col75' key={i}>
                                {item.size}
                            </li>
                            </ul>
                        </div>
                    ))}
                </ul>
            </fieldset>
        </div>
    </>
);
                    

export default Ordered;