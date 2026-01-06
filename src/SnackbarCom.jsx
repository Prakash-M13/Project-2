import Snackbar from '@mui/material/Snackbar'
import React from 'react'
import Button from '@mui/material/Button'

function SnackbarCom() {
    const[open,setOpen]=React.useState(false)
  return (
    <div>
      <Button onClick={()=>setOpen(true)}>Show Snackbar</Button>
      <Snackbar open={open} autoHideDuration={3000} message='This is a notification' onClose={()=>setOpen(false)}/>
    </div>
  )
}

export default SnackbarCom
