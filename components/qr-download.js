import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const QRDownload = (props) => {
  return (
    <>
      <div
        id="QRDowload-DarkMode"
        className={`qr-download-container1 ${props.rootClassName} `}
      >
        <div className="qr-download-container2">
          <img
            alt={props.imageAlt1}
            src={props.imageSrc1}
            className="qr-download-image"
          />
          <div className="qr-download-container3">
            <span>
              {props.text2 ?? (
                <Fragment>
                  <span className="qr-download-text2">
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
          .qr-download-container1 {
            flex: 0 0 auto;
            display: flex;
            position: relative;
            align-items: center;
            border-color: var(--dl-color-primary-alternate);
            border-style: double;
            border-width: 3px;
            flex-direction: column;
          }
          .qr-download-container2 {
            flex: 0 0 auto;
            width: auto;
            margin: 10px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .qr-download-image {
            width: 120px;
            object-fit: cover;
          }
          .qr-download-container3 {
            flex: 0 0 auto;
            width: 120px;
            height: auto;
            display: flex;
            align-items: flex-start;
            padding-top: 10px;
            justify-content: center;
          }
          .qr-download-text2 {
            color: var(--dl-color-primary-alternate);
            display: inline-block;
            text-align: center;
          }
        `}
      </style>
    </>
  )
}

QRDownload.defaultProps = {
  rootClassName: '',
  imageSrc1: 'd3886f99-cd5b-4a1c-a9f8-7ed916f2064a',
  text2: undefined,
  imageAlt1: 'image',
}

QRDownload.propTypes = {
  rootClassName: PropTypes.string,
  imageSrc1: PropTypes.string,
  text2: PropTypes.element,
  imageAlt1: PropTypes.string,
}

export default QRDownload
