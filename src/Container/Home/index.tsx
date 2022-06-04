import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Carouselmulti from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "react-bootstrap/Card";
import { gsap } from "gsap";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Ticker = ({ className, ...rest }:any) => {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <CountUp {...rest} start={viewPortEntered ? null : 0}>
      {({ countUpRef }:any) => {
        return (
          <VisibilitySensor
            active={!viewPortEntered}
            onChange={(isVisible:any) => {
              if (isVisible) {
                setViewPortEntered(true);
              }
            }}
            delayedCall
          >
            <h4 className={className} ref={countUpRef} />
          </VisibilitySensor>
        );
      }}
    </CountUp>
  );
};



type Props = {};
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const SecondaryTitle = () => {
  const elOne: any = useRef(null);
  const elTwo: any = useRef(null);
  const elThree: any = useRef(null);

  useEffect(() => {
    gsap
      .timeline()
      .to(elOne.current, {
        y: "-50",
        duration: 0.5,
        autoAlpha: 1,
        delay: 2,
      })
      .to(elTwo.current, {
        y: "-50",
        duration: 0.5,
        autoAlpha: 1,
      })
      .to(elThree.current, {
        y: "-50",
        duration: 0.5,
        autoAlpha: 1,
      });
  }, []);

  return (
    <div className="usp mrg-50">
      <div className="container px-4" id="featured-3">
        <div className="row g-4 row-cols-1 row-cols-lg-3">
          <div
            className="feature col"
            style={{ visibility: "hidden" }}
            ref={elOne}
          >
            <h2 className="secondary_title">Perfect Design</h2>
            <p>
              Duis autem vel eum iriure dolor in hendrerit in vul velit esse
              molestie consequat, vel illum
            </p>
          </div>
          <div
            className="feature col"
            style={{ visibility: "hidden" }}
            ref={elTwo}
          >
            <h2 className="secondary_title">Web Development</h2>
            <p>
              Duis autem vel eum iriure dolor in hendrerit in vul velit esse
              molestie consequat, vel illum
            </p>
          </div>
          <div
            className="feature col"
            style={{ visibility: "hidden" }}
            ref={elThree}
          >
            <h2 className="secondary_title">Android &amp; IOS</h2>
            <p>
              Duis autem vel eum iriure dolor in hendrerit in vul velit esse
              molestie consequat, vel illum
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const H1SlideImg4 = () => {
  const img4: any = useRef(null);

  useEffect(() => {
    gsap.to(img4.current, { duration: 1.5, scale: 1.5 });
  });

  return (
    <div className="imagestar">
      <img
        src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/07/h1-slide-img-4.png"
        alt="First slide"
        height="500px"
        ref={img4}
        width="500px"
      />
    </div>
  );
};

const SlideBackGroundImage = ({ alt, src, className }: { alt?: string, src?: string, className?:string }) => {
  const img1: any = useRef(null);

  useEffect(() => {
    gsap.to(img1.current, { autoAlpha: 1 });
    gsap.to(img1.current, { duration: 25, scale: 1.2, delay: 0.1 });
  }, []);

  return  <div className="main_banner_img" 
  ref={img1}
  style={{ visibility: "hidden" ,  height:"100%",  backgroundImage: `url(https://alecta.qodeinteractive.com/wp-content/uploads/2017/07/${src}` }} />
}

export default function Home({ }: Props) {
  let [state, setState] = useState(0);
  const elIdentity: any = useRef(null);
  const elWebsite: any = useRef(null);
  const elWeborder: any = useRef(null);
  const elMarketing: any = useRef(null);


  const slideElBanner1One: any = useRef(null);
  const slideElBanner1Two: any = useRef(null);
  const slideElBanner1Tree: any = useRef(null);
  const slideElBanner1img: any = useRef(null);

  const slideElBanner2One: any = useRef(null);
  const slideElBanner2Two: any = useRef(null);
  const slideElBanner2Tree: any = useRef(null);

  useEffect(() => {
    gsap
      .timeline().to(slideElBanner1img.current, {duration: 0.9, delay: 0.8, autoAlpha: 1 })
  }, [state]);

  useEffect(() => {
    gsap
      .timeline().to(slideElBanner2Tree.current, { delay: 0.8, scale: 1.5, autoAlpha: 1 })
  }, [state]);

  useEffect(() => {
    gsap
      .timeline().to(slideElBanner1One.current, { x: -50, delay: 0.8, autoAlpha: 1 })
      .to(slideElBanner1Two.current, { x: -50, autoAlpha: 1 })
      .to(slideElBanner1Tree.current, { x: -50, autoAlpha: 1 })
  }, [state]);

  useEffect(() => {
    gsap
      .timeline().to(slideElBanner2One.current, { x: -50, delay: 0.8, autoAlpha: 1 })
      .to(elWeborder.current, { x: -50, autoAlpha: 1 })
      .to(slideElBanner2Two.current, { x: -50, autoAlpha: 1 })
  }, [state]);

  useEffect(() => {
    gsap
      .timeline()
      .to(elIdentity.current, {
        x: -20,
        duration: 0.5,
        delay: 0.4,

        autoAlpha: 1,
      })
      .to(elWebsite.current, { x: 50, duration: 0.5, autoAlpha: 1 })
      .to(elMarketing.current, { x: -50, duration: 0.5, autoAlpha: 1 })
      
  }, [state]);

  return (
    <div>
      <Carousel
        onSlide={(currenttab) => {
          setState(currenttab);
        }}
      >
        <Carousel.Item>
          {state === 0 && (
           <>
             <SlideBackGroundImage
                  alt="First slide"
                  src="h1-slide-img-1.jpg"
                />
            <div className="zoom">
                <img
                  src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/07/h1-slide-img-2.png"
                  alt="First slide"
                  height={50}
                  width={50}
                  
                />
              </div>
              </>
          )}

          {state === 0 && (
            <Carousel.Caption>              
              <div className="main_caption main_new_caption">
                <div className="container">
                <H1SlideImg4 />
                <h2 className="banner_title banner_titles pb-5">
                  <span
                    className="fw-bold"
                    style={{ visibility: "hidden" }}
                    ref={elIdentity}
                  >
                    Identity
                  </span>{" "}
                  <span
                    className="yellow ms-1"
                    style={{ visibility: "hidden" }}
                    ref={elWebsite}
                  >
                    Website &amp;
                  </span>{" "}
                  <span
                    className="red fw-light"
                    style={{ visibility: "hidden" }}
                    ref={elMarketing}
                  >
                    Marketing
                  </span>
                </h2>
              </div>
              </div>
              <div className="zoom1">
                <img
                  // className="d-block w-1"
                  src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/07/h1-slide-img-3.png"
                  alt="First slide"
                  style={{
                    width: "115.454px",
                    height: "115.454px",
                    transition: "none 0s ease 0s",
                    textAlign: "inherit",
                    lineHeight: "0px",
                    borderWidth: "0px",
                    margin: "0px",
                    padding: "0px",
                  }}
                />
              </div>
              <SecondaryTitle />
            </Carousel.Caption>
          )}
        </Carousel.Item>

        <Carousel.Item>
          {state === 1 && (
           <>
              <SlideBackGroundImage
                  alt="Second slide"
                  src="h1-slide2-img-1.jpg"
                />              
            <div className="animateBar">
                <img
                  src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/07/h1-slide2-img-2.png"
                  alt="First slide"
                  ref={slideElBanner1img}
                style={{ visibility: "hidden" }}
                />
              </div>
              </>
          )}

          {state === 1 && (
            <Carousel.Caption>
              <div className="main_caption">
                <div className="container">
                <H1SlideImg4 />
                  <div className="banner_titles">
                    <h3 className="banner_title fw-bold lh-1">
                      <span ref={slideElBanner1One} style={{ visibility: "hidden" }} > Branding <br />
                        Is Our <br />
                      </span>
                      <span ref={slideElBanner1Two} style={{ visibility: "hidden" }} className="yellow">Specialty</span>
                    </h3>
                    <hr style={{ visibility: "hidden" }}
                        ref={elWeborder}/>
                    <p ref={slideElBanner1Tree} style={{ visibility: "hidden" }}  >
                      Fum iriure dolor in hendrerit in vul velit esse molestie
                      consequat, vel illum dolore eu fer feugiat nulla facilisis at
                      vero eros et accumsan et iusto odio
                    </p>
                  </div>
                </div>
              </div>
              <SecondaryTitle />
            </Carousel.Caption>
          )}{" "}
        </Carousel.Item>
        <Carousel.Item>
          {state === 2 && (
          <>
               <SlideBackGroundImage
                  alt="Third slide"
                  src="h1-slide3-img-1.jpg"
                />              
            </>
          )}
          {state === 2 && (
            <Carousel.Caption>
              <div className="main_caption">
                <div className="container">
                  <H1SlideImg4  />
                  <div className="banner_titles">
                    <h3  ref={slideElBanner2One} style={{ visibility: "hidden" }} className="banner_title  lh-1 fw-bold">
                      Everything <br />
                      Around <br />
                      <span className="yellow">Us is Design</span>
                    </h3>
                    <hr style={{ visibility: "hidden" }}
                        ref={elWeborder}/>
                    <p ref={slideElBanner2Two} style={{ visibility: "hidden" }}>
                      Fum iriure dolor in hendrerit in vul velit esse molestie
                      consequat, vel illum dolore eu fer feugiat nulla facilisis at
                      vero eros et accumsan et iusto odio
                    </p>
                  </div>
                  <div className="animateSlide">
                    <img src={"https://alecta.qodeinteractive.com/wp-content/uploads/2017/07/h1-slide3-img-2.png"}
                      ref={slideElBanner2Tree}
                      style={{ visibility: "hidden" }}
                      width ="206px"
                      height= "206px" />
                  </div>
                </div>
              </div>              
              <SecondaryTitle />
            </Carousel.Caption>
          )}
        </Carousel.Item>
      </Carousel>
      <section className="usp">
        <div className="container px-4 py-5" id="featured-3">
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div className="feature col">
              <p>
                <span className="bread">01 </span>
                <span className="crumb">Digital </span>
              </p>
              <h2 className="teritarial_title">
                Nibh euismod tincid ut laoreet dolore magna
              </h2>
              <p>
                Paragraph of text beneath the heading to explain the heading.
                We'll add onto it with another sentence and probably just keep
                going until we run out of words.
              </p>
            </div>
            <div className="feature col">
              <p>
                <span className="bread">02 </span>
                <span className="crumb">BRANDING </span>
              </p>
              <h2 className="teritarial_title">
                Nibh euismod tincid ut laoreet dolore magna
              </h2>
              <p>
                Paragraph of text beneath the heading to explain the heading.
                We'll add onto it with another sentence and probably just keep
                going until we run out of words.
              </p>
            </div>
            <div className="feature col">
              <p>
                <span className="bread">03 </span>
                <span className="crumb">MARKETING </span>
              </p>
              <h2 className="teritarial_title">
                Nibh euismod tincid ut laoreet dolore magna
              </h2>
              <p>
                Paragraph of text beneath the heading to explain the heading.
                We'll add onto it with another sentence and probably just keep
                going until we run out of words.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio py-5 pb-0">
        <div className="container-fluid py-5 pb-0">
          <div className="text-center py-5 pt-0">
            <h2 className="primary_title border_bottom">Our Awesome Work</h2>
            <p className="subtitle">
              Fum iriure dolor in hendrerit in vul velit esse molestie
              consequat, vel illum dolore eu fer
              <br /> feugiat nulla facilisis at vero eros et accumsan et iusto
            </p>
          </div>

          <div className="row">
            <Card className="col-xs-1 col-sm-2 col-md-3 col-lg-3 border-0 p-0">
              <Card.Img
                src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/06/h1-p1.jpg"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <div className="overlay_content">
                  <Card.Title className="secondary_title">Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </div>
              </Card.ImgOverlay>
            </Card>
            <Card className="col-xs-1 col-sm-2 col-md-3 col-lg-3 border-0 p-0">
              <Card.Img
                src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/06/h1-p2.jpg"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <div className="overlay_content">
                  <Card.Title className="secondary_title">Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </div>
              </Card.ImgOverlay>
            </Card>
            <Card className="col-xs-1 col-sm-2 col-md-3 col-lg-3 border-0 p-0">
              <Card.Img
                src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/06/h1-p3.jpg"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <div className="overlay_content">
                  <Card.Title className="secondary_title">Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </div>
              </Card.ImgOverlay>
            </Card>
            <Card className="col-xs-1 col-sm-2 col-md-3 col-lg-3 border-0 p-0">
              <Card.Img
                src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/06/h1-p4.jpg"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <div className="overlay_content">
                  <Card.Title className="secondary_title">Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </div>
              </Card.ImgOverlay>
            </Card>
            <Card className="col-xs-1 col-sm-2 col-md-3 col-lg-3 border-0 p-0">
              <Card.Img
                src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/06/h1-p5.jpg"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <div className="overlay_content">
                  <Card.Title className="secondary_title">Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </div>
              </Card.ImgOverlay>
            </Card>
            <Card className="col-xs-1 col-sm-2 col-md-3 col-lg-3 border-0 p-0">
              <Card.Img
                src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/06/h1-p6.jpg"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <div className="overlay_content">
                  <Card.Title className="secondary_title">Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </div>
              </Card.ImgOverlay>
            </Card>
            <Card className="col-xs-1 col-sm-2 col-md-3 col-lg-3 border-0 p-0">
              <Card.Img
                src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/06/h1-p7.jpg"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <div className="overlay_content">
                  <Card.Title className="secondary_title">Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </div>
              </Card.ImgOverlay>
            </Card>
            <Card className="col-xs-1 col-sm-2 col-md-3 col-lg-3 border-0 p-0">
              <Card.Img
                src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/06/h1-p8.jpg"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <div className="overlay_content">
                  <Card.Title className="secondary_title">Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </div>
              </Card.ImgOverlay>
            </Card>
          </div>
        </div>
      </section>
      <section id="services">
        <div className="container px-4 py-5" id="icon-grid">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4 py-5">
            <div className="col d-flex align-items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.75em"
                height="1.75em"
                fill="currentColor"
                className="bi bi-hdd-fill text-muted flex-shrink-0 me-3"
                viewBox="0 0 16 16"
              >
                <path d="M0 10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-1zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM.91 7.204A2.993 2.993 0 0 1 2 7h12c.384 0 .752.072 1.09.204l-1.867-3.422A1.5 1.5 0 0 0 11.906 3H4.094a1.5 1.5 0 0 0-1.317.782L.91 7.204z" />
              </svg>
              <div>
                <h4 className="fw-bold mb-0">Perfect Design</h4>
                <p>
                  Duis autem vel eum iriure dolor in hendrerit in vul velit esse
                  molestie consequat vel
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.75em"
                height="1.75em"
                fill="currentColor"
                className="bi bi-star  text-muted flex-shrink-0 me-3"
                viewBox="0 0 16 16"
              >
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
              </svg>
              <div>
                <h4 className="fw-bold mb-0">Easy &amp; Fun</h4>
                <p>
                  Duis autem vel eum iriure dolor in hendrerit in vul velit esse
                  molestie consequat vel
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.75em"
                height="1.75em"
                fill="currentColor"
                className="bi bi-sd-card text-muted flex-shrink-0 me-3"
                viewBox="0 0 16 16"
              >
                <path d="M6.25 3.5a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2zm2 0a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2zm2 0a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2zm2 0a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2z" />
                <path
                  fillRule="evenodd"
                  d="M5.914 0H12.5A1.5 1.5 0 0 1 14 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5V3.914c0-.398.158-.78.44-1.06L4.853.439A1.5 1.5 0 0 1 5.914 0zM13 1.5a.5.5 0 0 0-.5-.5H5.914a.5.5 0 0 0-.353.146L3.146 3.561A.5.5 0 0 0 3 3.914V14.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-13z"
                />
              </svg>
              <div>
                <h4 className="fw-bold mb-0">Retina Ready</h4>
                <p>
                  Duis autem vel eum iriure dolor in hendrerit in vul velit esse
                  molestie consequat vel
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.75em"
                height="1.75em"
                fill="currentColor"
                className="bi bi-chat flex-shrink-0 me-3"
                viewBox="0 0 16 16"
              >
                <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
              </svg>
              <div>
                <h4 className="fw-bold mb-0">Easy to Customize</h4>
                <p>
                  Duis autem vel eum iriure dolor in hendrerit in vul velit esse
                  molestie consequat vel
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.75em"
                height="1.75em"
                fill="currentColor"
                className="bi bi-camera text-muted flex-shrink-0 me-3"
                viewBox="0 0 16 16"
              >
                <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
              </svg>
              <div>
                <h4 className="fw-bold mb-0">Translation Ready</h4>
                <p>
                  Duis autem vel eum iriure dolor in hendrerit in vul velit esse
                  molestie consequat vel
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.75em"
                height="1.75em"
                fill="currentColor"
                className="bi bi-hdd-network text-muted flex-shrink-0 me-3"
                viewBox="0 0 16 16"
              >
                <path d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM3 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8.5v3a1.5 1.5 0 0 1 1.5 1.5h5.5a.5.5 0 0 1 0 1H10A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5H.5a.5.5 0 0 1 0-1H6A1.5 1.5 0 0 1 7.5 10V7H2a2 2 0 0 1-2-2V4zm1 0v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1zm6 7.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5z" />
              </svg>
              <div>
                <h4 className="fw-bold mb-0">Inventive Elements</h4>
                <p>
                  Duis autem vel eum iriure dolor in hendrerit in vul velit esse
                  molestie consequat vel
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="counters py-5">
      <div className="container">
          <div   className="row py-5 text-center">
            <div className="col-sm-2 col-md-3">
              <Ticker className="counter" end={223} />
              <br />
              <h4>Layouts</h4>
            </div>
            <div className="col-sm-2 col-md-3">
              <Ticker className="counter" end={68} />
              <br />
              <h4>Projects</h4>
            </div>
            <div className="col-sm-2 col-md-3">
              <Ticker className="counter" end={827} />
              <br />
              <h4>Cups of Coffee</h4>
            </div>
            <div className="col-sm-2 col-md-3">
              <Ticker className="counter" end={14} />
              <br />
              <h4>Awards</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="imagine">
        <div className="container py-5">
          <div className="d-flex align-items-center">
            <div className="flex-grow-1 ms-3">
              <h2 className="primary_title border_bottom">
                Imagine <br />
                And Create
              </h2>
              <h3 className="subtitle">
                Eleifend option congue nihil imperdiet doming id quod mazim
                placerat facer possim assum
              </h3>
              <p>
                Facilisis at vero eros et accumsan et iusto odio dignissim qui
                blandit praesent luptatum zzril delenit augue duis dolore te
                feugait nulla facilisi.eum iriure dolor in hendrerit in vul
                velit esse molestie cons{" "}
              </p>
              <button
                type="button"
                className="btn btn-danger btn-lg rounded-pill"
              >
                Purchase
              </button>
            </div>
            <div className="flex-shrink-0 position-relative">
              {/* <div className="position-absolute"><img src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/06/h1-slide2-4.jpg" alt="Third slide" /></div> */}
              <img
                src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/06/h1-slide2-3.png"
                alt=""
              />
              {/* <div className="position-absolute"><img src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/06/h1-slide2-2.png" alt="Third slide" /></div>
        <div className="position-absolute"><img src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/06/h1-slide2-1.png" alt="Third slide" /></div> */}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="d-flex align-items-center bg-light">
          <div className="flex-shrink-0 position-relative w-50">
            <img
              src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/06/h1-image1.jpg"
              alt=""
              className="w-100"
            />
          </div>
          <div className="flex-grow-1 ms-3 bg-light text-center w-50">
            <h2 className="primary_title border_bottom">Awesome Work</h2>
            <h3 className="subtitle mb-4">
              Eleifend option congue nihil imperdiet doming id quod mazim
              placerat facer possim assum
            </h3>
            <button
              type="button"
              className="btn btn-danger btn-lg rounded-pill"
            >
              Purchase
            </button>
          </div>
        </div>
      </section>
      <section className="py-5" id="clinets">
        <div className="container">
          <Carouselmulti responsive={responsive} arrows={false}>
            <div>
              <img src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/06/client-1b.png" />
            </div>
            <div>
              <img src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/06/client-2b.png" />
            </div>
            <div>
              <img src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/06/client-3b.png" />
            </div>
            <div>
              <img src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/06/client-4b.png" />
            </div>
            <div>
              <img src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/06/client-5b.png" />
            </div>
            <div>
              <img src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/06/client-6b.png" />
            </div>
            <div>
              <img src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/06/client-7b.png" />
            </div>
          </Carouselmulti>
        </div>
      </section>
      <section className="usp bg-light">
        <div className="container px-4 py-5" id="featured-3">
          <div className="text-center py-5 pt-0">
            <h2 className="primary_title border_bottom">Our News</h2>
            <p className="subtitle">
              Fum iriure dolor in hendrerit in vul velit esse molestie
              consequat, vel illum dolore eu fer
              <br /> feugiat nulla facilisis at vero eros et accumsan et iusto
            </p>
          </div>
          <div className="row g-4 row-cols-1 row-cols-lg-3">
            <div className="feature col">
              <p>
                <span className="bread">CORPORATE</span>
                <span className="crumb">JUNE 14, 2017</span>
              </p>
              <h2 className="teritarial_title">
                Detraxit intellegat susci pianturium usu id simultus
              </h2>
              <p>
                Lorem ipsum dolor sit amet, ei ubique petentium vix, molestiae
                intellegebat per ad. Possim blandit persequeris ea vis, an mea
                duis partiendo, libris electram efficiantur no sit. Ius erat
                postulant at.{" "}
              </p>
            </div>
            <div className="feature col">
              <p>
                <span className="bread">CORPORATE</span>
                <span className="crumb">JUNE 14, 2017</span>
              </p>
              <h2 className="teritarial_title">
                Sea ea meis forensibus accommodare no veri
              </h2>
              <p>
                Lorem ipsum dolor sit amet, ei ubique petentium vix, molestiae
                intellegebat per ad. Possim blandit persequeris ea vis, an mea
                duis partiendo, libris electram efficiantur no sit. Ius erat
                postulant at.{" "}
              </p>
            </div>
            <div className="feature col">
              <p>
                <span className="bread">CORPORATE</span>
                <span className="crumb">JUNE 14, 2017</span>
              </p>
              <h2 className="teritarial_title">
                Consul equidem medio cremustum mea eu ut
              </h2>
              <p>
                Lorem ipsum dolor sit amet, ei ubique petentium vix, molestiae
                intellegebat per ad. Possim blandit persequeris ea vis, an mea
                duis partiendo, libris electram efficiantur no sit. Ius erat
                postulant at.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
