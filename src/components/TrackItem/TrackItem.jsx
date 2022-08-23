import { TrackHero, TrackItemContainer} from "./trackItemStyle";


const TrackItem = ({id,albumTrack, name, uri, duration_ms}) => {
    return (
        <TrackItemContainer>
         
         <TrackHero>
         <img src={albumTrack}/>
          <h4>{name}</h4>
         </TrackHero>
          
         

            
        </TrackItemContainer>
    );
};

export default TrackItem;