import "./bbcTemplate.css";

const BbcTemplate = ({ link, image, title, text, author, data }) => {
  return (
    <div className="bbcstyle">
      <a href={link} title="click for all article">
        <div className="imageBbc">
          <img src={image} alt={title} />
        </div>
        <div className="textBbc">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
        <div className="dateInfo">
          <div>{author}</div>
          <div>{data}</div>
        </div>
      </a>
    </div>
  );
};
export default BbcTemplate;
