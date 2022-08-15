import styled from "styled-components";
import Library from "../../components/Library/Library";
import Slidebar from "../../components/slidebar/Slidebar";


const HomeContainer = styled.div`
       display : flex;

      `
const LibraryContainer = styled.div`
      flex : 2;
      background-color : #1F1F22;
      `
const SlideBarContainer = styled.div`
      width : 20vw;
      position : sticky;
      `
const Home = () => {
    return (
        <HomeContainer>
           
           <SlideBarContainer>
           <Slidebar/>

           </SlideBarContainer>
            
            <LibraryContainer>
                <Library/>

            </LibraryContainer>
           
            
            
        </HomeContainer>
    );
};

export default Home;