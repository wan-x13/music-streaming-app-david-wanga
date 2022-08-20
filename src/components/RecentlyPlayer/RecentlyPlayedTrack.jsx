import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { togglePlaylist } from "../../features/navigateSlice";
import { getUri } from "../../features/play";
import { colors } from "../../utils/style";



const RecentlyPlayerContainer  = styled.div`
        margin-top : 4rem;
        background-color : ${colors.bagroundBlack};
        height : auto;
        
        
      `

const RecentlyPlayerContent = styled.div`
      margin : 30px;
      display: flex;
      flex-wrap : wrap;
      gap : 2vw;
     
      `
const Head = styled.div`
      display : flex;
      justify-content : space-between;

      
      h4:hover{
        cursor: pointer;
      }
     `
const CardPlayer = styled.div`
       width : 230px;
       background : #232327;
       display : flex; 
       flex-direction : column;
       justify-content : center;
       align-items: center;
       border-radius : 20Px;

       img{
        width : 200px;
        border-radius: 10px;
        box-shadow: 0px 4px 4px 0px #00000040;
        margin-top : 20px;
       }

       &:hover {
        background-color : #38383B;
        cursor : pointer;
      }
       
      `

const RecentlyPlayedTrack = () => {

  
    const {recentPlayer} = useSelector(state=>state.user)
    const dispatch = useDispatch()


    return (
        <RecentlyPlayerContainer>
            <Head>
               <h3>Recently Played</h3>
               <h4
                
                 onClick={()=>dispatch(togglePlaylist())}
                 >
                view more</h4>

            </Head>
            
            <RecentlyPlayerContent>
            <CardPlayer 
               id={recentPlayer[0]?.id}
               uri = {recentPlayer[0].uri}
               onClick={()=>dispatch(getUri(recentPlayer[0].uri))}
               
               >

                <img src={recentPlayer[0]?.image[0].url}
                />
                <h4>{recentPlayer[0]?.name}</h4>

            </CardPlayer>
            <CardPlayer 
               id={recentPlayer[1]?.id}
               uri = {recentPlayer[1].uri}
               onClick={()=>dispatch(getUri(recentPlayer[1].uri))}
               >

                <img src={recentPlayer[1]?.image[0].url}
                />
                <h4>{recentPlayer[1]?.name}</h4>

            </CardPlayer>
            <CardPlayer 
               id={recentPlayer[2]?.id}
               uri = {recentPlayer[2].uri}
               onClick={()=>dispatch(getUri(recentPlayer[2].uri))}
               >

                <img src={recentPlayer[2]?.image[0].url}
                />
                <h4>{recentPlayer[2]?.name}</h4>

            </CardPlayer>
            <CardPlayer 
               id={recentPlayer[3]?.id}
               uri = {recentPlayer[3].uri}
               onClick={()=>dispatch(getUri(recentPlayer[3].uri))}
               >

                <img src={recentPlayer[3]?.image[0].url}
                />
                <h4>{recentPlayer[3]?.name}</h4>

            </CardPlayer>

            </RecentlyPlayerContent>
            
            
        </RecentlyPlayerContainer>
    );
};

export default RecentlyPlayedTrack;