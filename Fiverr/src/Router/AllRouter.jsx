import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Main } from '../Pages/Main'
import { BecomeSeller } from '../Pages/BecomeSeller'
import { SellerCreator } from '../Pages/SellerCreator'

export const AllRouter = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/main' element={<Main/>}/>
      <Route path="/becomeseller" element={<BecomeSeller/>}/>
      <Route path='/becomeseller/sellercretor/:srller_id' element={<SellerCreator/>}/>
    </Routes>
    </>
  )
}
