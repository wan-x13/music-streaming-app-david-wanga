import { TrackHero, TrackItemContainer} from "./trackItemStyle";


const TrackItem = ({id,albumTrack, name, uri, duration_ms}) => {
    return (
        <TrackItemContainer>
         
         <TrackHero>
         <img src={albumTrack}/>
          <h4>{name}</h4>
         </TrackHero>
          
          <h3>{name}</h3>
          <h3>{duration_ms}</h3>
         

            
        </TrackItemContainer>
    );
};

export default TrackItem;