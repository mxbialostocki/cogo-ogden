import React from 'react'
import { Grid, Typography } from '@material-ui/core'

const RejectedWord = (word) => {
  return (
    <React.Fragment>
      <Grid item>
        <Typography>{word}</Typography>
      </Grid>
    </React.Fragment>
  )
}

export default RejectedWord