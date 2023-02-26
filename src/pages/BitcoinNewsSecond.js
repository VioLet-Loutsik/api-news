import { useEffect, useState } from "react";
import React from "react";
import BitcoinTemplateSecond from "../templates/BitcoinTemplateSecond";

import "./bitcoinNews.css";

const BitcoinNewsSecond = () => {
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
  const bitDataSecond = newsbit?.map((e, i) => {
 if (i > 1 && i < 6) {
      return (
        <BitcoinTemplateSecond
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
      <div className="classSecond">{bitDataSecond}</div>
    </>
  );
};

export default BitcoinNewsSecond;
