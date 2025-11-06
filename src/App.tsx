import './App.css'
import Form from './components/form/form'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { CheckIsUser } from './scripts/script';
import FoodPage from './components/pages/food';
import Cart from './components/cart/cart';
import { CartProvider } from './context/cartContext';
import Header from './components/header/header';
import ElectronicsPage from './components/pages/electronics';
import ClothesPage from './components/pages/clothes';


export default function App() {
  const isAuthenticated =CheckIsUser();
  return (
    <>
    
    <CartProvider>
          <Cart/>
          <BrowserRouter>
           <Header/>
           <Routes>
            <Route path="/food" element={isAuthenticated ? <FoodPage /> : <Form/>}></Route>
            <Route path="/electronics" element={isAuthenticated ? <ElectronicsPage /> : <Form/>}></Route>
            <Route path="/clothes" element={isAuthenticated ? <ClothesPage /> : <Form/>}></Route>
           </Routes>
          </BrowserRouter>
    </CartProvider>
   
    </>
  )
}


