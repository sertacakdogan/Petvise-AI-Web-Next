import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Review = (props) => {
  return (
    <>
      <section className={`review-card ${props.rootClassName} `}>
        <div className="review-stars">
          <svg viewBox="0 0 1024 1024" className="review-icon10">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="review-icon12">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="review-icon14">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="review-icon16">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="review-icon18">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
        </div>
        <main className="review-content">
          <p>
            {props.quote1 ?? (
              <Fragment>
                <p className="review-quote2">
                  <span>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor.”
                  </span>
                </p>
              </Fragment>
            )}
          </p>
          <div className="review-author1">
            <img
              alt={props.avatarAlt}
              src={props.avatarSrc}
              className="review-avatar"
            />
            <div className="review-details">
              <h1>
                {props.author1 ?? (
                  <Fragment>
                    <h1 className="review-author3">
                      <span>Sima Mosbacher</span>
                    </h1>
                  </Fragment>
                )}
              </h1>
              <label>
                {props.position1 ?? (
                  <Fragment>
                    <label className="review-position2">
                      <span>Manager</span>
                    </label>
                  </Fragment>
                )}
              </label>
            </div>
          </div>
        </main>
      </section>
      <style jsx>
        {`
          .review-card {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            align-items: flex-start;
            border-radius: 20px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #292929;
          }
          .review-stars {
            gap: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .review-icon10 {
            fill: #ffde6a;
            width: 16px;
            height: 16px;
          }
          .review-icon12 {
            fill: #ffde6a;
            width: 16px;
            height: 16px;
          }
          .review-icon14 {
            fill: #ffde6a;
            width: 16px;
            height: 16px;
          }
          .review-icon16 {
            fill: #ffde6a;
            width: 16px;
            height: 16px;
          }
          .review-icon18 {
            fill: #ffde6a;
            width: 16px;
            height: 16px;
          }
          .review-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .review-author1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .review-avatar {
            width: 60px;
            height: 60px;
            object-fit: cover;
            border-radius: 50%;
          }
          .review-details {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .review-author3 {
            color: rgb(255, 255, 255);
            display: inline-block;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .review-position2 {
            color: #cccccc;
            display: inline-block;
            font-size: 14px;
            font-family: Poppins;
            line-height: 20px;
          }
          .review-quote2 {
            color: rgb(204, 204, 204);
            display: inline-block;
            font-size: 18px;
            font-family: 'Poppins';
            line-height: 25px;
          }

          @media (max-width: 991px) {
            .review-card {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

Review.defaultProps = {
  author1: undefined,
  position1: undefined,
  quote1: undefined,
  rootClassName: '',
  avatarSrc:
    'https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBvdHJhaXR8ZW58MHx8fHwxNjY3NzU5NDE3&ixlib=rb-4.0.3&w=200',
  avatarAlt: 'image',
}

Review.propTypes = {
  author1: PropTypes.element,
  position1: PropTypes.element,
  quote1: PropTypes.element,
  rootClassName: PropTypes.string,
  avatarSrc: PropTypes.string,
  avatarAlt: PropTypes.string,
}

export default Review
