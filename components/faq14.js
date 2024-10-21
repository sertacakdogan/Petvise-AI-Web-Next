import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

const FAQ14 = (props) => {
  const [faq5Visible, setFaq5Visible] = useState(false)
  const [faq1Visible, setFaq1Visible] = useState(false)
  const [faq2Visible, setFaq2Visible] = useState(false)
  const [faq4Visible, setFaq4Visible] = useState(false)
  const [faq3Visible, setFaq3Visible] = useState(false)
  return (
    <>
      <div className={`faq14faq8 thq-section-padding ${props.rootClassName} `}>
        <div className="faq14-max-width thq-section-max-width">
          <div className="faq14-container10 thq-flex-column">
            <div className="faq14-section-title thq-flex-column">
              <h2>
                {props.heading1 ?? (
                  <Fragment>
                    <h2 className="faq14-text27 thq-heading-2">FAQs</h2>
                  </Fragment>
                )}
              </h2>
              <p>
                {props.content1 ?? (
                  <Fragment>
                    <p className="faq14-text19 thq-body-large">
                      Find the answers to some of the most frequently asked
                      questions below. If you don’t see what you’re looking for,
                      feel free to reach out!
                    </p>
                  </Fragment>
                )}
              </p>
              <a
                href="mailto:contact@petvise.ai?subject=Hey Petvise AI!"
                className="faq14-link thq-button-filled"
              >
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className="faq14-text22">Contact</span>
                    </Fragment>
                  )}
                </span>
              </a>
            </div>
            <div className="faq14-list thq-flex-column">
              <div className="thq-divider-horizontal"></div>
              <div className="faq14-faq1">
                <div
                  onClick={() => setFaq1Visible(!faq1Visible)}
                  className="faq14-trigger1"
                >
                  <p>
                    {props.faq1Question ?? (
                      <Fragment>
                        <p className="faq14-text18 thq-body-large">
                          What is Petvise AI and how can it help me as a pet
                          owner?
                        </p>
                      </Fragment>
                    )}
                  </p>
                  <div className="faq14-icons-container1">
                    {!faq1Visible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="faq14-icon10">
                          <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                        </svg>
                      </div>
                    )}
                    {faq1Visible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="faq14-icon12">
                          <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {faq1Visible && (
                  <div className="faq14-container13">
                    <span>
                      {props.faq1Answer ?? (
                        <Fragment>
                          <span className="faq14-text29 thq-body-small">
                            Petvise AI is an AI-powered pet care assistant that
                            offers expert advice on your pet’s physical and
                            mental health, diet, and general well-being. With
                            over 15 specialized AI tools, including a virtual
                            vet, nutritionist, and behaviorist, Petvise AI helps
                            decode your pet&apos;s body language, recommend
                            personalized care, and ensure your pet stays healthy
                            and happy.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                )}
              </div>
              <div className="thq-divider-horizontal"></div>
              <div className="faq14-faq2">
                <div
                  onClick={() => setFaq2Visible(!faq2Visible)}
                  className="faq14-trigger2"
                >
                  <p>
                    {props.faq2Question ?? (
                      <Fragment>
                        <p className="faq14-text28 thq-body-large">
                          Is Petvise AI a substitute for real veterinary care?
                        </p>
                      </Fragment>
                    )}
                  </p>
                  <div className="faq14-icons-container2">
                    {!faq2Visible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="faq14-icon14">
                          <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                        </svg>
                      </div>
                    )}
                    {faq2Visible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="faq14-icon16">
                          <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {faq2Visible && (
                  <div className="faq14-container16">
                    <span>
                      {props.faq2Answer ?? (
                        <Fragment>
                          <span className="faq14-text30 thq-body-small">
                            No, Petvise AI is not a substitute for real
                            veterinary care. While it provides valuable insights
                            and personalized advice, it is designed to
                            complement—not replace—professional veterinary
                            services. For medical emergencies or serious health
                            concerns, always consult a licensed veterinarian.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                )}
              </div>
              <div className="thq-divider-horizontal"></div>
              <div className="faq14-faq3">
                <div
                  onClick={() => setFaq3Visible(!faq3Visible)}
                  className="faq14-trigger3"
                >
                  <p>
                    {props.faq3Question ?? (
                      <Fragment>
                        <p className="faq14-text21 thq-body-large">
                          How does Petvise AI create personalized responses for
                          my pet and me?
                        </p>
                      </Fragment>
                    )}
                  </p>
                  <div className="faq14-icons-container3">
                    {!faq3Visible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="faq14-icon18">
                          <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                        </svg>
                      </div>
                    )}
                    {faq3Visible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="faq14-icon20">
                          <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {faq3Visible && (
                  <div className="faq14-container19">
                    <span>
                      {props.faq3Answer ?? (
                        <Fragment>
                          <span className="faq14-text26 thq-body-small">
                            Petvise AI generates responses based on the
                            information you provide about your pet, such as
                            species, breed, age, and other characteristics,
                            along with your lifestyle and pet-care preferences.
                            The AI tailors its advice to meet both your pet’s
                            needs and your unique care style. You can adjust
                            these inputs at any time, allowing for highly
                            customizable and up-to-date advice.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                )}
              </div>
              <div className="thq-divider-horizontal"></div>
              <div className="faq14-faq4">
                <div
                  onClick={() => setFaq4Visible(!faq4Visible)}
                  className="faq14-trigger4"
                >
                  <p>
                    {props.faq4Question ?? (
                      <Fragment>
                        <p className="faq14-text23 thq-body-large">
                          Can I use Petvise AI for all types of pets?
                        </p>
                      </Fragment>
                    )}
                  </p>
                  <div className="faq14-icons-container4">
                    {!faq4Visible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="faq14-icon22">
                          <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                        </svg>
                      </div>
                    )}
                    {faq4Visible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="faq14-icon24">
                          <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {faq4Visible && (
                  <div className="faq14-container22">
                    <span>
                      {props.faq4Answer ?? (
                        <Fragment>
                          <span className="faq14-text24 thq-body-small">
                            Our AI models are trained on a vast and reliable
                            database covering over 1,000 species and 9,000
                            breeds. Whether you have a dog, cat, bird, fish, or
                            an exotic pet, Petvise AI can provide personalized
                            advice tailored to your pet’s care.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                )}
              </div>
              <div className="thq-divider-horizontal"></div>
              <div className="faq14-faq5">
                <div
                  onClick={() => setFaq5Visible(!faq5Visible)}
                  className="faq14-trigger5"
                >
                  <p>
                    {props.faq5Question ?? (
                      <Fragment>
                        <p className="faq14-text25 thq-body-large">
                          Can I use Petvise AI for Free?
                        </p>
                      </Fragment>
                    )}
                  </p>
                  <div className="faq14-icons-container5">
                    {!faq5Visible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="faq14-icon26">
                          <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                        </svg>
                      </div>
                    )}
                    {faq5Visible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="faq14-icon28">
                          <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {faq5Visible && (
                  <div className="faq14-container25">
                    <span>
                      {props.faq5Answer ?? (
                        <Fragment>
                          <span className="faq14-text20 thq-body-small">
                            Yes, Petvise AI offers a free trial! Currently, all
                            premium features are available for free for a
                            limited time. Normally, we offer both monthly and
                            yearly subscription options for premium features, so
                            be sure to take advantage of this offer while it
                            lasts.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                )}
              </div>
              <div className="thq-divider-horizontal"></div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .faq14faq8 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .faq14-max-width {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .faq14-container10 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .faq14-section-title {
            width: 100%;
            align-self: center;
            align-items: center;
          }
          .faq14-link {
            text-decoration: none;
            background-color: var(--dl-color-primary-teriatery);
          }
          .faq14-list {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            align-self: center;
            align-items: flex-start;
          }
          .faq14-faq1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq14-trigger1 {
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            transition: 0.3s;
            align-items: center;
            padding-right: 16px;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq14-trigger1:hover {
            fill: var(--dl-color-theme-secondary2);
            color: var(--dl-color-theme-secondary2);
            background-color: var(--dl-color-theme-primary2);
          }
          .faq14-icons-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq14-icon10 {
            width: 24px;
            height: 24px;
          }
          .faq14-icon12 {
            width: 24px;
            height: 24px;
          }
          .faq14-container13 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            animation-name: fadeIn;
            flex-direction: row;
            animation-delay: 0s;
            justify-content: space-between;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .faq14-faq2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq14-trigger2 {
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            transition: 0.3s;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq14-trigger2:hover {
            fill: var(--dl-color-theme-secondary2);
            color: var(--dl-color-theme-secondary2);
            background-color: var(--dl-color-theme-primary2);
          }
          .faq14-icons-container2 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq14-icon14 {
            width: 24px;
            height: 24px;
          }
          .faq14-icon16 {
            width: 24px;
            height: 24px;
          }
          .faq14-container16 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            animation-name: fadeIn;
            flex-direction: row;
            animation-delay: 0s;
            justify-content: space-between;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .faq14-faq3 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq14-trigger3 {
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            transition: 0.3s;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq14-trigger3:hover {
            fill: var(--dl-color-theme-secondary2);
            color: var(--dl-color-theme-secondary2);
            background-color: var(--dl-color-theme-primary2);
          }
          .faq14-icons-container3 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq14-icon18 {
            width: 24px;
            height: 24px;
          }
          .faq14-icon20 {
            width: 24px;
            height: 24px;
          }
          .faq14-container19 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            animation-name: fadeIn;
            flex-direction: row;
            animation-delay: 0s;
            justify-content: space-between;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .faq14-faq4 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq14-trigger4 {
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            transition: 0.3s;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq14-trigger4:hover {
            fill: var(--dl-color-theme-secondary2);
            color: var(--dl-color-theme-secondary2);
            background-color: var(--dl-color-theme-primary2);
          }
          .faq14-icons-container4 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq14-icon22 {
            width: 24px;
            height: 24px;
          }
          .faq14-icon24 {
            width: 24px;
            height: 24px;
          }
          .faq14-container22 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            animation-name: fadeIn;
            flex-direction: row;
            animation-delay: 0s;
            justify-content: space-between;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .faq14-faq5 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq14-trigger5 {
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            transition: 0.3s;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq14-trigger5:hover {
            fill: var(--dl-color-theme-secondary2);
            color: var(--dl-color-theme-secondary2);
            background-color: var(--dl-color-theme-primary2);
          }
          .faq14-icons-container5 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq14-icon26 {
            width: 24px;
            height: 24px;
          }
          .faq14-icon28 {
            width: 24px;
            height: 24px;
          }
          .faq14-container25 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            animation-name: fadeIn;
            flex-direction: row;
            animation-delay: 0s;
            justify-content: space-between;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .faq14-text18 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .faq14-text19 {
            display: inline-block;
          }
          .faq14-text20 {
            display: inline-block;
          }
          .faq14-text21 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .faq14-text22 {
            display: inline-block;
          }
          .faq14-text23 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .faq14-text24 {
            display: inline-block;
          }
          .faq14-text25 {
            color: var(--dl-color-gray-black);
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .faq14-text26 {
            display: inline-block;
          }
          .faq14-text27 {
            display: inline-block;
          }
          .faq14-text28 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .faq14-text29 {
            display: inline-block;
          }
          .faq14-text30 {
            display: inline-block;
          }
          .faq14root-class-name {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            background-color: var(--dl-color-background-secondarybg);
          }
          .faq14root-class-name1 {
            background-color: var(--dl-color-background-secondarybg);
          }
          @media (max-width: 991px) {
            .faq14-container10 {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .faq14-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

FAQ14.defaultProps = {
  faq1Question: undefined,
  content1: undefined,
  rootClassName: '',
  faq5Answer: undefined,
  faq3Question: undefined,
  action1: undefined,
  faq4Question: undefined,
  faq4Answer: undefined,
  faq5Question: undefined,
  faq3Answer: undefined,
  heading1: undefined,
  faq2Question: undefined,
  faq1Answer: undefined,
  faq2Answer: undefined,
}

FAQ14.propTypes = {
  faq1Question: PropTypes.element,
  content1: PropTypes.element,
  rootClassName: PropTypes.string,
  faq5Answer: PropTypes.element,
  faq3Question: PropTypes.element,
  action1: PropTypes.element,
  faq4Question: PropTypes.element,
  faq4Answer: PropTypes.element,
  faq5Question: PropTypes.element,
  faq3Answer: PropTypes.element,
  heading1: PropTypes.element,
  faq2Question: PropTypes.element,
  faq1Answer: PropTypes.element,
  faq2Answer: PropTypes.element,
}

export default FAQ14
