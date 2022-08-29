import styled from "styled-components"





export const SearchTrackContent = styled.div`
       width : 16vw;
       height : 45vh;
       border-radius: 20px;
       background : #232327;
       /* margin-left : 20px;
       margin-right: 20PX; */
       display : flex;
       flex-direction : column;
       justify-content: center;
       align-items: center;
       

       img{
        width : 14vw;
        border-radius: 1vw;
        margin-top: 1vh;
        align-self: center;
        box-shadow: 0px 4px 4px 0px #00000040;

       }
       h3{
        padding-left : 1.5vw;
        padding-right: 1.5vw;
        font-size: 1.1vw;
        font-weight: 400;
        text-align: center;
       }
       
       &:hover {
         background-color : #38383B;
         cursor : pointer;
       }
       
          
          `