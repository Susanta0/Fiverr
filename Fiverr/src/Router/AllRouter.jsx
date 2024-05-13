import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Main } from '../Pages/Main'
import { BecomeSeller } from '../Pages/BecomeSeller'
import { SellerCreator} from '../Pages/SellerCreator'
import { Overview } from '../Components/Overview'
import { Overview2 } from '../Components/Overview2'
import { PersonalInfo } from '../Components/PersonalInfo'

export const AllRouter = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/main' element={<Main/>}/>
      <Route path="/becomeseller" element={<BecomeSeller/>}/>
      <Route path='/becomeseller/sellercretor/srller_id' element={<SellerCreator/>}/>
      <Route path='/becomeseller/sellercretor/srller_id/overview' element={<Overview/>}/>
      <Route path='/becomeseller/sellercretor/srller_id/overview/do' element={<Overview2/>}/>
      <Route path='/becomeseller/sellercretor/srller_id/overview/do/personal_info' element={<PersonalInfo/>}/>
    </Routes>
    </>
  )
}
