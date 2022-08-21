import { useDispatch, useSelector } from "react-redux";
import { viewPlaylistDetail } from "../../features/navigateSlice";
import { CardContainer, CardContent, TopPlaylistContainer } from "./toplaylistStyle";



const TopPlaylist = () => {

    const {playlist1, playlist2, playlist3, playlist4} = useSelector(state=>state.playlist)
    const dispatch = useDispatch()
    return (
        <TopPlaylistContainer>
              <h3>Best of Artists</h3>
              <CardContainer>
                <CardContent
                 key={playlist1[0]?.id}
                 id={playlist1[0]?.id}
                 uri={playlist1[0]?.uri}
                 onClick={()=>dispatch(viewPlaylistDetail())}
                >
                    <img src={playlist1[0]?.images[0].url}/>
                    <h4>{playlist1[0]?.name}</h4>
                </CardContent>

                <CardContent
                  key={playlist2[0]?.id}
                  id={playlist2[0]?.id}
                  uri={playlist2[0]?.uri}
                  onClick={()=>dispatch(viewPlaylistDetail())}
                >
                    <img src={playlist2[0]?.images[0].url}/>
                    <h4>{playlist2[0]?.name}</h4>
                </CardContent>

                <CardContent
                key={playlist3[0]?.id}
                id={playlist3[0]?.id}
                uri={playlist3[0]?.uri}
                onClick={()=>dispatch(viewPlaylistDetail())}
                >
                    <img src={playlist3[0]?.images[0].url}/>
                    <h4>{playlist3[0]?.name}</h4>
                </CardContent>

                <CardContent
                 key={playlist4[0]?.id}
                 id={playlist4[0]?.id}
                 uri={playlist4[0]?.uri}
                 onClick={()=>dispatch(viewPlaylistDetail())}
                >
                    <img src={playlist4[0]?.images[0].url}/>
                    <h4>{playlist4[0]?.name}</h4>
                </CardContent>


              </CardContainer>

            

             


              

              
              
            
        </TopPlaylistContainer>
    );
};

export default TopPlaylist;