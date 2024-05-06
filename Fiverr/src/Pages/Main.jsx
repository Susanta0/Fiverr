import React from 'react'
import { Welcome } from '../Components/Welcome'
import { Allgigs } from '../Components/Allgigs'
import { Dropdown } from '../Components/Dropdown'
import { AfterLoginNavbar } from '../Components/AfterLoginNavbar'
import { Footer } from '../Components/Footer'

export const Main = ({user}) => {
  return (
    <>
    <AfterLoginNavbar/>
    <Dropdown/>
    <div className='px-20 mt-20'>
    <Welcome user={user}/>
    <Allgigs heading="Based on your browsing history" style="text-2xl"/>
    <Allgigs heading ="Gigs you may like" style="text-3xl" color="text-[#404145]"/>
    <Allgigs heading ="Verified Pro services in Website Development" style="text-2xl" color="text-[#404145]"/>
    <Allgigs heading ="Most popular Gigs in Website Development" style="text-2xl" color="text-[#404145]"/>
    <Footer/>
    </div>
    </>
  )
}
