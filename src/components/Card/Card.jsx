import { AiFillPlayCircleIcon, CardContainer } from "./cardStyle";
import siaPhoto from "../../assets/sia2.webp"

const Card = () => {
    return (
        <CardContainer>
           
            <img src={siaPhoto}/>
            {/* <AiFillPlayCircleIcon/> */}
            <h3>Unstoppable</h3>
            
        </CardContainer>
    );
};

export default Card;