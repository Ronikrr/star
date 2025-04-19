import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
const team = [
    {
        id: 1,
        img: 'https://res.cloudinary.com/duryg51ts/image/upload/v1737962669/profile_Image/rzcjgoxqvdc0j4lzckrd.jpg',
        name: '', post: '', whatsapp: ''
    }, {
        id: 2,
        img: 'https://res.cloudinary.com/duryg51ts/image/upload/v1737962669/profile_Image/rzcjgoxqvdc0j4lzckrd.jpg',
        name: '', post: '', whatsapp: ''
    }, {
        id: 3,
        img: 'https://res.cloudinary.com/duryg51ts/image/upload/v1737962669/profile_Image/rzcjgoxqvdc0j4lzckrd.jpg',
        name: 'Bhaktesh Gadhiya', post: 'ceo', whatsapp: ''
    }
]
const OwnerSection = () => {
    return (
        <div className='py-[70px]' >
            <div className="container mx-auto">
                <div className="w-full text-center mb-7">
                    <h1 className='text-4xl font-bold' >Meet Our Team</h1>
                </div>
                <div className="flex flex-wrap mx-auto justify-center w-[75%]">
                    {team.map((item, index) => (
                        
                        <div className="w-full md:w-6/12 lg:w-4/12 ">
                            <div className="px-[1rem] w-full relative ">
                                <div className="card mb-[30px] bg-[#fff] border border-[rgba(0,0,0,.175)] flex-col flex ">
                                    <div className="w-full h-auto overflow-hidden rounded">
                                        <img src="" className='object-contain w-full h-full aspect-square ' alt="" />
                                    </div>
                                    <div className="py-[24px] text-center">
                                        <h1 className='mb-1 capitalize text-[22px] font-semibold ' >name</h1>
                                        <p className='mb-1 capitalize text-16' >post</p>
                                        <div className="flex items-center justify-center">
                                            <a href='#' className="w-[50px] h-[50px] rounded-lg bg-gray-100  flex justify-center border border-gray-400  items-center ">
                                                <FaWhatsapp className='text-2xl ' />
                                            </a>
    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default OwnerSection