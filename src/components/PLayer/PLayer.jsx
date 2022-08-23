


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

          token={'BQAmJPA_o4X40CJANpm5mEOy87kMBkxCDzKjB1zRBC8dVvvCeoa0GFgJR8V9t49PCWvwRTv40Z4W_RkfHYnp8u_Gm-yLNI9a5nsxsZwNHUSxH2LsL7ty9EFqatvJggchJRhe0xCE-8DU-6hVRP620uYmL6avyFwe1eTCSmZzJRo2N8C2v7n8CoBF8IvObtI3C1CnNSjvg_hwpdGsmWO_VlOeMkXSclFDVe9GNzlbDUr2z5eCFXrvsMdQ0Dz3V9WHfqcJVE4HSi4x_JXhbaxRuuK2ZCLX6iEWhP7Q6NH6VWuGdQ6p-WwhHu8fxpdOp9eT4WKHm1tVCdHpquYdHq4'}
          uris = {[uri]}
          initialVolume = {initialVolume}
          play={true}

          styles={{
            activeColor : '#fff',
            bgColor: '#1F1F22',
       
          }}

        />
            
    );
};

export default PLayer;