import styled from "styled-components";
import Library from "../AllTracks/AllTracks";
import Slidebar from "../../components/slidebar/Slidebar";
import NavBar from "../../components/NavBar/NavBar";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import UserLibrary from "../Your Library/UserLibrary";
import Playlist from "../AllTracks/AllTracks";
import RecentlyPlayedTrack from "../../components/RecentlyPlayer/RecentlyPlayedTrack";
import AllTracks from "../AllTracks/AllTracks";
import TopPlaylist from "../../components/TopPlaylist/TopPlaylist";


export const HomeContainer = styled.div`

       display : flex;
       flex-direction : column;
       justify-content : center;
       width: 80vw;
       margin-left : 18rem;
   
       box-sizing : border-box;

      `
export const LibraryContainer = styled.div`
      flex : 2;
      background-color : #1F1F22;
      `


const Home = () => {

    const {isHome,isLibrary, isLiked, isCreate , isPlaylist} = useSelector(state=>state.navigate) 
 if(isLibrary){

  return( <HomeContainer>
    <NavBar/>
    <UserLibrary/>

   </HomeContainer>)
 }
 if(isPlaylist){

    return (

        <HomeContainer>
        <NavBar/>
          <AllTracks/>
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