import React from "react";
import "./ProductCard.css";
import Products from "./Products";


class ProductCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='pc__container'>
        invisible
        <div className='pc__main'>
          <Products />
        </div>
      </div>
    );
  }
}

export default ProductCard;
