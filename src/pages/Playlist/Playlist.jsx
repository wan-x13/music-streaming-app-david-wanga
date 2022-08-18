import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../../components/Card/Card';
import NavBar from '../../components/NavBar/NavBar';

import {  removeToken } from '../../features/userSlice';
import { colors } from '../../utils/style';
import UserLibrary from '../Your Library/UserLibrary';
import { CartExpo, LibraryContainer } from './playlistStyle';



const Library = () => {
    
    const {isHome, isSearch, isLibrary, isLiked, isCreate} = useSelector(state=>state.navigate) 
    const {userToken} =  useSelector(state=>state.user)
    const  {tracks} = useSelector(state=>state.track)
  
    const dispatch = useDispatch()
    
  const handleLogout = ()=>{
     dispatch(removeToken())
   
    return userToken
  }
  if(!userToken){

    return <Navigate to="/"/>
  }
  if(isLibrary){

    return (
      <LibraryContainer>
          <NavBar  handleLogout={handleLogout}/>
        
        <UserLibrary/>

        
          

      </LibraryContainer>
    )
  }
  
    return (
        <LibraryContainer>
             <NavBar  handleLogout={handleLogout}/>
        <CartExpo>

          { tracks.map(track=>(

              <Card
                key={track.id}
                id={track.id}
                url = {track.image[0].url}
                name ={track.name}
                uri = {track.uri}
               />

          ))} 
          
           
       
         
          
             

        </CartExpo>
             
        </LibraryContainer>
       
    );
};

export default Library;