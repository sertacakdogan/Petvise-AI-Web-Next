import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const GetStarted1 = (props) => {
  return (
    <>
      <a
        href="https://onelink.to/ne9s7r"
        target="_blank"
        rel="noreferrer noopener"
      >
        <div className="get-started1-get-started button">
          <span>
            {props.text ?? (
              <Fragment>
                <span className="get-started1-text2">Download</span>
              </Fragment>
            )}
          </span>
        </div>
      </a>
      <style jsx>
        {`
          .get-started1-get-started {
            display: flex;
            position: relative;
            text-decoration: none;
            background-color: var(--dl-color-primary-tertiarydark);
          }
          .get-started1-text2 {
            color: var(--dl-color-background-primarybg);
            font-size: 16px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 24px;
          }
          @media (max-width: 991px) {
            .get-started1-get-started {
              flex: 1;
            }
          }
          @media (max-width: 767px) {
            .get-started1-get-started {
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

GetStarted1.defaultProps = {
  text: undefined,
}

GetStarted1.propTypes = {
  text: PropTypes.element,
}

export default GetStarted1
