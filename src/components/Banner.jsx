import React from 'react';
import vector_bg from "../assets/image/vector-bg-3.a112de0b.svg";
import { Link } from 'react-router-dom';
import { TbMessagePlus } from 'react-icons/tb';

const Banner = ({ title = "", heroImage = "", description = "" }) => {
  return (
    <section className={`h-[70dvh] grid place-content-center relative`} style={{ clipPath: 'polygon(100% 0, 100% 85%, 50% 100%, 0 85%, 0% 0%)' }}>
      <img loading="lazy" src={vector_bg} alt='diamond white' className='absolute left-16 top-[30%]' />
      <img loading="lazy" src={vector_bg} alt='diamond white' className='absolute right-16 top-[30%] rotate-45' />
      <div className='absolute h-full w-full z-[-1] bg-tertiary/70' />
      <div className='absolute h-full w-full z-[-2]'>
        {heroImage ? <img loading="lazy" src={heroImage} alt={`${title}`} className='object-cover object-center w-full h-full' /> : null}
      </div>
      <h1 className='mb-3 text-center uppercase new_font text-30 lg:text-36 text-secondary'>{title}</h1>
      <div className="flex items-center justify-center w-full">
        <Link to="/contact-us"
          className={`flex  items-center gap-2 border px-2 lg:px-4 py-2 rounded-full transform transition duration-500 ease-in-out hover:scale-110  text-white border-white hover:bg-white hover:text-tertiary
          }`}
        >
          <TbMessagePlus className="w-5 h-5" />
          <span className="hidden text-sm leading-tight uppercase lg:block">Contact Us</span>
        </Link>
      </div>
      {description ? <p className='content-text text-secondary text-center w-[80dvw] sm:w-[60dvw] lg:w-[35dvw] mx-auto'>{description}</p> : null}
    </section>
  )
}

export default Banner