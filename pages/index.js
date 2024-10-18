import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Navbar from '../components/navbar'
import GetStarted from '../components/get-started'
import Features from '../components/features'
import GetStarted1 from '../components/get-started1'
import Mark from '../components/mark'
import Review from '../components/review'
import FAQ from '../components/faq'
import Section from '../components/section'

const Home = (props) => {
  return (
    <>
      <div className="home-container10">
        <Head>
          <title>
            Petvise AI - 24/7 AI Pet Care Advice for Dogs, Cats, Birds & More
          </title>
          <meta
            name="description"
            content="Get tailored pet care advice on health, diet, and behavior for dogs, cats, birds, and 9000+ breeds 24/7. Enhance your Pet Parenting with AI driven care, today."
          />
          <meta
            property="og:title"
            content="Petvise AI - 24/7 AI Pet Care Advice for Dogs, Cats, Birds &amp; More"
          />
          <meta
            property="og:description"
            content="Get expert advice, personalized care plans, and health tips for your new pet. Petvise AI provides tailored guidance for every pet in your home—whether you have cats, dogs, birds, or even reptiles!"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/1770aaad-b187-43b7-b486-e04a47c90091/148facee-5574-42d0-8c5a-423fe7f71299?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <Navbar
          imageSrc2="/Branding/logo%2Bhorizontatext.svg"
          brandingLogo="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
          rootClassName="navbarroot-class-name"
          imageAlt2="Petvise AI Logo"
        ></Navbar>
        <section className="home-section10">
          <div className="home-hero">
            <div className="home-content1">
              <main className="home-main1">
                <header className="home-header10">
                  <h1 className="home-heading10">
                    <span>
                      Ensure your pet&apos;s wellness
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="home-text101">with </span>
                    <br className="home-text102"></br>
                    <span className="home-text103">AI-driven care.</span>
                  </h1>
                  <span className="home-caption1">
                    <span className="home-text104">
                      They can&apos;t talk but technology gives them a voice. 
                    </span>
                    <br className="home-text105"></br>
                    <span className="home-text106">
                      Receive expert guidance on their health and wellness from
                      over 15 AI specialists decoding their body language. 
                    </span>
                    <br></br>
                  </span>
                </header>
                <div className="home-buttons1">
                  <GetStarted
                    text={
                      <Fragment>
                        <span className="home-text108">Download</span>
                      </Fragment>
                    }
                  ></GetStarted>
                  <a href="#Features" className="home-link1">
                    <div className="home-get-started button">
                      <span className="home-text109">Explore Features</span>
                    </div>
                  </a>
                </div>
              </main>
              <div className="home-highlight">
                <div className="home-avatars">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1490011939715-f508e6815451?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHBhcnJvdCUyMG1hbnxlbnwwfHx8fDE3Mjg5NDExMjJ8MA&amp;ixlib=rb-4.0.3&amp;w=200"
                    className="home-image10 avatar"
                  />
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1487923175910-05db1f2dacd2?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwOHx8Y2F0JTIwb3duZXJ8ZW58MHx8fHwxNzI4OTQxMDI2fDA&amp;ixlib=rb-4.0.3&amp;w=200"
                    className="home-image11 avatar"
                  />
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1513939704630-b6d4f6d389e8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI2fHxwZXQlMjBvd25lcnxlbnwwfHx8fDE3Mjg5NDA5NDF8MA&amp;ixlib=rb-4.0.3&amp;w=200"
                    className="home-image12 avatar"
                  />
                </div>
                <label className="home-caption2">
                  Loved by 5,000+ pet parents like you.
                </label>
              </div>
            </div>
            <div className="home-image13">
              <div className="home-container11">
                <div id="QRDowload-DarkMode" className="home-container12">
                  <div className="home-container13">
                    <img
                      alt="image"
                      src="/external/onelinkto_ne9s7r.svg"
                      className="home-image14"
                    />
                    <div className="home-container14">
                      <span className="home-text110">
                        Scan Here to Download
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <img
                alt="image"
                src="/Screens/home%20-%20mental-600w.webp"
                className="home-image15"
              />
            </div>
            <div className="home-image16">
              <img
                alt="image"
                src="/Screens/home%20-%20mental-600w.webp"
                className="home-image17"
              />
            </div>
          </div>
        </section>
        <section className="home-section11">
          <header className="home-header11">
            <h2 className="home-text111">
              <span>
                Got you covered for
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>all your pet care needs </span>
              <span className="home-text114">for</span>
              <span className="home-text115">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text116">
                dogs, cats, birds and 9000+ more.
              </span>
              <span className="home-text117"> </span>
            </h2>
            <span className="home-text118">
              <span>
                Get expert advice on +15 care topics, from nutrition and fitness
                to behavior and mental well-being, ensuring your pet&apos;s
                physical and mental well-being with cutting-edge AI tools
                designed for pet care. 
              </span>
              <br></br>
            </span>
          </header>
          <Features
            text={
              <Fragment>
                <span className="home-text121">AI tools for Healthy Pets.</span>
              </Fragment>
            }
            label={
              <Fragment>
                <span className="home-text122">
                  AI Vet: Diagnosis &amp; Care
                </span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="home-text123">AI Tools for Happy Pets.</span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="home-text124">
                  AI tools for fun, urgency and more.
                </span>
              </Fragment>
            }
            label1={
              <Fragment>
                <span className="home-text125">
                  Dietician &amp; Nutritionist
                </span>
              </Fragment>
            }
            label2={
              <Fragment>
                <span className="home-text126">Body Fitness Analyzer</span>
              </Fragment>
            }
            label3={
              <Fragment>
                <span className="home-text127">Dental Check-up</span>
              </Fragment>
            }
            label4={
              <Fragment>
                <span className="home-text128">Stool Analysis</span>
              </Fragment>
            }
            label5={
              <Fragment>
                <span className="home-text129">Animal Psychologist</span>
              </Fragment>
            }
            label6={
              <Fragment>
                <span className="home-text130">Behaviorist &amp; Trainer</span>
              </Fragment>
            }
            label7={
              <Fragment>
                <span className="home-text131">Mood Analyzer</span>
              </Fragment>
            }
            label8={
              <Fragment>
                <span className="home-text132">Stress Level Analyzer</span>
              </Fragment>
            }
            label9={
              <Fragment>
                <span className="home-text133">Habitat Audit</span>
              </Fragment>
            }
            heading={
              <Fragment>
                <span className="home-text134">Physically Healthy Pets</span>
              </Fragment>
            }
            label10={
              <Fragment>
                <span className="home-text135">
                  Breed &amp; Species Identifier
                </span>
              </Fragment>
            }
            label11={
              <Fragment>
                <span className="home-text136">Animal Translator</span>
              </Fragment>
            }
            label12={
              <Fragment>
                <span className="home-text137">Age Estimation</span>
              </Fragment>
            }
            label13={
              <Fragment>
                <span className="home-text138">
                  Fashion &amp; Styling Advisor
                </span>
              </Fragment>
            }
            label14={
              <Fragment>
                <span className="home-text139">Nearest Emergency Center</span>
              </Fragment>
            }
            heading1={
              <Fragment>
                <span className="home-text140">Mentally Healthy Pets</span>
              </Fragment>
            }
            heading2={
              <Fragment>
                <span className="home-text141">Smart Pet Care Tools</span>
              </Fragment>
            }
            featuresId="Features"
            rootClassName="featuresroot-class-name"
          ></Features>
          <GetStarted1
            text={
              <Fragment>
                <span className="home-text142">Try on Mobile App</span>
              </Fragment>
            }
          ></GetStarted1>
        </section>
        <section className="home-section12">
          <div className="home-note1">
            <div className="home-image18">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1415369629372-26f2fe60c467?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHNhZCUyMHBldCUyMHBhcmVudHxlbnwwfHx8fDE3Mjg5Nzk0NTN8MA&amp;ixlib=rb-4.0.3&amp;w=1200"
                loading="eager"
                className="home-image19"
              />
            </div>
            <div className="home-content2">
              <div className="home-caption3">
                <span className="home-section13 section-head">
                  with high-Tech
                </span>
              </div>
              <div className="home-heading11">
                <div className="home-header12">
                  <h2 className="home-heading12 section-heading">
                    Reliable Pet Advice, When You Need It Most
                  </h2>
                  <p className="home-paragraph1">
                    <span>
                      Being a pet parent can be overwhelming. Petvise AI keeps
                      you ahead of health and behavior issues with 24/7
                      AI-driven care. Gain peace of mind by diagnosing early and
                      accessing expert, tailored guides anytime.
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-section14">
          <header className="home-header13">
            <h2 className="home-text146">
              <span className="home-text147">
                Experience the future of pet-care.
              </span>
              <br></br>
            </h2>
            <span className="home-text149">
              Introducing the best AI-powered pet care app in the world.
            </span>
          </header>
          <section className="home-note2">
            <div className="home-image20">
              <img
                alt="image"
                src="/Screens/petvise%20-%20mockups%20(9)-300w.webp"
                className="home-image21"
              />
              <img
                alt="image"
                src="/Screens/petvise%20-%20mockups%20(11)-200w.webp"
                className="home-image22"
              />
            </div>
            <div className="home-content3">
              <div className="home-main2">
                <div className="home-caption4">
                  <span className="home-section15 section-head">
                    For your unıque needs
                  </span>
                </div>
                <div className="home-heading13">
                  <h2 className="home-heading14 section-heading">
                    <span className="home-text150">Tailored to</span>
                    <span className="home-text151"> </span>
                    <span className="home-text152">your pet   </span>
                    <span className="home-text153">and </span>
                    <span className="home-text154"> your life-style  </span>
                    <br></br>
                  </h2>
                  <p className="home-paragraph2 section-description">
                    <span>
                      Petvise AI provides advice that’s uniquely tailored to
                      your pet’s breed, age, characteristics and health
                      needs—because no two pets are alike.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Plus, the AI adjust answers based on your lifestyle,
                      whether you&apos;re an outdoorsy, a homebody, or live in a
                      small apartment. It’s a seamless experience designed for
                      both you and your pet&apos;s individual needs.
                    </span>
                    <br></br>
                    <br></br>
                  </p>
                </div>
              </div>
              <GetStarted
                text={
                  <Fragment>
                    <span className="home-text162">Get Tailored Advice</span>
                  </Fragment>
                }
              ></GetStarted>
            </div>
          </section>
          <section className="home-note3">
            <div className="home-image23">
              <img
                alt="image"
                src="/Screens/chat%20history-500h.webp"
                className="home-image24"
              />
              <img
                alt="image"
                src="/Screens/petvise%20-%20mockups%20(6)-300w.webp"
                className="home-image25"
              />
            </div>
            <div className="home-content4">
              <main className="home-main3">
                <header className="home-caption5">
                  <span className="home-section16 section-head">
                    Seamless Experience
                  </span>
                </header>
                <main className="home-heading15">
                  <header className="home-header14">
                    <h2 className="home-heading16 section-heading">
                      <span className="home-text163">
                        Advice via
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="home-text164">Image &amp; Text</span>
                      <span className="home-text165">, Save Securely</span>
                      <br></br>
                    </h2>
                    <p className="home-paragraph3 section-description">
                      <span>
                        Designed seamlessly supporting Image, text inputs —video
                        coming soon! Your chats are securely saved for easy
                        access anytime.
                      </span>
                      <br></br>
                    </p>
                  </header>
                  <div className="home-checkmarks">
                    <Mark
                      label="Duis aute irure dolor in reprehenderit"
                      label1={
                        <Fragment>
                          <span className="home-label1">
                            <span className="home-text169">
                              Ask wit Image &amp; Text Inputs.
                            </span>
                            <span className="home-text170">
                               (Video coming soon!)
                            </span>
                            <br></br>
                          </span>
                        </Fragment>
                      }
                    ></Mark>
                    <Mark
                      label="Duis aute irure dolor in reprehenderit"
                      label1={
                        <Fragment>
                          <span className="home-label2">
                            <span className="home-text172">
                              Privately &amp; Securely
                            </span>
                            <span className="home-text173">
                              {' '}
                              chats stored just for you..
                            </span>
                            <br></br>
                          </span>
                        </Fragment>
                      }
                    ></Mark>
                    <Mark
                      label="Duis aute irure dolor in reprehenderit"
                      label1={
                        <Fragment>
                          <span className="home-label3">
                            <span className="home-text175">
                              High-tech
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <span className="home-text176">
                              {' '}
                              combined with
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <span className="home-text177">
                              smooth experience.
                            </span>
                            <br></br>
                          </span>
                        </Fragment>
                      }
                    ></Mark>
                  </div>
                  <GetStarted
                    text={
                      <Fragment>
                        <span className="home-text179">Try Today</span>
                      </Fragment>
                    }
                  ></GetStarted>
                </main>
              </main>
            </div>
          </section>
        </section>
        <section className="home-section17">
          <header className="home-header15">
            <header className="home-left1">
              <span className="home-section18 section-head">Testimonials</span>
              <h2 className="home-heading17 section-heading">
                What users say about us:
              </h2>
            </header>
            <div className="home-right">
              <p className="home-paragraph4 section-description">
                <span>
                  We are making thousands of pet parents life easier. 
                </span>
                <br></br>
              </p>
            </div>
          </header>
          <main className="home-cards">
            <div className="home-container15">
              <Review
                quote='"The AI Vet feature helped me catch early signs of a health issue with my Golden Retriever before it got serious."'
                quote1={
                  <Fragment>
                    <span className="home-quote1">
                      <span>
                        &quot;The
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="home-text183">AI Dietician</span>
                      <span>
                        {' '}
                        suggested switching my Beagle’s diet to include more
                        fiber after analyzing her meal portions. It really
                        helped with her digestion issues, and
                      </span>
                      <span className="home-text185">
                        {' '}
                        I noticed remarkable increase
                      </span>
                      <span> in her energy level!&quot;</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                author1={
                  <Fragment>
                    <span className="home-author1">
                      <span>Jessica T.</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                avatarSrc="https://images.pexels.com/photos/3767378/pexels-photo-3767378.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2"
                position1={
                  <Fragment>
                    <span className="home-position1">
                      <span>Beagle Mom</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                rootClassName="reviewroot-class-name"
              ></Review>
              <Review
                quote="The Dietician &amp; Nutritionist feature recommended switching my Beagle’s diet to include more fiber after analyzing her meal portions. It really helped with her digestion issues, and I noticed a big improvement in her energy levels!"
                quote1={
                  <Fragment>
                    <span className="home-quote2">
                      <span>
                        &quot;I used the Stool Analysis for my Shih Tzu, and
                        Petvise AI flagged some early signs of digestive
                        problems. I took the advice to adjust his diet, and
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="home-text193">
                        the improvement was noticeable within a week
                      </span>
                      <span className="home-text194">!</span>
                      <span>&quot;</span>
                    </span>
                  </Fragment>
                }
                author1={
                  <Fragment>
                    <span className="home-author2">
                      <span>Samantha D.</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                avatarAlt="Shih Tzu Mom"
                avatarSrc="https://images.pexels.com/photos/20295155/pexels-photo-20295155/free-photo-of-smiling-woman-hugging-shih-tzu-dog.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2"
                position1={
                  <Fragment>
                    <span className="home-position2">Shih Tzu Mom</span>
                  </Fragment>
                }
                rootClassName="reviewroot-class-name"
              ></Review>
            </div>
            <div className="home-container16">
              <Review
                quote="The Body Fitness Analyzer is amazing! I just uploaded a photo of my cat, and it gave me BCS accurately. Super easy to use."
                quote1={
                  <Fragment>
                    <span className="home-quote3">
                      <span>
                        &quot;I tried
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="home-text199">Animal Translator</span>
                      <span>
                        {' '}
                        on my cat, and it picked up on her subtle tail flicks,
                        translating them to ‘feeling playful.’
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="home-text201">
                        Now, I know exactly when she’s in the mood for games.
                      </span>
                      <span>
                        {' '}
                        It’s so fun to see her emotions in human language!&quot;
                      </span>
                    </span>
                  </Fragment>
                }
                author1={
                  <Fragment>
                    <span className="home-author3">
                      <span>Katie R.</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                avatarAlt="woman hugging Beagle dog"
                avatarSrc="https://images.pexels.com/photos/8359657/pexels-photo-8359657.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2"
                position1={
                  <Fragment>
                    <span className="home-position3">
                      <span>Bengal Cat Mom</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                rootClassName="reviewroot-class-name"
              ></Review>
              <Review
                quote="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.”"
                quote1={
                  <Fragment>
                    <span className="home-quote4">
                      <span>
                        &quot;Petvise AI’s
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="home-text208">Habitat Audit</span>
                      <span>
                        {' '}
                        helped me optimize my Cockatiel’s cage setup. It pointed
                        out that my bird needed more perches at different
                        heights to reduce stress.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="home-text210">
                        I’ve seen such a positive change in his behavior since
                        then!
                      </span>
                      <span>&quot;</span>
                    </span>
                  </Fragment>
                }
                author1={
                  <Fragment>
                    <span className="home-author4">
                      <span>Taylor W.</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                avatarAlt="A Cockatiel Bird on Woman's hand "
                avatarSrc="https://images.pexels.com/photos/4624145/pexels-photo-4624145.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2"
                position1={
                  <Fragment>
                    <span className="home-position4">
                      <span>Cockatiel Dad</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                rootClassName="reviewroot-class-name"
              ></Review>
            </div>
            <div className="home-container17">
              <Review
                quote="I can’t believe how accurate the Breed &amp; Species Identifier is. I adopted a mixed breed from the shelter, and this app gave me insights about her traits that I didn’t even know!"
                quote1={
                  <Fragment>
                    <span className="home-quote5">
                      <span>
                        &quot;I couldn&apos;t believe how insightful the
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="home-text217">Breed Identifier</span>
                      <span>
                        {' '}
                        is. I adopted a mixed breed from the shelter, and this
                        app
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="home-text219">
                        gave me insights about her traits that I didn’t even
                        know!
                      </span>
                      <span>&quot;</span>
                    </span>
                  </Fragment>
                }
                author1={
                  <Fragment>
                    <span className="home-author5">
                      <span>Adam T.</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                avatarSrc="https://images.pexels.com/photos/5490235/pexels-photo-5490235.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2"
                position1={
                  <Fragment>
                    <span className="home-position5">
                      <span>Rescue Dog Mom</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                rootClassName="reviewroot-class-name"
              ></Review>
              <Review
                quote="“Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.”"
                quote1={
                  <Fragment>
                    <span className="home-quote6">
                      <span>&quot;</span>
                      <span className="home-text226">
                        Must-have app for all first time pet owners!
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                      <span>
                        It’s so
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="home-text230">comforting</span>
                      <span>
                        {' '}
                        to have advice for any of my puppy’s needs right at my
                        fingertips&quot;
                      </span>
                    </span>
                  </Fragment>
                }
                author1={
                  <Fragment>
                    <span className="home-author6">Alexis V.</span>
                  </Fragment>
                }
                avatarAlt="A woman with tattoos and a siamese cat on a balcony"
                avatarSrc="https://images.pexels.com/photos/28054206/pexels-photo-28054206/free-photo-of-a-woman-with-tattoos-and-a-siamese-cat-on-a-balcony.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2"
                position1={
                  <Fragment>
                    <span className="home-position6">
                      <span>Siamese Cat Mom</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                rootClassName="reviewroot-class-name"
              ></Review>
            </div>
          </main>
          <div className="home-view-more">
            <p className="home-text234">View more</p>
          </div>
        </section>
        <section className="home-section19">
          <div className="home-cube">
            <div className="home-top side"></div>
            <div className="home-front side"></div>
            <div className="home-left2 side"></div>
          </div>
          <main className="home-banner">
            <div className="home-header16">
              <span className="home-section20 section-head">Early Access</span>
              <h2 className="section-heading home-heading18">
                Join the community of caring pet parents. 
              </h2>
              <p className="home-description section-description">
                Designed with science, passion &amp; love.
              </p>
            </div>
            <div className="home-buttons2">
              <GetStarted
                text={
                  <Fragment>
                    <span className="home-text235">Download</span>
                  </Fragment>
                }
              ></GetStarted>
              <a
                href="mailto:hey@petvise.ai?subject=Petvise AI - Feedback"
                className="home-link2"
              >
                <div className="home-book-demo button">
                  <span className="home-text236">
                    <span>Give Feeback</span>
                    <br></br>
                  </span>
                </div>
              </a>
            </div>
          </main>
        </section>
        <section className="home-section21">
          <header className="home-header17">
            <span className="home-section22 section-head">FAQ</span>
            <h2 className="home-heading19 section-heading">
              Frequently asked questions
            </h2>
          </header>
          <main className="home-accordion">
            <FAQ rootClassName="fa-qroot-class-name"></FAQ>
          </main>
        </section>
        <Section
          text={
            <Fragment>
              <span className="home-text239">Download for iOS</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="home-text240">Download for Android</span>
            </Fragment>
          }
          heading={
            <Fragment>
              <span className="home-heading20 section-heading">
                <span>
                  Ditch endless search and get instant, reliable pet care advice
                  with Petvise AI.
                </span>
                <br></br>
              </span>
            </Fragment>
          }
          sectionId="Dowload"
        ></Section>
        <footer className="home-footer">
          <div className="home-content5">
            <main className="home-main-content">
              <div className="home-content6">
                <header className="home-main4">
                  <div className="home-container18">
                    <Link href="/">
                      <a className="home-link3">
                        <img
                          alt="image"
                          src="/Branding/logo%2Bhorizontatext.svg"
                          className="home-image26"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="home-socials">
                    <a
                      href="https://x.com/petvise"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link4"
                    >
                      <svg
                        width="35"
                        height="35"
                        viewBox="0 0 32 32"
                        className="home-icon1 social"
                      >
                        <path
                          d="M11.548 25.752c9.056 0 14.01-7.503 14.01-14.01c0-.213 0-.425-.015-.636A10 10 0 0 0 28 8.556a9.8 9.8 0 0 1-2.828.776a4.94 4.94 0 0 0 2.164-2.724a9.9 9.9 0 0 1-3.126 1.195a4.929 4.929 0 0 0-8.392 4.491A13.98 13.98 0 0 1 5.67 7.15a4.93 4.93 0 0 0 1.525 6.573a4.9 4.9 0 0 1-2.235-.617v.063a4.926 4.926 0 0 0 3.95 4.827a4.9 4.9 0 0 1-2.223.084a4.93 4.93 0 0 0 4.6 3.42A9.88 9.88 0 0 1 4 23.54a13.94 13.94 0 0 0 7.547 2.209"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/petvise.ai/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link5"
                    >
                      <svg
                        width="35"
                        height="35"
                        viewBox="0 0 32 32"
                        className="home-icon3 social"
                      >
                        <circle
                          r="1.44"
                          cx="22.406"
                          cy="9.594"
                          fill="currentColor"
                        ></circle>
                        <path
                          d="M16 9.838A6.162 6.162 0 1 0 22.162 16A6.16 6.16 0 0 0 16 9.838M16 20a4 4 0 1 1 4-4a4 4 0 0 1-4 4"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M16 6.162c3.204 0 3.584.012 4.849.07a6.6 6.6 0 0 1 2.228.413a3.98 3.98 0 0 1 2.278 2.278a6.6 6.6 0 0 1 .413 2.228c.058 1.265.07 1.645.07 4.85s-.012 3.583-.07 4.848a6.6 6.6 0 0 1-.413 2.228a3.98 3.98 0 0 1-2.278 2.278a6.6 6.6 0 0 1-2.228.413c-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07a6.6 6.6 0 0 1-2.228-.413a3.98 3.98 0 0 1-2.278-2.278a6.6 6.6 0 0 1-.413-2.228c-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849a6.6 6.6 0 0 1 .413-2.228a3.98 3.98 0 0 1 2.278-2.278a6.6 6.6 0 0 1 2.228-.413c1.265-.058 1.645-.07 4.849-.07M16 4c-3.259 0-3.668.014-4.948.072a8.8 8.8 0 0 0-2.912.558a6.14 6.14 0 0 0-3.51 3.51a8.8 8.8 0 0 0-.558 2.913C4.014 12.333 4 12.74 4 16s.014 3.668.072 4.948a8.8 8.8 0 0 0 .558 2.912a6.14 6.14 0 0 0 3.51 3.51a8.8 8.8 0 0 0 2.913.558c1.28.058 1.688.072 4.947.072s3.668-.014 4.948-.072a8.8 8.8 0 0 0 2.913-.558a6.14 6.14 0 0 0 3.51-3.51a8.8 8.8 0 0 0 .557-2.913C27.986 19.667 28 19.26 28 16s-.014-3.668-.072-4.948a8.8 8.8 0 0 0-.558-2.912a6.14 6.14 0 0 0-3.51-3.51a8.8 8.8 0 0 0-2.913-.557C19.667 4.013 19.26 4 16 4"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.tiktok.com/@petvise"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link6"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="home-icon7 social"
                      >
                        <path
                          d="M20.357 7.75a.537.537 0 0 0-.495-.516a4.7 4.7 0 0 1-2.415-.938a4.85 4.85 0 0 1-1.887-3.3a.54.54 0 0 0-.517-.496h-2.108a.517.517 0 0 0-.517.527v12.59a2.794 2.794 0 0 1-2.974 2.762a2.815 2.815 0 0 1-2.51-3.711A2.836 2.836 0 0 1 9.93 12.78a.506.506 0 0 0 .558-.506V9.807s-.896-.063-1.202-.063a5.27 5.27 0 0 0-4.101 1.93a5.8 5.8 0 0 0-1.37 2.52a5.86 5.86 0 0 0 2.14 6.072A5.93 5.93 0 0 0 9.591 21.5q.451 0 .896-.063A5.95 5.95 0 0 0 13.8 19.78a5.84 5.84 0 0 0 1.75-4.133V8.71a7.84 7.84 0 0 0 4.218 1.613a.517.517 0 0 0 .548-.527V7.751z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </header>
                <header className="home-categories">
                  <div className="home-category1">
                    <div className="home-header18">
                      <span className="home-text243 footer-header">
                        Content
                      </span>
                    </div>
                    <div className="home-links1">
                      <a
                        href="https://www.petvise.ai/guides"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="home-text244 footer-link"
                      >
                        Pet Care Guides
                      </a>
                      <a
                        href="https://www.petvise.ai/blog"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="home-text245 footer-link"
                      >
                        Blog
                      </a>
                    </div>
                  </div>
                  <div className="home-category2">
                    <div className="home-header19">
                      <span className="home-text246 footer-header">About</span>
                    </div>
                    <div className="home-links2">
                      <a
                        href="https://www.petvise.ai/terms-and-conditions"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="home-text247 footer-link"
                      >
                        Terms &amp; Conditions
                      </a>
                      <a
                        href="https://www.petvise.ai/privacy-policy"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="home-text248 footer-link"
                      >
                        Privacy Policy
                      </a>
                    </div>
                    <a
                      href="mailto:hey@petvise.ai?subject=Contact - Petvise AI"
                      className="home-text249 footer-link"
                    >
                      hey@petvise.ai
                    </a>
                  </div>
                </header>
              </div>
              <section className="home-copyright1">
                <span className="home-text250">
                  © 2024 RexaHub. All Rights Reserved.
                </span>
              </section>
            </main>
            <main className="home-subscribe">
              <main className="home-main5">
                <h1 className="home-heading21">Subscribe to our newsletter</h1>
                <div className="home-input-field">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="home-textinput input"
                  />
                  <div className="home-buy button">
                    <span className="home-text251">-&gt;</span>
                    <span className="home-text252">
                      <span>Subscribe now</span>
                      <br></br>
                    </span>
                  </div>
                </div>
              </main>
              <h1 className="home-notice">
                By subscribing to our newsletter you agree with our Terms and
                Conditions.
              </h1>
            </main>
            <section className="home-copyright2">
              <span className="home-text255">
                © 2022 latitude. All Rights Reserved.
              </span>
            </section>
          </div>
        </footer>
        <div>
          <div className="home-container20">
            <React.Fragment>
              <Script>{`
    /*
Accordion - Code Embed
*/

/* listenForUrlChangesAccordion() makes sure that if you changes pages inside your app,
the Accordions will still work*/

const listenForUrlChangesAccordion = () => {
      let url = location.href;
      document.body.addEventListener(
        "click",
        () => {
          requestAnimationFrame(() => {
            if (url !== location.href) {
              runAccordionCodeEmbed();
              url = location.href;
            }
          });
        },
        true
      );
    };


const runAccordionCodeEmbed = () => {
    const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
    const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
    const accordionIcons = document.querySelectorAll('[data-role="accordion-icon"]'); // All accordion icons

    accordionContents.forEach((accordionContent) => {
        accordionContent.style.display = "none"; //Hides all accordion contents
    });

    accordionContainers.forEach((accordionContainer, index) => {
        accordionContainer.addEventListener("click", () => {
            accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
            });

            accordionIcons.forEach((accordionIcon) => {
                accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
            });

            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        });
    });
}

runAccordionCodeEmbed()
listenForUrlChangesAccordion()

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
`}</Script>
            </React.Fragment>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container10 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-primary-alternate);
          }
          .home-section10 {
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-900);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: flex-start;
            border-bottom-width: 1px;
          }
          .home-hero {
            width: 100%;
            height: 688px;
            display: flex;
            max-width: 1200px;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-content1 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-end;
          }
          .home-main1 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header10 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading10 {
            color: var(--dl-color-primary-primary);
            font-size: 64px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 1.5;
          }
          .home-text101 {
            color: var(--dl-color-primary-primary);
          }
          .home-text102 {
            color: var(--dl-color-primary-alternate);
            background-color: var(--dl-color-primary-primary);
          }
          .home-text103 {
            color: var(--dl-color-primary-primary);
            background-color: var(--dl-color-primary-accent4);
          }
          .home-caption1 {
            fill: var(--dl-color-text-darkertext);
            color: var(--dl-color-text-darkertext);
            font-size: 20px;
            font-family: Poppins;
            line-height: 30px;
          }
          .home-buttons1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-text108 {
            color: var(--dl-color-background-primarybg);
            display: inline-block;
            font-size: 16px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 24px;
          }
          .home-link1 {
            display: contents;
          }
          .home-get-started {
            border-color: var(--dl-color-primary-primary);
            border-width: 2px;
            text-decoration: none;
            background-color: var(--dl-color-primary-alternate);
          }
          .home-text109 {
            color: var(--dl-color-text-darkertext);
            font-size: 16px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 24px;
          }
          .home-highlight {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-avatars {
            width: 115px;
            height: var(--dl-size-size-small);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
          }
          .home-image10 {
            left: 0px;
            position: absolute;
          }
          .home-image11 {
            left: var(--dl-space-space-twounits);
            position: absolute;
            object-fit: cover;
          }
          .home-image12 {
            left: var(--dl-space-space-fourunits);
            position: absolute;
            object-fit: cover;
          }
          .home-caption2 {
            color: var(--dl-color-text-darkertext);
            font-family: 'Poppins';
            line-height: 24px;
          }
          .home-image13 {
            top: 134px;
            right: 6px;
            width: 562px;
            height: auto;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-container11 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-self: flex-end;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: flex-start;
            border-color: var(--dl-color-primary-teriatery);
            border-style: groove;
            border-width: 2px;
            border-radius: 20px;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .home-container12 {
            flex: 0 0 auto;
            margin: 2px;
            display: flex;
            position: relative;
            align-items: center;
            border-color: var(--dl-color-primary-tertiarydark);
            border-style: groove;
            border-width: 3px;
            border-radius: 20px;
            flex-direction: column;
          }
          .home-container13 {
            flex: 0 0 auto;
            width: auto;
            margin: 10px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image14 {
            width: 120px;
            object-fit: cover;
          }
          .home-container14 {
            flex: 0 0 auto;
            width: 120px;
            height: auto;
            display: flex;
            align-items: flex-start;
            padding-top: 10px;
            justify-content: center;
          }
          .home-text110 {
            color: var(--dl-color-primary-tertiarydark);
            text-align: center;
            font-weight: 600;
          }
          .home-image15 {
            width: auto;
            height: 662px;
            margin: var(--dl-space-space-unit);
            object-fit: cover;
          }
          .home-image16 {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .home-section11 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: 0px;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: flex-start;
            background-color: var(--dl-color-background-secondarybg);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-header11 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 900px;
            margin-top: var(--dl-space-space-sixunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: center;
          }
          .home-text111 {
            color: var(--dl-color-primary-tertiarydark);
            width: 899px;
            font-size: 40px;
            font-style: normal;
            text-align: center;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 1.5;
          }
          .home-text114 {
            color: var(--dl-color-primary-tertiarydark);
          }
          .home-text115 {
            color: var(--dl-color-primary-tertiarydark);
          }
          .home-text116 {
            color: var(--dl-color-primary-tertiarydark);
            background-color: var(--dl-color-primary-accent4);
          }
          .home-text117 {
            color: var(--dl-color-primary-tertiarydark);
            background-color: var(--dl-color-primary-accent4);
          }
          .home-text118 {
            color: var(--dl-color-text-darkertext);
            text-align: center;
            font-family: 'Poppins';
            line-height: 28px;
            padding-top: 15px;
          }
          .home-text121 {
            color: var(--dl-color-text-darkertext);
            display: inline-block;
            font-family: 'Poppins';
          }
          .home-text122 {
            color: var(--dl-color-primary-primary);
            display: inline-block;
            font-weight: 700;
          }
          .home-text123 {
            color: var(--dl-color-text-darkertext);
            display: inline-block;
            font-family: 'Poppins';
          }
          .home-text124 {
            color: var(--dl-color-text-darkertext);
            display: inline-block;
            font-family: 'Poppins';
          }
          .home-text125 {
            color: var(--dl-color-primary-primary);
            display: inline-block;
            font-weight: 700;
          }
          .home-text126 {
            color: var(--dl-color-primary-primary);
            display: inline-block;
            font-weight: 700;
          }
          .home-text127 {
            color: var(--dl-color-primary-primary);
            display: inline-block;
            font-weight: 700;
          }
          .home-text128 {
            color: var(--dl-color-primary-primary);
            display: inline-block;
            font-weight: 700;
          }
          .home-text129 {
            color: var(--dl-color-primary-primary);
            display: inline-block;
            font-weight: 700;
          }
          .home-text130 {
            color: var(--dl-color-primary-primary);
            display: inline-block;
            font-weight: 700;
          }
          .home-text131 {
            color: var(--dl-color-primary-primary);
            display: inline-block;
            font-weight: 700;
          }
          .home-text132 {
            color: var(--dl-color-primary-primary);
            display: inline-block;
            font-weight: 700;
          }
          .home-text133 {
            color: var(--dl-color-primary-primary);
            display: inline-block;
            font-weight: 700;
          }
          .home-text134 {
            color: var(--dl-color-primary-secondary);
            display: inline-block;
            font-size: 24px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .home-text135 {
            color: var(--dl-color-primary-primary);
            display: inline-block;
            font-weight: 700;
          }
          .home-text136 {
            color: var(--dl-color-primary-primary);
            display: inline-block;
            font-weight: 700;
          }
          .home-text137 {
            color: var(--dl-color-primary-primary);
            display: inline-block;
            font-weight: 700;
          }
          .home-text138 {
            color: var(--dl-color-primary-primary);
            display: inline-block;
            font-weight: 700;
          }
          .home-text139 {
            color: var(--dl-color-primary-primary);
            display: inline-block;
            font-weight: 700;
          }
          .home-text140 {
            color: var(--dl-color-primary-secondary);
            display: inline-block;
            font-size: 24px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .home-text141 {
            color: var(--dl-color-primary-secondary);
            display: inline-block;
            font-size: 24px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .home-text142 {
            color: var(--dl-color-background-primarybg);
            display: inline-block;
            font-size: 16px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 24px;
          }
          .home-section12 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: center;
          }
          .home-note1 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row-reverse;
            justify-content: center;
          }
          .home-image18 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-image19 {
            width: 364px;
            height: 517px;
            align-self: flex-start;
            object-fit: cover;
            border-radius: 30px;
          }
          .home-content2 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-caption3 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-section13 {
            color: var(--dl-color-primary-teriatery);
          }
          .home-heading11 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header12 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading12 {
            color: var(--dl-color-primary-primary);
          }
          .home-paragraph1 {
            fill: var(--dl-color-text-darkertext);
            color: var(--dl-color-text-darkertext);
            font-family: Poppins;
            line-height: 28px;
          }
          .home-section14 {
            gap: var(--dl-space-space-sixunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
            background-color: var(--dl-color-background-secondarybg);
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-header13 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text146 {
            fill: var(--dl-color-primary-primary);
            color: var(--dl-color-primary-primary);
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .home-text147 {
            color: var(--dl-color-primary-tertiarydark);
          }
          .home-text149 {
            color: var(--dl-color-text-darkertext);
            font-family: 'Poppins';
            line-height: 28px;
          }
          .home-note2 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-image20 {
            flex: 1;
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: center;
          }
          .home-image21 {
            width: 222px;
            height: 448px;
            object-fit: cover;
            margin-right: 5px;
          }
          .home-image22 {
            width: 185px;
            height: 371px;
            object-fit: cover;
          }
          .home-content3 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-main2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-caption4 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-section15 {
            color: var(--dl-color-primary-tertiarydark);
          }
          .home-heading13 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading14 {
            fill: var(--dl-color-primary-secondary);
            color: var(--dl-color-primary-secondary);
          }
          .home-text150 {
            line-height: 1.5;
          }
          .home-text151 {
            line-height: 1.5;
            background-color: var(--dl-color-background-primarybg);
          }
          .home-text152 {
            line-height: 1.5;
            background-color: var(--dl-color-background-primarybg);
          }
          .home-text153 {
            line-height: 1.5;
          }
          .home-text154 {
            line-height: 1.5;
            background-color: var(--dl-color-background-primarybg);
          }
          .home-paragraph2 {
            fill: var(--dl-color-text-darkertext);
            color: var(--dl-color-text-darkertext);
          }
          .home-text162 {
            color: var(--dl-color-background-primarybg);
            display: inline-block;
            font-size: 16px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 24px;
          }
          .home-note3 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row-reverse;
            justify-content: center;
          }
          .home-image23 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-image24 {
            width: 166px;
            height: 410px;
            align-self: flex-end;
            object-fit: cover;
            margin-right: 5px;
          }
          .home-image25 {
            width: 250px;
            height: 505px;
            object-fit: cover;
          }
          .home-content4 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-main3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-caption5 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-section16 {
            color: var(--dl-color-primary-tertiarydark);
          }
          .home-heading15 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header14 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading16 {
            fill: var(--dl-color-primary-secondary);
            color: var(--dl-color-primary-secondary);
          }
          .home-text163 {
            color: var(--dl-color-primary-secondary);
          }
          .home-text164 {
            color: var(--dl-color-primary-secondary);
          }
          .home-text165 {
            color: var(--dl-color-primary-secondary);
          }
          .home-paragraph3 {
            color: var(--dl-color-text-darkertext);
          }
          .home-checkmarks {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-label1 {
            color: var(--dl-color-primary-primary);
            display: inline-block;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 24px;
          }
          .home-text169 {
            color: var(--dl-color-primary-secondary);
            font-weight: 700;
          }
          .home-text170 {
            color: var(--dl-color-primary-secondary);
          }
          .home-label2 {
            color: var(--dl-color-primary-primary);
            display: inline-block;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 24px;
          }
          .home-text172 {
            color: var(--dl-color-primary-secondary);
            font-weight: 700;
          }
          .home-text173 {
            color: var(--dl-color-primary-secondary);
          }
          .home-label3 {
            color: var(--dl-color-primary-primary);
            display: inline-block;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 24px;
          }
          .home-text175 {
            color: var(--dl-color-primary-secondary);
            font-weight: 700;
          }
          .home-text176 {
            color: var(--dl-color-primary-secondary);
          }
          .home-text177 {
            color: var(--dl-color-primary-secondary);
            font-weight: 700;
          }
          .home-text179 {
            color: var(--dl-color-background-primarybg);
            display: inline-block;
            font-size: 16px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 24px;
          }
          .home-section17 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            border-color: var(--dl-color-gray-900);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
            border-top-width: 0px;
          }
          .home-header15 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-left1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-section18 {
            color: var(--dl-color-primary-tertiarydark);
          }
          .home-heading17 {
            color: var(--dl-color-primary-primary);
          }
          .home-right {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-paragraph4 {
            color: var(--dl-color-text-darkertext);
            text-align: center;
          }
          .home-cards {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-threeunits);
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: row;
            grid-template-columns: auto auto auto;
          }
          .home-container15 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            flex-direction: column;
          }
          .home-quote1 {
            color: rgb(204, 204, 204);
            display: inline-block;
            font-size: 18px;
            font-family: 'Poppins';
            line-height: 25px;
          }
          .home-text183 {
            font-weight: 700;
          }
          .home-text185 {
            font-weight: 700;
          }
          .home-author1 {
            color: rgb(255, 255, 255);
            display: inline-block;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .home-position1 {
            color: rgb(204, 204, 204);
            display: inline-block;
            font-size: 14px;
            font-family: Poppins;
            line-height: 20px;
          }
          .home-quote2 {
            color: rgb(204, 204, 204);
            display: inline-block;
            font-size: 18px;
            font-family: 'Poppins';
            line-height: 25px;
          }
          .home-text193 {
            font-weight: 700;
          }
          .home-text194 {
            font-weight: 700;
          }
          .home-author2 {
            color: rgb(255, 255, 255);
            display: inline-block;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .home-position2 {
            color: rgb(204, 204, 204);
            display: inline-block;
            font-size: 14px;
            font-family: 'Poppins';
            line-height: 20px;
          }
          .home-container16 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            flex-direction: column;
          }
          .home-quote3 {
            color: rgb(204, 204, 204);
            display: inline-block;
            font-size: 18px;
            font-family: 'Poppins';
            line-height: 25px;
          }
          .home-text199 {
            font-weight: 700;
          }
          .home-text201 {
            font-weight: 700;
          }
          .home-author3 {
            color: rgb(255, 255, 255);
            display: inline-block;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .home-position3 {
            color: rgb(204, 204, 204);
            display: inline-block;
            font-size: 14px;
            font-family: Poppins;
            line-height: 20px;
          }
          .home-quote4 {
            color: rgb(204, 204, 204);
            display: inline-block;
            font-size: 18px;
            font-family: 'Poppins';
            line-height: 25px;
          }
          .home-text208 {
            font-weight: 700;
          }
          .home-text210 {
            font-weight: 700;
          }
          .home-author4 {
            color: rgb(255, 255, 255);
            display: inline-block;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .home-position4 {
            color: rgb(204, 204, 204);
            display: inline-block;
            font-size: 14px;
            font-family: Poppins;
            line-height: 20px;
          }
          .home-container17 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            flex-direction: column;
          }
          .home-quote5 {
            color: rgb(204, 204, 204);
            display: inline-block;
            font-size: 18px;
            font-family: 'Poppins';
            line-height: 25px;
          }
          .home-text217 {
            font-weight: 700;
          }
          .home-text219 {
            font-weight: 700;
          }
          .home-author5 {
            color: rgb(255, 255, 255);
            display: inline-block;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .home-position5 {
            color: rgb(204, 204, 204);
            display: inline-block;
            font-size: 14px;
            font-family: Poppins;
            line-height: 20px;
          }
          .home-quote6 {
            color: rgb(204, 204, 204);
            display: inline-block;
            font-size: 18px;
            font-family: 'Poppins';
            line-height: 25px;
          }
          .home-text226 {
            font-weight: 700;
          }
          .home-text230 {
            font-weight: 700;
          }
          .home-author6 {
            color: rgb(255, 255, 255);
            display: inline-block;
            font-size: 16px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .home-position6 {
            color: rgb(204, 204, 204);
            display: inline-block;
            font-size: 14px;
            font-family: Poppins;
            line-height: 20px;
          }
          .home-view-more {
            gap: var(--dl-space-space-oneandhalfunits);
            cursor: pointer;
            display: none;
            transition: 0.3s;
            align-items: center;
            border-color: #80ff44;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
            border-bottom-width: 1px;
          }
          .home-view-more:hover {
            opacity: 0.5;
          }
          .home-text234 {
            color: rgb(128, 255, 68);
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-section19 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: center;
          }
          .home-cube {
            top: 20px;
            left: 0px;
            width: 120px;
            height: 120px;
            display: flex;
            position: absolute;
            transform: rotateX(240deg) rotateY(25deg) rotateZ(-110deg);
            align-items: center;
            flex-direction: column;
            justify-content: center;
            transform-style: preserve-3d;
          }
          .home-top {
            transform: translateZ(-120px);
            background-image: linear-gradient(
              270deg,
              rgb(253, 253, 253) 0%,
              rgb(178, 178, 178) 100%
            );
          }
          .home-front {
            transform: rotateX(90deg);
            background: grey;
            background-image: linear-gradient(
              90deg,
              rgb(247, 247, 247) 0%,
              rgb(203, 203, 203) 100%
            );
            transform-origin: bottom;
          }
          .home-left2 {
            width: 120px;
            transform: translateZ(-120px) rotateY(90deg);
            background-image: linear-gradient(
              90deg,
              rgb(247, 247, 247) 0%,
              rgb(203, 203, 203) 100%
            );
            transform-origin: right;
          }
          .home-banner {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            z-index: 50;
            max-width: 1200px;
            align-items: center;
            border-radius: 20px;
            justify-content: space-between;
            background-color: #292929;
          }
          .home-header16 {
            gap: var(--dl-space-space-unit);
            width: 564px;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-section20 {
            color: var(--dl-color-primary-tertiarydark);
          }
          .home-description {
            font-size: 20px;
            line-height: 30px;
          }
          .home-buttons2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-text235 {
            color: var(--dl-color-background-primarybg);
            display: inline-block;
            font-size: 16px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 24px;
          }
          .home-link2 {
            display: contents;
          }
          .home-book-demo {
            display: flex;
            text-decoration: none;
            background-color: #ffffff;
          }
          .home-text236 {
            color: rgb(12, 16, 12);
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
            white-space: nowrap;
          }
          .home-section21 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            border-color: var(--dl-color-gray-700);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
            background-color: var(--dl-color-background-secondarybg);
            border-top-width: 1px;
          }
          .home-header17 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-section22 {
            fill: var(--dl-color-primary-teriatery);
            color: var(--dl-color-primary-teriatery);
          }
          .home-heading19 {
            fill: var(--dl-color-primary-secondary);
            color: var(--dl-color-primary-secondary);
          }
          .home-accordion {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-text239 {
            color: #ffffff;
            display: inline-block;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .home-text240 {
            color: rgb(255, 255, 255);
            display: inline-block;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .home-heading20 {
            display: inline-block;
          }
          .home-footer {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .home-content5 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-main-content {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-content6 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-main4 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-container18 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .home-link3 {
            display: contents;
          }
          .home-image26 {
            width: 180px;
            height: 53px;
            object-fit: cover;
            text-decoration: none;
          }
          .home-socials {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-link4 {
            display: contents;
          }
          .home-icon1 {
            fill: var(--dl-color-text-darkertext);
            color: var(--dl-color-text-darkertext);
            text-decoration: none;
          }
          .home-link5 {
            display: contents;
          }
          .home-icon3 {
            fill: var(--dl-color-text-darkertext);
            color: var(--dl-color-text-darkertext);
            text-decoration: none;
          }
          .home-link6 {
            display: contents;
          }
          .home-icon7 {
            fill: var(--dl-color-text-darkertext);
            color: var(--dl-color-text-darkertext);
            text-decoration: none;
          }
          .home-categories {
            gap: var(--dl-space-space-fourunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .home-category1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header18 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text243 {
            color: var(--dl-color-primary-primary);
          }
          .home-links1 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text244 {
            color: var(--dl-color-text-secondarytext);
            text-decoration: none;
          }
          .home-text245 {
            color: var(--dl-color-text-secondarytext);
            text-decoration: none;
          }
          .home-category2 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 175px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header19 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text246 {
            color: var(--dl-color-primary-primary);
          }
          .home-links2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text247 {
            color: var(--dl-color-text-secondarytext);
            text-decoration: none;
          }
          .home-text248 {
            color: var(--dl-color-text-secondarytext);
            text-decoration: none;
          }
          .home-text249 {
            color: var(--dl-color-text-secondarytext);
            text-decoration: none;
          }
          .home-copyright1 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text250 {
            fill: var(--dl-color-text-darkertext);
            color: var(--dl-color-text-darkertext);
            font-size: 14px;
            text-align: left;
            font-family: 'Poppins';
            line-height: 21px;
          }
          .home-subscribe {
            gap: var(--dl-space-space-unit);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-main5 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading21 {
            fill: var(--dl-color-primary-primary);
            color: var(--dl-color-primary-primary);
            font-size: 20px;
            max-width: 275px;
            font-style: normal;
            text-align: left;
            font-weight: 500;
            line-height: 30px;
          }
          .home-input-field {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            border-radius: 50px;
            flex-direction: row;
            justify-content: center;
            background-color: #292929;
          }
          .home-textinput {
            flex: 1;
            color: #ffffff;
            height: 24px;
            line-height: 24px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            outline-style: none;
            background-color: rgba(217, 217, 217, 0);
          }
          .home-buy {
            display: flex;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-primary-tertiarydark);
          }
          .home-text251 {
            color: rgb(12, 16, 12);
            display: none;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .home-text252 {
            fill: var(--dl-color-primary-alternate);
            color: var(--dl-color-primary-alternate);
            display: flex;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .home-notice {
            fill: var(--dl-color-text-darkertext);
            color: var(--dl-color-text-darkertext);
            font-size: 14px;
            max-width: 400px;
            font-style: normal;
            text-align: left;
            font-weight: 400;
            line-height: 21px;
          }
          .home-copyright2 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: none;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text255 {
            color: #c4c4c4;
            width: 100%;
            font-size: 14px;
            font-family: Poppins;
            line-height: 21px;
          }
          .home-container20 {
            display: contents;
          }
          @media (max-width: 991px) {
            .home-section10 {
              height: auto;
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-hero {
              gap: var(--dl-space-space-fourunits);
              flex: 1;
              position: relative;
              max-width: auto;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .home-content1 {
              position: relative;
              align-items: center;
            }
            .home-main1 {
              align-items: center;
            }
            .home-heading10 {
              text-align: left;
            }
            .home-caption1 {
              text-align: left;
            }
            .home-buttons1 {
              width: 100%;
            }
            .home-get-started {
              flex: 1;
            }
            .home-highlight {
              width: 100%;
              flex-direction: column;
            }
            .home-image13 {
              right: 0px;
              display: none;
              position: absolute;
              flex-direction: column;
            }
            .home-image16 {
              width: 100%;
              display: flex;
              align-items: flex-end;
              flex-direction: column;
            }
            .home-image17 {
              width: 600px;
            }
            .home-text111 {
              text-align: center;
            }
            .home-section12 {
              padding-top: 0px;
            }
            .home-note1 {
              flex-direction: column-reverse;
            }
            .home-content2 {
              margin: var(--dl-space-space-twounits);
            }
            .home-text146 {
              text-align: center;
            }
            .home-section17 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-cards {
              grid-template-columns: auto;
            }
            .home-container17 {
              display: none;
            }
            .home-view-more {
              display: flex;
              border-color: #cccccc;
            }
            .home-text234 {
              color: #cccccc;
              font-style: normal;
              font-weight: 500;
              line-height: 24px;
            }
            .home-banner {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
              justify-content: center;
            }
            .home-buttons2 {
              width: 100%;
              flex-direction: column;
            }
            .home-book-demo {
              width: 100%;
            }
            .home-content5 {
              gap: var(--dl-space-space-threeunits);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-copyright1 {
              display: none;
            }
            .home-copyright2 {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .home-content1 {
              gap: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading10 {
              font-size: 40px;
            }
            .home-caption1 {
              color: rgb(255, 255, 255);
              font-size: 16px;
              font-family: Poppins;
              line-height: 24px;
            }
            .home-text104 {
              color: var(--dl-color-text-primarytext);
            }
            .home-text105 {
              color: var(--dl-color-text-primarytext);
            }
            .home-text106 {
              color: var(--dl-color-text-primarytext);
            }
            .home-get-started {
              display: none;
            }
            .home-caption2 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-image17 {
              width: var(--dl-size-size-xlarge);
              height: auto;
              align-self: center;
            }
            .home-section11 {
              height: auto;
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-header11 {
              margin-top: var(--dl-space-space-fourunits);
            }
            .home-text111 {
              width: auto;
              font-size: 32px;
              text-align: center;
            }
            .home-text134 {
              font-size: 20px;
            }
            .home-text140 {
              font-size: 20px;
            }
            .home-text141 {
              font-size: 20px;
            }
            .home-image19 {
              flex: 1;
            }
            .home-content2 {
              width: 100%;
              margin: var(--dl-space-space-threeunits);
            }
            .home-heading12 {
              color: var(--dl-color-primary-primary);
              text-align: center;
            }
            .home-paragraph1 {
              text-align: center;
              line-height: 24px;
            }
            .home-section14 {
              gap: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text146 {
              font-size: 32px;
              text-align: center;
            }
            .home-note2 {
              flex-direction: column-reverse;
            }
            .home-image20 {
              margin: var(--dl-space-space-twounits);
            }
            .home-note3 {
              flex-direction: column-reverse;
            }
            .home-image23 {
              margin: var(--dl-space-space-twounits);
            }
            .home-section17 {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-banner {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-content6 {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .home-main4 {
              gap: var(--dl-space-space-twounits);
            }
            .home-categories {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .home-text252 {
              color: rgb(12, 16, 12);
              font-size: 16px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
              line-height: 24px;
            }
          }
          @media (max-width: 479px) {
            .home-header10 {
              align-items: flex-start;
            }
            .home-heading10 {
              width: 422px;
              max-width: 100%;
              text-align: center;
            }
            .home-caption1 {
              color: rgb(255, 255, 255);
              font-size: 16px;
              text-align: center;
              line-height: 24px;
            }
            .home-text104 {
              color: var(--dl-color-text-darkertext);
            }
            .home-text105 {
              color: var(--dl-color-text-darkertext);
            }
            .home-text106 {
              color: var(--dl-color-text-darkertext);
            }
            .home-image17 {
              width: var(--dl-size-size-large);
              height: auto;
              align-self: center;
            }
            .home-section11 {
              padding-top: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-header11 {
              margin-top: var(--dl-space-space-fourunits);
            }
            .home-image19 {
              width: 100%;
              height: var(--dl-size-size-xxlarge);
            }
            .home-section13 {
              color: var(--dl-color-primary-teriatery);
            }
            .home-heading12 {
              text-align: left;
            }
            .home-paragraph1 {
              text-align: left;
            }
            .home-section14 {
              padding-top: var(--dl-space-space-fourunits);
            }
            .home-text149 {
              color: var(--dl-color-text-darkertext);
              text-align: center;
              font-family: Poppins;
              line-height: 28px;
            }
            .home-image20 {
              margin: var(--dl-space-space-twounits);
            }
            .home-heading14 {
              width: 100%;
              text-align: left;
            }
            .home-text150 {
              color: var(--dl-color-primary-secondary);
              line-height: 1.5;
            }
            .home-text151 {
              color: var(--dl-color-primary-secondary);
              line-height: 1.5;
              background-color: var(--dl-color-background-primarybg);
            }
            .home-text152 {
              color: var(--dl-color-primary-secondary);
              line-height: 1.5;
              background-color: var(--dl-color-background-primarybg);
            }
            .home-text153 {
              color: var(--dl-color-primary-secondary);
              line-height: 1.5;
            }
            .home-text154 {
              color: var(--dl-color-primary-secondary);
              line-height: 1.5;
              background-color: var(--dl-color-background-primarybg);
            }
            .home-paragraph2 {
              text-align: left;
            }
            .home-image23 {
              padding: var(--dl-space-space-twounits);
            }
            .home-heading16 {
              text-align: left;
            }
            .home-paragraph3 {
              text-align: left;
            }
            .home-heading17 {
              color: var(--dl-color-primary-primary);
              text-align: center;
            }
            .home-header16 {
              width: 336px;
            }
            .home-heading18 {
              width: 335px;
              padding-left: 4px;
            }
            .home-book-demo {
              width: auto;
              padding: var(--dl-space-space-unit);
            }
            .home-textinput {
              flex: 1;
            }
            .home-text251 {
              color: rgb(12, 16, 12);
              display: flex;
              font-size: 24px;
              font-style: normal;
              font-family: Inter;
              font-weight: 700;
              line-height: 24px;
              white-space: nowrap;
            }
            .home-text252 {
              color: rgb(12, 16, 12);
              display: none;
              font-size: 24px;
              font-style: normal;
              font-family: Inter;
              font-weight: 700;
              line-height: 24px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
