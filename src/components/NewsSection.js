import React from 'react';

const NewsSection = () => {
  return (
    <div className="new newflex">
      <h2>New</h2>
      <div className="blackBox bottomBorder">
        <h3>Hydrogen VS Electric Cars</h3>
        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
      </div>
      <div className="blackBox bottomBorder">
        <h3>The Downsides of AI Artistry</h3>
        <p>What are the possible adverse effects of on-demand AI image generation?</p>
      </div>
      <div className="blackBox">
        <h3>Is VC Funding Drying Up?</h3>
        <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
      </div>
    </div>
  );
};

export default NewsSection;
