import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

const ContentList51 = (props) => {
  const [isPrivacyVisible, setIsPrivacyVisible] = useState(false)
  const [isTermsVisible, setIsTermsVisible] = useState(true)
  const [isRefundVisible, setIsRefundVisible] = useState(false)
  return (
    <>
      <div className="content-list51-container1 thq-section-padding">
        <div className="content-list51-max-width thq-flex-column thq-section-max-width">
          <div className="content-list51-container2 thq-flex-row thq-section-max-width">
            {isTermsVisible && (
              <button
                onClick={() => {
                  setIsRefundVisible(false)
                  setIsPrivacyVisible(false)
                  setIsTermsVisible(true)
                }}
                className="thq-button-filled"
              >
                <span>
                  {props.button ?? (
                    <Fragment>
                      <span className="content-list51-text108">
                        Terms of service
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            )}
            {!isTermsVisible && (
              <button
                onClick={() => {
                  setIsRefundVisible(false)
                  setIsTermsVisible(true)
                  setIsPrivacyVisible(false)
                }}
                className="thq-button-outline"
              >
                <span>
                  {props.button ?? (
                    <Fragment>
                      <span className="content-list51-text108">
                        Terms of service
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            )}
            {!isPrivacyVisible && (
              <button
                onClick={() => {
                  setIsTermsVisible(false)
                  setIsPrivacyVisible(true)
                  setIsRefundVisible(false)
                }}
                className="thq-button-outline"
              >
                <span>
                  {props.button1 ?? (
                    <Fragment>
                      <span className="content-list51-text309">
                        Privacy policy
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            )}
            {isPrivacyVisible && (
              <button
                onClick={() => {
                  setIsPrivacyVisible(true)
                  setIsTermsVisible(false)
                  setIsRefundVisible(false)
                }}
                className="thq-button-filled"
              >
                <span>
                  {props.button1 ?? (
                    <Fragment>
                      <span className="content-list51-text309">
                        Privacy policy
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            )}
          </div>
          <div className="content-list51-container3 thq-flex-column">
            {isTermsVisible && (
              <div className="content-list51-container4">
                <ul className="thq-flex-column">
                  <li className="content-list51-li1 thq-flex-column list-item">
                    <h2>
                      {props.termsHeading ?? (
                        <Fragment>
                          <h2 className="content-list51-text303 Heading thq-heading-2">
                            Terms of service
                          </h2>
                        </Fragment>
                      )}
                    </h2>
                    <span>
                      {props.termsUpdateDate ?? (
                        <Fragment>
                          <span className="content-list51-text310">
                            <span className="content-list51-text311">
                              Last update: 01.06.2024
                            </span>
                            <br></br>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      {props.termsText ?? (
                        <Fragment>
                          <span className="content-list51-text109 Content">
                            <span className="content-list51-text110">
                              1. INTRODUCTION
                            </span>
                            <br className="content-list51-text111"></br>
                            <span>
                              These Terms and Conditions (&quot;Terms&quot;)
                              govern the use of the Petvise AI application
                              (&quot;App&quot;) operated by an independent
                              developer (&quot;Developer&quot;). By accessing or
                              using the App, you agree to be bound by these
                              Terms. If you do not agree with any part of the
                              Terms, you must not use the App.
                            </span>
                            <br></br>
                            <br></br>
                            <span className="content-list51-text115">
                              2. GRANT OF LICENSE
                            </span>
                            <br className="content-list51-text116"></br>
                            <span>
                              The Developer grants you a non-exclusive,
                              non-transferable, revocable license to use the App
                              for personal pet-care purposes in accordance with
                              these Terms.
                            </span>
                            <br></br>
                            <br></br>
                            <span>​</span>
                            <br></br>
                            <br></br>
                            <span className="content-list51-text123">
                              3. USER ELIGIBILITY
                            </span>
                            <br className="content-list51-text124"></br>
                            <span>
                              Users under 18 years old may use the App only
                              under the supervision of a parent or legal
                              guardian who agrees to be bound by these Terms.
                              The parent or legal guardian is fully responsible
                              for the user&apos;s actions and compliance with
                              these Terms.
                            </span>
                            <br></br>
                            <br></br>
                            <span>
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <br></br>
                            <br></br>
                            <span className="content-list51-text131">
                              4. ACCOUNT SECURITY
                            </span>
                            <br className="content-list51-text132"></br>
                            <span>
                              - You are responsible for maintaining the
                              confidentiality of your login credentials.
                            </span>
                            <br></br>
                            <span>
                              - You agree to notify the Developer immediately of
                              any unauthorized use of your account.
                            </span>
                            <br></br>
                            <br></br>
                            <span>
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <br></br>
                            <br></br>
                            <span className="content-list51-text141">
                              5. SERVICES AND USAGE
                            </span>
                            <br className="content-list51-text142"></br>
                            <span>
                              - **Purpose:** The App provides pet-care
                              assistance, including health and wellness advice.
                            </span>
                            <br></br>
                            <span>
                              - **Content Upload:** Users may upload text,
                              images, or videos related to pet-care.
                            </span>
                            <br></br>
                            <span>
                              - **Limitations:** The App must only be used for
                              pet-care purposes. Reverse engineering the App is
                              strictly prohibited.
                            </span>
                            <br></br>
                            <span>
                              - **Availability:** Services may be interrupted
                              due to third-party provider downtime or internet
                              outages.
                            </span>
                            <br></br>
                            <span>
                              - **Prohibited Uses:** Users must not use the App
                              for illegal purposes, harm, or misuse of the App’s
                              services.
                            </span>
                            <br></br>
                            <br></br>
                            <span>
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <br></br>
                            <br></br>
                            <span className="content-list51-text157">
                              6. CONTENT OWNERSHIP AND USE
                            </span>
                            <br className="content-list51-text158"></br>
                            <span>
                              - **User Content:** Users retain the right to
                              delete their uploaded content. However, developer
                              has write to use the content through business
                              needs such as product development, analytics, and
                              promotions.
                            </span>
                            <br></br>
                            <span>
                              - **Developer Rights:** The Developer may use,
                              display, and distribute user content across
                              various platforms.
                            </span>
                            <br></br>
                            <span>
                              - **Personal Information Use:** Personal
                              information may be used for marketing,
                              remarketing, and communication purposes in
                              accordance with the Developer&apos;s security
                              measures.
                            </span>
                            <br></br>
                            <br></br>
                            <span>
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <br></br>
                            <br></br>
                            <span className="content-list51-text169">
                              7. WARRANTY DISCLAIMER
                            </span>
                            <br className="content-list51-text170"></br>
                            <span>
                              The App is provided &quot;as is&quot; without any
                              warranties, including but not limited to, implied
                              warranties of merchantability, fitness for a
                              particular purpose, and non-infringement. Users
                              should consult a professional before taking any
                              actions based on the App&apos;s recommendations.
                            </span>
                            <br></br>
                            <br></br>
                            <span>
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <br></br>
                            <br></br>
                            <span className="content-list51-text177">
                              8. LIMITATION OF LIABILITY
                            </span>
                            <br className="content-list51-text178"></br>
                            <span>
                              The Developer shall not be liable for any damages
                              arising from the use of the App, including but not
                              limited to, direct, indirect, incidental,
                              consequential, and punitive damages.
                            </span>
                            <br></br>
                            <br></br>
                            <span>
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <br></br>
                            <br></br>
                            <span className="content-list51-text185">
                              9. PROPRIETARY AND INTELLECTUAL PROPERTY RIGHTS
                            </span>
                            <br className="content-list51-text186"></br>
                            <span>
                              All intellectual property rights in the App and
                              its content are owned by the Developer.
                              Unauthorized use of these rights is prohibited.
                            </span>
                            <br></br>
                            <br></br>
                            <span>
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <br></br>
                            <br></br>
                            <span className="content-list51-text193">
                              10. THIRD-PARTY SERVICES
                            </span>
                            <br className="content-list51-text194"></br>
                            <span>
                              The App may use third-party services. Users agree
                              to comply with the terms of these third parties.
                              The Developer disclaims liability for third-party
                              content and services, including links provided by
                              AI outputs.
                            </span>
                            <br></br>
                            <br></br>
                            <span>
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <br></br>
                            <br></br>
                            <span className="content-list51-text201">
                              11. USER CONTENT RESPONSIBILITY
                            </span>
                            <br className="content-list51-text202"></br>
                            <span>
                              Users are responsible for the legality and
                              appropriateness of the content they upload. The
                              Developer may remove content that violates these
                              Terms or applicable laws. Users can report
                              inappropriate content through provided channels.
                            </span>
                            <br></br>
                            <br></br>
                            <span>
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <br></br>
                            <br></br>
                            <span className="content-list51-text209">
                              12. FORCE MAJEURE
                            </span>
                            <br className="content-list51-text210"></br>
                            <span>
                              The Developer is not liable for delays or failures
                              due to circumstances beyond their control, such as
                              natural disasters or technical issues.
                            </span>
                            <br></br>
                            <br></br>
                            <span>
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <br></br>
                            <br></br>
                            <span className="content-list51-text217">
                              13. DISPUTE RESOLUTION AND ARBITRATION
                            </span>
                            <br className="content-list51-text218"></br>
                            <span>
                              Any disputes arising out of or in connection with
                              these Terms shall be resolved through arbitration,
                              subject to the rules and procedures determined by
                              the Developer.
                            </span>
                            <br></br>
                            <br></br>
                            <span>
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <br></br>
                            <br></br>
                            <span className="content-list51-text225">
                              14. TERMINATION AND SURVIVAL
                            </span>
                            <br className="content-list51-text226"></br>
                            <span>
                              The Developer may terminate or suspend user
                              accounts for payment noncompliance or misuse of
                              the App. Upon termination, certain provisions of
                              these Terms will survive, including disclaimers
                              and limitations of liability.
                            </span>
                            <br></br>
                            <br></br>
                            <span>
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <br></br>
                            <br></br>
                            <span className="content-list51-text233">
                              15. AMENDMENTS TO TERMS
                            </span>
                            <br className="content-list51-text234"></br>
                            <span>
                              The Developer reserves the right to update this
                              Terms and Conditions at any time. The latest
                              version will be posted on
                              https://www.petvise.ai/terms-and-conditions with
                              the date of the latest update.
                            </span>
                            <br></br>
                            <br></br>
                            <span>
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <br></br>
                            <br></br>
                            <span className="content-list51-text241">
                              16. REFUND AND CANCELLATION POLICY
                            </span>
                            <br className="content-list51-text242"></br>
                            <span>
                              Refunds and cancellations are subject to
                            </span>
                            <br></br>
                            <br></br>
                            <span>
                              Refunds and cancellations are subject to the
                              policies of the App Store and Google Play Store.
                              Users should refer to these platforms for detailed
                              policies.
                            </span>
                            <br></br>
                            <br></br>
                            <span>
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <br></br>
                            <br></br>
                            <span className="content-list51-text252">
                              17. CONTACT INFORMATION
                            </span>
                            <br className="content-list51-text253"></br>
                            <span>
                              For any questions or concerns, please contact us
                              at
                              [contact@petvise.ai](mailto:contact@petvise.ai).
                            </span>
                            <br></br>
                            <br></br>
                            <span>
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <br></br>
                            <br></br>
                            <span className="content-list51-text260">
                              18. CHILDREN&apos;S PRIVACY
                            </span>
                            <br className="content-list51-text261"></br>
                            <span>
                              Users under 18 years old may use the App only
                              under the supervision of a parent or legal
                              guardian who agrees to be bound by these Terms.
                              The parent or legal guardian is fully responsible
                              for the user&apos;s actions and compliance with
                              these Terms.
                            </span>
                            <br></br>
                            <br></br>
                            <span>
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <br></br>
                            <br></br>
                            <span className="content-list51-text268">
                              19. ACCESSIBILITY COMPLIANCE
                            </span>
                            <br className="content-list51-text269"></br>
                            <span>
                              The Developer is committed to making the App
                              accessible to all users, including those with
                              disabilities. Users encountering accessibility
                              issues are encouraged to contact the Developer for
                              assistance.
                            </span>
                            <br></br>
                            <br></br>
                            <span>
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <br></br>
                            <br></br>
                            <span className="content-list51-text276">
                              20. ADVERTISING AND MARKETING REGULATIONS
                            </span>
                            <br className="content-list51-text277"></br>
                            <span>
                              The Developer adheres to applicable advertising
                              laws and regulations. All marketing practices will
                              be conducted transparently and in compliance with
                              these laws.
                            </span>
                            <br></br>
                            <br></br>
                            <span>
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <br></br>
                            <br></br>
                            <span className="content-list51-text284">
                              21. INTERNATIONAL USE
                            </span>
                            <br className="content-list51-text285"></br>
                            <span>
                              The App is intended for use worldwide. Users are
                              responsible for compliance with local laws and
                              regulations in their respective countries.
                            </span>
                            <br></br>
                            <br></br>
                            <span>
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <br></br>
                            <br></br>
                            <span className="content-list51-text292">
                              22. DATA RETENTION
                            </span>
                            <br className="content-list51-text293"></br>
                            <span>
                              User data will be retained as long as necessary to
                              fulfill the purposes outlined in these Terms. Upon
                              account termination, personal data will be
                              deleted, except for chat data, which may be
                              retained in an anonymized form for service
                              improvement.
                            </span>
                            <br></br>
                            <br></br>
                            <span>​</span>
                            <br></br>
                            <br></br>
                            <span className="content-list51-text300">
                              23. DISPUTE RESOLUTION
                            </span>
                            <br></br>
                            <span>
                              Any disputes arising out of or in connection with
                              this Privacy Policy shall be resolved through
                              binding arbitration in accordance with the rules
                              set by the arbitration service provider. If
                              arbitration is not feasible, the case will be
                              adjudicated in the courts of Türkiye.
                            </span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </li>
                </ul>
              </div>
            )}
            {isPrivacyVisible && (
              <div className="content-list51-container5">
                <ul className="thq-flex-column">
                  <li className="content-list51-li2 thq-flex-column list-item">
                    <h2>
                      {props.heading7 ?? (
                        <Fragment>
                          <h2 className="content-list51-text304 thq-heading-2">
                            Privacy Policy
                          </h2>
                        </Fragment>
                      )}
                    </h2>
                    <span>
                      {props.privacyUpdateDate ?? (
                        <Fragment>
                          <span className="content-list51-text305">
                            <span>Last update: 01.06.2024</span>
                            <br></br>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      {props.privacyContent ?? (
                        <Fragment>
                          <span className="content-list51-text313">
                            <span className="content-list51-text314">
                              1. INTRODUCTION
                            </span>
                            <br className="content-list51-text315"></br>
                            <span>
                              This Privacy Policy outlines how Petvise AI
                              (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;)
                              collects, uses, and discloses information when you
                              use our application (&quot;App&quot;). By using
                              the App, you agree to the collection and use of
                              information in accordance with this policy. This
                              policy applies to all services provided by Petvise
                              AI, including unpaid trial versions, paid
                              products, website services, apps, and subscription
                              services.
                            </span>
                            <br className="content-list51-text317"></br>
                            <br className="content-list51-text318"></br>
                            <span>
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <br className="content-list51-text320"></br>
                            <span className="content-list51-text321">
                              2. WHY WE COLLECT INFORMATION
                            </span>
                            <br className="content-list51-text322"></br>
                            <span>
                              We collect personal data to provide and improve
                              our services, respond to user inquiries, enhance
                              user experience, and communicate with users about
                              the App and related services.
                            </span>
                            <br className="content-list51-text324"></br>
                            <br className="content-list51-text325"></br>
                            <span>​</span>
                            <br className="content-list51-text327"></br>
                            <span className="content-list51-text328">
                              3. DATA COLLECTION
                            </span>
                            <br className="content-list51-text329"></br>
                            <span>
                              We collect various types of information to provide
                              and improve our services. This includes personal
                              details such as name, email, preferences, and
                              interests related to pet care, as well as
                              information about pets like species, breed, and
                              medical details. Additionally, analytics and
                              performance data are tracked by third-party
                              service providers.
                            </span>
                            <br className="content-list51-text331"></br>
                            <br className="content-list51-text332"></br>
                            <span>​</span>
                            <br className="content-list51-text334"></br>
                            <span className="content-list51-text335">
                              4. DATA USAGE
                            </span>
                            <br className="content-list51-text336"></br>
                            <span>
                              The information collected is used to provide and
                              enhance our services, conduct communications and
                              marketing activities, and perform analytics to
                              better understand App usage and user behavior.
                            </span>
                            <br className="content-list51-text338"></br>
                            <br className="content-list51-text339"></br>
                            <span>​</span>
                            <br className="content-list51-text341"></br>
                            <span className="content-list51-text342">
                              5. DATA SHARING
                            </span>
                            <br className="content-list51-text343"></br>
                            <span>
                              We may share your information with database
                              providers for secure data storage and management.
                              Service providers may also receive information to
                              facilitate communications and improve user
                              experience through targeted information. Analytics
                              providers use data to analyze App performance and
                              user behavior.
                            </span>
                            <br className="content-list51-text345"></br>
                            <br className="content-list51-text346"></br>
                            <span>​</span>
                            <br className="content-list51-text348"></br>
                            <span className="content-list51-text349">
                              6. DATA STORAGE AND SECURITY
                            </span>
                            <br className="content-list51-text350"></br>
                            <span>
                              User data is securely stored on cloud platforms
                              with robust security measures, including
                              authentication protocols and administrative
                              safeguards, to protect your information.
                            </span>
                            <br className="content-list51-text352"></br>
                            <br className="content-list51-text353"></br>
                            <span>​</span>
                            <br className="content-list51-text355"></br>
                            <span className="content-list51-text356">
                              7. USER RIGHTS
                            </span>
                            <br className="content-list51-text357"></br>
                            <span>
                              Users have the right to access and edit their
                              personal data through the App. They may use the
                              responses received for individual, non-commercial
                              purposes. Users can erase their personal data and
                              delete their accounts at any time through the
                              platform.
                            </span>
                            <br className="content-list51-text359"></br>
                            <br className="content-list51-text360"></br>
                            <span>​</span>
                            <br className="content-list51-text362"></br>
                            <span className="content-list51-text363">
                              8. COOKIES AND TRACKING TECHNOLOGIES
                            </span>
                            <br className="content-list51-text364"></br>
                            <span>
                              We use various analytics and tracking technologies
                              to monitor App usage and performance. These
                              technologies help us understand user behavior and
                              improve our services.
                            </span>
                            <br className="content-list51-text366"></br>
                            <br className="content-list51-text367"></br>
                            <span>​</span>
                            <br className="content-list51-text369"></br>
                            <span className="content-list51-text370">
                              9. INTERNATIONAL DATA TRANSFERS
                            </span>
                            <br className="content-list51-text371"></br>
                            <span>
                              User data is stored on cloud platforms and may be
                              accessed by our administrators internationally,
                              with compliance to applicable data protection
                              regulations.
                            </span>
                            <br className="content-list51-text373"></br>
                            <br className="content-list51-text374"></br>
                            <span>​</span>
                            <br className="content-list51-text376"></br>
                            <span className="content-list51-text377">
                              10. CHANGES TO THE PRIVACY POLICY
                            </span>
                            <br className="content-list51-text378"></br>
                            <span>
                              We reserve the right to update this Privacy Policy
                              at any time. The latest version will be posted on
                              https://www.petvise.ai/privacy-policy with the
                              date of the latest update.
                            </span>
                            <br className="content-list51-text380"></br>
                            <br className="content-list51-text381"></br>
                            <span>​</span>
                            <br className="content-list51-text383"></br>
                            <span className="content-list51-text384">
                              11. CONTACT INFORMATION
                            </span>
                            <br className="content-list51-text385"></br>
                            <span>
                              If you have any questions or concerns about this
                              Privacy Policy, please contact us at
                              contact@petvise.ai.
                            </span>
                            <br className="content-list51-text387"></br>
                            <br className="content-list51-text388"></br>
                            <span>​</span>
                            <br className="content-list51-text390"></br>
                            <span className="content-list51-text391">
                              12. USER CHOICES AND CONTROLS
                            </span>
                            <br className="content-list51-text392"></br>
                            <span>
                              Users can manage their communication preferences
                              and other privacy settings through the App. We
                              provide mechanisms to opt-out or unsubscribe from
                              communications.
                            </span>
                            <br className="content-list51-text394"></br>
                            <br className="content-list51-text395"></br>
                            <span>​</span>
                            <br className="content-list51-text397"></br>
                            <span className="content-list51-text398">
                              13. ACCESSING AND UPDATING YOUR INFORMATION
                            </span>
                            <br className="content-list51-text399"></br>
                            <span>
                              Users can access, review, and update their account
                              information at any time through the App. Users can
                              also close their accounts by contacting customer
                              support.
                            </span>
                            <br className="content-list51-text401"></br>
                            <br className="content-list51-text402"></br>
                            <span>​</span>
                            <br className="content-list51-text404"></br>
                            <span className="content-list51-text405">
                              14. CHILDREN&apos;S PRIVACY
                            </span>
                            <br className="content-list51-text406"></br>
                            <span>
                              Users under 18 years old may use the App only
                              under the supervision of a parent or legal
                              guardian who agrees to be bound by these Terms.
                              The parent or legal guardian is fully responsible
                              for the user&apos;s actions and compliance with
                              these Terms.
                            </span>
                            <br className="content-list51-text408"></br>
                            <br className="content-list51-text409"></br>
                            <span>​</span>
                            <br className="content-list51-text411"></br>
                            <span className="content-list51-text412">
                              15. DATA SECURITY
                            </span>
                            <br className="content-list51-text413"></br>
                            <span>
                              We use a variety of administrative, physical, and
                              technical security measures to safeguard your
                              personal information. Despite these efforts, no
                              system can guarantee complete security.
                            </span>
                            <br className="content-list51-text415"></br>
                            <br className="content-list51-text416"></br>
                            <span>​</span>
                            <br className="content-list51-text418"></br>
                            <span className="content-list51-text419">
                              16. LEGAL AND COMPLIANCE
                            </span>
                            <br className="content-list51-text420"></br>
                            <span>
                              We process personal data in accordance with
                              applicable laws and regulations, including GDPR
                              where applicable. This includes complying with
                              legal obligations, resolving disputes, and
                              enforcing our agreements.
                            </span>
                            <br className="content-list51-text422"></br>
                            <br className="content-list51-text423"></br>
                            <span>​</span>
                            <br className="content-list51-text425"></br>
                            <br className="content-list51-text426"></br>
                            <span className="content-list51-text427">
                              17. DISPUTE RESOLUTION
                            </span>
                            <br className="content-list51-text428"></br>
                            <span>
                              Any disputes arising out of or in connection with
                              this Privacy Policy shall be resolved through
                              binding arbitration in accordance with the rules
                              set by the arbitration service provider. If
                              arbitration is not feasible, the case will be
                              adjudicated in the courts of Türkiye.
                            </span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .content-list51-container1 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .content-list51-max-width {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .content-list51-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .content-list51-container3 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .content-list51-container4 {
            align-self: stretch;
            align-items: flex-start;
          }
          .content-list51-li1 {
            align-items: flex-start;
          }
          .content-list51-container5 {
            align-self: stretch;
            align-items: flex-start;
          }
          .content-list51-li2 {
            align-items: flex-start;
          }
          .content-list51-text108 {
            display: inline-block;
          }
          .content-list51-text109 {
            color: var(--dl-color-theme-neutral-dark);
            display: inline-block;
          }
          .content-list51-text110 {
            font-weight: 700;
          }
          .content-list51-text111 {
            font-weight: 700;
          }
          .content-list51-text115 {
            font-weight: 700;
          }
          .content-list51-text116 {
            font-weight: 700;
          }
          .content-list51-text123 {
            font-weight: 700;
          }
          .content-list51-text124 {
            font-weight: 700;
          }
          .content-list51-text131 {
            font-weight: 700;
          }
          .content-list51-text132 {
            font-weight: 700;
          }
          .content-list51-text141 {
            font-weight: 700;
          }
          .content-list51-text142 {
            font-weight: 700;
          }
          .content-list51-text157 {
            font-weight: 700;
          }
          .content-list51-text158 {
            font-weight: 700;
          }
          .content-list51-text169 {
            font-weight: 700;
          }
          .content-list51-text170 {
            font-weight: 700;
          }
          .content-list51-text177 {
            font-weight: 700;
          }
          .content-list51-text178 {
            font-weight: 700;
          }
          .content-list51-text185 {
            font-weight: 700;
          }
          .content-list51-text186 {
            font-weight: 700;
          }
          .content-list51-text193 {
            font-weight: 700;
          }
          .content-list51-text194 {
            font-weight: 700;
          }
          .content-list51-text201 {
            font-weight: 700;
          }
          .content-list51-text202 {
            font-weight: 700;
          }
          .content-list51-text209 {
            font-weight: 700;
          }
          .content-list51-text210 {
            font-weight: 700;
          }
          .content-list51-text217 {
            font-weight: 700;
          }
          .content-list51-text218 {
            font-weight: 700;
          }
          .content-list51-text225 {
            font-weight: 700;
          }
          .content-list51-text226 {
            font-weight: 700;
          }
          .content-list51-text233 {
            font-weight: 700;
          }
          .content-list51-text234 {
            font-weight: 700;
          }
          .content-list51-text241 {
            font-weight: 700;
          }
          .content-list51-text242 {
            font-weight: 700;
          }
          .content-list51-text252 {
            font-weight: 700;
          }
          .content-list51-text253 {
            font-weight: 700;
          }
          .content-list51-text260 {
            font-weight: 700;
          }
          .content-list51-text261 {
            font-weight: 700;
          }
          .content-list51-text268 {
            font-weight: 700;
          }
          .content-list51-text269 {
            font-weight: 700;
          }
          .content-list51-text276 {
            font-weight: 700;
          }
          .content-list51-text277 {
            font-weight: 700;
          }
          .content-list51-text284 {
            font-weight: 700;
          }
          .content-list51-text285 {
            font-weight: 700;
          }
          .content-list51-text292 {
            font-weight: 700;
          }
          .content-list51-text293 {
            font-weight: 700;
          }
          .content-list51-text300 {
            font-weight: 700;
          }
          .content-list51-text303 {
            display: inline-block;
            align-self: center;
            text-align: center;
          }
          .content-list51-text304 {
            display: inline-block;
            text-align: center;
          }
          .content-list51-text305 {
            display: inline-block;
          }
          .content-list51-text308 {
            display: inline-block;
            text-align: center;
          }
          .content-list51-text309 {
            display: inline-block;
          }
          .content-list51-text310 {
            display: inline-block;
          }
          .content-list51-text311 {
            color: var(--dl-color-theme-neutral-dark);
          }
          .content-list51-text313 {
            color: var(--dl-color-theme-neutral-dark);
            display: inline-block;
          }
          .content-list51-text314 {
            font-weight: 700;
          }
          .content-list51-text315 {
            font-weight: 700;
          }
          .content-list51-text317 {
            font-weight: 700;
          }
          .content-list51-text318 {
            font-weight: 700;
          }
          .content-list51-text320 {
            font-weight: 700;
          }
          .content-list51-text321 {
            font-weight: 700;
          }
          .content-list51-text322 {
            font-weight: 700;
          }
          .content-list51-text324 {
            font-weight: 700;
          }
          .content-list51-text325 {
            font-weight: 700;
          }
          .content-list51-text327 {
            font-weight: 700;
          }
          .content-list51-text328 {
            font-weight: 700;
          }
          .content-list51-text329 {
            font-weight: 700;
          }
          .content-list51-text331 {
            font-weight: 700;
          }
          .content-list51-text332 {
            font-weight: 700;
          }
          .content-list51-text334 {
            font-weight: 700;
          }
          .content-list51-text335 {
            font-weight: 700;
          }
          .content-list51-text336 {
            font-weight: 700;
          }
          .content-list51-text338 {
            font-weight: 700;
          }
          .content-list51-text339 {
            font-weight: 700;
          }
          .content-list51-text341 {
            font-weight: 700;
          }
          .content-list51-text342 {
            font-weight: 700;
          }
          .content-list51-text343 {
            font-weight: 700;
          }
          .content-list51-text345 {
            font-weight: 700;
          }
          .content-list51-text346 {
            font-weight: 700;
          }
          .content-list51-text348 {
            font-weight: 700;
          }
          .content-list51-text349 {
            font-weight: 700;
          }
          .content-list51-text350 {
            font-weight: 700;
          }
          .content-list51-text352 {
            font-weight: 700;
          }
          .content-list51-text353 {
            font-weight: 700;
          }
          .content-list51-text355 {
            font-weight: 700;
          }
          .content-list51-text356 {
            font-weight: 700;
          }
          .content-list51-text357 {
            font-weight: 700;
          }
          .content-list51-text359 {
            font-weight: 700;
          }
          .content-list51-text360 {
            font-weight: 700;
          }
          .content-list51-text362 {
            font-weight: 700;
          }
          .content-list51-text363 {
            font-weight: 700;
          }
          .content-list51-text364 {
            font-weight: 700;
          }
          .content-list51-text366 {
            font-weight: 700;
          }
          .content-list51-text367 {
            font-weight: 700;
          }
          .content-list51-text369 {
            font-weight: 700;
          }
          .content-list51-text370 {
            font-weight: 700;
          }
          .content-list51-text371 {
            font-weight: 700;
          }
          .content-list51-text373 {
            font-weight: 700;
          }
          .content-list51-text374 {
            font-weight: 700;
          }
          .content-list51-text376 {
            font-weight: 700;
          }
          .content-list51-text377 {
            font-weight: 700;
          }
          .content-list51-text378 {
            font-weight: 700;
          }
          .content-list51-text380 {
            font-weight: 700;
          }
          .content-list51-text381 {
            font-weight: 700;
          }
          .content-list51-text383 {
            font-weight: 700;
          }
          .content-list51-text384 {
            font-weight: 700;
          }
          .content-list51-text385 {
            font-weight: 700;
          }
          .content-list51-text387 {
            font-weight: 700;
          }
          .content-list51-text388 {
            font-weight: 700;
          }
          .content-list51-text390 {
            font-weight: 700;
          }
          .content-list51-text391 {
            font-weight: 700;
          }
          .content-list51-text392 {
            font-weight: 700;
          }
          .content-list51-text394 {
            font-weight: 700;
          }
          .content-list51-text395 {
            font-weight: 700;
          }
          .content-list51-text397 {
            font-weight: 700;
          }
          .content-list51-text398 {
            font-weight: 700;
          }
          .content-list51-text399 {
            font-weight: 700;
          }
          .content-list51-text401 {
            font-weight: 700;
          }
          .content-list51-text402 {
            font-weight: 700;
          }
          .content-list51-text404 {
            font-weight: 700;
          }
          .content-list51-text405 {
            font-weight: 700;
          }
          .content-list51-text406 {
            font-weight: 700;
          }
          .content-list51-text408 {
            font-weight: 700;
          }
          .content-list51-text409 {
            font-weight: 700;
          }
          .content-list51-text411 {
            font-weight: 700;
          }
          .content-list51-text412 {
            font-weight: 700;
          }
          .content-list51-text413 {
            font-weight: 700;
          }
          .content-list51-text415 {
            font-weight: 700;
          }
          .content-list51-text416 {
            font-weight: 700;
          }
          .content-list51-text418 {
            font-weight: 700;
          }
          .content-list51-text419 {
            font-weight: 700;
          }
          .content-list51-text420 {
            font-weight: 700;
          }
          .content-list51-text422 {
            font-weight: 700;
          }
          .content-list51-text423 {
            font-weight: 700;
          }
          .content-list51-text425 {
            font-weight: 700;
          }
          .content-list51-text426 {
            font-weight: 700;
          }
          .content-list51-text427 {
            font-weight: 700;
          }
          .content-list51-text428 {
            font-weight: 700;
          }
          @media (max-width: 479px) {
            .content-list51-container2 {
              align-items: stretch;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

ContentList51.defaultProps = {
  button: undefined,
  termsText: undefined,
  termsHeading: undefined,
  heading7: undefined,
  privacyUpdateDate: undefined,
  privacyHeading: undefined,
  button1: undefined,
  termsUpdateDate: undefined,
  privacyContent: undefined,
}

ContentList51.propTypes = {
  button: PropTypes.element,
  termsText: PropTypes.element,
  termsHeading: PropTypes.element,
  heading7: PropTypes.element,
  privacyUpdateDate: PropTypes.element,
  privacyHeading: PropTypes.element,
  button1: PropTypes.element,
  termsUpdateDate: PropTypes.element,
  privacyContent: PropTypes.element,
}

export default ContentList51
