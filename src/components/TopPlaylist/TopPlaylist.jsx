import { useDispatch, useSelector } from "react-redux";
import { viewPlaylistDetail } from "../../features/navigateSlice";
import { getNameOfPlaylist } from "../../features/playlistSlice";
import Loader from "../Loader/Loader";
import OvalLoader from "../Loader/OvalLoader";
import { CardContainer, CardContent, ThreeDotsContainer, TopPlaylistContainer } from "./toplaylistStyle";



const TopPlaylist = () => {

    const {playlist1, playlist2,
         playlist3, playlist4, 
        isPlaylist1, 
         isPlaylist2, isPlaylist3,
        isPlaylist4,error} = useSelector(state=>state.playlist)

console.log(isPlaylist1)
console.log(isPlaylist2)
console.log(isPlaylist3)
console.log(isPlaylist4)
console.log(error)

const isLoading = ((isPlaylist1 || isPlaylist2)||(isPlaylist3 || isPlaylist4))
     console.log(isLoading)   
    const dispatch = useDispatch()
    return (
        <TopPlaylistContainer>
              <h3>Best of Artists</h3>
             
                
                 {!isLoading && error ? <div>{error}</div> : null}
                 {isLoading ? <ThreeDotsContainer>
                         <Loader/>
                 </ThreeDotsContainer>  : 
                 
                            <CardContainer>
                 {playlist1?.length === 0 || playlist1 == undefined ?  

                 <CardContent>
                     <OvalLoader/>

                 </CardContent>
                  
                 : 
                 <CardContent   
                 key={playlist1?.[0].id}
                 id={playlist1?.[0].id}
                 uri={playlist1?.[0].uri}
                 
                 onClick={()=>{
                    dispatch(getNameOfPlaylist(playlist1?.[0].name))
                    dispatch(viewPlaylistDetail())}}
                >
                    <img src={playlist1?.[0].images[0].url}/>
                    <h4>{playlist1?.[0].name}</h4>
                </CardContent>
                 
                 }
                

           {playlist2?.length === 0 || playlist2 == undefined ? 
           <CardContent>
           <OvalLoader/>

          </CardContent> : 
             <CardContent
             key={playlist2?.[0].id}
             id={playlist2?.[0].id}
             uri={playlist2?.[0].uri}
             onClick={()=>{
               dispatch(getNameOfPlaylist(playlist2?.[0].name))
               dispatch(viewPlaylistDetail())}}
           >
               <img src={playlist2?.[0].images[0].url}/>
               <h4>{playlist2?.[0].name}</h4>
           </CardContent>

              }

             
               

             

            
            {playlist3?.length === 0  || playlist3 == undefined ? 
               <CardContent>
               <OvalLoader/>
    
              </CardContent>
              :
              <CardContent
              key={playlist3?.[0].id}
              id={playlist3?.[0].id}
              uri={playlist3?.[0].uri}
              onClick={()=>{
                  dispatch(getNameOfPlaylist(playlist3?.[0].name))
                  dispatch(viewPlaylistDetail())}}
              >
                  <img src={playlist3?.[0].images[0].url}/>
                  <h4>{playlist3?.[0].name}</h4>
              </CardContent>

            }
                  

                {playlist4?.length === 0 || playlist4 == undefined ? 
                 <CardContent>
                 <OvalLoader/>
      
                </CardContent> :
                    <CardContent
                    key={playlist4?.[0].id}
                    id={playlist4?.[0].id}
                    uri={playlist4?.[0].uri}
                    onClick={()=>{
                       dispatch(getNameOfPlaylist(playlist4?.[0].name))
                       dispatch(viewPlaylistDetail())}}
                   >
                       <img src={playlist4?.[0].images[0].url}/>
                       <h4>{playlist4?.[0].name}</h4>
                   </CardContent>
            }
                    


                            </CardContainer> }
                   

                
              

             


              

            

             


              

              
              
            
        </TopPlaylistContainer>
    );
};

export default TopPlaylist;