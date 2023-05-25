import React from 'react';

const HeroSection = () => {
  return (
    <>
      <img className="bigImgDesk" src="images/image-web-3-desktop.jpg" alt="" />
      <img className="bigImgMobile" src="images/image-web-3-mobile.jpg" alt="" />

      <div className="BrightFuture BrightFuture2">
        <h1>The Bright Future of Web 3.0?</h1>
      </div>
      <div className="smalltext BrightFuture2">
        <div className="smalltextp">
          <p>We dive into the next evolution of the web that claims to put the power back into the hands of the people. But is it really fulfilling its promise?</p>
        </div>
        <div className="button">
          <button>READ MORE</button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
