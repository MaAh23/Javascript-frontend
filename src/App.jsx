import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Views/Home'
import Contacts from './Views/Contacts'
import NotFound from './Views/NotFound'



function App() {
  const [count, setCount] = useState(0)

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contacts' element={<Contacts />} />
        <Route path='/*' element={<NotFound />} />
        
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
