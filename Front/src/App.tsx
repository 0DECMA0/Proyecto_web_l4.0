import { useState } from 'react'
import './App.css'
import UserForm from './module/user/userForm'
import ProductData from './module/product/Product.Data'
import OrderData from './module/order/OrderData'
import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(5)

  return (
    <>
      <Router>
        <nav>
          <ul>
            <li><Link to="/user">Usuarios</Link></li>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/order">Order</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/user' element={<UserForm />} />
          <Route path='/product' element={<ProductData />} />
          <Route path='/order' element={<OrderData />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
