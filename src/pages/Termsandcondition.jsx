import React from 'react'
import { termsConditionContent } from '../utils/policy.utils'

const Termsandcondition = () => {
  return (
      <div>
          <div className="grid sm:grid-cols-12 bg-tertiary/10">
              <div className="sm:col-span-10 sm:col-start-2">
                  <div className="grid min-h-screen p-3 pt-20 place-items-center">
                      <div className="m-3 my-6 rounded-lg bg-secondary">
                          <div className="px-3 py-6 border-b border-primary/20/80">
                              <h1 className="text-center content-text font-semibold tracking-wide !text-2xl">Terms & Conditions</h1>
                          </div>
                          <ul className="grid gap-8 p-8">
                              {termsConditionContent.content.map((content, index) =>
                                  <li key={`terms-${index}`}>
                                      <h3 className="mb-3 title text-tertiary list-square">{content.title}</h3>
                                      <div>
                                          {content.description.map((text, index1) =>
                                              <p key={`terms-${index}-${index1}`} className="mb-4 content-text">{text}</p>)}
                                      </div>
                                      <div>
                                          {content.otherContent?.map((content, index) => <div key={`${content.title.toLowerCase()}-content`}>
                                              <h4 className="font-medium">{content.title} :</h4>
                                              {
                                                  content.description.map((text, index1) => <p key={`content-${index}-${index1}`} className="list-circle-outline">
                                                      <span className="content-text">{text}</span>
                                                  </p>)
                                              }
                                          </div>)}
                                      </div>
                                  </li>
                              )}
                              <p><span className="font-semibold content-text">Please note: </span>{termsConditionContent.note}</p>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Termsandcondition