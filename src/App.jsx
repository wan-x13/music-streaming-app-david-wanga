

import Login from './pages/Login/Login'
import { colors } from './utils/style'
import { useState , useEffect, memo} from 'react'
import Home from './pages/Home/Home'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import {  getAllTracks,getIdentity, getRecentlyPlayed, getToken } from './features/userSlice'
import UserLibrary from './pages/Your Library/UserLibrary'
import { getTracks } from './features/trackSlice'
import SpotifyWebApi from 'spotify-web-api-js';
import ProtectedRoute from './ProtectedRoute'
import { getPlaylist1, getPlaylist2, getPlaylist3, getPlaylist4} from './features/playlistSlice'
import {  setTracks } from './features/searchSlice'
import { closeWindow, openWindow } from './features/navigateSlice'


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
  const {searchTerm, items, isEmpty}  = useSelector(state=>state.search)
 

  let spotifyApi = new SpotifyWebApi()


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

    dispatch(getAllTracks())
    dispatch(getTracks(morceauSong))
    dispatch(getIdentity())
    dispatch(getRecentlyPlayed())
    // dispatch(getCategories())
    dispatch(getPlaylist1())
    dispatch(getPlaylist2())
    dispatch(getPlaylist3())
    dispatch(getPlaylist4())
  
    

  },[dispatch])

  useEffect(()=>{
    spotifyApi.setAccessToken(window.localStorage.getItem('token'))
    spotifyApi.searchTracks(searchTerm)
       .then(data=>data.tracks.items)
       .then( resp => resp.map(({id, name, album, duration_ms, uri})=>{
        let image = []
        if(album){
            const {images} = album
            image = [...images]
            
        }
        return{id, name, image, duration_ms, uri}
       })).then(resp=>dispatch(setTracks(resp)))
       
       .catch(err=>console.log(err))
       .finally((()=>{
         if(isEmpty.length === 0){
           return dispatch(closeWindow())
         }
         else if(searchTerm){
          return dispatch(openWindow())
         }
         
       })
       )






  },[searchTerm ])




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

export default memo(App)
