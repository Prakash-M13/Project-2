import React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
function StackCom() {
  return (
    <div>
      <Stack spacing={2} direction='row' >
          <Button>On</Button>
          <Button>off</Button>
      </Stack>
    </div>
  )
}

export default StackCom
