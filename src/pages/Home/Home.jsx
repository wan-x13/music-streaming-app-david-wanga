
import NavBar from "../../components/NavBar/NavBar";
import { useSelector } from "react-redux";
import UserLibrary from "../Your Library/UserLibrary";
import RecentlyPlayedTrack from "../../components/RecentlyPlayer/RecentlyPlayedTrack";
import AllTracks from "../AllTracks/AllTracks";
import TopPlaylist from "../../components/TopPlaylist/TopPlaylist";
import { HomeContainer, SearchTrackContainer } from "./homeStyle";
import DetailPlaylist from "../DetailPlaylist/DetailPlaylist";
import SearchTrack from "../SearchTrack/SearchTrack";




const Home = () => {

    const {isHome,isLibrary, 
        isLiked, isCreate , 
        isRecentPlayedTracks ,  
        isPlaylistDetail, onSearchTerm} = useSelector(state=>state.navigate) 
 
        const {items} = useSelector(state=>state.search)
       
 if(isLibrary){

  return( <HomeContainer>
  
    <UserLibrary/>

   </HomeContainer>)
 }
 if(isRecentPlayedTracks){

    return (

        <HomeContainer>
      
          <AllTracks/>
    </HomeContainer>

    )
    
 }
 if(isPlaylistDetail){

    return(
        <HomeContainer>
            
            <DetailPlaylist/>
        </HomeContainer>
    )
 }
 if(onSearchTerm){
    return(
        <HomeContainer>
           
            <SearchTrackContainer>


            {items?.map(item=>(
                 
                 <SearchTrack
                  key={item.id}
                  id ={item.id}
                  name = {item.name}
                  uri = {item.uri}
                  url = {item.image[0]?.url}
                 />


            ))}


            </SearchTrackContainer>

           
        </HomeContainer>
    )
 }
    
    return (
        <HomeContainer>
           
          
        
         
            <RecentlyPlayedTrack/>
            <TopPlaylist/>
  
        </HomeContainer>
    );
};

export default Home;