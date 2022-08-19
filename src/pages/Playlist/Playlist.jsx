import React from 'react';
import {  useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import UserLibrary from '../Your Library/UserLibrary';
import { CartExpo, LibraryContainer } from './playlistStyle';



const Library = () => {
    
    
    
    const  {tracks} = useSelector(state=>state.track)
  
 

    return (
        <LibraryContainer>
            
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