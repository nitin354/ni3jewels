import React, { useState, useEffect, useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { cartContext } from ".././Context/cartcontext";
import { API_URL } from "../Helper";
import Swal from "sweetalert2";
import {  Cartstate } from '.././Context/cartcontext';

export default function Diamonds(props) {
  const {state:{cart,qty},dispatch}=Cartstate();
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);

  const [dshape, setShape] = useState("");

  // const addtocart = (element) => {
  //   if (!cart.includes(element)) {
  //     setCart((cart) => [...cart, element]);
  //   } else {
  //     Swal.fire({
  //       title: "",
  //       type: "warning",
  //       text: "Allready in Cart",
  //     });
  //   }

  //   //localStorage.setItem("cart",JSON.stringify(cart))
  //   // localStorage.setItem("cart_count",cart.length)
  // };

  async function getDataDiamonds(shape) {

    setShape(shape);
    let url = `${API_URL}product/diamondbycategory/${offset}/${shape}`;
    let data2 = await fetch(url);
    let parsedata = await data2.json();
    //setData(data.concat(parsedata));
    setData(parsedata);
  }

  
  async function getshapeDataDiamonds(shape) {

    setShape(shape);
    let url = `${API_URL}product/diamondbycategory/${offset}/${shape}`;
    let data2 = await fetch(url);
    let parsedata = await data2.json();
     //setData(data.parsedata);
     setData(data.concat(parsedata));
  }

  useEffect(async () => {

    getDataDiamonds(dshape);
    // let url = `${API_URL}product/diamondbycategory/${offset}`;
    // let data1 = await fetch(url);
    // let parsedata = await data1.json();
    // setData(data.concat(parsedata));
  }, [offset,dshape]);

  //console.log(cart);
  //console.log("data variable",dispatch);

  function load(page) {
   

    setOffset(offset + 1);

    getshapeDataDiamonds(dshape)
  }

  return (
    <div className="container my-5">
      <h1>{props.cat_head ? props.cat_head : "Products"}</h1>
      <div className="row">
        <div>
          <div className="d_box100 only-desktop  col-sm-12 col-md-12 col-lg-12 col-xs-12 no-padding1 jwel_pd">
            <label
              onClick={() => {
                getshapeDataDiamonds("Round");
              }}
            >
              <img
                src="https://greendia.belgiumwebnet.com/assets/images/gems_img/icon/round.png"
                alt="round"
                className="img-size1"
              />
              {/* <span className="shape-title">Round</span> */}
            </label>

            <label
              onClick={() => {
                getshapeDataDiamonds("Princess");
              }}
            >
              <img
                src="https://greendia.belgiumwebnet.com/assets/images/gems_img/icon/princess.png"
                alt="princess"
                className="img-size1"
              />
              {/* <span className="shape-title">Princess</span> */}
            </label>

            <label
              onClick={() => {
                getshapeDataDiamonds("Cushion");
              }}
            >
              <img
                src="https://greendia.belgiumwebnet.com/assets/images/gems_img/icon/cushion.png"
                alt="cushion"
                className="img-size1"
              />
              {/* <span className="shape-title">Cushion</span> */}
            </label>

            <label
              onClick={() => {
                getshapeDataDiamonds("Oval");
              }}
            >
              <img
                src="https://greendia.belgiumwebnet.com/assets/images/gems_img/icon/oval.png"
                alt="oval"
                className="img-size1"
              />
              {/* <span className="shape-title">Oval</span> */}
            </label>

            <label
              onClick={() => {
                getshapeDataDiamonds("Emerald");
              }}
            >
              <img
                src="https://greendia.belgiumwebnet.com/assets/images/gems_img/icon/emerald.png"
                alt="emerald"
                className="img-size1"
              />
              {/* <span className="shape-title">Emerald</span> */}
            </label>

            <label
              onClick={() => {
                getshapeDataDiamonds("Marquise");
              }}
            >
              <img
                src="https://greendia.belgiumwebnet.com/assets/images/gems_img/icon/marquise.png"
                alt="marquise"
                className="img-size1"
              />
              {/* <span className="shape-title">Marquise</span> */}
            </label>

            <label
              onClick={() => {
                getshapeDataDiamonds("Pear");
              }}
            >
              <img
                src="https://greendia.belgiumwebnet.com/assets/images/gems_img/icon/pear.png"
                alt="pear"
                className="img-size1"
              />
              {/* <span className="shape-title">Pear</span> */}
            </label>
          </div>
        </div>
        {data &&
          data.map((product, index) => (
            <div key={index} className="col-md-3 my-2">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Link className="title_color" to={`/product/${product.slug}`}>
                    <Card.Img
                      variant="top"
                      src={
                        product.imagelink
                          ? product.imagelink
                          : "https://dnalinks.in/T8893/still.jpg"
                      }
                    />
                    <Card.Title className="danger title_color my-3">
                      {product.weight +
                        " Carat " +
                        product.shape +
                        " Cut  DIAMOND"}
                    </Card.Title>
                    <Card.Title className="danger title_color ">
                      ${product.actual_price}
                    </Card.Title>
                  </Link>

                  <Button
                    className="bg_black btn-dark"
                    onClick={(e) => dispatch({type:"ADD_TO_CART",payload:product})}
                  >
                    Add To Cart
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
      </div>
      <div className="col-md-12 text-center my5">
        <Button variant="dark" className="load_more" onClick={load}>
          Load More
        </Button>
      </div>
    </div>
  );
}
