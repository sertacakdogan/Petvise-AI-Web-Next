import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

const ContentList5 = (props) => {
  const [isPrivacyVisible, setIsPrivacyVisible] = useState(false)
  const [isRefundVisible, setIsRefundVisible] = useState(false)
  const [isTermsVisible, setIsTermsVisible] = useState(true)
  return (
    <>
      <div className="content-list5-container1 thq-section-padding">
        <div className="content-list5-max-width thq-flex-column thq-section-max-width">
          <div className="content-list5-container2 thq-flex-row thq-section-max-width">
            {isTermsVisible && (
              <button
                onClick={() => {
                  setIsPrivacyVisible(false)
                  setIsRefundVisible(false)
                  setIsTermsVisible(true)
                }}
                className="thq-button-filled"
              >
                <span>
                  {props.button ?? (
                    <Fragment>
                      <span className="content-list5-text30">
                        Terms of service
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            )}
            {!isTermsVisible && (
              <button
                onClick={() => {
                  setIsRefundVisible(false)
                  setIsPrivacyVisible(false)
                  setIsTermsVisible(true)
                }}
                className="thq-button-outline"
              >
                <span>
                  {props.button ?? (
                    <Fragment>
                      <span className="content-list5-text30">
                        Terms of service
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            )}
            {!isPrivacyVisible && (
              <button
                onClick={() => {
                  setIsPrivacyVisible(true)
                  setIsRefundVisible(false)
                  setIsTermsVisible(false)
                }}
                className="thq-button-outline"
              >
                <span>
                  {props.button1 ?? (
                    <Fragment>
                      <span className="content-list5-text21">
                        Privacy statement
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            )}
            {isPrivacyVisible && (
              <button
                onClick={() => {
                  setIsTermsVisible(false)
                  setIsPrivacyVisible(true)
                  setIsRefundVisible(false)
                }}
                className="thq-button-filled"
              >
                <span>
                  {props.button1 ?? (
                    <Fragment>
                      <span className="content-list5-text21">
                        Privacy statement
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            )}
            {!isRefundVisible && (
              <button
                onClick={() => {
                  setIsRefundVisible(true)
                  setIsTermsVisible(false)
                  setIsPrivacyVisible(false)
                }}
                className="thq-button-outline"
              >
                <span>
                  {props.button2 ?? (
                    <Fragment>
                      <span className="content-list5-text43">
                        Refund Policy
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            )}
            {isRefundVisible && (
              <button
                onClick={() => {
                  setIsPrivacyVisible(false)
                  setIsRefundVisible(true)
                  setIsTermsVisible(false)
                }}
                className="thq-button-filled"
              >
                <span>
                  {props.button2 ?? (
                    <Fragment>
                      <span className="content-list5-text43">
                        Refund Policy
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            )}
          </div>
          <div className="content-list5-container3 thq-flex-column">
            {isTermsVisible && (
              <div className="content-list5-container4">
                <ul className="thq-flex-column">
                  <li className="content-list5-li10 thq-flex-column list-item">
                    <h2>
                      {props.heading7 ?? (
                        <Fragment>
                          <h2 className="content-list5-text42 thq-heading-2">
                            Complement Professional Veterinary Services
                          </h2>
                        </Fragment>
                      )}
                    </h2>
                    <p>
                      {props.content7 ?? (
                        <Fragment>
                          <p className="content-list5-text29 thq-body-small">
                            Enhance your pet&apos;s care with Petvise AI
                            alongside professional veterinary services.
                          </p>
                        </Fragment>
                      )}
                    </p>
                    <ul className="content-list5-ul2 thq-flex-column">
                      <li className="list-item">
                        <h3>
                          {props.heading8 ?? (
                            <Fragment>
                              <h3 className="content-list5-text32 thq-heading-3">
                                24/7 Availability
                              </h3>
                            </Fragment>
                          )}
                        </h3>
                        <p>
                          {props.content2 ?? (
                            <Fragment>
                              <p className="content-list5-text25 thq-body-small">
                                Tailored recommendations based on your
                                pet&apos;s needs and your lifestyle.
                              </p>
                            </Fragment>
                          )}
                        </p>
                      </li>
                      <li className="list-item">
                        <h3>
                          {props.heading9 ?? (
                            <Fragment>
                              <h3 className="content-list5-text24 thq-heading-3">
                                Easy-to-Use Platform
                              </h3>
                            </Fragment>
                          )}
                        </h3>
                        <p>
                          {props.content9 ?? (
                            <Fragment>
                              <p className="content-list5-text17 thq-body-small">
                                User-friendly interface for seamless navigation
                                and interaction.
                              </p>
                            </Fragment>
                          )}
                        </p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            )}
            {isPrivacyVisible && (
              <div className="content-list5-container5">
                <ul className="thq-flex-column">
                  <li className="content-list5-li13 thq-flex-column list-item">
                    <h1>
                      {props.heading1 ?? (
                        <Fragment>
                          <h1 className="content-list5-text38 thq-heading-2">
                            Welcome to Petvise AI
                          </h1>
                        </Fragment>
                      )}
                    </h1>
                    <span>
                      {props.content1 ?? (
                        <Fragment>
                          <span className="content-list5-text20 thq-body-small">
                            Get expert advice on pet care with our AI-powered
                            assistant.
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <ul className="content-list5-ul4 thq-flex-column">
                      <li className="list-item">
                        <h1>
                          {props.heading2 ?? (
                            <Fragment>
                              <h1 className="content-list5-text28 thq-heading-3">
                                Personalized Care for Your Pet
                              </h1>
                            </Fragment>
                          )}
                        </h1>
                        <span>
                          {props.content2 ?? (
                            <Fragment>
                              <p className="content-list5-text25 thq-body-small">
                                Tailored recommendations based on your
                                pet&apos;s needs and your lifestyle.
                              </p>
                            </Fragment>
                          )}
                        </span>
                      </li>
                      <li className="list-item">
                        <h1>
                          {props.heading3 ?? (
                            <Fragment>
                              <h1 className="content-list5-text26 thq-heading-3">
                                Virtual Vet Consultations
                              </h1>
                            </Fragment>
                          )}
                        </h1>
                        <span>
                          {props.content3 ?? (
                            <Fragment>
                              <span className="content-list5-text40 thq-body-small">
                                Access a virtual vet for quick consultations and
                                guidance.
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </li>
                      <li className="list-item">
                        <h1>
                          {props.heading4 ?? (
                            <Fragment>
                              <h1 className="content-list5-text36 thq-heading-3">
                                Nutritionist Recommendations
                              </h1>
                            </Fragment>
                          )}
                        </h1>
                        <span>
                          {props.content4 ?? (
                            <Fragment>
                              <span className="content-list5-text34 thq-body-small">
                                Receive diet plans and nutritional advice for
                                your pet&apos;s well-being.
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </li>
                      <li className="list-item">
                        <h1>
                          {props.heading5 ?? (
                            <Fragment>
                              <h1 className="content-list5-text23 thq-heading-3">
                                Behaviorist Insights
                              </h1>
                            </Fragment>
                          )}
                        </h1>
                        <span>
                          {props.content5 ?? (
                            <Fragment>
                              <span className="content-list5-text22 thq-body-small">
                                Understand your pet&apos;s behavior better with
                                expert insights and tips.
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </li>
                      <li className="list-item">
                        <h1>
                          {props.heading6 ?? (
                            <Fragment>
                              <h1 className="content-list5-text27 thq-heading-3">
                                Wide Species and Breed Coverage
                              </h1>
                            </Fragment>
                          )}
                        </h1>
                        <span>
                          {props.content6 ?? (
                            <Fragment>
                              <span className="content-list5-text39 thq-body-small">
                                Support for various species and breeds to cater
                                to all pet owners.
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            )}
            {isRefundVisible && (
              <div className="content-list5-container6">
                <ul className="thq-flex-column">
                  <li className="content-list5-li19 thq-flex-column list-item">
                    <h1>
                      {props.heading10 ?? (
                        <Fragment>
                          <h1 className="content-list5-text18 thq-heading-2">
                            15+ Specialized AI Tools
                          </h1>
                        </Fragment>
                      )}
                    </h1>
                    <span>
                      {props.content10 ?? (
                        <Fragment>
                          <span className="content-list5-text19 thq-body-small">
                            Utilize a range of AI tools dedicated to pet health
                            and well-being.
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <ul className="content-list5-ul6 thq-flex-column">
                      <li className="list-item">
                        <h1>
                          {props.heading11 ?? (
                            <Fragment>
                              <h1 className="content-list5-text33 thq-heading-3">
                                Expert Advice on Physical and Mental Health
                              </h1>
                            </Fragment>
                          )}
                        </h1>
                        <span>
                          {props.content11 ?? (
                            <Fragment>
                              <span className="content-list5-text16 thq-body-small">
                                Guidance on both physical and mental aspects of
                                your pet&apos;s health.
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </li>
                      <li className="list-item">
                        <h1>
                          {props.heading12 ?? (
                            <Fragment>
                              <h1 className="content-list5-text41 thq-heading-3">
                                Stay Informed, Keep Your Pet Healthy
                              </h1>
                            </Fragment>
                          )}
                        </h1>
                        <span>
                          {props.content12 ?? (
                            <Fragment>
                              <span className="content-list5-text35 thq-body-small">
                                Stay updated on the latest pet care trends and
                                practices to ensure your pet&apos;s well-being.
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </li>
                      <li className="list-item">
                        <h1>
                          {props.heading13 ?? (
                            <Fragment>
                              <h1 className="content-list5-text37 thq-heading-3">
                                Join Petvise AI Today
                              </h1>
                            </Fragment>
                          )}
                        </h1>
                        <span>
                          {props.content13 ?? (
                            <Fragment>
                              <span className="content-list5-text31 thq-body-small">
                                Start providing the best care for your pet with
                                our AI-powered assistant.
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .content-list5-container1 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .content-list5-max-width {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .content-list5-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .content-list5-container3 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .content-list5-container4 {
            align-self: stretch;
            align-items: flex-start;
          }
          .content-list5-li10 {
            align-items: flex-start;
          }
          .content-list5-ul2 {
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
          }
          .content-list5-container5 {
            align-self: stretch;
            align-items: flex-start;
          }
          .content-list5-li13 {
            align-items: flex-start;
          }
          .content-list5-ul4 {
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
          }
          .content-list5-container6 {
            align-self: stretch;
            align-items: flex-start;
          }
          .content-list5-li19 {
            align-items: flex-start;
          }
          .content-list5-ul6 {
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
          }
          .content-list5-text16 {
            display: inline-block;
          }
          .content-list5-text17 {
            display: inline-block;
          }
          .content-list5-text18 {
            display: inline-block;
            align-self: center;
            text-align: center;
          }
          .content-list5-text19 {
            display: inline-block;
          }
          .content-list5-text20 {
            display: inline-block;
          }
          .content-list5-text21 {
            display: inline-block;
          }
          .content-list5-text22 {
            display: inline-block;
          }
          .content-list5-text23 {
            display: inline-block;
          }
          .content-list5-text24 {
            display: inline-block;
          }
          .content-list5-text25 {
            display: inline-block;
          }
          .content-list5-text26 {
            display: inline-block;
          }
          .content-list5-text27 {
            display: inline-block;
          }
          .content-list5-text28 {
            display: inline-block;
          }
          .content-list5-text29 {
            display: inline-block;
          }
          .content-list5-text30 {
            display: inline-block;
          }
          .content-list5-text31 {
            display: inline-block;
          }
          .content-list5-text32 {
            display: inline-block;
          }
          .content-list5-text33 {
            display: inline-block;
          }
          .content-list5-text34 {
            display: inline-block;
          }
          .content-list5-text35 {
            display: inline-block;
          }
          .content-list5-text36 {
            display: inline-block;
          }
          .content-list5-text37 {
            display: inline-block;
          }
          .content-list5-text38 {
            display: inline-block;
            align-self: center;
            text-align: center;
          }
          .content-list5-text39 {
            display: inline-block;
          }
          .content-list5-text40 {
            display: inline-block;
          }
          .content-list5-text41 {
            display: inline-block;
          }
          .content-list5-text42 {
            display: inline-block;
            align-self: center;
            text-align: center;
          }
          .content-list5-text43 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .content-list5-ul2 {
              padding-left: var(--dl-space-space-threeunits);
            }
            .content-list5-ul4 {
              padding-left: var(--dl-space-space-threeunits);
            }
            .content-list5-ul6 {
              padding-left: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 479px) {
            .content-list5-container2 {
              align-items: stretch;
              flex-direction: column;
            }
            .content-list5-ul2 {
              padding-left: var(--dl-space-space-oneandhalfunits);
            }
            .content-list5-ul4 {
              padding-left: var(--dl-space-space-oneandhalfunits);
            }
            .content-list5-ul6 {
              padding-left: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

ContentList5.defaultProps = {
  content11: undefined,
  content9: undefined,
  heading10: undefined,
  content10: undefined,
  content1: undefined,
  button1: undefined,
  content5: undefined,
  heading5: undefined,
  heading9: undefined,
  content2: undefined,
  heading3: undefined,
  heading6: undefined,
  heading2: undefined,
  content7: undefined,
  button: undefined,
  content13: undefined,
  heading8: undefined,
  heading11: undefined,
  content4: undefined,
  content12: undefined,
  heading4: undefined,
  heading13: undefined,
  heading1: undefined,
  content6: undefined,
  content3: undefined,
  heading12: undefined,
  heading7: undefined,
  button2: undefined,
}

ContentList5.propTypes = {
  content11: PropTypes.element,
  content9: PropTypes.element,
  heading10: PropTypes.element,
  content10: PropTypes.element,
  content1: PropTypes.element,
  button1: PropTypes.element,
  content5: PropTypes.element,
  heading5: PropTypes.element,
  heading9: PropTypes.element,
  content2: PropTypes.element,
  heading3: PropTypes.element,
  heading6: PropTypes.element,
  heading2: PropTypes.element,
  content7: PropTypes.element,
  button: PropTypes.element,
  content13: PropTypes.element,
  heading8: PropTypes.element,
  heading11: PropTypes.element,
  content4: PropTypes.element,
  content12: PropTypes.element,
  heading4: PropTypes.element,
  heading13: PropTypes.element,
  heading1: PropTypes.element,
  content6: PropTypes.element,
  content3: PropTypes.element,
  heading12: PropTypes.element,
  heading7: PropTypes.element,
  button2: PropTypes.element,
}

export default ContentList5
