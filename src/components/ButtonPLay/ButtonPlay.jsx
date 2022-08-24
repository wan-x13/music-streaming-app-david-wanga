import { useDispatch } from "react-redux";
import { getUri } from "../../features/play";
import { BsFillPlayFillIcon, Button} from "./buttonStyle";


const ButtonPlay = ({uri}) => {
    const dispatch = useDispatch()
    return (
        <Button
          onClick={(e)=>{
            e.stopPropagation()
            dispatch(getUri(uri))}}
        >
           <h3>Play</h3>
          <BsFillPlayFillIcon/>
            
        </Button>
    );
};

export default ButtonPlay;