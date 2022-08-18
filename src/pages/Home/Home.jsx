import styled from "styled-components";
import Library from "../Playlist/Playlist";
import Slidebar from "../../components/slidebar/Slidebar";


export const HomeContainer = styled.div`

       display : flex;
       width: 80vw;
       margin-left : 18rem;

      `
export const LibraryContainer = styled.div`
      flex : 2;
      background-color : #1F1F22;
      `
export const SlideBarContainer = styled.div`
      width : 20vw;
      position : sticky;
      `


const Home = () => {
    return (
        <HomeContainer>
           
           {/* <SlideBarContainer>
           <Slidebar/>

           </SlideBarContainer> */}
            
            <LibraryContainer>
                <Library/>

            </LibraryContainer>
           
            
            
        </HomeContainer>
    );
};

export default Home;