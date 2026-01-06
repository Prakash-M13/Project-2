import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import React from 'react'

function AppbarCom() {
  return (
    <div>
      <AppBar position='static'>
        <Typography className='wap' variant='h6'>My App</Typography>
        <Typography style={{backgroundColor:"black", display:"flex"}} variant='button'>Home</Typography>

      </AppBar>
    </div>
  )
}

export default AppbarCom
