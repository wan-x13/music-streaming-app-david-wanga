import { useSelector } from "react-redux";
import styled from "styled-components";


const UserLibraryContainer = styled.div`
            margin-top : 8rem;
            border : 3px solid red;
            height : 100vh;
            `

const UserLibrary = () => {

    const {onSearchTerm} = useSelector(state=>state.navigate)
    return (
        <UserLibraryContainer

        // style={{
        //     visibility: onSearchTerm ? 'hidden' : 'visible',
        // }}
        >

            <h1>Personnalization playlist</h1>
            
        </UserLibraryContainer>
    );
};

export default UserLibrary;