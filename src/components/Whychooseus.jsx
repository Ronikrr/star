import React from 'react'
import vector_bg from '../assets/image/vector-bg.svg'
const whyChooseUsContent = [
    {
        logo: "https://motibagems.com/assets/images/ic-why-choose-us.svg",
        title: "Quantity",
        content: [
            "Select from wide range of our live inventory at your fingertips to get the right diamonds of your choice so no need to deal with multiple suppliers & manage multiple shipments to fulfill your order, your full order with multiple criteria can be shipped together in one shipment.",
        ],
    },
    {
        logo: "https://motibagems.com/assets/images/ic-why-choose-us.svg",
        title: "Quality",
        content: [
            "Our Each diamond are gone through several QC checks by our experts to enhance the customer experience, we deliver same product what we offer to create the transparency. Our each certified diamonds are certified by reputed Diamond Grading Laboratories in the industry like GIA (Gemological Institute of America), IGI (International Gemological Institute), HRD (Hoge Raad voor Diamant).",
        ],
    },
    {
        logo: "https://motibagems.com/assets/images/ic-why-choose-us.svg",
        title: "Trust",
        content: [
            "Our company has established trust of thousands of our happy customers across the globe as we prioritize your trust above everything else, we promise to provide transparency to each transaction done. Join the thousands of satisfied customers, and experience the Brilliance of star impex. Your security and peace of mind are our top priorities.",
        ],
    },
    {
        logo: "https://motibagems.com/assets/images/ic-why-choose-us.svg",
        title: "Consistency",
        content: [
            `At star impex, we are deeply committed to ensuring uninterrupted supply to our valued customers. We understand the critical importance of reliability and consistency in today's dynamic business landscape. That's why we have dedicated ourselves to meticulously planning and executing every aspect of our supply chain.`,
        ],
    },
];
const Whychooseus = () => {
  return (
      <div className="relative ">
          <div className="mx-auto max-w-max">
              <h2 className="mb-1 font-bold uppercase new_font text-primary text-24">
                  why choose us
              </h2>
              <div className="flex flex-col items-center gap-1">
                  <div className="h-[2.5px] w-32 bg-primary"></div>
              </div>
          </div>

          <div className="grid lg:grid-cols-12">
              <div className="lg:col-start-2 lg:col-span-10">
                  <div className="relative grid sm:grid-cols-[repeat(2,280px)] xl:grid-cols-[repeat(4,minmax(280px,25%))] place-content-center gap-6 my-3 py-16">
                      <div className="w-full h-[60%] absolute z-[-1] top-1/2 -translate-y-1/2 blur-xl rounded-full bg-gradient-to-l from-white via-tertiary-light to-white">
                      </div>
                      {whyChooseUsContent.map((data, index) => <div key={`why-choose-us-${index}`} className="bg-white w-[280px] border border-tertiary/20 rounded-3xl p-4 group hover:scale-105 hover:-translate-y-1 transition-transform duration-500">
                          <div className='w-[90px] h-[90px] relative flex justify-center items-center mb-5 mx-auto'>
                              <div className='absolute w-full h-full bg-no-repeat bg-contain' >
                                  <img loading="lazy" src={vector_bg} alt="" />
                                  </div>
                              <img loading="lazy" src={data.logo} alt='diamond icon' width={65} height={65} />
                          </div>
                          <div className="pb-5">
                              <h5 className="mb-4 text-center uppercase new_font text-primary">{data.title}</h5>
                              <div className="px-3">
                                  {data.content.map((text, index1) =>
                                      <p key={`why-choose-us-${index}-content-${index1}`}
                                          className="mb-3 text-center text-14 content-text text-primary">
                                          {text}
                                      </p>)
                                  }
                              </div>
                          </div>
                      </div>)}
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Whychooseus