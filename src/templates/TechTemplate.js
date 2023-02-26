import "./techTemplate.css";

const TechTemplate = ({ link, image, title, text, author, data }) => {
  return (
    <div>
      <a href={link} title="click for all article">
        <div className="imageTech">
          <img src={image} alt={title} />
        </div>
        <div className="textTech">
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
export default TechTemplate;
