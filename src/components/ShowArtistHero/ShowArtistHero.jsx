import { useSelector } from "react-redux";
import ButtonPlay from "../ButtonPLay/ButtonPlay";
import TrackItem from "../TrackItem/TrackItem";
import { HeroContainer, HeroDescription, ShowArtistContainer } from "./showArtistHeroStyle";


const ShowArtistHero = ({images, name, description, uri, id}) => {
    const {playlist1, playlist2, playlist3, playlist4} = useSelector(state=>state.playlist)

  
 


    return (
        <ShowArtistContainer>
          

                <HeroContainer>
                <img src={images}/>
                <HeroDescription>
                    <h1>{name}</h1>
                    <p>{description}</p>
                </HeroDescription>

                </HeroContainer>
            
        
            <TrackItem/>
         <ButtonPlay
           uri={uri}
         />
         

        </ShowArtistContainer>
    );
};

export default ShowArtistHero;