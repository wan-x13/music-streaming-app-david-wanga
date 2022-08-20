import { useSelector } from "react-redux";
import { CardContainer, CardContent, TopPlaylistContainer } from "./toplaylistStyle";



const TopPlaylist = () => {

    const {playlist1, playlist2, playlist3, playlist4} = useSelector(state=>state.playlist)
    return (
        <TopPlaylistContainer>
              <h3>Best of Artists</h3>
              <CardContainer>
                <CardContent
                 key={playlist1?.id}
                 id={playlist1?.id}
                 uri={playlist1?.uri}
                >
                    <img src={playlist1?.images[0].url}/>
                    <h4>{playlist1?.name}</h4>
                </CardContent>

                <CardContent
                 key={playlist2?.id}
                 id={playlist2?.id}
                 uri={playlist2?.uri}
                >
                    <img src={playlist2?.images[0].url}/>
                    <h4>{playlist2?.name}</h4>
                </CardContent>

                <CardContent
                 key={playlist3?.id}
                 id={playlist3?.id}
                 uri={playlist3?.uri}
                >
                    <img src={playlist3?.images[0].url}/>
                    <h4>{playlist3?.name}</h4>
                </CardContent>

                <CardContent
                 key={playlist4?.id}
                 id={playlist4?.id}
                 uri={playlist4?.uri}
                >
                    <img src={playlist4?.images[0].url}/>
                    <h4>{playlist4?.name}</h4>
                </CardContent>


              </CardContainer>

            

             


              

              
              
            
        </TopPlaylistContainer>
    );
};

export default TopPlaylist;