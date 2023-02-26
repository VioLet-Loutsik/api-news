import React from "react";
import './bitcoinTemplate.css';

const BitcoinTemplateSecond =({ image, title, description}) => {
return(
    <div className="bitcoinTempSecond">
        <div className="classImgTempSec">
            <img src={image} alt={title} />
        </div>
        <div>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    </div>
)
}

export default BitcoinTemplateSecond;