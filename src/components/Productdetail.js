import React,{useEffect,useState}  from 'react'
import {  Button  } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { API_URL } from '../Helper';

export default function Productdetail(props) {

        const [product, setProduct] = useState([]);
        var { slug } = useParams();
        let url = `${API_URL}product/productdetail/${slug}`;
 
        async function getData() {
            const response = await fetch(url);
            const data = await response.json();
            setProduct(data) ;
          }

        useEffect(() => {
            getData();
        }, [])

  return (
    <div className="container">
    <h1>Product Detail</h1>
    <div className="card">
      <div className="container-fliud">
        <div className="wrapper row">
          <div className="preview col-md-6">
            <div className="preview-pic tab-content">
              <div className="tab-pane active" id="pic-1"><img src={product.url?product.url :"https://dl2vs6wk2ewna.cloudfront.net/scrap/overnight/50853-E/50853-E.side.jpg"} /></div>
              </div>
            </div>
          <div className="details col-md-6">
            <h3 className="product-title">{product.name}</h3>
            <div className="rating">
              <div className="stars">
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
              </div>
              {/* <span className="review-no">41 reviews</span> */}
            </div>
            <p className="product-description">{product.desc}</p>
            <h4 className="price">current price: <span>${product.sale_price}</span></h4>
            <p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
         
            <div className="action">
              <button className="add-to-cart btn btn-dark" type="button">Add To Cart</button>
              {/* <button className="like btn btn-dark " type="button"><span className="fa fa-heart btn-dark" /></button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

