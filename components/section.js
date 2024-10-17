import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import QRDownload from './qr-download'

const Section = (props) => {
  return (
    <>
      <section id="DownloadBanner" className="section-section">
        <main className="section-content">
          <header className="section-header">
            <h2>
              {props.heading ?? (
                <Fragment>
                  <h2 className="section-heading2 section-heading">
                    <span>
                      Ditch endless search and get instant, reliable pet care
                      advice with Petvise AI.
                    </span>
                    <br></br>
                  </h2>
                </Fragment>
              )}
            </h2>
            <div className="section-buttons">
              <div className="section-container">
                <a
                  href={props.iOSUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="section-link1"
                >
                  <div className="section-ios button">
                    <img
                      alt={props.iconAlt}
                      src={props.iconSrc}
                      className="section-icon1"
                    />
                    <span>
                      {props.text ?? (
                        <Fragment>
                          <span className="section-text7">
                            Download for iOS
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </a>
                <a
                  href={props.androidUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="section-link2"
                >
                  <div className="section-android button">
                    <img
                      alt={props.iconAlt1}
                      src={props.iconSrc1}
                      className="section-icon2"
                    />
                    <span>
                      {props.text1 ?? (
                        <Fragment>
                          <span className="section-text6">
                            Download for Android
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </a>
              </div>
              <QRDownload
                text2={
                  <Fragment>
                    <span className="section-text3">Scan Here to Download</span>
                  </Fragment>
                }
              ></QRDownload>
            </div>
          </header>
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="section-image"
          />
        </main>
      </section>
      <style jsx>
        {`
          .section-section {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
            background-color: #292929;
          }
          .section-content {
            flex: 1;
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .section-header {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
          }
          .section-buttons {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .section-container {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .section-link1 {
            display: contents;
          }
          .section-ios {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            padding: var(--dl-space-space-unit);
            flex-direction: row;
            text-decoration: none;
            background-color: #0f0f0f;
          }
          .section-icon1 {
            width: 16px;
            object-fit: cover;
          }
          .section-link2 {
            display: contents;
          }
          .section-android {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            padding: var(--dl-space-space-unit);
            flex-direction: row;
            text-decoration: none;
            background-color: #0f0f0f;
          }
          .section-icon2 {
            width: 16px;
            object-fit: cover;
          }
          .section-text3 {
            color: var(--dl-color-primary-alternate);
            display: inline-block;
            text-align: center;
          }
          .section-image {
            right: 67px;
            width: 308px;
            bottom: 1px;
            height: 452px;
            z-index: 100;
            position: absolute;
            align-self: flex-end;
            object-fit: cover;
          }
          .section-heading2 {
            display: inline-block;
          }
          .section-text6 {
            color: rgb(255, 255, 255);
            display: inline-block;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .section-text7 {
            color: #ffffff;
            display: inline-block;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          @media (max-width: 991px) {
            .section-content {
              align-items: center;
              flex-direction: column;
            }
            .section-buttons {
              width: 100%;
            }
            .section-ios {
              flex: 1;
              justify-content: center;
            }
            .section-android {
              flex: 1;
              justify-content: center;
            }
            .section-image {
              right: -343px;
              bottom: 2px;
            }
          }
          @media (max-width: 767px) {
            .section-section {
              padding-top: var(--dl-space-space-fourunits);
            }
            .section-header {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .section-buttons {
              flex-direction: column;
            }
            .section-ios {
              flex: 0 0 auto;
              width: 100%;
            }
            .section-android {
              flex: 0 0 auto;
              width: 100%;
            }
            .section-image {
              left: -283px;
              width: 229px;
              bottom: 27px;
              height: 336px;
            }
          }
          @media (max-width: 479px) {
            .section-image {
              left: -292px;
              bottom: 27px;
            }
          }
        `}
      </style>
    </>
  )
}

Section.defaultProps = {
  heading: undefined,
  imageSrc: '/Screens/petvise-mockups-_5_-copy-2-400w.webp',
  iconAlt: 'image',
  iconAlt1: 'image',
  imageAlt: 'image',
  iconSrc1: '/Icons/android-200h.png',
  iOSUrl:
    'https://apps.apple.com/tr/app/petvise-ai-pet-wellness-guide/id6503983438',
  text1: undefined,
  androidUrl:
    'https://play.google.com/store/apps/details?id=com.mycompany.petvise&hl=en',
  text: undefined,
  iconSrc: '/Icons/apple-200w.png',
}

Section.propTypes = {
  heading: PropTypes.element,
  imageSrc: PropTypes.string,
  iconAlt: PropTypes.string,
  iconAlt1: PropTypes.string,
  imageAlt: PropTypes.string,
  iconSrc1: PropTypes.string,
  iOSUrl: PropTypes.string,
  text1: PropTypes.element,
  androidUrl: PropTypes.string,
  text: PropTypes.element,
  iconSrc: PropTypes.string,
}

export default Section
