import styled from "styled-components";
import { colors } from "../../utils/style";



export const NavBarContainer = styled.nav`
                background: #040464;
                width : 80vw;
               
                position : fixed;
                top: 0;
             
                // margin-left: 14px;
                

 
`
export const NavbarContent = styled.div`
         display : flex;
        
         justify-content : space-between;
         align-items : center;
         margin-left : 20px;
         margin-right : 20px;
        
    

        h1{
            width : 300px;
        }
      
      

`
export const ContentUser = styled.div`

display :flex;
gap : 20px;

button {
    width : 150px;
    border-radius : 20px;
    border : solid 2px #C5D7D9;
    background-color : #040464;
    margin : 10px;
    color : #C5D7D9;
    font-size: 20px;
    font-weight: 600;
    height : 50px;

    &:hover{
        cursor: pointer;
    }

}

h3{
    width : 100px;
    border-radius : 20px;
    border : solid 2px  #C5D7D9;
    text-align: center;
    padding : 5px;
    background-color : #1D1D34;
}

    
`
