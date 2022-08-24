import styled from "styled-components";
import { colors } from "../../utils/style";
import {HiOutlineLogout} from "react-icons/hi"



export const NavBarContainer = styled.nav`
                background: #040464;
              
               
                position : fixed;
                top: 0;
             
               
                

 
`
export const NavbarContent = styled.div`
        
         display: grid;
         grid-template-columns: 3fr 1fr;
         align-items : center;
         margin-left : 2vw;
         margin-right : 2vw;
        
    

      
      

`
export const ContentUser = styled.div`

display :flex;
flex: 1;
gap : 2vw;

button {
    width : 9vw;
    border-radius : 1vw;
    border : solid 0.1vw #C5D7D9;
    background-color : #040464;
    margin : 10px;
    color : #C5D7D9;
    font-size: 1.2vw;
    font-weight: 600;
    height : 50px;
    &:hover{
        cursor: pointer;
    }

}

h3{
    width : 7vw;
    border-radius : 1vw;
    border : solid 0.1vw  #C5D7D9;
    text-align: center;
    padding : 0.3vw;
    background-color : #1D1D34;
}

    
`
export const HiOutlineLogoutIcon = styled(HiOutlineLogout)`
            fill : #C5D7D9;
          

` 