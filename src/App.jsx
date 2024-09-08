import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from './components/Products'
import AddProduct from './components/AddProduct'
import UpdateProduct from './components/UpdateProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Products />}>
    </Route>
    <Route path='/create' element={<AddProduct />}>
    </Route>
    <Route path='/update/:id' element={<UpdateProduct />}></Route>
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
