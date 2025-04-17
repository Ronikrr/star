import React from 'react'
import Banner from '../../components/Banner'
import Labs from '../../assets/image/product/lab-grown-diamonds-hero-image.webp'
import { labGrownDiamondsContent, offeringBackgroundImages } from '../../utils/productdata.utils'
import { Link } from 'react-router-dom'
const LabGrownDiamonds = () => {
  return (
    <div>
      <Banner title={" Natural Diamonds "} heroImage={Labs} />
      <div className="grid my-16 sm:grid-cols-12">
        <div className="mx-3 sm:col-span-10 sm:col-start-2">
          <p className="text-center">{labGrownDiamondsContent.description}</p>
          <div className="w-3/4 mx-auto my-8 overflow-hidden transition-transform ease-in-out border-4 rounded-sm border-tertiary group hover:scale-105">
            <img
              src={labGrownDiamondsContent.image}
              alt="lab grown diamonds"
              className="object-cover duration-500 group-hover:scale-105"
            />
          </div>
          <h4 className="mb-3 title mt-7 text-tertiary">
            Manufacturing Process of lab grown diamonds:
          </h4>
          <div className="grid gap-5">
            {labGrownDiamondsContent.manufacturingProcess.content.map(
              (process, index) => (
                <div key={`natural-diamond-process-${index}`}>
                  <h5 className="mb-4 font-semibold content-text">
                    {process.title}
                  </h5>
                  {process.description ? (
                    <ul className="grid gap-4">
                      {process.description.map((content, index1) => (
                        <li
                          key={`content-${index}-${index1}`}
                          className="content-text"
                        >
                          <span>{content}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              )
            )}
          </div>
          <h4 className="mb-3 title mt-7 text-tertiary">
            Our offerings are as follows:
          </h4>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 place-content-center">
            {labGrownDiamondsContent.offerings.map((text, index) => (
              <div
                key={`offering-${index}`}
                className="relative rounded-[13px] overflow-hidden  group hover:scale-105 transition-transform ease-in-out"
              >
                <img
                  src={offeringBackgroundImages[index]}
                  alt="offering background image"
                  className="w-full duration-500 group-hover:scale-110"
                />
                <div className="absolute w-full h-full bg-black/50 z-[1] inset-0">
                  <div className="flex items-center justify-center h-full px-10">
                    <p className="text-center capitalize text-secondary/95 content-text">
                      {text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-16 text-center content-text">
            If not done yet,{" "}
            <Link
              href={""}
              className="text-lg font-semibold text-tertiary"
            >
              Register Now
            </Link>{" "}
            to explore our wide range of online inventory.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LabGrownDiamonds