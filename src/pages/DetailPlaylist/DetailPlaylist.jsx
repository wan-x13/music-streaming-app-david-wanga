import React from 'react';
import { useSelector } from 'react-redux';
import ButtonPlay from '../../components/ButtonPLay/ButtonPlay';
import ShowArtistHero from '../../components/ShowArtistHero/ShowArtistHero';
import { DetailPlaylistContainer } from './styleDetailPlaylist';

const DetailPlaylist = () => {
   
    return (
        <DetailPlaylistContainer>

          
                    <ShowArtistHero/>
                    <ButtonPlay/>

          
         
            
        </DetailPlaylistContainer>
    );
};

export default DetailPlaylist; 