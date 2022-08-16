import { ContentUser, NavBarContainer, NavbarContent } from "./NavbarStyle";


const NavBar = ({handleLogout}) => {
    return (
        <NavBarContainer>
            <NavbarContent>
            <h1>Navbar</h1>
            

            <ContentUser>
                    <h3>Wan-x</h3>
                    <button onClick={handleLogout}>Logout</button>

                    

            </ContentUser>
           

            </NavbarContent>
            

        </NavBarContainer>
    );
};

export default NavBar;