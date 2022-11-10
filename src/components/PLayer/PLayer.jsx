import SpotifyPlayer from "react-spotify-web-playback"
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";



const PLayer = () => {
    const {userToken } = useSelector(state=>state.user)
    const {uri} = useSelector(state=>state.play)
    const [play , setPlay] = useState(false)
    const initialVolume = 100;
    useEffect(()=>{
        setPlay(true)

    },[play]);

    
    return (
        <SpotifyPlayer

          token={userToken}
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