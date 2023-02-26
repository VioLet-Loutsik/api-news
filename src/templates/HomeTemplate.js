import './homeTemplate.css';

const HomeTemplate = ({images}) => {
   
    return   (
        <div className="classDivHome">
            <img src={images} alt="NO IMAGE" />
        </div>
    );
};

export default HomeTemplate;