import React from 'react'
import Banner from '../components/Banner'
import guids from '../assets/image/guide/diamond-4c-hero-image.webp'
import diamond4CsImage from '../assets/image/guide/4Cs-of-diamonds.webp'
import { guideContent } from '../utils/guide.utils'
const Dimondguide = () => {
  return (
      <div>
      <Banner title={`Diamond' s 4C Guide`} heroImage={guids} />
      <div className="grid sm:grid-cols-12">
        <div className="sm:col-span-10 sm:col-start-2">
          <div className="grid mx-3 my-[10dvh] gap-8 sm:grid-cols-2 place-items-center">
            <div className="flex items-center justify-center sm:col-span-2">
              <img src={diamond4CsImage} alt="The 4Cs of diamonds" />
            </div>
            {guideContent.map((content, index) => <>
              <div key={content.title} className="grid gap-3 sm:col-span-2">
                <h3 className="text-center title">{index + 1}. {content.title}</h3>
                {content.description.map((description, index1) => <p className="mx-4 text-center content-text" key={`${content.title.toLowerCase()}-description-${index1}`}>{description}</p>)}
                <div className="my-3">
                  <img src={content.image} alt={`${content.title} chart`} className="object-contain sm:w-[80%] mx-auto" />
                </div>
              </div>
            </>)}
          </div>
        </div>
      </div>
      </div>
  )
}

export default Dimondguide