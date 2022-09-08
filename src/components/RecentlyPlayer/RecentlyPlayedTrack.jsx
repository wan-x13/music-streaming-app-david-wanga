import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { viewAllRecentTracks } from "../../features/navigateSlice";
import { getUri } from "../../features/play";
import { colors } from "../../utils/style";



const RecentlyPlayerContainer  = styled.div`
        margin-top : 4rem;
        height : auto;
    
      `

const RecentlyPlayerContent = styled.div`
      margin : 30px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    
     
      `
const Head = styled.div`
      display : flex;
      justify-content : space-between;

      
      h3:hover{
        cursor: pointer;
      }
      h3{
        font-size: 2vw;
        line-height : 40px;
        padding-left: 2vw;
        margin-top: 40px;
        padding-right: 2vw;
      }
    
     `
const CardPlayer = styled.div`
       width : 16vw;
       background-color : #232327;
       display : flex; 
       flex-direction : column;
       justify-content : center;
       align-items: center;
       border-radius : 20Px;
       margin-top: -40px;
       transition:  background-color 0.5s;

       img{
        width : 14vw;
        border-radius: 10px;
        box-shadow: 0px 4px 4px 0px #00000040;
        margin-top : 20px;
       }

       &:hover {
        background-color : #38383B;
        cursor : pointer;
      }
      h4{
        font-size: 18px;
        font-weight: 400;
      }
       
      `

const RecentlyPlayedTrack = () => {

  
    const {recentPlayer} = useSelector(state=>state.user)
    const dispatch = useDispatch()


    return (
        <RecentlyPlayerContainer>
            <Head>
               <h3>Recently Played</h3>
               <h3
                
                 onClick={()=>dispatch(viewAllRecentTracks())}
                 >
                view more</h3>

            </Head>
            
            <RecentlyPlayerContent>
            <CardPlayer 
              key={recentPlayer[0].id}
               id={recentPlayer[0]?.id}
               uri = {recentPlayer[0].uri}
               onClick={()=>dispatch(getUri(recentPlayer[0].uri))}
               
               >

                <img src={recentPlayer[0]?.image[0].url}
                />
                <h4>{recentPlayer[0]?.name}</h4>

            </CardPlayer>
            <CardPlayer 
               key={recentPlayer[1].id}
               id={recentPlayer[1]?.id}
               uri = {recentPlayer[1].uri}
               onClick={(e)=>{
                e.stopPropagation()
                return dispatch(getUri(recentPlayer[1].uri))}}
               >

                <img src={recentPlayer[1]?.image[0].url}
                />
                <h4>{recentPlayer[1]?.name}</h4>

            </CardPlayer>
            <CardPlayer 
               key={recentPlayer[2].id}
               id={recentPlayer[2]?.id}
               uri = {recentPlayer[2].uri}
               onClick={()=>dispatch(getUri(recentPlayer[2].uri))}
               >

                <img src={recentPlayer[2]?.image[0].url}
                />
                <h4>{recentPlayer[2]?.name}</h4>

            </CardPlayer>
            <CardPlayer 
               key={recentPlayer[3].id}
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