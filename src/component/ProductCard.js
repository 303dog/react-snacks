import React from "react";
import "./ProductCard.css";
import Products from './Products'


class ProductCard extends React.Component {
  constructor(props) {
    super(props);
   
  }

  render() {
    return ( 
    <div className='pc__container'>
        Great
        <div className='pc__main'>
     <Products />
     <li>     {this.props.title}</li>

        </div>
        </div>
    );
  }
}

export default ProductCard;
