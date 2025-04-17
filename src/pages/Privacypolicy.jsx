import React from 'react'
import { privacyPolicyContent } from '../utils/policy.utils'

const Privacypolicy = () => {
  return (
      <div>
          <div className="grid sm:grid-cols-12 bg-tertiary/10">
              <div className="sm:col-span-10 sm:col-start-2">
                  <div className="grid min-h-screen p-3 pt-20 place-items-center">
                      <div className="m-3 rounded-lg bg-secondary">
                          <div className="px-3 py-6 border-b border-primary/20/80">
                              <h1 className="text-center content-text font-semibold tracking-wide !text-2xl">
                                  Privacy Policy
                              </h1>
                          </div>
                          <div className="p-12">
                              <ul className="grid gap-5 list-disc">
                                  {privacyPolicyContent.map((content, index) => (
                                      <li
                                          key={`privacy-content-${index}`}
                                          className="mb-2 content-text list-circle-sm"
                                      >
                                          {content.text ? content.text : ""}
                                          {content.htmlContent ? (
                                              <div
                                                  dangerouslySetInnerHTML={{
                                                      __html: content.htmlContent,
                                                  }}
                                              ></div>
                                          ) : (
                                              ""
                                          )}
                                      </li>
                                  ))}
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Privacypolicy