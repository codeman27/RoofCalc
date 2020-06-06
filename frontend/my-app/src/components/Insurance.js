import React, {useState, useEffect} from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import InfoIcon from '@material-ui/icons/Info'
import { Checkbox,Tooltip, InputAdornment, TextField, ExpansionPanel, Typography, ExpansionPanelDetails, ExpansionPanelSummary, FormControl } from '@material-ui/core'

const Insurance = (props) => {
  const [values, setValues] = useState({
      pmiChecked: false,
      pmi: props.values.pmi.yearly.toLocaleString('en-US'),
      fiChecked: false,
      fi: props.values.fi.yearly.toLocaleString('en-US'),
      pi: props.values.pi.yearly.toLocaleString('en-US'),
      monthlyPayment: 0,
    })

  useEffect(() => {
    setValues({ ...values, pmiChecked: (parseInt(props.downPaymentPerc) < 20 ? true : false)});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props])

  useEffect(() => {
    let pmi = values.pmiChecked ? parseInt(values.pmi.replace(/,/g, '')) : 0
    let fi = values.fiChecked ? parseInt(values.fi.replace(/,/g, '')) : 0
    let pi = parseInt(values.pi.replace(/,/g, ''))

    setValues({ ...values, monthlyPayment: formatter.format(((fi + pmi + pi)/12).toFixed(0))});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.pmi, values.fi, values.fiChecked, values.pmiChecked, values.pi])

  const handleChange = (event, value) => {
    const re = /^[.,0-9\b]+$/;
    // if value is not blank, then test the regex and only accept numbers
    if (event.target.value === '' || re.test(event.target.value)) {
      setValues({ ...values, [event.target.name]: formatter.format(event.target.value.toString().replace(/,/g, '')).replace('$', '')})
    }
  }

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  })

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
      expandIcon={<ExpandMoreIcon className='expand-icon'/>}
      aria-controls='panel1a-content'
      id='panel1a-header'
      className='accordion-summary'
      >
        <Typography>Insurance</Typography>
        <Typography className='accordion-total'>{values.monthlyPayment}/Mo</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <FormControl fullWidth>
          <TextField
              label='Property Insurance'
              name='pi'
              variant='filled'
              value={values.pi}
              InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <p style={{marginBottom: '0px'}}>$</p>
                    </InputAdornment>
                  ),
                }}
              onChange={(event, value)=> handleChange(event, value)}
            />
          <div className='two-column'>
            <Checkbox
              color='primary'
              checked={values.pmiChecked}
              disabled={true}
            />
            <TextField
                label='Mortgage Insurance'
                name='pmi'
                variant='filled'
                disabled={!values.pmiChecked}
                value={values.pmiChecked ? values.pmi : 0}
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <p style={{marginBottom: '0px'}}>$</p>
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="start">
                      <p style={{marginBottom: '0px', marginRight: '15px'}}>/Year</p>
                      <Tooltip
                        title="Mortgage insurance is usually required under 20% down payment"
                        enterTouchDelay={100}
                        >
                        <InfoIcon />
                      </Tooltip>
                      </InputAdornment>
                    ),
                  }}
                onChange={(event, value)=> handleChange(event, value)}
              />
            </div>
            <div className='two-column'>
              <Checkbox
                color='primary'
                onChange={(event) => {setValues({ ...values, fiChecked: !values.fiChecked})}}
              />
              <TextField
                  label='Flood Insurance'
                  name='fi'
                  variant='filled'
                  disabled={!values.fiChecked}
                  value={values.fiChecked ? values.fi : 0}
                  InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <p style={{marginBottom: '0px'}}>$</p>
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="start">
                        <p style={{marginBottom: '0px', marginRight: '15px'}}>/Year</p>
                        <Tooltip
                          title="Flood insurance is required if the house is located in a frequent flood plain"
                          enterTouchDelay={0}
                          >
                          <InfoIcon />
                        </Tooltip>
                        </InputAdornment>
                      ),
                    }}
                  onChange={(event, value)=> handleChange(event, value)}
                />
            </div>
        </FormControl>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export default Insurance
