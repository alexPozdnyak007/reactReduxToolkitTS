import './App.css'
import Form from './components/form/form'
import HomePage from './components/HomePage/homePage';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { CheckIsUser } from './scripts/script';

function App() {
  const isAuthenticated =CheckIsUser();
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route 
          path="*" element={isAuthenticated ? <HomePage /> : <Form />} 
        />
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
