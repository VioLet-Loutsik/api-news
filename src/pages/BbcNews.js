import { useEffect, useState } from "react";
import BbcTemplate from "../templates/BbcTemplate";
import "./bbcNews.css";

const BbcNews = () => {
  const [news, setNews] = useState([]);
  const newsData = news.articles;
  console.log(newsData);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=f336e790be364c6b9aa26d4b0654ad56"
    )
      .then((response) => response.json())
      .then((json) => setNews(json));
  }, []);
  console.log(newsData);
  const bbcData = newsData?.map((e, i) => {
    const x = e.publishedAt;
    const data = new Date(x);
    const dataInfo =
      data.getDate(x) + "." + data.getMonth(x) + "." + data.getFullYear(x);
    // console.log(data);
    return (
      <BbcTemplate
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
    <div className="newsBlock">
      <div className="viewStyle">{bbcData}</div>
      <div className="adverticementBlock">
        <p>Here could be your advertisement</p>
      </div>
    </div>
  );
};

export default BbcNews;
