import { imagesHomePage } from "../components/ImagesHomepage";
import "./home.css";
import HomeTemplate from "../templates/HomeTemplate";

// import Button from "../components/Button";
// import styled from "styled-components";

const Home = () => {
  //   const Block = styled.div`
  //     background: rgba(222, 165, 194, 0.8);
  //     // height: 100vh;
  //     padding: 0 50px;
  //     p {
  //       color: green;
  //     }

  //     @media (max-width: 992px) {
  //       background: grey;
  //     }
  //   `;

  const homeLogic = imagesHomePage.map((e) => {
    console.log(e);
    return (
    <HomeTemplate 
    images={e.images} 
    key={e.id}
    />
    );
  });

  return  (  
    <div className="homeDiv">
      <h1 className="homeTitle">NEWS from all over the world</h1>
      <div className="homeLogic">{homeLogic}</div>
      </div>
  );
  //   (
  //     <Block>
  //       BITCOINNEWS
  //       <Button />
  //       <p>text</p>
  //     </Block>
  //   );
};

export default Home;
