import { useDispatch } from "react-redux";
import { getUri } from "../../features/play";
import { AiFillPlayCircleIcon, CardContainer } from "./cardStyle";


const Card = ({id, name, url , uri}) => {

    const dispatch = useDispatch()
  
    
    return (
        <CardContainer
          onClick={()=>dispatch(getUri(uri))}
          >
           
            <img src={url }/>
            {/* <AiFillPlayCircleIcon/> */}
            <h3>{name}</h3>
            
        </CardContainer>
    );
};

export default Card;