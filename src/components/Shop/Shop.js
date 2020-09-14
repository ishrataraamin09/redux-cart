import React from 'react';
import { addToCart } from '../../redux/actions/cartActions';
import Product from '../Product/Product';
import { connect } from 'react-redux' ;

const Shop = (props) => {
    const {products, addToCart} = props ;
    return (
        <div>
           <h1>This is Shop</h1> 
           {
               products.map(pd => <Product 
                key = {pd.id}
                product = {pd}
                addToCart = {addToCart}
                ></Product>)
           }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = {
    addToCart : addToCart
}

// const connectToStore = connect(mapStateToProps, mapDispatchToProps) ;
//connect(mapStateToProps, mapDispatchToProps)(Shop) ;

export default connect(mapStateToProps, mapDispatchToProps)(Shop) ;