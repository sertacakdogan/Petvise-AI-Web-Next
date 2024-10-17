import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const QRDownload1 = (props) => {
  return (
    <>
      <div
        id="QRDowload-DarkMode"
        className={`qr-download1-container1 ${props.rootClassName} `}
      >
        <div className="qr-download1-container2">
          <img
            alt={props.imageAlt1}
            src={props.imageSrc1}
            className="qr-download1-image"
          />
          <div className="qr-download1-container3">
            <span>
              {props.text2 ?? (
                <Fragment>
                  <span className="qr-download1-text2">
                    Scan Here to Download
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .qr-download1-container1 {
            flex: 0 0 auto;
            display: flex;
            position: relative;
            align-items: center;
            border-color: var(--dl-color-primary-alternate);
            border-style: double;
            border-width: 3px;
            flex-direction: column;
          }
          .qr-download1-container2 {
            flex: 0 0 auto;
            width: auto;
            margin: 10px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .qr-download1-image {
            width: 120px;
            object-fit: cover;
          }
          .qr-download1-container3 {
            flex: 0 0 auto;
            width: 120px;
            height: auto;
            display: flex;
            align-items: flex-start;
            padding-top: 10px;
            justify-content: center;
          }
          .qr-download1-text2 {
            color: var(--dl-color-primary-alternate);
            text-align: center;
          }
        `}
      </style>
    </>
  )
}

QRDownload1.defaultProps = {
  text2: undefined,
  imageAlt1: 'image',
  rootClassName: '',
  imageSrc1: '/external/onelinkto_ne9s7r.svg',
}

QRDownload1.propTypes = {
  text2: PropTypes.element,
  imageAlt1: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc1: PropTypes.string,
}

export default QRDownload1
