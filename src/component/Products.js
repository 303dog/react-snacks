import React from 'react'
import './Products.css'
import Total from './Total'
import ProductList from './ProductList'


class Products extends React.Component {
    state = {
      products: [
        { title: "Color Labels", size: '12"x18"', count: 0, price: 2.5 },
        { title: "Color Labels", size: '11"x17"', count: 0, price: 1.75 },
        { title: "Color Labels", size: '8.5"x11"', count: 0, price: 2.75 },
        { title: "Color Labels", size: '8.5"x5.5"', count: 0, price: 2.5 },
        { title: "Color Labels", size: '4.25"x5.5"', count: 0, price: 1.75 },
        { title: "Standard Labels", size: '12"x18"', count: 0, price: 2.8 },
        { title: "Standard Labels", size: '11"x17"', count: 0, price: 2.5 },
        { title: "Standard Labels", size: '8.5"x11"', count: 0, price: 1.75 },
        { title: "Standard Labels", size: '8.5"x5.5"', count: 0, price: 2.75 },
        { title: "Standard Labels", size: '4.25"x5.5"', count: 0, price: 2.75 },
      ],
      cost: 0, 

      orderedItems: []
    };

 
    // working running total as user selects
    onChange = (index, val) => {
      this.setState({
        products: this.state.products.map((product, i) =>
          i === index ? { ...product, count: val } : product
        ),
      });
    };

    // NOT working to setState cost.
    //working setState orderItems.
    onSubmit = (e, index) => {
      const orderTotal = (Total);
      this.setState({
        cost: orderTotal,
        orderedItems: this.state.products.map((product, i) => i === index ? { ...product, count: e.target.value } : product),
      });
    }


  
    render() {
      return (
        <>
          <div className='auto__main'>
            <ProductList
              products={this.state.products}
              onChange={this.onChange}
            />
            <Total products={this.state.products} />
            <button onClick={this.onSubmit}>Submit</button>
            
            
          </div>
        </>
      );
    }
  }
  

  

  export default Products;