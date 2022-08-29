import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";


export const TopPlaylistContainer = styled.div`
        margin-top : 20px;
        margin-bottom : 50px;
        height: 65vh;
        /* border: 2px saddlebrown solid; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* align-items: center; */
      h3{
        font-size : 2vw;
        padding-left: 2vw;
      }
       
        
        
`
export const CardContainer = styled.div`
        margin : 50px 30px 30px 30px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);



       

       `
export const CardContent = styled.div`
            width : 16vw;
            background : #232327;
            display : flex; 
            flex-direction : column;
            justify-content : center;
            align-items: center;
            border-radius : 1.5vw;
            margin-top: -40px;

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


export const ThreeDotsContainer = styled.div`
                   display: flex;
                   justify-content: center;
                   align-items: center;
                   
`