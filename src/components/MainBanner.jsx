import React from 'react'
import video from '../assets/home-page-video.mp4'
// import Typewriter from './ui/Typewriter'
// import { Typewriter } from 'react-simple-typewriter';
import Typewriter from 'typewriter-effect';
import { TbMessagePlus } from 'react-icons/tb';
import { AttentionSeeker } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const MainBanner = () => {
  return (
    <div className='relative flex items-center justify-center w-full min-h-screen pt-20 bg-black/80 '>
      <div className="absolute top-0 w-full h-full z-[-1]">
        <video className='object-fill w-full h-full md:aspect-video aspect-[4/3] ' autoPlay muted loop src={video}></video>
      </div>
      <div className="flex items-center flex-col justify-center gap-5 mx-3 lg:gap-8 sm:w-[75dvw] lg:w-[60dvw]">
        <h1 className='text-[30px] text-center lg:text-[36px] text-white new_font uppercase' >

          <Typewriter
            options={{
              loop: true,
              delay: 50,
              deleteSpeed: 50,
              cursor: '',
              wrapperClassName: 'span',
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString('From Rough to <strong style="color: #024193;">Wonder</strong>')
                .pauseFor(2500)
                .deleteAll()
                .typeString('<strong style="color: #024193;">Advance</strong> technology & Expertise')
                .pauseFor(2500)
                .deleteAll()
                .typeString('Maximizing the <strong style="color: #024193;">Brilliance</strong>')
                .pauseFor(2500)
                .deleteAll()
                .typeString('Experience of <strong style="color: #024193;">Ultra Luxury</strong>')
                .pauseFor(2500)
                .deleteAll()
                .typeString('Reflecting the <strong style="color: #024193;">Promise</strong>')
                .pauseFor(2500)
                .deleteAll()
                .typeString('Unlocking Journeys with <strong style="color: #024193;">Inspiring Travel</strong>')
                .pauseFor(2500)
                .deleteAll()
                .start();
            }}
          />

        </h1>
        <Link to={'/contact-us'}
          className="flex items-center gap-2 px-2 py-3 transition-transform duration-500 ease-in-out transform bg-white border rounded-full text-tertiary border-tertiary lg:px-4 hover:scale-110"
        >
          <TbMessagePlus className="w-5 h-5" />
          <span className="text-sm leading-tight ">Contact Us</span>
        </Link>
        <div className="flex flex-col gap-0 md:flex-row md:gap-8 ">
          <div className="text-center">
            <AttentionSeeker effect='heartBeat' triggerOnce><h2 className='text-secondary new_font text-[24px] text-center'>2800+</h2></AttentionSeeker>
            <p className='text-center uppercase text-secondary/80 content-text'>Happy Customers</p>
          </div>
          <div className="text-center">
            <AttentionSeeker effect='heartBeat' triggerOnce><h2 className='text-secondary new_font text-[24px] text-center'>10000+</h2></AttentionSeeker>
            <p className='text-center uppercase text-secondary/80 content-text'>Order Fulfilled</p>
          </div>
          <div className="text-center">
            <AttentionSeeker effect='heartBeat' triggerOnce><h2 className='text-secondary new_font text-[24px] text-center'>18+</h2></AttentionSeeker>
            <p className='text-center uppercase text-secondary/80 content-text'>Countries</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainBanner