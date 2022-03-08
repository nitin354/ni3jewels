import React, { useEffect, useState } from "react";
import { Card, Button, Label } from "react-bootstrap";
import '../css/cart.css';
import { Link } from "react-router-dom";
import { Cartstate } from "../Context/cartcontext";
export default function Cart() {

  const {state:{cart,qty},dispatch}=Cartstate();
  // let cart = JSON.parse(localStorage.getItem("cart"));

  const [total, setTotal] = useState(0)
 
  useEffect(() => {
    setTotal(cart.reduce((acc,cur)=> acc + Number(cur.sale_price*cur.qty),0))
  }, [cart])
  

  return (
    <div className="container my-5">
      <h1>Cart</h1>
      <div className="row">
        <div className="card">
          <div className="row">
            <div className="col-md-8 cart">
              <div className="title">
                <div className="row">
                  <div className="col">
                    <h4>
                      <b>Shopping Cart</b>
                    </h4>
                  </div>
                  <div className="col align-self-center text-right text-muted">
                    {cart.length} items
                  </div>
                </div>
              </div>
              {cart &&
                cart?.map((product, index) => (

                  <div key={product.slug} className="row border-top border-bottom">
                    <div className="row main align-items-center">
                      <div className="col-2" to="/">
                        <img
                          className="img-fluid"
                          src={
                            product.url
                              ? product.url
                              : "https://dl2vs6wk2ewna.cloudfront.net/scrap/overnight/50853-E/50853-E.side.jpg"
                          }
                        />
                      
                      </div>
                      <div className="col">
                        <div className="row">{product.name}</div>
                      </div>
                      <div className="col">
                        <span onClick={() => dispatch({type: 'DES',payload:product})} >-</span>
                        <span  className="border">
                          {product.qty}
                        </span>
                        <span  onClick={() => dispatch({type: 'INC',payload:product})}>+</span>{" "}
                      </div>
                      <div className="col">
                        ${product.sale_price*product.qty}
                        <span  onClick={() => dispatch({type:"REMOVE_FROM_CART",payload:product})} className="close">✕</span>
                      </div>  
                    </div>
                  </div>
                
                ))}

              <div className="back-to-shop">
                <a href="#">←</a>
                <span className="text-muted"><Link to="/">Back to shop</Link></span>
              </div>
            </div>
            <div className="col-md-4 summary">
              <div>
                <h5>
                  <b>Summary</b>
                </h5>
              </div>
              <hr />
              <div className="row">
                <div className="col" style={{ paddingLeft: 0 }}>
                  ITEMS { cart.length}
                </div>
                <div className="col text-right">${total}</div>
              </div>
              {/* <form>
                <p>SHIPPING</p>{" "}
                <select>
                  <option className="text-muted">
                    Standard-Delivery- $5.00
                  </option>
                </select>
                
                <input id="code" placeholder="Enter your code" />
              </form> */}
              <div className="row" style={{
                  borderTop: "1px solid rgba(0,0,0,.1)",
                  padding: "2vh 0",
                }}
              >
                <div className="col">TOTAL PRICE</div>
                <div className="col text-right">${total}</div>
              </div>
              <button className="btn">CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
