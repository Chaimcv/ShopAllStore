
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter,Routes,Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Test from './components/Test';
import Details from './pages/Details';
import Cart from './pages/Cart';




function App() {
 
 
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
       
      </Routes>
      </BrowserRouter>
    
      <Footer />

    </div>
  );
}

export default App;
