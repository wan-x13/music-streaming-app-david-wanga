

import Login from './components/Login/Login'
import styled from 'styled-components'
import { colors } from './utils/style'



const AppContainer = styled.div`
      background-color: ${colors.bagroundBlack};
      height : 100vh;
      display
`
function App() {


  return (
    <AppContainer>
      <Login/>
    </AppContainer>
  )
}

export default App
