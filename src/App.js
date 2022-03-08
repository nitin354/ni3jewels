import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Product from './components/Product';
import Cart from './components/Cart';
import Login from './components/Login';
import Register from './components/Register';
import Productdetail from './components/Productdetail';
import CartContextProvider from '../src/Context/cartcontext';
import Diamonds from './components/Diamonds';
//import Context from './Context/Context';


function App() {


  return (
    <div className="App">
      <div>
      <BrowserRouter>
      <CartContextProvider>
     
        <Header />        
        <Routes>
          <Route exact  path="/" element={<Product key={0}  category={2}  />} />
          <Route exact  path="/diamonds" element={<Diamonds key={1}  cat_head={"Diamonds"}   />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register  />} />
          <Route  path="/engagement" element={<Product key={2} cat_head={"Engagement Ring"}  category={2}  />} />
          <Route  path="/wedding" element={<Product  key={8} cat_head={"Wedding Ring"}  category={8}    />} />
          <Route  path="/product/:slug" element={<Productdetail     />} />
          <Route  path="/cart" element={<Cart/>} />
        </Routes>
       
        </CartContextProvider>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
