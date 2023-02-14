import React from "react";

const BitcoinTemplate = ({ link, image, title, description,  name, data }) => {
  return (
    <div className="bitcoinStyle">
      <a href={link} title="click to read">
        <div>
          <img src={image} alt={title} />
        </div>
        <div>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
        <div>
            <div>{name}</div>
            <div>{data}</div>
        </div>
      </a>
    </div>
  );
};

export default BitcoinTemplate;
