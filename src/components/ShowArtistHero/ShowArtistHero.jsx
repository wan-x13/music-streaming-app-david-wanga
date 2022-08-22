import { useSelector } from "react-redux";
import ButtonPlay from "../ButtonPLay/ButtonPlay";
import TrackItem from "../TrackItem/TrackItem";
import { HeroContainer, HeroDescription, ShowArtistContainer } from "./showArtistHeroStyle";


const ShowArtistHero = () => {
    const {playlist1, playlist2, playlist3, playlist4} = useSelector(state=>state.playlist)

    const {items} = playlist1[0].tracks

    
    const trackItem  = items.map(({track})=>(track)).map(({album, id, name, duration_ms , uri})=>{
                 
                    let image = []
                    let nameTrack ;
                 if(album){
                    const {images, name} = album
                   image = [...images]
                   nameTrack = name
                 }
        return {...image, nameTrack, id, name, duration_ms, uri}
    })
   
    console.log(trackItem)


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
            <TrackItem/>
         <ButtonPlay/>
         

        </ShowArtistContainer>
    );
};

export default ShowArtistHero;