import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './home/Home';
import Detail from './detail/Detail';
import Cart from './cart/Cart';
function App() {
 


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<Home/>} />
      <Route path="/detail/:id" element={<Detail/>} />
      <Route  path="/cart" element={<Cart/>} />
    </Routes>
    </BrowserRouter>
  );
}
export default App;
