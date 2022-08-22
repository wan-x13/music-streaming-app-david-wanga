import { useDispatch, useSelector } from "react-redux";
import { getUri } from "../../features/play";
import {SearchTrackContent } from "./searchTrackStyle";


const SearchTrack = ({id, name , url, uri , duration_ms}) => {
    const {items} = useSelector(state=>state.search)
    const dispatch = useDispatch()
    return (

   

     <SearchTrackContent
          style={{
            marginTop : "10vh"
          }}
          onClick={()=>dispatch(getUri(uri))}
        >
                <img src={url} />
                <h3>{name}</h3>

            
           
            
        </SearchTrackContent>

 
        
    );
};

export default SearchTrack;