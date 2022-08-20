import styled from "styled-components";
import Library from "../Playlist/Playlist";
import Slidebar from "../../components/slidebar/Slidebar";
import NavBar from "../../components/NavBar/NavBar";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import UserLibrary from "../Your Library/UserLibrary";
import Playlist from "../Playlist/Playlist";
import RecentlyPlayedTrack from "../../components/RecentlyPlayer/RecentlyPlayedTrack";


export const HomeContainer = styled.div`

       display : flex;
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

    const {isHome, isSearch, isLibrary, isLiked, isCreate , isPlaylist} = useSelector(state=>state.navigate) 
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
          <Playlist/>
    </HomeContainer>

    )
    
 }
    
    return (
        <HomeContainer>
           
           {/* <SlideBarContainer>
           <Slidebar/>

           </SlideBarContainer> */}
           <NavBar/>
         
            <RecentlyPlayedTrack/>

          
           
             
               {/* <Playlist/> */}

          
{/* 
            <LibraryContainer>
               
               
               

            </LibraryContainer> */}
           
            
            
        </HomeContainer>
    );
};

export default Home;