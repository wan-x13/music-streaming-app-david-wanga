import styled from "styled-components";




export const ModalContainer = styled.div`
     width: 30vw;
     background: #222235;
     height: 25vh;
     position:  fixed;
     top : 25vh;
     left: 35vw;
     border-radius: 1vw;
     display: flex;
     justify-content:center ;

`
export const ModalContent = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
`
export  const MessageInfo = styled.h3`
         font-size: 20px;
         font-weight: 400;

`
export const ButtonContainer = styled.div`
      display: grid;
      gap : 2vw;
      grid-template-columns: 1fr 1fr;
      
      button{
        font-size: 18px;
      }

      button:hover{
        cursor: pointer;
      }
`
export const ButtonCancel = styled.button`
   background-color: #222235;
   width: 12vw;
   height: 8vh;
   border-radius: 1vw;
   border : solid 00.1vw #C5D7D9;
   
    
     
`
export const ButtonConfirm = styled.button`
background-color: #222235;
border-radius: 1vw;
border : solid 00.1vw #C5D7D9;
   
`