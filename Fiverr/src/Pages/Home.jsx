import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import Company, { Banner } from '../Components/Banner'
import { PopularServices } from '../Components/PopularServices'
import { Everything } from '../Components/Everything'
import { Category } from '../Components/Category'
import { FiverrPro } from '../Components/FiverrPro'
import { Marketing } from '../Components/Marketing'
import { Inspiring } from '../Components/Inspiring'
import { Grow } from '../Components/Grow'
import { Footer } from '../Components/Footer'
// import { Welcome } from '../Components/Welcome'


export const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Company/>
    <PopularServices/>
    <Everything/>
    <Category/>
    <FiverrPro/>
    <Marketing/>
    <Inspiring/>
    <Grow/>
    <Footer/>
    </>
  )
}
