import styled from "styled-components";

import {BsFillPlayFill} from "react-icons/bs"

export const Button = styled.div`
        width:  150px;
        background: #57AC39;
        border-radius: 30px;
        color: #E2E8FB;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        margin-top: 4vh;
        margin-bottom: 4vh;
        /* margin-left: 7vw; */

        &:hover{
            cursor: pointer;
        }
       `
export const BsFillPlayFillIcon = styled(BsFillPlayFill)`
          font-size: 25px;
        `