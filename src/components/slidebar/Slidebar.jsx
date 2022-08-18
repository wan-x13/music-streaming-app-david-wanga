

import { useDispatch } from "react-redux";
import { toggleCreate, toggleLibrary, toggleLiked, toggleSearch, toggleHome } from "../../features/navigateSlice";
import { AddPlaylistContainer, AiFillFileAddIcon, BsSearchIcon, FcLikeIcon, FcLikeIconContainerIcon, HeroLogo, HomeContainerIcon, HrContent, LibraryContainerIcon, SearchContainerIcon, SlideBarContainer, VscLibraryIcon } from "./slidebaStyle";
import { AiFillHomeIcon } from "./slidebaStyle";



const Slidebar = () => {
    const dispatch = useDispatch()

    return (
        <SlideBarContainer>

                <HeroLogo>
                    WanZik
                </HeroLogo>
          <HomeContainerIcon onClick={()=>dispatch(toggleHome())}>
           
            <span><AiFillHomeIcon/></span>
            <p>Home</p>

          </HomeContainerIcon>
          <SearchContainerIcon  onClick={()=>dispatch(toggleSearch())}>
            <span><BsSearchIcon/></span>
            <p>Search</p>
            </SearchContainerIcon>
            <LibraryContainerIcon onClick={()=>dispatch(toggleLibrary())}>
                <span><VscLibraryIcon/></span>
                <p>Your library</p>
            </LibraryContainerIcon>

            <AddPlaylistContainer onClick={()=>dispatch(toggleCreate())}>
                <span><AiFillFileAddIcon/></span>
                <p>Create Playlist</p>
            </AddPlaylistContainer>
            <FcLikeIconContainerIcon onClick={()=> dispatch(toggleLiked())}>
                <span><FcLikeIcon/></span>
                <p>Liked songs</p>
            </FcLikeIconContainerIcon>
           
          
        <HrContent/>

        </SlideBarContainer>
    );
};

export default Slidebar;