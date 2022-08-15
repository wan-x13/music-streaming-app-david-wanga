import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { removeToken } from '../../features/userSlice';
import { colors } from '../../utils/style';
import { LibraryContainer } from './libraryStyle';


const LogoutButton = styled.button`
     width : 180px;
     color : white;
     background : ${colors.bagroundButton}
    `
const Library = () => {

    const {userToken} =  useSelector(state=>state.user)
    const dispatch = useDispatch()
    

  const handleLogout = ()=>{
     dispatch(removeToken())
   
    return userToken
  }
  if(!userToken){

    return <Navigate to="/"/>
  }
  
    return (
        <LibraryContainer>
            <h1>Your library</h1>
            <LogoutButton onClick={handleLogout}>logout</LogoutButton>
        </LibraryContainer>
       
    );
};

export default Library;