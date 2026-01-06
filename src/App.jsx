import { useState } from 'react'
import './App.css'
import ButtonCom from './Components/ButtonCom'
import Text from './Components/Text'
import TypographyCom from './Components/TypographyCom'
import BoxCom from './Components/BoxCom'
import GridCom from './Components/GridCom'
import StackCom from './Components/StackCom'
import AppbarCom from './AppbarCom'
import SnackbarCom from './SnackbarCom'
import DialogCom from './DialogCom'
import ThemeCom from './ThemeCom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ButtonCom />  <Text /> <TypographyCom/> <BoxCom/> <GridCom/>
      <StackCom/> <AppbarCom/> <SnackbarCom/> <DialogCom/>
      <ThemeCom/>
    </div>
  )
}

export default App
