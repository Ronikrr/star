import React from 'react';
import vector_bg from "../assets/image/vector-bg-3.a112de0b.svg";

const Banner = ({ title = "", heroImage = "", description = "" }) => {
  return (
    <section className={`h-[70dvh] grid place-content-center relative`} style={{ clipPath: 'polygon(100% 0, 100% 85%, 50% 100%, 0 85%, 0% 0%)' }}>
      <img src={vector_bg} alt='diamond white' className='absolute left-16 top-[30%]' />
      <img src={vector_bg} alt='diamond white' className='absolute right-16 top-[30%] rotate-45' />
      <div className='absolute h-full w-full z-[-1] bg-tertiary/70' />
      <div className='absolute h-full w-full z-[-2]'>
        {heroImage ? <img src={heroImage} alt={`${title}`} className='object-cover object-center w-full h-full' /> : null}
      </div>
      <h1 className='mb-3 text-center uppercase new_font text-30 lg:text-36 text-secondary'>{title}</h1>
      {description ? <p className='content-text text-secondary text-center w-[80dvw] sm:w-[60dvw] lg:w-[35dvw] mx-auto'>{description}</p> : null}
    </section>
  )
}

export default Banner