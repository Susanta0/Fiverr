import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Main } from '../Pages/Main'

export const AllRouter = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/main' element={<Main/>}/>
    </Routes>
    </>
  )
}
