import React from 'react'
import Banner from '../../components/Banner'
import Diamond from '../../assets/image/product/diamond-jewelry-hero-image.webp'
import { jewelryDiamondsContent } from '../../utils/productdata.utils'
const DiamondJewelry = () => {
  return (
    <div>
      <Banner title='Diamond Jewelry' heroImage={Diamond} />
      <div className="grid my-16 sm:grid-cols-12">
        <div className="mx-3 sm:col-span-10 sm:col-start-2">
          <p className="text-center">{jewelryDiamondsContent.description}</p>
          <div className="w-3/4 mx-auto my-8 overflow-hidden transition-transform ease-in-out border-4 rounded-sm border-tertiary group hover:scale-105">
            <img loading="lazy" src={jewelryDiamondsContent.image} alt="diamond jewelry" className="object-cover duration-500 group-hover:scale-105" />
          </div>
          <h4 className="mb-3 title mt-7 text-tertiary">Our offerings are as follows:</h4>
          <ul className="list-disc list-inside">
            {jewelryDiamondsContent.offerings.map((text, index) => <li key={`offering-${index}`}>
              <span className="text-center capitalize text-primary content-text">{text}</span>
            </li>)}
          </ul>
          <p className="mt-8 content-text">{jewelryDiamondsContent.otherContent}</p>
        </div>
      </div>
    </div>
  )
}

export default DiamondJewelry