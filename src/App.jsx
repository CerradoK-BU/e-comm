import {  } from 'react'
import Header from './components/Header'
import HomePage from './components/HomePage'
import Collections from './components/Collections';
import ProductSection from './components/Products';
import Category from './components/Category';
import Cart from './components/Cart';
import Favorite from './components/Favorites';
import Profile from './components/Profile';
import Payment from './components/Payment';
import FootwearAccessories from './components/FootwearAccessories';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import './App.scss'

function App() {
  return (
    <div className='apphome'>
      <BrowserRouter>
        <Header/>
        <Routes> 
          <Route path='/shop' element={<HomePage/>}></Route>
          <Route path='/collections' element={<Collections/>}></Route>
          <Route path='/section/:section' element={<ProductSection />} />
          <Route path='/categorysection/:section/:category' element={<Category />} />
          <Route path='/category/:category' element={<FootwearAccessories />} />
          <Route path='/payment' element={<Payment/>}></Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/favorites' element={<Favorite/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>

        </Routes>
        
      </BrowserRouter>
        

    </div>
  )
}

export default App
