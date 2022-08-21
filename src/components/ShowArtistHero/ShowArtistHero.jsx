import { useSelector } from "react-redux";
import { HeroContainer, HeroDescription, ShowArtistContainer } from "./showArtistHeroStyle";


const ShowArtistHero = () => {
    const {playlist1, playlist2, playlist3, playlist4} = useSelector(state=>state.playlist)

    return (
        <ShowArtistContainer>
           
            {playlist1?.map((play)=>

                <HeroContainer>
                <img src={play.images[0].url}/>
                <HeroDescription>
                    <h1>{play.name}</h1>
                    <p>{play.description}</p>
                </HeroDescription>

                </HeroContainer>
            
            )}

         

        </ShowArtistContainer>
    );
};

export default ShowArtistHero;