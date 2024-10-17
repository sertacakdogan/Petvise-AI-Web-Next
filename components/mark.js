import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Mark = (props) => {
  return (
    <>
      <div className={`mark-mark ${props.rootClassName} `}>
        <div className="mark-icon1">
          <svg viewBox="0 0 1024 1024" className="mark-icon2">
            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
          </svg>
        </div>
        <p>
          {props.label1 ?? (
            <Fragment>
              <p className="mark-label2">Label</p>
            </Fragment>
          )}
        </p>
      </div>
      <style jsx>
        {`
          .mark-mark {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .mark-icon1 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            border-radius: 50%;
            flex-direction: row;
            justify-content: center;
            background-color: #292929;
          }
          .mark-icon2 {
            fill: #c6ff4b;
            width: 12px;
            height: 12px;
          }
          .mark-label2 {
            color: var(--dl-color-primary-secondary);
            display: inline-block;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 24px;
          }
          .markroot-class-name5 {
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .markroot-class-name6 {
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .markroot-class-name7 {
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .markroot-class-name8 {
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .markroot-class-name9 {
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
        `}
      </style>
    </>
  )
}

Mark.defaultProps = {
  rootClassName: '',
  label1: undefined,
}

Mark.propTypes = {
  rootClassName: PropTypes.string,
  label1: PropTypes.element,
}

export default Mark
