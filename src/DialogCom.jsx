import React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button'

function DialogCom() {
    const [close,setClose]=React.useState(false);
  return (
    <div>
      <Button onClick={()=>setClose(true)}>Open Dialog</Button>
      <Dialog open={close} onClose={()=>setClose(false)}>
      <DialogTitle>Hello,This is a Dialog!</DialogTitle>
      </Dialog>
    </div>
  )
}

export default DialogCom
