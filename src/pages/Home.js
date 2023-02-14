import "./home.css"
import Button from "../components/Button";
import styled from 'styled-components';

const Home = () => {

    
        const Block = styled.div`
        background: rgba(222, 165, 194, 0.8);
        // height: 100vh;
        padding: 0 50px;
        p {
            color: green;
        }
    
        @media(max-width: 992px){
            background: grey;
        }
        `
        return (
            <Block>
            BITCOINNEWS
            <Button />
            <p>text</p>
            </Block>
        )
    }

 
export default Home;