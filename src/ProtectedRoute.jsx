import React from 'react';
import styled from 'styled-components';
import Slidebar from './components/slidebar/Slidebar';
import Home from './pages/Home/Home';



const RouteContainer = styled.div`
      display: flex;

`
const ProtectedRoute = () => {
    return (
        <RouteContainer>
            <Slidebar/>
            <Home/>
            
        </RouteContainer>
    );
};

export default ProtectedRoute;