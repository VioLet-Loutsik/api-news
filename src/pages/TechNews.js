import { useEffect, useState } from "react";
import TechTemplate from "../templates/TechTemplate";
import "./techNews.css";

const TechNews = () => {
  const [technews, settechNews] = useState([]);
  const newsData = technews.articles;
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=f336e790be364c6b9aa26d4b0654ad56"
    )
      .then((response) => response.json())
      .then((json) => settechNews(json));
  }, []);
  console.log(newsData);
  const techData = newsData?.map((e, i) => {
    const x = e.publishedAt;
    const data = new Date(x);
    const dataInfo =
      data.getDate(x) + "." + data.getMonth(x) + "." + data.getFullYear(x);
    // console.log(data);
    return (
      <TechTemplate
        key={i}
        link={e.url}
        image={e.urlToImage}
        title={e.title}
        text={e.description}
        author={e.author}
        data={dataInfo}
      />
    );
  });

  return (
    <div className="techBlock">
      <div className="viewStyle">{techData}</div>
      <div className="adverticementBlock">
        <p>Here could be your advertisement</p>
      </div>
    </div>
  );
};

export default TechNews;
