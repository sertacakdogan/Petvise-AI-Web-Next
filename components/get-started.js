import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const GetStarted = (props) => {
  return (
    <>
      <a
        href="https://onelink.to/ne9s7r"
        target="_blank"
        rel="noreferrer noopener"
      >
        <div className="get-started-get-started button">
          <span>
            {props.text ?? (
              <Fragment>
                <span className="get-started-text2">Download</span>
              </Fragment>
            )}
          </span>
        </div>
      </a>
      <style jsx>
        {`
          .get-started-get-started {
            display: flex;
            position: relative;
            text-decoration: none;
            background-color: var(--dl-color-primary-tertiarydark);
          }
          .get-started-text2 {
            color: var(--dl-color-background-primarybg);
            display: inline-block;
            font-size: 16px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 24px;
          }
          @media (max-width: 991px) {
            .get-started-get-started {
              flex: 1;
            }
          }
          @media (max-width: 767px) {
            .get-started-get-started {
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

GetStarted.defaultProps = {
  text: undefined,
}

GetStarted.propTypes = {
  text: PropTypes.element,
}

export default GetStarted
