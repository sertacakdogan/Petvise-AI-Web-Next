import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import QRDownload from './qr-download'

const FooterDownload = (props) => {
  return (
    <>
      <section id="DownloadBanner" className="footer-download-section">
        <main className="footer-download-content">
          <header className="footer-download-header">
            <h2>
              {props.heading ?? (
                <Fragment>
                  <h2 className="footer-download-heading2 section-heading">
                    <span>
                      Ditch endless search and get instant, reliable pet care
                      advice with Petvise AI.
                    </span>
                    <br></br>
                  </h2>
                </Fragment>
              )}
            </h2>
            <div className="footer-download-buttons">
              <div className="footer-download-container">
                <a
                  href={props.iOSUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-download-link1"
                >
                  <div className="footer-download-ios button">
                    <img
                      alt={props.iconAlt}
                      src={props.iconSrc}
                      className="footer-download-icon1"
                    />
                    <span>
                      {props.text ?? (
                        <Fragment>
                          <span className="footer-download-text7">
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
                  className="footer-download-link2"
                >
                  <div className="footer-download-android button">
                    <img
                      alt={props.iconAlt1}
                      src={props.iconSrc1}
                      className="footer-download-icon2"
                    />
                    <span>
                      {props.text1 ?? (
                        <Fragment>
                          <span className="footer-download-text6">
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
                    <span className="footer-download-text3">
                      Scan Here to Download
                    </span>
                  </Fragment>
                }
                imageSrc1="d3886f99-cd5b-4a1c-a9f8-7ed916f2064a"
              ></QRDownload>
            </div>
          </header>
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="footer-download-image"
          />
        </main>
      </section>
      <style jsx>
        {`
          .footer-download-section {
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
          .footer-download-content {
            flex: 1;
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-download-header {
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
          .footer-download-buttons {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .footer-download-container {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-download-link1 {
            display: contents;
          }
          .footer-download-ios {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            padding: var(--dl-space-space-unit);
            flex-direction: row;
            text-decoration: none;
            background-color: #0f0f0f;
          }
          .footer-download-icon1 {
            width: 16px;
            object-fit: cover;
          }
          .footer-download-link2 {
            display: contents;
          }
          .footer-download-android {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            padding: var(--dl-space-space-unit);
            flex-direction: row;
            text-decoration: none;
            background-color: #0f0f0f;
          }
          .footer-download-icon2 {
            width: 16px;
            object-fit: cover;
          }
          .footer-download-text3 {
            color: var(--dl-color-primary-alternate);
            display: inline-block;
            text-align: center;
          }
          .footer-download-image {
            right: 67px;
            width: 308px;
            bottom: 1px;
            height: 452px;
            z-index: 100;
            position: absolute;
            align-self: flex-end;
            object-fit: cover;
          }
          .footer-download-heading2 {
            display: inline-block;
          }
          .footer-download-text6 {
            color: rgb(255, 255, 255);
            display: inline-block;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .footer-download-text7 {
            color: #ffffff;
            display: inline-block;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          @media (max-width: 991px) {
            .footer-download-content {
              align-items: center;
              flex-direction: column;
            }
            .footer-download-buttons {
              width: 100%;
            }
            .footer-download-ios {
              flex: 1;
              justify-content: center;
            }
            .footer-download-android {
              flex: 1;
              justify-content: center;
            }
            .footer-download-image {
              right: -343px;
              bottom: 2px;
            }
          }
          @media (max-width: 767px) {
            .footer-download-section {
              padding-top: var(--dl-space-space-fourunits);
            }
            .footer-download-header {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .footer-download-buttons {
              flex-direction: column;
            }
            .footer-download-ios {
              flex: 0 0 auto;
              width: 100%;
            }
            .footer-download-android {
              flex: 0 0 auto;
              width: 100%;
            }
            .footer-download-image {
              left: -283px;
              width: 229px;
              bottom: 27px;
              height: 336px;
            }
          }
          @media (max-width: 479px) {
            .footer-download-image {
              left: -292px;
              bottom: 27px;
            }
          }
        `}
      </style>
    </>
  )
}

FooterDownload.defaultProps = {
  heading: undefined,
  imageSrc: '/Screens/petvise-mockups-_5_-copy-2-400w.webp',
  iconAlt: 'image',
  iconAlt1: 'image',
  imageAlt: 'image',
  iconSrc1: '/Icons/android-200h.webp',
  iOSUrl:
    'https://apps.apple.com/tr/app/petvise-ai-pet-wellness-guide/id6503983438',
  text1: undefined,
  androidUrl:
    'https://play.google.com/store/apps/details?id=com.mycompany.petvise&hl=en',
  text: undefined,
  iconSrc: '/Icons/apple-200w.webp',
}

FooterDownload.propTypes = {
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

export default FooterDownload
