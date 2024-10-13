import { useState } from 'react'
import './App.css'
import MUIButton from './components/MUIButton'
import MUITextField from './components/MUITextField'
import MUISelect from './components/MUISelect'
import MUICheckbox from './components/MUICheckbox'
import MUIAutoComplete from './components/MUIAutoComplete'
import MUIBox from './components/MUIBox'
import MUIStack from './components/MUIStack'
import MUIGrid from './components/MUIGrid'
import MUICard from './components/MUICard'


function App() {
  return (
    <div>
      {/* <MUIButton />
      <MUITextField />
      <MUISelect />
      <MUICheckbox />
      <MUIAutoComplete />
      <MUIBox />
      <MUIStack /> 
      <MUIGrid /> */}
      <MUICard />
    </div>
  )
}

export default App