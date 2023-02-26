import { useEffect, useState } from "react";
import React from "react";
import BitcoinTemplateTop from "../templates/BitcoinTemplateFirst";

import "./bitcoinNews.css";

const BitcoinNewsFirst = () => {
  const [bit, setBit] = useState([]);
  const newsbit = bit.articles;
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=f336e790be364c6b9aa26d4b0654ad56"
    )
      .then((response) => response.json())
      .then((json) => setBit(json));
  }, []);
  console.log(newsbit);
  const bitData = newsbit?.map((e, i) => {
    if (i === 1) {
      return (
        <BitcoinTemplateTop
          key={i}
          link={e.url}
          image={e.urlToImage}
          title={e.title}
          description={e.description}
        />
      );
    } 
  });
  return (
    <>
      <div className="classFirst">{bitData}</div>
    </>
  );
};

export default BitcoinNewsFirst;
