import React from 'react';

const Product = (props) => {
    const {name, id} = props.product ;
    return (
        <div style={{border:'1px solid coral'}}>
            <h5>{name}</h5>
            <button style={{backgroundColor:'lightblue'}}>add to cart</button>
        </div>
    );
};

export default Product;