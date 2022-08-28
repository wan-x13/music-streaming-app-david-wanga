import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { openModal } from "../../features/modalSlice";
import { removeToken } from "../../features/userSlice";
import { colors } from "../../utils/style";

import SearchItem from "../SearchItem/SearchItem";
import { ContentUser, HiOutlineLogoutIcon, NavBarContainer, NavbarContent } from "./NavbarStyle";


const NavBar = () => {

  const {identity ,userToken} = useSelector(state=>state.user)
  const {isPlaylistDetail} = useSelector(state=>state.navigate)

  const dispatch = useDispatch()

    
  const handleLogout = ()=>{
     dispatch(openModal())
  }
  
  if(!userToken){

    return <Navigate to="/"/>
  }

    return (
        <NavBarContainer
       
          >
            <NavbarContent> 
                <SearchItem/> 
            <ContentUser>
            <h3>{identity?.display_name}</h3>
            <button onClick={handleLogout}>Logout</button>
           
              </ContentUser>
            </NavbarContent>

        </NavBarContainer>
    );
};

export default NavBar;