import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const CTA3 = (props) => {
  return (
    <>
      <div className="cta3-container1 thq-section-padding">
        <div className="cta3-max-width thq-section-max-width">
          <div className="cta3-container2 thq-flex-row">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="cta3-placeholder-image thq-img-ratio-16-9"
            />
            <div className="cta3-column">
              <span>
                {props.content1 ?? (
                  <Fragment>
                    <span className="cta3-text8 thq-heading-2">
                      Medium length heading goes here
                    </span>
                  </Fragment>
                )}
              </span>
              <p>
                {props.content2 ?? (
                  <Fragment>
                    <p className="cta3-text7 thq-body-small">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                    </p>
                  </Fragment>
                )}
              </p>
              <div className="cta3-actions">
                <button type="button" className="thq-button-filled">
                  <span>
                    {props.action1 ?? (
                      <Fragment>
                        <span className="cta3-text6">Action1</span>
                      </Fragment>
                    )}
                  </span>
                </button>
                <button type="button" className="thq-button-outline">
                  <span>
                    {props.action2 ?? (
                      <Fragment>
                        <span className="cta3-text5">Action2</span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .cta3-container1 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .cta3-max-width {
            gap: 80px;
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .cta3-container2 {
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .cta3-placeholder-image {
            height: 100%;
            flex-grow: 1;
            max-height: 400px;
          }
          .cta3-column {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-direction: column;
          }
          .cta3-actions {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
          }
          .cta3-text5 {
            display: inline-block;
          }
          .cta3-text6 {
            display: inline-block;
          }
          .cta3-text7 {
            display: inline-block;
          }
          .cta3-text8 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .cta3-container2 {
              flex-direction: column;
            }
            .cta3-placeholder-image {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

CTA3.defaultProps = {
  image1Alt: 'Image1Alt',
  action2: undefined,
  action1: undefined,
  content2: undefined,
  content1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1678203822791-6ae64ce46855?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTUxNjk5NXw&ixlib=rb-4.0.3&q=80&w=1080',
}

CTA3.propTypes = {
  image1Alt: PropTypes.string,
  action2: PropTypes.element,
  action1: PropTypes.element,
  content2: PropTypes.element,
  content1: PropTypes.element,
  image1Src: PropTypes.string,
}

export default CTA3
