
import NavBar from "../../components/NavBar/NavBar";
import { useSelector } from "react-redux";
import UserLibrary from "../Your Library/UserLibrary";
import RecentlyPlayedTrack from "../../components/RecentlyPlayer/RecentlyPlayedTrack";
import AllTracks from "../AllTracks/AllTracks";
import TopPlaylist from "../../components/TopPlaylist/TopPlaylist";
import { HomeContainer } from "./homeStyle";
import DetailPlaylist from "../DetailPlaylist/DetailPlaylist";
import SearchTrack from "../SearchTrack/SearchTrack";




const Home = () => {

    const {isHome,isLibrary, 
        isLiked, isCreate , 
        isRecentPlayedTracks ,  
        isPlaylistDetail, onSearchTerm} = useSelector(state=>state.navigate) 
 

       
 if(isLibrary){

  return( <HomeContainer>
    <NavBar/>
    <UserLibrary/>

   </HomeContainer>)
 }
 if(isRecentPlayedTracks){

    return (

        <HomeContainer>
        <NavBar/>
          <AllTracks/>
    </HomeContainer>

    )
    
 }
 if(isPlaylistDetail){

    return(
        <HomeContainer>
            <NavBar/>
            <DetailPlaylist/>
        </HomeContainer>
    )
 }
 if(onSearchTerm){
    return(
        <HomeContainer>
            <NavBar/>
            <SearchTrack/>
        </HomeContainer>
    )
 }
    
    return (
        <HomeContainer>
           
          
           <NavBar/>
         
            <RecentlyPlayedTrack/>
            <TopPlaylist/>
  
        </HomeContainer>
    );
};

export default Home;