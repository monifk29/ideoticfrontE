import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Detail from '../pages/Detail';
import Home from '../pages/Home';
import Login from '../pages/Login';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/details' element={<Detail/>}></Route>

    </Routes>
  )
}

export default AllRoutes