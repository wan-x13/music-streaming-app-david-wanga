import styled from "styled-components";
import heroImage from "../../assets/daniel-reche.jpg"
import { colors } from "../../utils/style";


export const LoginContainer = styled.div`
   height : 100vh;
   display : flex;
   justify-content : center;
   flex-direction: column;
   align-items: center;
   background-image: url(${heroImage});
   background-position : center;
   background-size: cover;
   background-repeat : no-repeat;


   
`
export const Welcome = styled.p`
     font-weight : 600;
     font-size : 2vw; 
     margin-block-start: 0;
     margin-block-end: 0;
     margin-right: 29vw;
     @media only screen and (max-width: 900px) {
          font-size: 6vw;
          margin-right: 0;
          font-weight: 400;
     }
   
`
export const TitlePlatform = styled.h1`
     font-weight : 700;
     font-size : 7.5vw;
     margin-block-start: 0;
     margin-block-end: 0;

     @media only screen and (max-width: 900px) {

          font-size: 11vw;
     }
     @media only screen and (max-width: 500px) {

         font-size: 14vw;

      }
`
export const Blason = styled.p`
      font-size : 1.5vw;
      margin-block-start: 0;
      margin-block-end: 0;
      @media only screen and (max-width: 900px) {

          font-size: 2vw;
          margin-right: 0;

      }
      @media only screen and (max-width: 500px) {

         
          font-size: 3vw;

      }
      

`
export const ButtonLink = styled.button`

          width : 15vw;
          height: 6vh;
          background-color: ${colors.bagroundButton};
          color :white;
          border-radius: 2vw;
          border : none;
          margin: 3vw;
          font-weight: 600;
          font-size : 1vw;

          &:hover{
               cursor: pointer;
          }
          @media only screen and (max-width: 900px) {

            width: 30vw;
            font-size: 2.4vw;

          }
          @media only screen and (max-width: 500px) {

               width: 45vw;
               font-size: 3.5vw;

          }
          

`