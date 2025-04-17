import React from 'react'
import bgImage1 from '../assets/image/about_page/vector-bg-1.svg'
import bgImage3 from '../assets/image/vector-bg-3.a112de0b.svg'
import bgImage2 from '../assets/image/about_page/vector-bg-2.f4c94c2b.svg'

export const aboutUsContent = [
  {
    image: "https://motibagems.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Four-guarantee.66ffc5c7.webp&w=1200&q=75",
    title: "Our Guarantee",
    content: [
      "Our Customers is regarded as an extension of our family. Upholding principles and adhering to ethical business standards are fundamental to our operations. Each diamond featured on our website undergoes meticulous quality assessments to ensure our customers receive superior products at competitive prices. Purchase from Motiba Gems guarantees premium quality and value for your investment.",
      "Our commitment to deliver excellence has kept us striving for quality, creativity, and customer satisfaction. With integration of technical innovations and expert craftsmanship, we produce a variety of finest cut diamonds, catering to unique needs of each customer.",
    ],
  },
  {
    image: "https://motibagems.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Four-prospective.9f5dbec1.webp&w=1200&q=75",
    title: "Our Prospective",
    content: [
      "Our prospective and vision is to became a trustworthy supplier to our valued customers and make sustainable mark in the diamond industry.",
    ],
  },
  {
    image: "https://motibagems.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Four-mission.a0eef7dd.webp&w=1200&q=75",
    title: "Our Mission",
    content: [
      "Our mission is to provide exquisite, ethically sourced diamonds of exceptional quality, each imbued with timeless beauty and craftsmanship. Our mission is to exceed customer expectations through unparalleled service, transparency, and a commitment to sustainable practices, ensuring every cherished moment is adorned with brilliance and integrity.",
    ],
  },
];
const OurGuarantee = () => {
  return (
    <div className="relative grid sm:grid-cols-12">
      <img loading="lazy" src={bgImage1} alt="shape in background" className="absolute right-0" />
      <img loading="lazy" src={bgImage3} alt="shape in background" className="absolute top-[10%] left-[10%]" />
      <img loading="lazy" src={bgImage3} alt="shape in background" className="absolute bottom-[20%] right-[10%]" />
      <img loading="lazy" src={bgImage2} alt="shape in background" className="absolute bottom-0 left-0" />
      <div className="sm:col-span-10 sm:col-start-2">
        <div className="mx-3 my-8 lg:my-16">
          <p className="text-center content-text text-primary">Motiba Gems was founded in 2002 by Pareshbhai Moradiya, with a manufacturing facility located in Surat. Over the years, the company has experienced significant business growth, supported by a skilled workforce. In 2017, Motiba Gems expanded its operations to include rough diamond imports from overseas. Today, the company stands as a prominent trader & supplier to B2B customers from all over the globe for both Certified and Non-Certified Diamonds in Natural and LGDs. As well as designer diamond jewelry.</p>
        </div>
        <div className="grid gap-6 place-content-center">
          {
            aboutUsContent.map((data, index) => <div key={`about-us-${index}`} className="grid px-3 py-8 sm:grid-cols-2 place-items-center place-content-center">
              <div className={`sm:w-[60%] mx-auto mb-3 ${index % 2 !== 0 ? 'sm:order-2' : ''}`}>
                <img loading="lazy" src={data.image} alt={`depicting ${data.title}`} />
              </div>
              <div className={`${index % 2 !== 0 ? 'sm:order-1' : ''}`}>
                <h2 className="mb-8 font-bold text-center new_font text-24 text-primary">{data.title}</h2>
                <div className="grid gap-3">
                  {data.content.map((text, index1) =>
                    <p key={`about-us-${index}-${index1}`}
                      className="text-center text-primary content-text">
                      {text}
                    </p>)}
                </div>
              </div>
            </div>)
          }
        </div>
      </div>
    </div>
  )
}

export default OurGuarantee