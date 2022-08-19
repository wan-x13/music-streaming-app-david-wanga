import styled from "styled-components";
import {AiFillPlayCircle} from "react-icons/ai"
import { colors } from "../../utils/style";


export const CardContainer = styled.div`
       width : 230px;
       // height: 300px;
       border-radius: 20px;
       background : #232327;
       margin-top: 5rem;
       margin-left : 30px;
       display : flex;
       flex-direction : column;
       justify-content: center;
       

       img{
        width : 200px;
        border-radius: 10px;
        margin-top: 10px;
        align-self: center;
        box-shadow: 0px 4px 4px 0px #00000040;

       }
       h3{
        padding-left : 20px;
       }
       
       &:hover {
         background-color : #38383B;
         cursor : pointer;
       }
       
`
export const AiFillPlayCircleIcon = styled(AiFillPlayCircle)`
       height :80px;
       width : 50px;
       position : relative;
       top: -4rem;
       left: 9rem;
       fill : ${colors.bagroundButton}
`