import styled from "styled-components";
import Library from "../Playlist/Playlist";
import Slidebar from "../../components/slidebar/Slidebar";
import NavBar from "../../components/NavBar/NavBar";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import UserLibrary from "../Your Library/UserLibrary";


export const HomeContainer = styled.div`

       display : flex;
       width: 80vw;
       margin-left : 18rem;
   
       box-sizing : border-box;

      `
export const LibraryContainer = styled.div`
      flex : 2;
      background-color : #1F1F22;
      `


const Home = () => {

    const {isHome, isSearch, isLibrary, isLiked, isCreate} = useSelector(state=>state.navigate) 
 if(isLibrary){

  return( <HomeContainer>
    <NavBar/>
    <UserLibrary/>

   </HomeContainer>)
 }
    
    return (
        <HomeContainer>
           
           {/* <SlideBarContainer>
           <Slidebar/>

           </SlideBarContainer> */}
           <NavBar/>
           
            
            <LibraryContainer>
                <Library/>

            </LibraryContainer>
           
            
            
        </HomeContainer>
    );
};

export default Home;