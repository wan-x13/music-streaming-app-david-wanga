import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getUri } from "../../features/play";


const ItemMusicContainer = styled.div`
    
     display: flex;
     justify-content: space-between;
     margin-top: 20px;
     margin-left: 6.1rem;
     margin-right: 50px;

     &:hover{
        background-color : #38383B;
         cursor : pointer;
      }
`
const TitleTrack = styled.div`
      display:  flex;
      gap : 1.5vw;
    
      img{
        width: 60px;
      }
      h4{
        font-size: 14px;
        font-weight: 400;
        
      }
    
`
const AlbumTrack = styled.h4`
         font-size: 14px;
         font-weight: 400;
      
`
const ButtonAdd = styled.div`
     margin-top: 10px;
     border-radius: 10px;
     width: 6vw;
     height: 5vh;
     border :  3px solid #C5D7D9;
     text-align: center;
     padding-top: 1vh;
`

const ItemMusic = ({id, image, nameTrack, uri , duration_ms , name}) => {

    const dispatch = useDispatch()


    return (
        <ItemMusicContainer
         onClick={()=>dispatch(getUri(uri))}
        >

     <TitleTrack>
        <img src={image}/>
         <h4>{name}</h4>
     </TitleTrack>
       <AlbumTrack>{nameTrack}</AlbumTrack>

            <ButtonAdd>
                add
            </ButtonAdd>
        </ItemMusicContainer>
    );
};

export default ItemMusic;