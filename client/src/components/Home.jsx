import React, { useState } from 'react'
import { Input, Button, Grid } from '@material-ui/core'

import RejectedWord from './RejectedWord'

const Home = ({ogden}) => {

  const [ inputString, setInputString ] = useState('')
  const [ evaluation, setEvaluation ] = useState('')
  // create empty array to store rejected words
  const [ rejectedWords, setRejectedWords ] = useState([])

  const ogdenString = ogden

  const validWordsArray = ogdenString.split(' ')

  
  function checkWords(string) {
    // create an array from the input
    const inputArray = string.split(' ')

    const errorMessage = "oh no! the following words are invalid:"
    inputArray.map(word => {
      if (validWordsArray.includes(word)) {
        return
      } else {
        rejectedWords.push(word)
      }
    })
    if (rejectedWords.length >= 1) {
      setEvaluation(errorMessage)
    } else {
      setEvaluation("congratulations, excellent spelling!")
    }
    return evaluation

  }

  return (
    <React.Fragment>
      <Grid container direction="column" style={{ width: '80%' }}>
        <Grid item style={{ width: '80%' }}>
          <Input disableUnderline style={{ width: '80%' }}size="big" type="text" value={inputString} onChange={(event) => { setInputString(event.target.value) }} placeholder="Please type some words here!"/>
        </Grid>
        <Grid item>
          <Button size={"large"} onClick={() => {
            if (inputString) {
              checkWords(inputString)
            }
            setInputString('')
          }}>
            Check Spelling
          </Button>
        </Grid>
        <Grid item>
          {evaluation}
        </Grid>
        <Grid item>
        {
          rejectedWords.map(word => {
            return <RejectedWord key={word} word={word} />
          })
        }
        </Grid>
      </Grid>      
      
    </React.Fragment>
  )
}

export default Home
