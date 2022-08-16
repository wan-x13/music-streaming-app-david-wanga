import styled from "styled-components";
import {AiFillHome} from "react-icons/ai"
import {BsSearch} from "react-icons/bs"
import {VscLibrary} from "react-icons/vsc"
import {AiFillFileAdd} from "react-icons/ai"
import {FcLike} from "react-icons/fc"


export const SlideBarContainer = styled.div`
     position : fixed;
     display : flex;
     flex-direction : column;
     padding : 30px;
         
`

export const HouseICon = styled.span`
       height : 10vh;

`
export const AiFillHomeIcon = styled(AiFillHome)`
             height : 50px;
             width : 25px;
             fill: #C5D7D9;


`
export const BsSearchIcon = styled(BsSearch)`
            height : 50px;
            width : 25px;
            fill : #C5D7D9;
`
export const HomeContainerIcon = styled.div`
            display : flex;
            gap : 20px;
            align-items: center; 
            
            
            p{
                color : #C5D7D9;
                font-size : 15px;
            }
            &: hover{
                cursor: pointer;
            }
`
export const SearchContainerIcon = styled.div`

                    display : flex;
                    gap : 20px;
                    align-items: center; 


                    p{
                        color : #C5D7D9;
                        font-size : 15px;
                    }
                    &: hover{
                        cursor: pointer;
                    }
`
export const LibraryContainerIcon =  styled.div`
                    display : flex;
                    gap : 20px;
                    align-items: center; 


                    p{
                        color : #C5D7D9;
                        font-size : 15px;
                    }
                    &: hover{
                        cursor: pointer;
                    }
                    `
export const VscLibraryIcon = styled(VscLibrary)`
                    height : 50px;
                    width : 25px;
                    fill : #C5D7D9;
`
export const AddPlaylistContainer = styled.div`
                    display : flex;
                    gap : 20px;
                    align-items: center; 


                    p{
                        color : #C5D7D9;
                        font-size : 15px;
                    }
                    &: hover{
                        cursor: pointer;
                    }
          
        `
export const AiFillFileAddIcon = styled(AiFillFileAdd)`
                    height : 50px;
                    width : 25px;
                    fill : #C5D7D9;
      
`

export const FcLikeIconContainerIcon = styled.div`
                    display : flex;
                    gap : 20px;
                    align-items: center; 


                    p{
                        color : #C5D7D9;
                        font-size : 15px;
                    }
                    &: hover{
                        cursor: pointer;
                    }
                    `

export const FcLikeIcon = styled(FcLike)`
                    height : 50px;
                    width : 25px;
                  
         `
export  const HrContent = styled.hr`
               background-color : #C5D7D9;
            `
export const HeroLogo = styled.h1`
               color : #C5D7D9;
               font-size : 40px;
               font-weight : 700;
`