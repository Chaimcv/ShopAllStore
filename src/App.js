
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter,Routes,Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Test from './components/Test';
import Login from './pages/Login';



function App() {
 
 
  return (
    <div className="App">
      {/* <Header /> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      </BrowserRouter>
    
      <Footer />

    </div>
  );
}

export default App;
