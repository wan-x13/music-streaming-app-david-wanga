

import Login from './pages/Login/Login'
import { colors } from './utils/style'
import { useState , useEffect} from 'react'
import Home from './pages/Home/Home'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { getAllTracks, getArtistAlbum, getIdentity, getToken } from './features/userSlice'
import UserLibrary from './pages/Your Library/UserLibrary'
import { getTracks } from './features/trackSlice'
import Slidebar from './components/slidebar/Slidebar'
import ProtectedRoute from './ProtectedRoute'


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

  const {userToken , AllTracks } = useSelector(state=> state.user)
  const [tokenUser , setTokenUser] = useState('')
  const dispatch = useDispatch()
  const {tracks} = useSelector(state=>state.track)
 
    const morceauSong = AllTracks.map(({id, album,name, duration_ms, uri})=>{
          let img= []
         if(album){
           const {images} = album
           img =[...images]
         }
      return {"id" : id, "image" : img , "name": name, "duration_ms" : duration_ms, "uri": uri}
    })

  useEffect(()=>{

    const hash  = window.location.hash
    const token = hash.substring(1).split("&")[0].split('=')[1]
  
   

      if(token){  
        window.localStorage.setItem('token', token)

        setTokenUser(token)

         dispatch(getToken(token))
         
      }
     
      
  },[userToken , tracks, dispatch ])

  useEffect(()=>{

    dispatch(getIdentity())
    dispatch(getAllTracks())
    dispatch(getArtistAlbum())
    dispatch(getTracks(morceauSong))
    

  },[])

 
  
 




 
  return (
     <BrowserRouter>
       <GlobalStyle/>
    
       <Routes>
        <Route path='/' element={<Login/>}/>
        
        <Route path='wanzik' element={<ProtectedRoute/>}>
            <Route path="home" element ={<Home/>}/>
            <Route path='album' element={<UserLibrary/>}/>

        </Route>
       
       </Routes>

     </BrowserRouter>
  )
}

export default App
