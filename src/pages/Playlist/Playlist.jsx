import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../../components/Card/Card';
import NavBar from '../../components/NavBar/NavBar';
import { removeToken } from '../../features/userSlice';
import { colors } from '../../utils/style';
import { CartExpo, LibraryContainer } from './playlistStyle';



const Library = () => {

    const {userToken} =  useSelector(state=>state.user)
    const dispatch = useDispatch()
    const [isCLick, setIsClick] = useState(false)
    
  const handleClick = ()=>{
    setIsClick({
      ...isCLick,
      isCLick : !isCLick
    })
  }
  const handleLogout = ()=>{
     dispatch(removeToken())
   
    return userToken
  }
  if(!userToken){

    return <Navigate to="/"/>
  }
  
    return (
        <LibraryContainer>
             <NavBar  handleLogout={handleLogout}/>
        <CartExpo>

         <Link to="/album">
           <Card />
         </Link>
         
          
             

        </CartExpo>
             
        </LibraryContainer>
       
    );
};

export default Library;