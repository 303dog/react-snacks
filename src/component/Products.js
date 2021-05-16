import React from 'react';
import ProductList from './ProductList';
import './Products.css';
import Total from './Total';



class Products extends React.Component {
    state = {
      products: [
        { id: 1, title: "Color Labels", size: '12"x18"', count: 0, price: 2.5 },
        { id: 2, title: "Color Labels", size: '11"x17"', count: 0, price: 1.75 },
        { id: 3, title: "Color Labels", size: '8.5"x11"', count: 0, price: 2.75 },
        { id: 4, title: "Color Labels", size: '8.5"x5.5"', count: 0, price: 2.5 },
        { id: 5, title: "Color Labels", size: '4.25"x5.5"', count: 0, price: 1.75 },
        { id: 6, title: "Standard Labels", size: '12"x18"', count: 0, price: 2.8 },
        { id: 7, title: "Standard Labels", size: '11"x17"', count: 0, price: 2.5 },
        { id: 8, title: "Standard Labels", size: '8.5"x11"', count: 0, price: 1.75 },
        { id: 9, title: "Standard Labels", size: '8.5"x5.5"', count: 0, price: 2.75 },
        { id: 10, title: "Standard Labels", size: '4.25"x5.5"', count: 0, price: 2.75 },
      ],
      cost: 0, 
      orderedItems: [] // NOT USEing
    };

 
    // working running total as user selects
    onChange = (index, val) => {
      this.setState({
        products: this.state.products.map((product, i) =>
          i === index ? { ...product, count: val } : product
        ),
      });
      return this.usersOrder()
    };

    // working to setState cost.
    //working setState orderItems.
    onSubmit = (e, index) => {
      let owed$ = this.state.products.reduce((sum, i) => (sum += i.count * i.price), 0);
      this.setState({
        cost: owed$,
        products: this.state.products.map((product, i) => i === index ? { ...product, count: e.target.value } : product),
      });  //trying  to render orderedItems, not working
    };

    componentDidUpdate(prevProps, prevState) {
      if (prevState.products !== this.state.products) {
        console.log('products are updated')
      }
};

  usersOrder()  {
    return (
      console.log(this.state.products),
      <>
    {this.state.products.reduce((product, id) => (
     <div key={id}>
       <label>{product.title}</label>
       {this.state.products.map(product => { product.title > 0 && product.map((item, id) => (
         <li key={id}>{item.count}</li>
         ))})}
     </div>
    ))}
    </>
     )
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
            <div>{this.usersOrder()}</div>
          </div>
        </>
      );

    }
  }
  

  

  export default Products;