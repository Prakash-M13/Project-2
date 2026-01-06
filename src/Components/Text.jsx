import TextField from '@mui/material/TextField'
import React from 'react'

function Text() {
  return (
    <form >
      <TextField style={{marginBottom:"20px"}} label='Name' variant='outlined' /> <br />
      <TextField label='Email' variant='outlined' /> <br /> <hr />
    </form>
  )
}

export default Text
