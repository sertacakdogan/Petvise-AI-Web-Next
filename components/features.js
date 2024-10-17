import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Features = (props) => {
  return (
    <>
      <div
        id={props.featuresId}
        className={`features-features ${props.rootClassName} `}
      >
        <header className="features-feature1 feature feature-active">
          <h3 className="features-text10">
            {props.heading ?? (
              <Fragment>
                <h3 className="features-text34">Physically Healthy Pets</h3>
              </Fragment>
            )}
          </h3>
          <p>
            {props.text ?? (
              <Fragment>
                <p className="features-text17">AI tools for Healthy Pets.</p>
              </Fragment>
            )}
          </p>
          <div className="features-container10">
            <div className="features-container11">
              <div className="features-mark10">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  className="features-icon10"
                >
                  <path
                    d="M19.463 3.994c-2.682-1.645-5.023-.983-6.429.073c-.576.433-.864.65-1.034.65s-.458-.217-1.034-.65C9.56 3.011 7.219 2.35 4.537 3.994C1.018 6.152.222 13.274 8.34 19.283c1.546 1.144 2.319 1.716 3.66 1.716s2.114-.572 3.66-1.716c8.118-6.009 7.322-13.13 3.803-15.29M12 9v6m-3-3h6"
                    fill="none"
                    color="currentColor"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <p>
                  {props.label ?? (
                    <Fragment>
                      <p className="features-text35">
                        AI Vet: Diagnosis &amp; Care
                      </p>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
            <div className="features-container12">
              <div className="features-mark11">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  className="features-icon12"
                >
                  <path
                    d="M20 10a5.27 5.27 0 0 0-7-2V3h-2v5a5.27 5.27 0 0 0-7 2c-2 3 3 12 5 12s2-1 3-1s1 1 3 1s7-9 5-12m-1.75 3.38c-.62 2.47-1.84 4.74-3.55 6.62c-.2 0-.43-.1-.6-.25a3.34 3.34 0 0 0-4.2 0c-.17.15-.4.25-.6.25a15.3 15.3 0 0 1-3.55-6.61c-.25-.73-.3-1.52-.09-2.27A3.37 3.37 0 0 1 8.5 9.4c.56.01 1.11.14 1.61.39l.89.45h2l.89-.45c.5-.25 1.05-.38 1.61-.39c1.18.03 2.26.68 2.84 1.71c.21.75.16 1.54-.09 2.27M11 5C5.38 8.07 4.11 3.78 4.11 3.78S6.77.19 11 5"
                    fill="currentColor"
                  ></path>
                </svg>
                <p>
                  {props.label1 ?? (
                    <Fragment>
                      <p className="features-text29">
                        Dietician &amp; Nutritionist
                      </p>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
            <div className="features-container13">
              <div className="features-mark12">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 20 20"
                  className="features-icon14"
                >
                  <path
                    d="M15.493 3.507a1.65 1.65 0 0 0-1.5 1.643V10a.75.75 0 0 1-.75.75c-1.443 0-2.457.588-3.206 1.488c-.773.928-1.276 2.206-1.591 3.557c-.313 1.343-.427 2.696-.461 3.722a22 22 0 0 0-.012.983h7.02v-.75a2.25 2.25 0 0 0-2.249-2.25h-1.25a.75.75 0 0 1 0-1.5h1.25a3.75 3.75 0 0 1 3.748 3.75v.75h.75a.75.75 0 0 0 .75-.75v-10A.75.75 0 0 1 18.74 9h.506a1.25 1.25 0 0 0 1.062-1.909l-.62-1a1.25 1.25 0 0 0-1.061-.591h-2.386a.75.75 0 0 1-.75-.75zM6.473 20.5c-.002-.284 0-.634.013-1.033c.036-1.083.157-2.542.5-4.012c.34-1.462.915-2.996 1.899-4.177c.872-1.047 2.055-1.801 3.61-1.985V5.15A3.15 3.15 0 0 1 15.641 2c.746 0 1.35.604 1.35 1.35V4h1.636c.95 0 1.834.492 2.335 1.3l.62 1c1.092 1.763-.084 4.02-2.093 4.19v9.26A2.25 2.25 0 0 1 17.242 22H5.795a3.797 3.797 0 0 1-2.775-6.39l1.135-1.217a3.06 3.06 0 0 0-.073-4.248L2.969 9.03a.75.75 0 0 1 1.06-1.06l1.114 1.114a4.56 4.56 0 0 1 .11 6.333l-1.136 1.216a2.3 2.3 0 0 0 1.68 3.867z"
                    fill="currentColor"
                  ></path>
                </svg>
                <p>
                  {props.label2 ?? (
                    <Fragment>
                      <p className="features-text22">Body Fitness Analyzer</p>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
            <div className="features-container14">
              <div className="features-mark13">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 20 20"
                  className="features-icon16"
                >
                  <path
                    d="M12.935 5.598a.5.5 0 0 0 0 1c.291 0 .538.086.718.246c.177.157.334.423.374.869a.5.5 0 1 0 .996-.09c-.06-.654-.307-1.173-.706-1.527c-.395-.35-.893-.498-1.382-.498M8.94 3.928c-.936-.756-1.975-.917-2.906-.735A4.26 4.26 0 0 0 3.777 4.46c-.603.656-1.195 1.486-1.241 2.7c-.022.602.067 1.475.532 2.129l.002.002c.613.851.922 1.475 1.048 2.287c.04.26.062.543.067.867a6.7 6.7 0 0 0 .467 2.334c.322.795.873 1.608 1.77 1.939l.022.008l.023.006c.524.14 1.012.09 1.38-.255c.324-.303.459-.754.535-1.16c.07-.376.105-.812.14-1.241l.012-.153c.04-.491.085-.98.18-1.442c.267-1.273.648-1.497.825-1.55c.491-.127.779-.041.97.098c.278.202.49.615.637 1.224c.143.593.2 1.265.251 1.877c.072.866.255 1.654.603 2.158c.181.262.438.49.785.565c.35.075.69-.03.99-.224c1.104-.704 1.743-2.167 1.918-4.105c.08-.871.168-1.294.297-1.628c.1-.26.224-.47.418-.802a39 39 0 0 0 .364-.632c.244-.436.644-1.23.69-2.16c.048-.966-.29-2.033-1.431-2.961c-1.09-.886-2.106-1.207-3.013-1.158c-.899.05-1.617.458-2.128.896l-.013.01l-.012.013c-.5.49-.73.577-.879.57c-.168-.006-.442-.137-1.006-.705l-.019-.02zM4.513 5.137a3.26 3.26 0 0 1 1.713-.961c.663-.13 1.386-.024 2.065.515c.539.542 1.059.956 1.653.981c.616.026 1.122-.37 1.609-.844c.397-.337.91-.613 1.52-.646c.607-.033 1.386.17 2.327.935c.888.722 1.096 1.48 1.063 2.136c-.034.691-.338 1.317-.564 1.722l-.115.204l-.206.354c-.211.359-.389.661-.52 1.002c-.18.467-.28 1.003-.36 1.899c-.165 1.82-.746 2.897-1.461 3.353l-.004.002c-.154.1-.225.09-.239.086c-.018-.004-.08-.025-.171-.156c-.194-.28-.361-.848-.43-1.672v-.012c-.05-.596-.111-1.34-.274-2.016c-.16-.665-.444-1.379-1.021-1.799c-.486-.353-1.1-.443-1.82-.255l-.011.003c-.726.21-1.24.915-1.531 2.31c-.11.528-.16 1.073-.199 1.563l-.012.15c-.036.44-.066.822-.126 1.142c-.07.37-.16.543-.235.614c-.031.03-.115.1-.417.024c-.502-.194-.895-.693-1.168-1.368a5.7 5.7 0 0 1-.394-1.968v-.004a7 7 0 0 0-.079-1.006c-.159-1.025-.56-1.797-1.224-2.717c-.275-.387-.365-.992-.347-1.51c.033-.867.441-1.477.978-2.06"
                    fill="currentColor"
                  ></path>
                </svg>
                <p>
                  {props.label3 ?? (
                    <Fragment>
                      <p className="features-text33">Dental Check-up</p>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
            <div className="features-container15">
              <div className="features-mark14">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  className="features-icon18"
                >
                  <path
                    d="M21.42 13.87c-.22-.46-.58-.93-1.17-1.23c-.4-.25-.75-.38-1.01-.44c.26-.95-.11-1.7-.62-2.26c-.77-.82-1.56-.94-1.56-.94c.26-.5.36-1.1.22-1.68c-.16-.71-.55-1.16-1.06-1.46c-.52-.31-1.16-.46-1.82-.58c-.32-.06-1.65-.25-2.2-1.01c-.45-.62-.46-1.74-.58-2.07c-.05-.13-.12-.2-.26-.2c-.21 0-.49.12-.79.32C10 2.7 8.85 3.9 8.4 5.1c-.34.9-.35 1.72-.21 2.33c-.56.1-.97.28-1.13.35c-.51.22-1.59 1.18-1.69 2.67c-.03.44.04.89.13 1.33v.25c-.62.19-.97.4-1 .41c-.32.12-.85.49-1 .69c-.35.4-.58.87-.71 1.37c-.29 1.09-.19 2.33.34 3.33c.29.56.69 1.17 1.13 1.6c1.44 1.48 3.92 2.04 5.88 2.36c.82.14 1.66.21 2.49.21c1.59 0 3.17-.27 4.63-.87c3.35-1.39 4.24-3.63 4.38-4.24c.29-1.39-.07-2.7-.22-3.02m-5.37-2.54a1.008 1.008 0 1 1-.14 2.01a1 1 0 0 1-.95-1.06c.04-.53.46-.93.98-.95zm4.13 5.22c-.01.02-.48 1.95-3.49 3.19c-1.22.51-2.59.76-4.06.76c-.73 0-1.49-.06-2.25-.19c-1.62-.26-3.88-.75-5.07-1.95c-.27-.27-.59-.73-.85-1.23c-.34-.63-.42-1.48-.22-2.25c.08-.3.21-.56.39-.76l.02-.03c.09-.09.3-.21.38-.25l.11-.04l.12-.06c.06-.04.2-.11.41-.19c.46 1.26 1.61 2.15 2.92 2.15c.08 0 .15-.01.23-.01a2.97 2.97 0 0 0 2.12-1.14c.53-.66.79-1.51.72-2.38c-.12-1.67-1.44-3.01-3.02-3.06h-.02c-.12 0-.22 0-.31.01c-.31.03-.58.11-.85.22c.09-.1.17-.17.2-.19c.13-.05.41-.15.79-.24L10 8.63l-.35-1.54c-.04-.19-.12-.74.16-1.46c.15-.43.46-.87.77-1.25c.1.27.23.53.42.77c.77 1.08 2.12 1.43 3.06 1.59l.07.02c.47.08 1 .19 1.33.39c.21.13.3.26.36.52c.05.2.02.43-.09.64l-.52.89c-1.26.3-2.26 1.44-2.42 2.86c-.2 1.81.99 3.4 2.71 3.62c.12.01.24.02.35.02c.71 0 1.4-.26 1.97-.75c.41-.36.72-.82.92-1.33l.16.04c.1.02.27.08.55.25l.05.04l.07.05c.21.08.37.26.48.5c.08.17.33 1.1.13 2.05m-12.54-4.1c-.07-.55.33-1.06.89-1.13c.04-.01.07-.01.11-.01c.51-.01.97.36 1.03.88c.06.55-.34 1.06-.9 1.13a1 1 0 0 1-1.13-.87m1.07 3.7c.29-.01.55.08.79.13c1.18.22 2.2.25 2.69.25s1.5-.03 2.67-.25c.41-.08.88-.25 1.25 0c.48.32.13 1.47-.61 2.25a4.53 4.53 0 0 1-3.31 1.38c-1.78 0-2.86-.91-3.31-1.38c-.74-.78-1.09-1.93-.62-2.25c.14-.09.29-.13.45-.13"
                    fill="currentColor"
                  ></path>
                </svg>
                <p>
                  {props.label4 ?? (
                    <Fragment>
                      <p className="features-text16">Stool Analysis</p>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
          </div>
        </header>
        <header className="features-feature2 feature">
          <h3 className="features-text12">
            {props.heading1 ?? (
              <Fragment>
                <h3 className="features-text18">Mentally Healthy Pets</h3>
              </Fragment>
            )}
          </h3>
          <p>
            {props.text1 ?? (
              <Fragment>
                <p className="features-text19">AI Tools for Happy Pets.</p>
              </Fragment>
            )}
          </p>
          <div className="features-container16">
            <div className="features-container17">
              <div className="features-mark15">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  className="features-icon20"
                >
                  <path
                    d="M7 6q.001.357.115.67a1 1 0 0 1-1 1.333L6 8a2 2 0 0 0-1.491 3.333a1 1 0 0 1 0 1.334a2 2 0 0 0 .864 3.233a1 1 0 0 1 .67 1.135a2.5 2.5 0 1 0 4.932.824q.009-.063.025-.123V6a2 2 0 1 0-4 0m6 11.736q.016.06.025.122a2.5 2.5 0 1 0 4.932-.823a1 1 0 0 1 .67-1.135a2 2 0 0 0 .864-3.233a1 1 0 0 1 0-1.334a2 2 0 0 0-1.607-3.33a1 1 0 0 1-.999-1.333q.113-.313.115-.67a2 2 0 1 0-4 0zM9 2a4 4 0 0 1 3 1.354a4 4 0 0 1 6.998 2.771A4.002 4.002 0 0 1 21.465 12A3.997 3.997 0 0 1 20 17.465v.035a4.5 4.5 0 0 1-8 2.828A4.5 4.5 0 0 1 4 17.5v-.035A3.997 3.997 0 0 1 2.535 12a4.002 4.002 0 0 1 2.467-5.874L5 6a4 4 0 0 1 4-4"
                    fill="currentColor"
                  ></path>
                </svg>
                <p>
                  {props.label5 ?? (
                    <Fragment>
                      <p className="features-text30">Animal Psychologist</p>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
            <div className="features-container18">
              <div className="features-mark16">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  className="features-icon22"
                >
                  <path
                    d="M14.272 10.445L18 2m-8.684 8.632L5 2m7.762 8.048L8.835 2m5.525 0l-1.04 2.5M6 16a6 6 0 1 0 12 0a6 6 0 0 0-12 0"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <p>
                  {props.label6 ?? (
                    <Fragment>
                      <p className="features-text28">
                        Behaviorist &amp; Trainer
                      </p>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
            <div className="features-container19">
              <div className="features-mark17">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  className="features-icon24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M20.925 13.163A8.998 8.998 0 0 0 12 3a9 9 0 0 0 0 18M9 10h.01M15 10h.01"></path>
                    <path d="M9.5 15c.658.64 1.56 1 2.5 1s1.842-.36 2.5-1m.5 4l2 2l4-4"></path>
                  </g>
                </svg>
                <p>
                  {props.label7 ?? (
                    <Fragment>
                      <p className="features-text23">Mood Analyzer</p>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
            <div className="features-container20">
              <div className="features-mark18">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  className="features-icon28"
                >
                  <path
                    d="M7.7 12.177L10.698 10L7.7 7.823l-.516.72L9.188 10l-2.002 1.458zm8.6 0l.516-.72L14.814 10l2.001-1.458l-.515-.719L13.302 10zm-5.8 4.45l1.5-1.5l1.5 1.5l1.5-1.5l.975.975l.627-.627L15 13.873l-1.5 1.5l-1.5-1.5l-1.5 1.5l-1.5-1.5l-1.602 1.602l.627.627l.975-.975zM12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709M12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20"
                    fill="currentColor"
                  ></path>
                </svg>
                <p>
                  {props.label8 ?? (
                    <Fragment>
                      <p className="features-text32">Stress Level Analyzer</p>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
            <div className="features-container21">
              <div className="features-mark19">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  className="features-icon30"
                >
                  <path
                    d="M6 20q-.825 0-1.412-.587T4 18v-7.375L3 11.4q-.325.25-.737.2t-.663-.4q-.25-.325-.187-.725t.387-.65l8.975-6.9q.275-.2.588-.3t.637-.1t.638.1t.587.3L22.2 9.8q.325.25.388.65t-.188.75t-.65.388t-.75-.213L12 4.5L6 9.1V18h2.025q.425 0 .7.288T9 19t-.288.713T8 20zm8.925 1.575q-.2 0-.375-.075t-.325-.225L11.4 18.45q-.3-.3-.3-.7t.3-.7t.7-.3t.7.3l2.125 2.1l4.95-4.95q.3-.3.713-.287t.712.312t.3.7t-.3.7l-5.675 5.65q-.15.15-.325.225t-.375.075"
                    fill="currentColor"
                  ></path>
                </svg>
                <p>
                  {props.label9 ?? (
                    <Fragment>
                      <p className="features-text20">Habitat Audit</p>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
          </div>
        </header>
        <header className="features-feature3 feature">
          <h3 className="features-text14">
            {props.heading2 ?? (
              <Fragment>
                <h3 className="features-text21">Smart Pet Care Tools</h3>
              </Fragment>
            )}
          </h3>
          <p>
            {props.text2 ?? (
              <Fragment>
                <p className="features-text26">
                  AI tools for fun, urgency and more.
                </p>
              </Fragment>
            )}
          </p>
          <div className="features-container22">
            <div className="features-container23">
              <div className="features-mark20">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 36 36"
                  className="features-icon32"
                >
                  <path
                    d="M8.88 13.07a.9.9 0 0 1-.49-1.66l8.93-5.73a.9.9 0 1 1 1 1.52l-8.95 5.72a.9.9 0 0 1-.49.15"
                    fill="currentColor"
                    className="clr-i-outline clr-i-outline-path-1"
                  ></path>
                  <path
                    d="M13.25 15.11a.9.9 0 0 1-.49-1.66L18 10.08a.9.9 0 1 1 1 1.52L13.74 15a.9.9 0 0 1-.49.11"
                    fill="currentColor"
                    className="clr-i-outline clr-i-outline-path-2"
                  ></path>
                  <path
                    d="M19.72 30.23a.9.9 0 0 1-.49-1.66l8.93-5.73a.9.9 0 0 1 1 1.52l-8.96 5.73a.9.9 0 0 1-.48.14"
                    fill="currentColor"
                    className="clr-i-outline clr-i-outline-path-3"
                  ></path>
                  <path
                    d="M18.92 25.94a.9.9 0 0 1-.49-1.66l5.25-3.37a.9.9 0 1 1 1 1.51L19.4 25.8a.9.9 0 0 1-.48.14"
                    fill="currentColor"
                    className="clr-i-outline clr-i-outline-path-4"
                  ></path>
                  <path
                    d="M21.56 5.69a3.59 3.59 0 0 1 .15 3.53L18.83 15h2.25l2.43-4.87a5.61 5.61 0 0 0-5-8.14h-5.25l-1 2h6.22a3.61 3.61 0 0 1 3.08 1.7"
                    fill="currentColor"
                    className="clr-i-outline clr-i-outline-path-5"
                  ></path>
                  <path
                    d="M32.91 20.78A5.53 5.53 0 0 0 27.66 17H9.31a3.54 3.54 0 0 1-3.56-3.67a3.6 3.6 0 0 1 .42-1.54l4.26-8.49a1 1 0 1 0-1.79-.9L4.4 10.84a5.67 5.67 0 0 0-.4 4.38A5.53 5.53 0 0 0 9.28 19h7.6l-3.44 6.87a5.64 5.64 0 0 0 1.5 6.92A5.38 5.38 0 0 0 18.41 34h5.25l1-2h-6.23a3.58 3.58 0 0 1-3.22-5.21l3.9-7.79h8.54a3.42 3.42 0 0 1 2.15.71a3.57 3.57 0 0 1 1 4.43l-4.12 8.22a1 1 0 1 0 1.79.9l4.06-8.1a5.67 5.67 0 0 0 .38-4.38"
                    fill="currentColor"
                    className="clr-i-outline clr-i-outline-path-1"
                  ></path>
                  <path d="M0 0h36v36H0z" fill="none"></path>
                </svg>
                <p>
                  {props.label10 ?? (
                    <Fragment>
                      <p className="features-text25">
                        Breed &amp; Species Identifier
                      </p>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
            <div className="features-container24">
              <div className="features-mark21">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  className="features-icon40"
                >
                  <path
                    d="M12.28 19.23q1.056-.075 2.084-.337a5.8 5.8 0 0 0 2.602.168a1 1 0 0 1 .104-.008c.31 0 .717.178 1.31.553v-.616a.6.6 0 0 1 .311-.525c.258-.143.498-.31.717-.492c.864-.723 1.352-1.686 1.352-2.706a3.2 3.2 0 0 0-.159-.993c.26-.48.472-.986.627-1.51c.5.74.77 1.61.772 2.503c0 1.386-.654 2.68-1.785 3.625a6 6 0 0 1-.595.436v1.442c0 .496-.58.78-.989.486a15 15 0 0 0-1.2-.8a3 3 0 0 0-.369-.184q-.51.076-1.038.077c-1.412 0-2.717-.419-3.744-1.12m-7.466-2.885C3.03 14.854 2 12.818 2 10.64c0-4.454 4.258-8.014 9.457-8.014s9.458 3.56 9.458 8.014s-4.259 8.013-9.458 8.013q-.877 0-1.728-.133c-.245.057-1.224.631-2.635 1.648c-.51.369-1.236.013-1.236-.608V17.1a9 9 0 0 1-1.044-.754m4.95.658q.063 0 .13.01a9.5 9.5 0 0 0 1.563.128c4.392 0 7.907-2.939 7.907-6.502s-3.515-6.501-7.907-6.501c-4.39 0-7.907 2.939-7.907 6.501c0 1.723.821 3.345 2.273 4.559q.55.458 1.196.821c.241.135.39.385.39.655v1.419c1.116-.74 1.85-1.09 2.354-1.09"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M7.625 12a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m4.062 0a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m4.063.001a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5"
                    fill="currentColor"
                  ></path>
                </svg>
                <p>
                  {props.label11 ?? (
                    <Fragment>
                      <p className="features-text36">Animal Translator</p>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
            <div className="features-container25">
              <div className="features-mark22">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  className="features-icon43"
                >
                  <path
                    d="M5.017 12.5H8q.14 0 .256.07t.183.21L10 15.867l3.562-7.085q.14-.287.448-.287q.307 0 .448.287l1.86 3.719h2.665q-.183-2.742-2.2-4.621T12 6T7.217 7.879t-2.2 4.621M12 20q2.766 0 4.783-1.879t2.2-4.621H16q-.14 0-.256-.07t-.183-.21L14 10.134l-3.561 7.103q-.141.287-.448.277t-.449-.296L7.682 13.5H5.018q.183 2.742 2.2 4.621T12 20m0 1q-1.658 0-3.113-.626t-2.545-1.716t-1.716-2.546T4 13h1q0 2.9 2.05 4.95T12 20t4.95-2.05T19 13h1q0 1.658-.626 3.113t-1.716 2.545t-2.546 1.716T12 21m-8-8q0-1.658.626-3.113t1.716-2.545t2.546-1.716T12 5q1.454 0 2.812.52t2.492 1.469l1.092-1.093l.708.708l-1.092 1.092q.95 1.135 1.469 2.493T20 13h-1q0-2.9-2.05-4.95T12 6T7.05 8.05T5 13zM9.385 2.5v-1h5.23v1zM12 20q-2.9 0-4.95-2.05T5 13t2.05-4.95T12 6t4.95 2.05T19 13t-2.05 4.95T12 20m0-7"
                    fill="currentColor"
                  ></path>
                </svg>
                <p>
                  {props.label12 ?? (
                    <Fragment>
                      <p className="features-text27">Age Estimation</p>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
            <div className="features-container26">
              <div className="features-mark23">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 48 48"
                  className="features-icon45"
                >
                  <path
                    d="m15 36l6-23h6l6 23l-9 8zm6-32h6l3 2l-3 7h-6l-3-7z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <p>
                  {props.label13 ?? (
                    <Fragment>
                      <p className="features-text31">
                        Fashion &amp; Styling Advisor
                      </p>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
            <div className="features-container27">
              <div className="features-mark24">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  className="features-icon47"
                >
                  <path
                    d="M6 20q-.425 0-.712-.288T5 19t.288-.712T6 18h.6l1.975-6.575q.2-.65.738-1.037T10.5 10h3q.65 0 1.188.388t.737 1.037L17.4 18h.6q.425 0 .713.288T19 19t-.288.713T18 20zm2.7-2h6.6l-1.8-6h-3zM11 7V4q0-.425.288-.712T12 3t.713.288T13 4v3q0 .425-.288.713T12 8t-.712-.288T11 7m5.25 1.35l2.125-2.125q.275-.275.688-.288t.712.288q.275.275.275.7t-.275.7l-2.125 2.15q-.3.3-.7.3t-.7-.3t-.3-.712t.3-.713M19 13h3q.425 0 .713.288T23 14t-.288.713T22 15h-3q-.425 0-.712-.288T18 14t.288-.712T19 13M6.35 9.75L4.225 7.625q-.275-.275-.287-.687t.287-.713q.275-.275.7-.275t.7.275l2.15 2.125q.3.3.3.7t-.3.7t-.712.3t-.713-.3M2 15q-.425 0-.712-.288T1 14t.288-.712T2 13h3q.425 0 .713.288T6 14t-.288.713T5 15zm10 3"
                    fill="currentColor"
                  ></path>
                </svg>
                <p>
                  {props.label14 ?? (
                    <Fragment>
                      <p className="features-text24">
                        Nearest Emergency Center
                      </p>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
          </div>
        </header>
      </div>
      <style jsx>
        {`
          .features-features {
            width: 100%;
            height: 451px;
            display: flex;
            position: relative;
            max-width: 1200px;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            user-select: none;
            border-color: var(--dl-color-gray-900);
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
            justify-content: center;
            border-top-width: 0px;
            border-bottom-width: 0px;
          }
          .features-feature1 {
            align-items: center;
            border-color: var(--dl-color-background-primarybg);
            border-bottom-width: 0px;
          }
          .features-container10 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            width: 310px;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            border-radius: 30px;
            flex-direction: column;
            background-color: var(--dl-color-background-primarybg);
          }
          .features-container11 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .features-mark10 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .features-icon10 {
            fill: var(--dl-color-primary-tertiarydark);
            color: var(--dl-color-primary-tertiarydark);
          }
          .features-container12 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .features-mark11 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .features-icon12 {
            fill: var(--dl-color-primary-tertiarydark);
            color: var(--dl-color-primary-tertiarydark);
          }
          .features-container13 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .features-mark12 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .features-icon14 {
            fill: var(--dl-color-primary-tertiarydark);
            color: var(--dl-color-primary-tertiarydark);
          }
          .features-container14 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .features-mark13 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .features-icon16 {
            fill: var(--dl-color-primary-tertiarydark);
            color: var(--dl-color-primary-tertiarydark);
          }
          .features-container15 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .features-mark14 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .features-icon18 {
            fill: var(--dl-color-primary-tertiarydark);
            color: var(--dl-color-primary-tertiarydark);
          }
          .features-feature2 {
            align-items: center;
            border-color: var(--dl-color-gray-white);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 2px;
            border-right-width: 2px;
            border-bottom-width: 0px;
          }
          .features-container16 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            width: 310px;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            border-radius: 30px;
            flex-direction: column;
            background-color: var(--dl-color-background-primarybg);
          }
          .features-container17 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .features-mark15 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .features-icon20 {
            fill: var(--dl-color-primary-teriatery);
            color: var(--dl-color-primary-teriatery);
          }
          .features-container18 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .features-mark16 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .features-icon22 {
            fill: var(--dl-color-primary-tertiarydark);
            color: var(--dl-color-primary-tertiarydark);
          }
          .features-container19 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .features-mark17 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .features-icon24 {
            fill: var(--dl-color-primary-tertiarydark);
            color: var(--dl-color-primary-tertiarydark);
          }
          .features-container20 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .features-mark18 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .features-icon28 {
            fill: var(--dl-color-primary-tertiarydark);
            color: var(--dl-color-primary-tertiarydark);
          }
          .features-container21 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .features-mark19 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .features-icon30 {
            fill: var(--dl-color-primary-tertiarydark);
            color: var(--dl-color-primary-tertiarydark);
          }
          .features-feature3 {
            align-items: center;
            border-color: var(--dl-color-background-primarybg);
          }
          .features-container22 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            width: 310px;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            border-radius: 30px;
            flex-direction: column;
            background-color: var(--dl-color-background-primarybg);
          }
          .features-container23 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .features-mark20 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .features-icon32 {
            fill: var(--dl-color-primary-tertiarydark);
            color: var(--dl-color-primary-tertiarydark);
          }
          .features-container24 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .features-mark21 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .features-icon40 {
            fill: var(--dl-color-primary-tertiarydark);
            color: var(--dl-color-primary-tertiarydark);
          }
          .features-container25 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .features-mark22 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .features-icon43 {
            fill: var(--dl-color-primary-tertiarydark);
            color: var(--dl-color-primary-tertiarydark);
          }
          .features-container26 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .features-mark23 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .features-icon45 {
            fill: var(--dl-color-primary-tertiarydark);
            color: var(--dl-color-primary-tertiarydark);
          }
          .features-container27 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .features-mark24 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .features-icon47 {
            fill: var(--dl-color-primary-tertiarydark);
            color: var(--dl-color-primary-tertiarydark);
          }
          .features-text16 {
            color: var(--dl-color-primary-primary);
            display: inline-block;
            font-weight: 700;
          }
          .features-text17 {
            color: var(--dl-color-text-darkertext);
            display: inline-block;
            font-family: 'Poppins';
          }
          .features-text18 {
            color: var(--dl-color-primary-secondary);
            display: inline-block;
            font-size: 24px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .features-text19 {
            color: var(--dl-color-text-darkertext);
            display: inline-block;
            font-family: 'Poppins';
          }
          .features-text20 {
            color: var(--dl-color-primary-primary);
            display: inline-block;
            font-weight: 700;
          }
          .features-text21 {
            color: var(--dl-color-primary-secondary);
            display: inline-block;
            font-size: 24px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .features-text22 {
            color: var(--dl-color-primary-primary);
            display: inline-block;
            font-weight: 700;
          }
          .features-text23 {
            color: var(--dl-color-primary-primary);
            display: inline-block;
            font-weight: 700;
          }
          .features-text24 {
            color: var(--dl-color-primary-primary);
            display: inline-block;
            font-weight: 700;
          }
          .features-text25 {
            color: var(--dl-color-primary-primary);
            display: inline-block;
            font-weight: 700;
          }
          .features-text26 {
            color: var(--dl-color-text-darkertext);
            display: inline-block;
            font-family: 'Poppins';
          }
          .features-text27 {
            color: var(--dl-color-primary-primary);
            display: inline-block;
            font-weight: 700;
          }
          .features-text28 {
            color: var(--dl-color-primary-primary);
            display: inline-block;
            font-weight: 700;
          }
          .features-text29 {
            color: var(--dl-color-primary-primary);
            display: inline-block;
            font-weight: 700;
          }
          .features-text30 {
            color: var(--dl-color-primary-primary);
            display: inline-block;
            font-weight: 700;
          }
          .features-text31 {
            color: var(--dl-color-primary-primary);
            display: inline-block;
            font-weight: 700;
          }
          .features-text32 {
            color: var(--dl-color-primary-primary);
            display: inline-block;
            font-weight: 700;
          }
          .features-text33 {
            color: var(--dl-color-primary-primary);
            display: inline-block;
            font-weight: 700;
          }
          .features-text34 {
            color: var(--dl-color-primary-secondary);
            display: inline-block;
            font-size: 24px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .features-text35 {
            color: var(--dl-color-primary-primary);
            display: inline-block;
            font-weight: 700;
          }
          .features-text36 {
            color: var(--dl-color-primary-primary);
            display: inline-block;
            font-weight: 700;
          }
          .featuresroot-class-name {
            margin-top: 0Units;
            margin-bottom: 0Units;
          }
          @media (max-width: 767px) {
            .features-features {
              gap: var(--dl-space-space-oneandhalfunits);
              height: auto;
              margin-top: var(--dl-space-space-threeunits);
              border-color: #5a5a5a;
              margin-bottom: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .features-feature1 {
              width: 100%;
              padding-bottom: var(--dl-space-space-unit);
            }
            .features-text10 {
              font-size: 20px;
            }
            .features-feature2 {
              width: 100%;
              border-color: #5a5a5a;
              border-width: 0px;
              padding-bottom: var(--dl-space-space-unit);
              border-left-width: 0px;
              border-bottom-width: 1px;
            }
            .features-text12 {
              font-size: 20px;
            }
            .features-feature3 {
              width: 100%;
              padding-bottom: var(--dl-space-space-unit);
            }
            .features-text14 {
              font-size: 20px;
            }
            .features-text18 {
              font-size: 20px;
            }
            .features-text21 {
              font-size: 20px;
            }
            .features-text34 {
              font-size: 20px;
            }
          }
          @media (max-width: 479px) {
            .features-features {
              height: auto;
            }
            .features-feature2 {
              display: flex;
              border-color: var(--dl-color-gray-900);
            }
          }
        `}
      </style>
    </>
  )
}

Features.defaultProps = {
  label4: undefined,
  text: undefined,
  heading1: undefined,
  text1: undefined,
  featuresId: '',
  label9: undefined,
  heading2: undefined,
  label2: undefined,
  rootClassName: '',
  label7: undefined,
  label14: undefined,
  label10: undefined,
  text2: undefined,
  label12: undefined,
  label6: undefined,
  label1: undefined,
  label5: undefined,
  label13: undefined,
  label8: undefined,
  label3: undefined,
  heading: undefined,
  label: undefined,
  label11: undefined,
}

Features.propTypes = {
  label4: PropTypes.element,
  text: PropTypes.element,
  heading1: PropTypes.element,
  text1: PropTypes.element,
  featuresId: PropTypes.string,
  label9: PropTypes.element,
  heading2: PropTypes.element,
  label2: PropTypes.element,
  rootClassName: PropTypes.string,
  label7: PropTypes.element,
  label14: PropTypes.element,
  label10: PropTypes.element,
  text2: PropTypes.element,
  label12: PropTypes.element,
  label6: PropTypes.element,
  label1: PropTypes.element,
  label5: PropTypes.element,
  label13: PropTypes.element,
  label8: PropTypes.element,
  label3: PropTypes.element,
  heading: PropTypes.element,
  label: PropTypes.element,
  label11: PropTypes.element,
}

export default Features
