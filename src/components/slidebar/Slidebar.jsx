

import { AddPlaylistContainer, AiFillFileAddIcon, BsSearchIcon, FcLikeIcon, FcLikeIconContainerIcon, HeroLogo, HomeContainerIcon, HrContent, LibraryContainerIcon, SearchContainerIcon, SlideBarContainer, VscLibraryIcon } from "./slidebaStyle";
import { AiFillHomeIcon } from "./slidebaStyle";



const Slidebar = () => {

    return (
        <SlideBarContainer>

                <HeroLogo>
                    WanZik
                </HeroLogo>
          <HomeContainerIcon>
           
            <span><AiFillHomeIcon/></span>
            <p>Home</p>

          </HomeContainerIcon>
          <SearchContainerIcon>
            <span><BsSearchIcon/></span>
            <p>Search</p>
            </SearchContainerIcon>
            <LibraryContainerIcon>
                <span><VscLibraryIcon/></span>
                <p>Your library</p>
            </LibraryContainerIcon>

            <AddPlaylistContainer>
                <span><AiFillFileAddIcon/></span>
                <p>Create Playlist</p>
            </AddPlaylistContainer>
            <FcLikeIconContainerIcon>
                <span><FcLikeIcon/></span>
                <p>Liked songs</p>
            </FcLikeIconContainerIcon>
           
          
        <HrContent/>

        </SlideBarContainer>
    );
};

export default Slidebar;