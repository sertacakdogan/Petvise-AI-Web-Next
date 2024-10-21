import React from 'react'

import PropTypes from 'prop-types'

const FAQ = (props) => {
  return (
    <>
      <div className={`faq-accordion ${props.rootClassName} `}>
        <div
          data-role="accordion-container"
          className="faq-element1 accordion-element"
        >
          <div className="faq-details1">
            <span className="faq-text10">
              <span>
                What is Petvise AI and how can it help me as a pet owner?
              </span>
              <br></br>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span data-role="accordion-content" className="faq-text14">
              <span className="faq-text15">
                Petvise AI is an AI-powered pet care assistant that offers
                expert advice on your pet’s physical and mental health, diet,
                and general well-being. With over 15 specialized AI tools,
                including a virtual vet, nutritionist, and behaviorist, Petvise
                AI helps decode your pet&apos;s body language, recommend
                personalized care, and ensure your pet stays healthy and happy.
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </div>
          <div data-role="accordion-icon">
            <svg viewBox="0 0 1024 1024" className="faq-icon10">
              <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
            </svg>
          </div>
        </div>
        <div
          data-role="accordion-container"
          className="faq-element2 accordion-element"
        >
          <div className="faq-details2">
            <span className="faq-text17">
              <span>Is Petvise AI a substitute for real veterinary care?</span>
              <br></br>
            </span>
            <span data-role="accordion-content" className="faq-text20">
              <span className="faq-text21">
                No, Petvise AI is not a substitute for real veterinary care.
                While it provides valuable insights and personalized advice, it
                is designed to complement—not replace—professional veterinary
                services. For medical emergencies or serious health concerns,
                always consult a licensed veterinarian.
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </div>
          <div data-role="accordion-icon">
            <svg viewBox="0 0 1024 1024" className="faq-icon12">
              <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
            </svg>
          </div>
        </div>
        <div
          data-role="accordion-container"
          className="faq-element3 accordion-element"
        >
          <div className="faq-details3">
            <span className="faq-text23">
              How does Petvise AI create personalized responses for my pet and
              me?
            </span>
            <span data-role="accordion-content" className="faq-text24">
              <span className="faq-text25">
                Petvise AI generates responses based on the information you
                provide about your pet, such as species, breed, age, and other
                characteristics, along with your lifestyle and pet-care
                preferences. The AI tailors its advice to meet both your pet’s
                needs and your unique care style. You can adjust these inputs at
                any time, allowing for highly customizable and up-to-date
                advice.
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </div>
          <div data-role="accordion-icon">
            <svg viewBox="0 0 1024 1024" className="faq-icon14">
              <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
            </svg>
          </div>
        </div>
        <div
          data-role="accordion-container"
          className="faq-element4 accordion-element"
        >
          <div className="faq-details4">
            <span className="faq-text27">
              <span>Can I use Petvise AI for all types of pets?</span>
              <br></br>
            </span>
            <span data-role="accordion-content" className="faq-text30">
              <span className="faq-text31">
                Yes! Our AI models are trained on a vast and reliable database
                covering over 1,000 species and 9,000 breeds. Whether you have a
                dog, cat, bird, fish, or an exotic pet, Petvise AI can provide
                personalized advice tailored to your pet’s care.
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </div>
          <div data-role="accordion-icon">
            <svg viewBox="0 0 1024 1024" className="faq-icon16">
              <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
            </svg>
          </div>
        </div>
        <div
          data-role="accordion-container"
          className="faq-element5 accordion-element"
        >
          <div className="faq-details5">
            <span className="faq-text33">
              <span>Is Petvise AI has a free plan available?</span>
              <br></br>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span data-role="accordion-content" className="faq-text37">
              <span className="faq-text38">
                Yes, Petvise AI offers a free trial! Currently, all premium
                features are available for free for a limited time. Normally, we
                offer both monthly and yearly subscription options for premium
                features, so be sure to take advantage of this offer while it
                lasts.
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </div>
          <div data-role="accordion-icon">
            <svg viewBox="0 0 1024 1024" className="faq-icon18">
              <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
            </svg>
          </div>
        </div>
        <div
          data-role="accordion-container"
          className="faq-element6 accordion-element"
        >
          <div className="faq-details6">
            <span className="faq-text40">
              <span>What types of inputs does Petvise AI support?</span>
              <br></br>
            </span>
            <span data-role="accordion-content" className="faq-text43">
              <span className="faq-text44">
                Currently, Petvise AI supports both text and image inputs. You
                can describe symptoms or upload photos to get personalized
                insights. Video support is coming soon, and our team is actively
                working on integrating it.
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </div>
          <div data-role="accordion-icon">
            <svg viewBox="0 0 1024 1024" className="faq-icon20">
              <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
            </svg>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .faq-accordion {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .faq-element1 {
            width: 100%;
            max-width: 800px;
            padding-top: var(--dl-space-space-threeunits);
            border-color: var(--dl-color-gray-900);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .faq-details1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .faq-text10 {
            fill: var(--dl-color-primary-secondary);
            color: var(--dl-color-primary-secondary);
            width: 100%;
            font-size: 20px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 28px;
          }
          .faq-text14 {
            color: rgb(204, 204, 204);
            width: 100%;
            font-family: Poppins;
            line-height: 24px;
            user-select: text;
          }
          .faq-text15 {
            color: var(--dl-color-text-primarytext);
          }
          .faq-icon10 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .faq-element2 {
            width: 100%;
            max-width: 800px;
            padding-top: var(--dl-space-space-threeunits);
            border-color: var(--dl-color-gray-900);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .faq-details2 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .faq-text17 {
            fill: var(--dl-color-primary-secondary);
            color: var(--dl-color-primary-secondary);
            width: 100%;
            font-size: 20px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 28px;
          }
          .faq-text20 {
            color: rgb(204, 204, 204);
            font-family: 'Poppins';
            line-height: 28px;
          }
          .faq-text21 {
            color: var(--dl-color-text-primarytext);
          }
          .faq-icon12 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .faq-element3 {
            width: 100%;
            max-width: 800px;
            padding-top: var(--dl-space-space-threeunits);
            border-color: var(--dl-color-gray-900);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .faq-details3 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .faq-text23 {
            color: var(--dl-color-primary-secondary);
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 28px;
          }
          .faq-text24 {
            color: rgb(204, 204, 204);
            width: 100%;
            font-family: Poppins;
            line-height: 28px;
            user-select: text;
          }
          .faq-text25 {
            color: var(--dl-color-text-primarytext);
          }
          .faq-icon14 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .faq-element4 {
            width: 100%;
            max-width: 800px;
            padding-top: var(--dl-space-space-threeunits);
            border-color: var(--dl-color-gray-900);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .faq-details4 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .faq-text27 {
            fill: var(--dl-color-primary-secondary);
            color: var(--dl-color-primary-secondary);
            width: 100%;
            font-size: 20px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 28px;
          }
          .faq-text30 {
            color: rgb(204, 204, 204);
            font-family: 'Poppins';
            line-height: 28px;
          }
          .faq-text31 {
            color: var(--dl-color-text-primarytext);
          }
          .faq-icon16 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .faq-element5 {
            width: 100%;
            max-width: 800px;
            padding-top: var(--dl-space-space-threeunits);
            border-color: var(--dl-color-gray-900);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .faq-details5 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .faq-text33 {
            fill: var(--dl-color-primary-secondary);
            color: var(--dl-color-primary-secondary);
            width: 100%;
            font-size: 20px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 28px;
          }
          .faq-text37 {
            color: rgb(204, 204, 204);
            font-family: 'Poppins';
            line-height: 28px;
          }
          .faq-text38 {
            color: var(--dl-color-text-primarytext);
          }
          .faq-icon18 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .faq-element6 {
            width: 100%;
            max-width: 800px;
            padding-top: var(--dl-space-space-threeunits);
            border-color: var(--dl-color-gray-900);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .faq-details6 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .faq-text40 {
            fill: var(--dl-color-primary-secondary);
            color: var(--dl-color-primary-secondary);
            width: 100%;
            font-size: 20px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 28px;
          }
          .faq-text43 {
            color: rgb(204, 204, 204);
            width: 100%;
            font-family: Poppins;
            line-height: 28px;
            user-select: text;
          }
          .faq-text44 {
            color: var(--dl-color-text-primarytext);
          }
          .faq-icon20 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }

          @media (max-width: 767px) {
            .faq-text10 {
              font-size: 16px;
              line-height: 24px;
            }
            .faq-text17 {
              font-size: 16px;
              line-height: 24px;
            }
            .faq-text23 {
              font-size: 16px;
              line-height: 24px;
            }
            .faq-text27 {
              font-size: 16px;
              line-height: 24px;
            }
            .faq-text33 {
              font-size: 16px;
              line-height: 24px;
            }
            .faq-text40 {
              font-size: 16px;
              line-height: 24px;
            }
          }
        `}
      </style>
    </>
  )
}

FAQ.defaultProps = {
  rootClassName: '',
}

FAQ.propTypes = {
  rootClassName: PropTypes.string,
}

export default FAQ
