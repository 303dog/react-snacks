import React from 'react'



const Ordered = ( props ) => (
    <>
        <div className='order__container'>
            <fieldset>
                <legend>Check Your Order</legend>
                <ul>
                    {props.products.map((item, i) => (
                        <div className='order__row'>
                            <div className='order__col25'>
                            </div>
                                <ul>
                                <label>{item.title}</label>
                            <li className='oreder__col75' key={i}>
                                {item.size}, {item.count}
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