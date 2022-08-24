


import SpotifyPlayer from "react-spotify-web-playback"
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useEffect, useState } from "react";





const PLayer = () => {
    const {userToken } = useSelector(state=>state.user)
    const {uri} = useSelector(state=>state.play)
    const [play , setPlay] = useState(false)
    const initialVolume = 100;
    useEffect(()=>{
        setPlay(true)

    },[play])
    return (
        <SpotifyPlayer

          token={'BQCEqAEXZDA2R6X9mGXaMVwnbnRNGlELtQ3tIhNmp_ZEOuP32iCUe1ln9F3As3trNIFy6GJCCY-CAmbAleCpKpYU4hs_ZFnmHkOdhe11Op5H-t535Fe3Nk3-gEr9L_hAiI5W_yJ7z0B5Y8_ZlgMt1F1ct6UXfzoWgnnsfWrzylO_l3kxJHlaIlmMJ8KRhz-K2OqbyDWRXs0cmf4IlRUzugrkwmc1N_scqEyYTwfNOgAR-XFvIJ-1PlDnDAaYEXJllbeKbuqDMKQPriEw_0gs0_eVHi51pzlDkz-VjmfUgWqzxQxrYQ_k4EYYPOp_d-tdqI8BcCmxuGWJIsRWy00'}
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