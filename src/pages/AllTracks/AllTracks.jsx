import React from 'react';
import {  useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import { CartExpo, LibraryContainer } from './playlistStyle';



const AllTracks= () => {
    
    
  
    const {recentPlayer} = useSelector(state=>state.user)
  
 

    return (
        <LibraryContainer>


            
        <CartExpo>

          { recentPlayer?.map(track=>(
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

export default AllTracks;