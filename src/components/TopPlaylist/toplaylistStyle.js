import styled from "styled-components";



export const TopPlaylistContainer = styled.div`
        margin-top : 20px;
        margin-bottom : 50px;
      h3{
        font-size : 30px;
      }
       
        
        
`
export const CardContainer = styled.div`
        margin : 60px 30px 30px 30px;
        display: flex;
        flex-wrap : wrap;
        gap : 2vw;

       

       `
export const CardContent = styled.div`
            width : 230px;
            background : #232327;
            display : flex; 
            flex-direction : column;
            justify-content : center;
            align-items: center;
            border-radius : 20Px;
            margin-top: -40px;

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