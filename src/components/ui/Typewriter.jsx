import React, { useEffect, useState } from 'react'

const Typewriter = ({ text, speed = 100 }) => {
    const [DisplayedText, setDisplayedText] = useState('')

    useEffect(() => {
        let index = 0
        const interval = setInterval(() => {
            setDisplayedText(prev => prev + text.charAt(index))
            index++

            if (index>=text.length) {
                clearInterval(interval)
            }
        }, speed);
        return ()=>clearInterval(interval)
    }, [text,speed]);
  return (
      <h1 className='text-[36px] new_font' >{DisplayedText}</h1>
  )
}

export default Typewriter