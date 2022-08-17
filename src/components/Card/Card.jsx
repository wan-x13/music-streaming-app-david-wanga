import { AiFillPlayCircleIcon, CardContainer } from "./cardStyle";


const Card = (props) => {
    return (
        <CardContainer>
           
            <img src={props.url }/>
            {/* <AiFillPlayCircleIcon/> */}
            <h3>{props.name}</h3>
            
        </CardContainer>
    );
};

export default Card;