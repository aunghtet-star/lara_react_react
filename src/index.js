import { render } from '@testing-library/react';
import React from 'react'
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Cart from './Cart';

const root = document.querySelector('#root');

render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='about' element={<About/>}></Route>
            <Route path='cart' element={<Cart/>}></Route>
        </Routes>
    </BrowserRouter>,
    root
)