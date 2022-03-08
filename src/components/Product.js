import React ,{useState,useEffect,useContext}from 'react';
import { Card, Button  } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { cartContext, Cartstate } from '.././Context/cartcontext';
import { API_URL } from '../Helper';
import Swal from "sweetalert2";




export default function Product(props) {

const {state:{cart,qty},dispatch}=Cartstate();
console.log(qty)
console.log(cart)

const [data, setData] = useState([]);
const [offset, setOffset] = useState(0);
//const [cart, setCart] = useContext(cartContext);

// const addtocart = (element) =>{

//          if(!cart.includes(element)){
//             setCart(cart =>[...cart,element]);
//          }else{
//             Swal.fire({  
//                 title: '',  
//                 type: "warning",  
//                 text: "Allready in Cart" 
//               });  
//          }
       
//         //localStorage.setItem("cart",JSON.stringify(cart))
//        // localStorage.setItem("cart_count",cart.length)

// }


async function getDataProduct() {

    let url = `${API_URL}product/productbycategory/${props.category}/${offset}`;
    let data1 = await fetch(url);
    let parsedata = await data1.json();
    setData(data.concat(parsedata));
   
  }

useEffect(() => {
    getDataProduct();
}, [offset])

//console.log(cart);
//console.log("data variable",dispatch);




function load(page){
    setOffset(offset+1)
}

// async function loadproduct  (){

//     //console.log(offset)

//     let url = `http://localhost/codeigniter/api/product/productbycategory/${props.category}/${offset}`;
//     let data1 = await fetch(url);
//     let parsedata = await data1.json();
//     setData(parsedata.concat(parsedata));
    

// }

   

    return (
        <div className='container my-5'>
        <h1>{props.cat_head?props.cat_head:"Products"}</h1>
        <div className='row'>
        {data && data.map((product,index) => 
            
                       <div key={index} className="col-md-3 my-2" >
                          <Card style={{ width: '18rem' }} >
                          
                                <Card.Body>
                                <Link className="title_color" to={`/product/${ product.slug }`}><Card.Img variant="top" src={product.url?product.url :"https://dl2vs6wk2ewna.cloudfront.net/scrap/overnight/50853-E/50853-E.side.jpg"} />
                                <Card.Title className='danger title_color'>{product.name}</Card.Title>
                                <Card.Title className='danger title_color '>${product.sale_price}</Card.Title>
                                </Link>
                                {/* <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text> */}

                                {
                                    cart.some((p)=>p.product_id == product.product_id)?(<Button className='bg_black btn-danger' onClick={() => dispatch({type:"REMOVE_FROM_CART",payload:product,qty:0
                                    
                                })}>Remove From Cart</Button>)
                                    :(<Button className='bg_black btn-dark' onClick={( ) => dispatch({type:"ADD_TO_CART",payload:product,totalPrice: product.sale_price,qty:1
                                    
                                    })}>Add To Cart</Button>) 
                                }
                                
                                {/* <Button className='bg_black btn-dark' onClick={(e) => addtocart(product)}>Add To Cart</Button> */}
                                
                              
                                </Card.Body>
                               
                            </Card>
                        </div>
                        
            )}
            </div>
            <div className="col-md-12 text-center my5">
            <Button variant="dark" className='load_more' onClick={load}>Load More</Button>
            </div>
                               
       </div>
    )
}
