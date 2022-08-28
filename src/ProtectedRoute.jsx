import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Modal from './components/Modal/Modal';
import NavBar from './components/NavBar/NavBar';
import PLayer from './components/PLayer/PLayer';
import Slidebar from './components/slidebar/Slidebar';
import Home from './pages/Home/Home';



const RouteContainer = styled.div` 
   
`
const RouteContent = styled.div`
      display: grid;
      grid-template-columns: 1fr 3fr;
     
    `
const PlayerContainer = styled.div`
      position : fixed;
      bottom: 0;
      width : 100vw;
     
      `
const ProtectedRoute = () => {

    const {isOn} = useSelector(state=>state.modal)

    return (
        <RouteContainer
       
        >
           <div
              style={{
                opacity : isOn ? 0.33 : 1
              }}
           >
           <RouteContent>
            
            <Slidebar/>
         
          <div>
            <NavBar/>
            <Home/>

          </div>
         
           
       </RouteContent>


      

       <PlayerContainer>
          <PLayer/>

       </PlayerContainer>

           </div>
           <Modal/>
           
          
            
          
            
        </RouteContainer>
    );
};

export default ProtectedRoute;