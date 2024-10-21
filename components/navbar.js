import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

const Navbar = (props) => {
  return (
    <>
      <header className={`navbar-navbar ${props.rootClassName} `}>
        <Link href="/">
          <a className="navbar-link1">
            <img
              alt={props.imageAlt2}
              src="/Branding/logo%2Bhorizontatext.svg"
              loading="eager"
              className="navbar-image1"
            />
          </a>
        </Link>
        <div className="navbar-nav-content">
          <div className="navbar-nav-links1">
            <a
              href="https://www.petvise.ai/blog"
              target="_blank"
              rel="noreferrer noopener"
              className="navbar-link2 nav-link"
            >
              Blog
            </a>
          </div>
          <a
            href="https://onelink.to/ne9s7r"
            target="_blank"
            rel="noreferrer noopener"
            className="navbar-link3"
          >
            <div className="navbar-get-started1 get-started">
              <span className="navbar-text1">Get started</span>
            </div>
          </a>
          <div id="open-mobile-menu" className="navbar-hamburger get-started">
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="navbar-image2"
            />
          </div>
        </div>
        <div id="mobile-menu" className="navbar-mobile-menu">
          <div className="navbar-branding">
            <img
              alt={props.imageAlt1}
              src={props.imageSrc1}
              className="navbar-image3"
            />
            <div id="close-mobile-menu" className="navbar-container1">
              <svg viewBox="0 0 1024 1024" className="navbar-icon1">
                <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
              </svg>
            </div>
          </div>
          <div className="navbar-nav-links2">
            <span className="nav-link">Features</span>
            <span className="nav-link">Why us</span>
            <span className="nav-link">Prices</span>
            <span className="nav-link">Contact</span>
          </div>
          <div className="get-started">
            <span className="navbar-text2">Get started</span>
          </div>
        </div>
        <div>
          <div className="navbar-container3">
            <React.Fragment>
              <Script defer={true}>{`
    /*
Mobile menu - Code Embed
*/

/* listenForUrlChangesMobileMenu() makes sure that if you changes pages inside your app, 
the mobile menu will still work*/

const listenForUrlChangesMobileMenu = () => {
    let url = location.href;
    document.body.addEventListener("click", () => {
        requestAnimationFrame(() => {
            if (url !== location.href) {
                runMobileMenuCodeEmbed();
                url = location.href;
            }
        });
    },
    true
    );
};

const runMobileMenuCodeEmbed = () => {
    // Mobile menu
    const mobileMenu = document.querySelector("#mobile-menu")

    // Buttons
    const closeButton = document.querySelector("#close-mobile-menu")
    const openButton = document.querySelector("#open-mobile-menu")

    // On openButton click, set the mobileMenu position left to -100vw
    openButton && openButton.addEventListener("click", function() {
        mobileMenu.style.transform = "translateX(0%)"
    })

    // On closeButton click, set the mobileMenu position to 0vw
    closeButton && closeButton.addEventListener("click", function() {
        mobileMenu.style.transform = "translateX(100%)"
    })
}

runMobileMenuCodeEmbed()
listenForUrlChangesMobileMenu()
`}</Script>
            </React.Fragment>
          </div>
        </div>
      </header>
      <style jsx>
        {`
          .navbar-navbar {
            width: 100%;
            display: flex;
            z-index: 1000;
            position: relative;
            max-width: 1200px;
            align-self: auto;
            align-items: center;
            flex-shrink: 1;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: flex-start;
          }
          .navbar-link1 {
            display: contents;
          }
          .navbar-image1 {
            width: 183px;
            height: 51px;
            object-fit: cover;
            text-decoration: none;
          }
          .navbar-nav-content {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            margin-left: auto;
            flex-direction: row;
            justify-content: flex-start;
          }
          .navbar-nav-links1 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            border-color: transparent;
          }
          .navbar-link2 {
            color: var(--dl-color-text-darkertext);
            text-decoration: none;
          }
          .navbar-link3 {
            display: contents;
          }
          .navbar-get-started1 {
            text-decoration: none;
          }
          .navbar-text1 {
            color: rgba(255, 255, 255, 1);
            align-self: auto;
            font-style: Medium;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            font-stretch: normal;
            text-decoration: none;
          }
          .navbar-hamburger {
            display: none;
          }
          .navbar-image2 {
            width: 100px;
            object-fit: cover;
          }
          .navbar-mobile-menu {
            gap: var(--dl-space-space-twounits);
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            display: flex;
            padding: var(--dl-space-space-twounits);
            z-index: 100;
            position: fixed;
            transform: translateX(100%);
            transition: 0.3s;
            align-items: stretch;
            flex-direction: column;
            background-color: #fff;
          }
          .navbar-branding {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-image3 {
            width: 100px;
            filter: brightness(0) saturate(100%);
            object-fit: cover;
          }
          .navbar-container1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-icon1 {
            width: 24px;
            height: 24px;
          }
          .navbar-nav-links2 {
            gap: var(--dl-space-space-unit);
            color: var(--dl-color-gray-black);
            display: flex;
            flex-direction: column;
          }
          .navbar-text2 {
            color: rgba(255, 255, 255, 1);
            align-self: auto;
            font-style: Medium;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            font-stretch: normal;
            text-decoration: none;
          }
          .navbar-container3 {
            display: contents;
          }

          @media (max-width: 767px) {
            .navbar-navbar {
              padding-bottom: var(--dl-space-space-twounits);
            }
            .navbar-nav-links1 {
              display: none;
            }
            .navbar-get-started1 {
              display: none;
            }
            .navbar-hamburger {
              display: flex;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .navbar-image2 {
              width: 16px;
              height: 14px;
            }
            .navbar-branding {
              width: 100%;
            }
            .navbar-nav-links2 {
              margin-top: var(--dl-space-space-twounits);
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-twounits);
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .navbar-navbar {
              padding-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

Navbar.defaultProps = {
  imageAlt2: 'image',
  imageAlt: 'image',
  imageSrc1: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  imageSrc: '/Icons/hamburger-200h.webp',
  imageAlt1: 'image',
  rootClassName: '',
  brandingLogo: '68190c35-3626-467c-9bcc-6ea1a88a9fe9',
}

Navbar.propTypes = {
  imageAlt2: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt1: PropTypes.string,
  rootClassName: PropTypes.string,
  brandingLogo: PropTypes.string,
}

export default Navbar
