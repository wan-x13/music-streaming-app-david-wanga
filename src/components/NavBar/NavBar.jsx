import { useSelector } from "react-redux";
import { ContentUser, NavBarContainer, NavbarContent } from "./NavbarStyle";


const NavBar = ({handleLogout}) => {

  const {identity} = useSelector(state=>state.user)

    return (
        <NavBarContainer>
            <NavbarContent>
            <h1>Navbar</h1>
            

            <ContentUser>
                    <h3>{identity.display_name}</h3>
                    <button onClick={handleLogout}>Logout</button>

                    

            </ContentUser>
           

            </NavbarContent>
            

        </NavBarContainer>
    );
};

export default NavBar;