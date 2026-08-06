import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { TypeAnimation } from 'react-type-animation';
import { useWindowSize } from "@react-hook/window-size/throttled";
import BannertxtR from './BannertxtR';
import ContactForm from '../contact/ContactForm';

function handleButtonClick() {
  const element = document.getElementById('Contactform');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

function handleButtonClick1() {
  const element = document.getElementById('ServicesOne');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

function Bannertxt() {
  const [width] = useWindowSize({ fps: 60 });
  const breakpoint = 600;

  if (width > breakpoint) {
    return (
      <>
        <div>
          <Row>
            <Col xl={8} md={6}>
              <div className="bannertxthero">
                <div className="banner-heading">

                  {/* Line-by-line typing animation */}
                  <TypeAnimation
                    sequence={[
                      'Over 2500+ Satisfied Clients Were Served in the Year 2025',
                      1500,
                      '',
                      500,
                      '25,000+ Corporate Gifts Delivered Pan-India in 2025',
                      1500,
                      '',
                      500,
                    ]}
                    speed={40}
                    deletionSpeed={60}
                    wrapper="h2"
                    repeat={Infinity}
                    cursor={true}
                  />

                </div>

                <div className="btntxt-hero-btn">
                  <div className="btnContainerdiv">
                    <Button className="heroBtn" onClick={handleButtonClick1}>
                      Our Services
                    </Button>
                  </div>

                  <div className="btnContainerdiv">
                    <Button className="heroBtn" onClick={handleButtonClick}>
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>
            </Col>

            <Col xl={4} md={6}>
              <div className="hero-form">
                <ContactForm />
              </div>
            </Col>
          </Row>
        </div>
      </>
    );
  }

  return (
    <>
      <BannertxtR />
    </>
  );
}

export default Bannertxt;


// import React from 'react'
// import { Button, Col, Row } from 'react-bootstrap'
// import { TypeAnimation } from 'react-type-animation';
// import { useWindowSize } from "@react-hook/window-size/throttled";
// // import ContactForm from "@/components/ContactPage copy/ContactForm";
// // import ServicesOne from "@/components/ServicesOne/ServicesOne";
// import BannertxtR from './BannertxtR';
// import ContactForm from '../contact/ContactForm';

// function handleButtonClick() {
//   const element = document.getElementById('Contactform');
//   element.scrollIntoView({ behavior: 'smooth' });
// }

// function handleButtonClick1() {
//   const element = document.getElementById('ServicesOne');
//   element.scrollIntoView({ behavior: 'smooth' });
// }



// function Bannertxt() {
//   const [width, height] = useWindowSize({ fps: 60 });
//   const breakpoint = 600;



//   if (width > breakpoint) {
//     return (

//       <>
//         <div>
//           <Row>
//             <Col xl={8} md={6}>
//               <div className="bannertxthero">
//                 <div className="banner-heading">
//                   <TypeAnimation
//                     sequence={['Over a 2500+ Satisfied Clients were Served in the Year 2025.  ', 1000, '']}
//                     speed={25}
//                     deletionSpeed={99}
//                     wrapper="h2"
//                     repeat={Infinity}
//                   />
//                 </div>

//                 <div className="btntxt-hero-btn">
//                   <div className="btnContainerdiv">
//                     <Button className="heroBtn" onClick={handleButtonClick1} >Our Services</Button>
//                     {/* {!<ServicesOne />} */}
//                   </div>
//                   <div className="btnContainerdiv">
//                     <Button className="heroBtn" onClick={handleButtonClick} >Contact Us</Button>
//                     {/* {!<ContactForm />} */}
//                   </div>
//                 </div>
//               </div>
//             </Col>
//             <Col xl={4} md={6}>
//               <div className="hero-form">
//                 <ContactForm />
//               </div>
//             </Col>
//           </Row>
//         </div>
//       </>
//     )
//   }
//   return (

//     <>
//       <BannertxtR />
//     </>
//   )
// }

// export default Bannertxt;



