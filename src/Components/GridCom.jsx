import React from 'react'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'

function GridCom() {
  return (
    <div>
       <Grid container spacing={2}>
         <Grid item xs={6}><Paper>Left</Paper></Grid>
         <Grid item xs={6}><Paper>Right</Paper></Grid>


       </Grid>
    </div>
  )
}

export default GridCom
