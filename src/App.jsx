

import Login from './pages/Login/Login'
import { colors } from './utils/style'
import { useState , useEffect} from 'react'
import Home from './pages/Home/Home'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { getToken } from './features/userSlice'
import UserLibrary from './pages/Your Library/UserLibrary'


const GlobalStyle = createGlobalStyle`

    *{
      font-family: 'Poppins', sans-serif;
      color :white;
    }
    body{
      height: 100vh;
      margin : 0;
      background : ${colors.bagroundBlack}
    }
`

function App() {

  const {userToken } = useSelector(state=> state.user)
  const dispatch = useDispatch()
  
  useEffect(()=>{

    const hash  = window.location.hash
    const token = hash.substring(1).split("&")[0].split('=')[1]
  
      if(token){  

         dispatch(getToken(token))
      }
      
  },[userToken , dispatch])
 
  return (
     <BrowserRouter>
       <GlobalStyle/>
       <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path="/home" element ={<Home/>}/>
        <Route path='/album' element={<UserLibrary/>}/>
       </Routes>

     </BrowserRouter>
  )
}

export default App
