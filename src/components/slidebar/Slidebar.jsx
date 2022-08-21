

import { useDispatch } from "react-redux";
import { toggleCreate, toggleLibrary, toggleLiked, toggleSearch, toggleHome } from "../../features/navigateSlice";
import { initialState } from "../../features/userSlice";
import { AddPlaylistContainer, AiFillFileAddIcon, BsSearchIcon, FcLikeIcon, FcLikeIconContainerIcon, HeroLogo, HomeContainerIcon, LibraryContainerIcon, SearchContainerIcon, SlideBarContainer, VscLibraryIcon } from "./slidebaStyle";
import { AiFillHomeIcon } from "./slidebaStyle";


const Slidebar = () => {
    const dispatch = useDispatch()
    const {TitleApp} = initialState

    return (
        <SlideBarContainer>

                <HeroLogo>
                    {TitleApp}
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
           
          
      

        </SlideBarContainer>
    );
};

export default Slidebar;