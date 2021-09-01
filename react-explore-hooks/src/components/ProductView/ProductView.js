import React from "react";
import ProductListItem from "../ProductListItem";
import ProductDetails from "../ProductDetails";
import './ProductView.css'
import { useState, useEffect } from 'react';

function ProductView({ products }) {
    // TODO: Replace with state variable
    // const sideBarStatus = localStorage.getItem('sideBarStatus')
    // const booleanStatus Boolean(sideBarStatus);
    const [sideOpen, setSideOpen] = useState('');
    const [product, setProduct] = useState('');
    

    useEffect(() => {
        console.log(`selectedProduct CHANGED TO`, product);
        if (product) {
            setSideOpen(true);
        }
    }, [product])

    useEffect(() => {
        console.log(`sideOpen CHANGED TO`, sideOpen);
        if (!sideOpen) setProduct('');
    }, [sideOpen]);

    useEffect(() => {
        localStorage.setItem('sideBarStatus', sideOpen)
        const sideBarStatus = localStorage.getItem("sideBarStatus");
        setSideOpen(Boolean(sideBarStatus))
    },[sideOpen])
 

    return (
        <div className="product-view">
            <div className="product-main-area">
                <h1>Products</h1>
                <div className="product-list">
                    {products.map(item =>
                        <ProductListItem
                            key={item.id}
                            product={item}
                            onClick={() => setProduct(item)}
                            isSelected={product.id === item.id}
                        />
                    )}
                </div>
            </div>

            <div className="product-side-panel">
                <div className="product-side-panel-toggle-wrapper">
                    <div className="product-side-panel-toggle"
                         onClick={() => setSideOpen(!sideOpen)}>
                        {sideOpen ? '>' : '<'}
                    </div>
                </div>
                <ProductDetails visible={sideOpen} product={product} />
            </div>
        </div>
    );
}

export default ProductView;
