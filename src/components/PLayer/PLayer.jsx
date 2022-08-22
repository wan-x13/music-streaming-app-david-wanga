


import SpotifyPlayer from "react-spotify-web-playback"
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useEffect, useState } from "react";





const PLayer = () => {
    const {userToken } = useSelector(state=>state.user)
    const {uri} = useSelector(state=>state.play)
    const [play , setPlay] = useState(false)
    const initialVolume = 50;
    useEffect(()=>{
        setPlay(true)

    },[play])
    return (
        <SpotifyPlayer

          token={'BQDU8wpjir0BXwfU8UGevS1hQYRZulLliEVvfjHKFj52D0fdi-3mlAty0Ikali4WKl45e8rJ7H5fxQqLvVvG8E_QiJpXe-gxeXdGxAORD94l2LRdI_qX5kE1itki1HM_dIjE0fKANFwrNPrh7DLNQh6tvZgGE46f_qK7I59k2wxCfSCtPR9zJfsheGTtpIRoYrclOF8iX_8p15l0h9f3esUGqwbV_nAJ9RGLRdLKMmCIYd4Y4rGZ7w0lVXpQ7h838dIOLRvO-J_vlrGP96tQhdxZHpWYAiDXGfQs4EpM94YBW28Y-xYaRQCdsz_gG8i-A10M2g'}
          uris = {[uri]}
          initialVolume = {initialVolume}
          play={play}

          styles={{
            activeColor : '#fff',
            bgColor: '#1F1F22',
       
          }}

        />
            
    );
};

export default PLayer;