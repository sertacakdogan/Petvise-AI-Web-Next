import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import Includes from './includes'
import Excludes from './excludes'

const PlansContainer = (props) => {
  return (
    <>
      <div className="plans-container-plans-container">
        <div className="plans-container-switch1">
          <div className="switch">
            <label>
              {props.text ?? (
                <Fragment>
                  <label className="plans-container-text30">Monthly</label>
                </Fragment>
              )}
            </label>
          </div>
          <div className="plans-container-switch3 switch">
            <label>
              {props.text1 ?? (
                <Fragment>
                  <label className="plans-container-text31">Yearly</label>
                </Fragment>
              )}
            </label>
          </div>
        </div>
        <main className="plans-container-plans">
          <div className="plans-container-plan1">
            <div className="plans-container-details1">
              <div className="plans-container-header1">
                <label>
                  {props.name ?? (
                    <Fragment>
                      <label className="plans-container-text17">Basic</label>
                    </Fragment>
                  )}
                </label>
                <div className="plans-container-pricing1">
                  <h1>
                    {props.price ?? (
                      <Fragment>
                        <h1 className="plans-container-text39">$9</h1>
                      </Fragment>
                    )}
                  </h1>
                  <span>
                    {props.duration ?? (
                      <Fragment>
                        <span className="plans-container-text23">/mo</span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <p>
                {props.description ?? (
                  <Fragment>
                    <p className="plans-container-text27">
                      Good for sed quia consequuntur magni dolores eos qui
                      ratione.
                    </p>
                  </Fragment>
                )}
              </p>
            </div>
            <div className="plans-container-buy-details1">
              <div className="plans-container-buy1 button">
                <span>
                  {props.text2 ?? (
                    <Fragment>
                      <span className="plans-container-text19">
                        <span>Start Basic</span>
                        <br></br>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="plans-container-features1">
                <span>
                  {props.heading ?? (
                    <Fragment>
                      <span className="plans-container-text35">
                        You will get
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="plans-container-list1">
                  <Includes rootClassName="includesroot-class-name"></Includes>
                  <Includes rootClassName="includesroot-class-name"></Includes>
                  <Includes rootClassName="includesroot-class-name"></Includes>
                  <Includes rootClassName="includesroot-class-name"></Includes>
                  <Excludes rootClassName="excludesroot-class-name"></Excludes>
                  <Excludes rootClassName="excludesroot-class-name"></Excludes>
                  <Excludes rootClassName="excludesroot-class-name"></Excludes>
                  <Excludes rootClassName="excludesroot-class-name"></Excludes>
                  <Excludes rootClassName="excludesroot-class-name"></Excludes>
                  <Excludes rootClassName="excludesroot-class-name"></Excludes>
                </div>
              </div>
            </div>
          </div>
          <div className="plans-container-plan2">
            <div className="plans-container-details2">
              <div className="plans-container-header2">
                <label>
                  {props.name1 ?? (
                    <Fragment>
                      <label className="plans-container-text33">
                        Professional
                      </label>
                    </Fragment>
                  )}
                </label>
                <div className="plans-container-pricing2">
                  <h1>
                    {props.price1 ?? (
                      <Fragment>
                        <h1 className="plans-container-text28">$15</h1>
                      </Fragment>
                    )}
                  </h1>
                  <span>
                    {props.duration1 ?? (
                      <Fragment>
                        <span className="plans-container-text32">/mo</span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <p>
                {props.description1 ?? (
                  <Fragment>
                    <p className="plans-container-text18">
                      Good for sed quia consequuntur magni dolores eos qui
                      ratione.
                    </p>
                  </Fragment>
                )}
              </p>
            </div>
            <div className="plans-container-buy-details2">
              <div className="plans-container-buy2 button">
                <span>
                  {props.text3 ?? (
                    <Fragment>
                      <span className="plans-container-text24">
                        <span>Start Professional</span>
                        <br></br>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="plans-container-features2">
                <span>
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="plans-container-text22">
                        You will get
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="plans-container-list2">
                  <Includes rootClassName="includesroot-class-name"></Includes>
                  <Includes rootClassName="includesroot-class-name"></Includes>
                  <Includes rootClassName="includesroot-class-name"></Includes>
                  <Includes rootClassName="includesroot-class-name"></Includes>
                  <Includes rootClassName="includesroot-class-name"></Includes>
                  <Includes rootClassName="includesroot-class-name"></Includes>
                  <Includes rootClassName="includesroot-class-name"></Includes>
                  <Excludes rootClassName="excludesroot-class-name"></Excludes>
                  <Excludes rootClassName="excludesroot-class-name"></Excludes>
                  <Excludes rootClassName="excludesroot-class-name"></Excludes>
                </div>
              </div>
            </div>
          </div>
          <div className="plans-container-plan3">
            <div className="plans-container-details3">
              <div className="plans-container-header3">
                <label>
                  {props.name2 ?? (
                    <Fragment>
                      <label className="plans-container-text34">
                        Enterprise
                      </label>
                    </Fragment>
                  )}
                </label>
                <div className="plans-container-pricing3">
                  <span>
                    {props.price2 ?? (
                      <Fragment>
                        <span className="plans-container-text16">$99</span>
                      </Fragment>
                    )}
                  </span>
                  <span>
                    {props.duration2 ?? (
                      <Fragment>
                        <span className="plans-container-text15">/mo</span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <p>
                {props.description2 ?? (
                  <Fragment>
                    <p className="plans-container-text40">
                      Good for sed quia consequuntur magni dolores eos qui
                      ratione.
                    </p>
                  </Fragment>
                )}
              </p>
            </div>
            <div className="plans-container-buy-details3">
              <div className="plans-container-buy3 button">
                <span>
                  {props.text4 ?? (
                    <Fragment>
                      <span className="plans-container-text36">
                        <span>Start Enterprise</span>
                        <br></br>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="plans-container-features3">
                <span>
                  {props.heading2 ?? (
                    <Fragment>
                      <span className="plans-container-text29">
                        You will get
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="plans-container-list3">
                  <Includes rootClassName="includesroot-class-name"></Includes>
                  <Includes rootClassName="includesroot-class-name"></Includes>
                  <Includes rootClassName="includesroot-class-name"></Includes>
                  <Includes rootClassName="includesroot-class-name"></Includes>
                  <Includes rootClassName="includesroot-class-name"></Includes>
                  <Includes rootClassName="includesroot-class-name"></Includes>
                  <Includes rootClassName="includesroot-class-name"></Includes>
                  <Includes rootClassName="includesroot-class-name"></Includes>
                  <Includes rootClassName="includesroot-class-name"></Includes>
                  <Includes rootClassName="includesroot-class-name"></Includes>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <style jsx>
        {`
          .plans-container-plans-container {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .plans-container-switch1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            border-radius: 50px;
            flex-direction: row;
            justify-content: center;
            background-color: #292929;
          }
          .plans-container-switch3 {
            padding-top: var(--dl-space-space-unit);
            background-color: #80ff44;
          }
          .plans-container-plans {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            z-index: 50;
            max-width: 1200px;
            align-items: center;
            border-radius: 50px;
            flex-direction: row;
            justify-content: center;
          }
          .plans-container-plan1 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: 20px;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
            background-color: #292929;
          }
          .plans-container-details1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .plans-container-header1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .plans-container-pricing1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .plans-container-buy-details1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .plans-container-buy1 {
            width: 100%;
            display: flex;
            background-color: #80ff44;
          }
          .plans-container-features1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .plans-container-list1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .plans-container-plan2 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: 20px;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
            background-color: #292929;
          }
          .plans-container-details2 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .plans-container-header2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .plans-container-pricing2 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .plans-container-buy-details2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .plans-container-buy2 {
            width: 100%;
            display: flex;
            background-color: #80ff44;
          }
          .plans-container-features2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .plans-container-list2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .plans-container-plan3 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: 20px;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
            background-color: #292929;
          }
          .plans-container-details3 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .plans-container-header3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .plans-container-pricing3 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .plans-container-buy-details3 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .plans-container-buy3 {
            width: 100%;
            display: flex;
            background-color: #80ff44;
          }
          .plans-container-features3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .plans-container-list3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .plans-container-text15 {
            color: #b3b3b3;
            display: inline-block;
            font-size: 20px;
            font-family: Poppins;
            line-height: 40px;
          }
          .plans-container-text16 {
            color: rgb(255, 255, 255);
            display: inline-block;
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .plans-container-text17 {
            color: rgb(255, 255, 255);
            display: inline-block;
            font-size: 24px;
            font-family: Poppins;
            line-height: 36px;
          }
          .plans-container-text18 {
            color: rgba(255, 255, 255, 0.8);
            display: inline-block;
            font-family: Poppins;
            line-height: 22px;
          }
          .plans-container-text19 {
            color: rgb(12, 16, 12);
            display: inline-block;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .plans-container-text22 {
            color: rgb(255, 255, 255);
            display: inline-block;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 28px;
          }
          .plans-container-text23 {
            color: #b3b3b3;
            display: inline-block;
            font-size: 20px;
            font-family: Poppins;
            line-height: 40px;
          }
          .plans-container-text24 {
            color: rgb(12, 16, 12);
            display: inline-block;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .plans-container-text27 {
            color: rgba(255, 255, 255, 0.8);
            display: inline-block;
            font-family: Poppins;
            line-height: 22px;
          }
          .plans-container-text28 {
            color: rgb(255, 255, 255);
            display: inline-block;
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .plans-container-text29 {
            color: rgb(255, 255, 255);
            display: inline-block;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 28px;
          }
          .plans-container-text30 {
            color: #ffffff;
            display: inline-block;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .plans-container-text31 {
            color: rgb(0, 0, 0);
            display: inline-block;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .plans-container-text32 {
            color: #b3b3b3;
            display: inline-block;
            font-size: 20px;
            font-family: Poppins;
            line-height: 40px;
          }
          .plans-container-text33 {
            color: rgb(255, 255, 255);
            display: inline-block;
            font-size: 24px;
            font-family: Poppins;
            line-height: 36px;
          }
          .plans-container-text34 {
            color: rgb(255, 255, 255);
            display: inline-block;
            font-size: 24px;
            font-family: Poppins;
            line-height: 36px;
          }
          .plans-container-text35 {
            color: rgb(255, 255, 255);
            display: inline-block;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 28px;
          }
          .plans-container-text36 {
            color: rgb(12, 16, 12);
            display: inline-block;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .plans-container-text39 {
            color: #ffffff;
            display: inline-block;
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .plans-container-text40 {
            color: rgba(255, 255, 255, 0.8);
            display: inline-block;
            font-family: Poppins;
            line-height: 22px;
          }
          @media (max-width: 991px) {
            .plans-container-plans {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .plans-container-plan1 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .plans-container-plan2 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .plans-container-plan3 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
          }
        `}
      </style>
    </>
  )
}

PlansContainer.defaultProps = {
  duration2: undefined,
  price2: undefined,
  name: undefined,
  description1: undefined,
  text2: undefined,
  heading1: undefined,
  duration: undefined,
  text3: undefined,
  description: undefined,
  price1: undefined,
  heading2: undefined,
  text: undefined,
  text1: undefined,
  duration1: undefined,
  name1: undefined,
  name2: undefined,
  heading: undefined,
  text4: undefined,
  price: undefined,
  description2: undefined,
}

PlansContainer.propTypes = {
  duration2: PropTypes.element,
  price2: PropTypes.element,
  name: PropTypes.element,
  description1: PropTypes.element,
  text2: PropTypes.element,
  heading1: PropTypes.element,
  duration: PropTypes.element,
  text3: PropTypes.element,
  description: PropTypes.element,
  price1: PropTypes.element,
  heading2: PropTypes.element,
  text: PropTypes.element,
  text1: PropTypes.element,
  duration1: PropTypes.element,
  name1: PropTypes.element,
  name2: PropTypes.element,
  heading: PropTypes.element,
  text4: PropTypes.element,
  price: PropTypes.element,
  description2: PropTypes.element,
}

export default PlansContainer
