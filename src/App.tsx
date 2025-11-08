import './App.css'
import Form from './components/form/form'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import FoodPage from './components/pages/food';
import Cart from './components/cart/cart';
import Header from './components/header/header';
import ElectronicsPage from './components/pages/electronics';
import ClothesPage from './components/pages/clothes';
import { useAuth } from './hooks/checkUser';

export default function App() {
  const isUser =useAuth();
  return (
    <>
          <Cart/>
          <BrowserRouter>
           {isUser && <Header/>}
           <Routes>
            <Route path="/food" element={isUser ? <FoodPage /> : <Form/>}></Route>
            <Route path="/electronics" element={isUser ? <ElectronicsPage /> : <Form/>}></Route>
            <Route path="/clothes" element={isUser ? <ClothesPage /> : <Form/>}></Route>
           </Routes>
          </BrowserRouter>

    </>
  )
}


