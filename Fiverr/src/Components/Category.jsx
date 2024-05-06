import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import category_1 from "../assets/category_1.svg"
import category_2 from "../assets/category_2.svg"
import category_3 from "../assets/category_3.svg"
import category_4 from "../assets/category_4.svg"
import category_5 from "../assets/category_5.svg"
import category_6 from "../assets/category_6.svg"
import category_7 from "../assets/category_7.svg"
import category_8 from "../assets/category_8.svg"
import category_9 from "../assets/category_9.svg"
import category_10 from "../assets/category_10.svg"
import axios from 'axios'
let category=[
    {
        id:1,
        image:`${category_1}`,
        title:"Graphics & Design"
    },
    {
        id:2,
        image:`${category_2}`,
        title:"Digital Marketing"
    },
    {
        id:3,
        image:`${category_3}`,
        title:"Writing & Translation"
    },
    {
        id:4,
        image:`${category_4}`,
        title:"Video & Animation"
    },
    {
        id:5,
        image:`${category_5}`,
        title:"Music & Audio"
    },
    {
        id:6,
        image:`${category_6}`,
        title:"Programming & Tech"
    },
    {
        id:7,
        image:`${category_7}`,
        title:"Business"
    },
    {
        id:8,
        image:`${category_8}`,
        title:"Lifestyle"
    },
    {
        id:9,
        image:`${category_9}`,
        title:"Data"
    },
    {
        id:10,
        image:`${category_10}`,
        title:"Photography"
    },
]


export const Category = () => {

    const [data, setData]=useState([])
    const fetchData= async ()=>{
        try {
            await axios.get(category)
            .then((res)=>{
                setData(res.config.url)
            })
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchData()
    },[])

  return (
    <>
    <div className='px-20 mt-16'>
        <h1 className='font-bold text-4xl text-[#404145]'>You need it, we've got it</h1>
        <ul className='category mt-16 '>
            {data.map((ele)=>(
            <li key={ele.id} className='pb-14 flex justify-center relative py-1'>
                <Link className='link font-medium text-1xl'>
                <img src={ele.image} loading='lazy' alt="image" className='w-[48px] h-[48px] m-auto' />
                {ele.title}
                </Link>
            </li>
            ))}
        </ul>
    </div>
    </>
  )
}
