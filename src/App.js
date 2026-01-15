
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter,Routes,Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Test from './components/Test';
import Details from './pages/Details';
import Cart from './pages/Cart';
import Login from './pages/Login';
import { useState } from 'react';




function App() {

 const[cart,setCart]=useState([]);
 //accessing data from test page on 'Add to cart' button click and saving it to array-cartproduct 
 const Addtocart=(product)=>{
  console.log(product,"iddd"); 
const cartproduct=[
              {id:product.id,
                title:product.title,
                image:product.image}
              ]; 
setCart(prevState => [...prevState, ...cartproduct]);//appending data to cartproduct-array on each click
 };
 console.log(cart);


  return (
    <div className="App">
      <Header  cartdata={cart}/>  
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test Addtocart={Addtocart} />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/cart/:id" element={<Cart />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
       
      </Routes>
      </BrowserRouter>
    
      <Footer />

    </div>
  );
}

export default App;
