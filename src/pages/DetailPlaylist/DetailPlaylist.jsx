import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemMusic from '../../components/itemMusic/ItemMusic';


import ShowArtistHero from '../../components/ShowArtistHero/ShowArtistHero';

import { DetailPlaylistContainer } from './styleDetailPlaylist';



 
export const playlistArray = (array)=>{

    const trackItem = array.map(({track})=>(track)).map(({album, id, name, duration_ms , uri})=>{
        let image = []
                let nameTrack ;
             if(album){
                const {images, name} = album
               image = [...images]
               nameTrack = name
             }
             return {...image, nameTrack, id, name, duration_ms, uri}
    })

    return trackItem

}

const DetailPlaylist = () => {

    const {isLoading , playlist1, playlist2, playlist3, playlist4 , nameOfPlaylist} = useSelector(state=>state.playlist)
    const dispatch = useDispatch()
  
   
    const item1 = playlist1?.[0].tracks?.items
    const item2 = playlist2?.[0].tracks?.items
    const item3 = playlist3?.[0].tracks?.items
    const item4 = playlist4?.[0].tracks?.items





 if(  nameOfPlaylist ==="This Is Rihanna"   ){

    return (
        <DetailPlaylistContainer>
   {isLoading ? (
    <div>
        <h1>please....</h1>
    </div>

   ): (
    <>
     { playlist1?.map(play=> 
                 <ShowArtistHero
                   images={play.images?.[0].url}
                   name = {play.name}
                   description = {play.description}
                   uri = {play.uri}
                 />
                
                )}

            {
                playlistArray(item1)?.map(play=>
                    <ItemMusic
                    key={play.id}
                    image = {play[0].url}
                    name = {play.name}
                    nameTrack = {play.nameTrack}
                    uri = {play.uri}
                    />
                  
                    
                    ) }
            
     
    </>
   )}

          

          
               
                   
                   
                    
            
        </DetailPlaylistContainer>
    );


 }
 if(nameOfPlaylist === "This Is Beyoncé"){


    return (
        <DetailPlaylistContainer>
            {isLoading ? (
                <div>
                    <h1>please...</h1>
                </div>

            ):(
                <>
                                { playlist2?.map(play=> 
                 <ShowArtistHero
                   images={play.images?.[0].url}
                   name = {play.name}
                   description = {play.description}
                   uri = {play.uri}
                 />
                
                )}

            {  playlistArray(item2)?.map(play=>
                <ItemMusic
                key={play.id}
                image = {play[0].url}
                name = {play.name}
                nameTrack = {play.nameTrack}
                uri = {play.uri}
               
                />
              
                
                )}
                </>

            )}

  
               
                   
                   
                    
            
        </DetailPlaylistContainer>
    );

 }
 if(nameOfPlaylist === "This Is Ninho"){


    return (
        <DetailPlaylistContainer>
                 {isLoading ? (
                <div>
                    <h1>please...</h1>
                </div>

            ):(
                <>

              {  
                 playlist3?.map(play=> 
                 <ShowArtistHero
                   images={play.images?.[0].url}
                   name = {play.name}
                   description = {play.description}
                   uri = {play.uri}
                 />
                
                ) }

            {     playlistArray(item3)?.map(play=>
                <ItemMusic
                key={play.id}
                image = {play[0].url}
                name = {play.name}
                nameTrack = {play.nameTrack}
                uri = {play.uri}
                />
              
                
                )}
                </>

            )}



               
                
        </DetailPlaylistContainer>
    );

 }
 if(nameOfPlaylist === "This Is Justin Timberlake"){


    return (
        <DetailPlaylistContainer>

          {isLoading ? (
                <div>
                    <h1>please...</h1>
                </div>

            ):(
                <>

                  
              {
                playlist4?.map(play=> 
                 <ShowArtistHero
                   images={play.images?.[0].url}
                   name = {play.name}
                   description = {play.description}
                   uri = {play.uri}
                 />
                
                )}

            {  playlistArray(item4)?.map(play=>
                <ItemMusic
                key={play.id}
                image = {play[0].url}
                name = {play.name}
                nameTrack = {play.nameTrack}
                uri = {play.uri}
                />)
              
                
                }
               
                </>

            )}

            

                   
                   
                    
            
        </DetailPlaylistContainer>
    );

 }
   
   
};

export default DetailPlaylist; 