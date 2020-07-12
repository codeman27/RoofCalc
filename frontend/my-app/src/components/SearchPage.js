import React, {useState} from 'react'
import { Button } from '@material-ui/core'
import LinearProgress from '@material-ui/core/LinearProgress'
import GoogleAutocomplete from './GoogleAutocomplete'

const SearchPage = (props) => {
    const [values, setValues] = useState({
        disabled: false
    })

    const handleClick = () => {
      setValues((values) => ({...values, disabled: true}))
      props.search(props.inputAddress)
    }

    return (
      <div className='search-page'>
        <div className='search-section'>
          <h1><span className='roof'>Logo</span>\Here</h1>
          <GoogleAutocomplete
            updateAddress={props.updateAddress}
          />
          {values.disabled && <LinearProgress />}
          </div>
        <div className='search-button'>
          <Button variant='outlined' color='primary' onClick={handleClick}
            disabled={values.disabled}>
            Search
          </Button>
        </div>
      </div>
    )
}

export default SearchPage;
