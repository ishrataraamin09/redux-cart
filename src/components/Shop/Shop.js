import React from 'react';
import connect from 'react-redux/lib/connect/connect';
import { addToCart } from '../../redux/actions/cartActions';
import Product from '../Product/Product';

const Shop = (props) => {
    console.log(props) ;
    const products =[
        {name: 'Lenovo Laptop', id: 1} ,
        {name: 'ASUS Laptop', id: 2} ,
        {name: 'Dell Laptop', id: 3} ,
        {name: 'HP Laptop', id: 4} ,
        {name: 'Apple MacBook', id: 5} 
    ]
    return (
        <div>
           <h1>This is Shop</h1> 
           {
               products.map(pd => <Product product = {pd}></Product>)
           }
        </div>
    );
};

const mapStateToProps = state => {
    return{
        cart: state.cart ,
        products: state.products
    }
}

const mapDispatchToProps = {
    addToCart : addToCart
}

// const connectToStore = connect(mapStateToProps, mapDispatchToProps) ;
// connectToStore(Shop) ;

// connect(mapStateToProps, mapDispatchToProps)(Shop) ;

export default connect(mapStateToProps, mapDispatchToProps)(Shop) ;