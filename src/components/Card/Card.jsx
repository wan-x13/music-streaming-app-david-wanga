import { AiFillPlayCircleIcon, CardContainer } from "./cardStyle";


const Card = ({id, name, url , uri}) => {
    return (
        <CardContainer>
           
            <img src={url }/>
            {/* <AiFillPlayCircleIcon/> */}
            <h3>{name}</h3>
            
        </CardContainer>
    );
};

export default Card;