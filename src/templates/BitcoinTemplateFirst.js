import React from "react";
import './bitcoinTemplate.css';

const BitcoinTemplateFirst = ({ link, image, title, description }) => {
  return (
    <div className="bitcoinTempFirst">
      <a href={link} title="click for all article">
        <div className="imageBitcoin">
          <img src={image} alt={title}></img>
        </div>
        <div>
          <p>{title}</p>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
};
export default BitcoinTemplateFirst;
