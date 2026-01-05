
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Test from './components/Test';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test />}>
        </Route>
      </Routes>
      </BrowserRouter>
    
      <Footer />

    </div>
  );
}

export default App;
