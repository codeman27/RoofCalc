import React, {useState, useEffect} from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {InputAdornment, TextField, ExpansionPanel, Typography, ExpansionPanelDetails, ExpansionPanelSummary, FormControl} from '@material-ui/core'

const RentalIncome = (props) => {
  const [values, setValues] = useState({
      rentAmount: props.values.zestimates.rent_zestimate.toLocaleString('en-US'),
      monthlyPayment: props.values.zestimates.rent_zestimate.toLocaleString('en-US'),
      vacancyAmount: (props.values.zestimates.rent_zestimate * 0.1).toLocaleString('en-US'),
      vacancyRate: 10,
      repairsAmount: (props.values.zestimates.rent_zestimate * 0.1).toLocaleString('en-US'),
      repairsRate: 10,
      propertyManagementAmount: (props.values.zestimates.rent_zestimate * 0.1).toLocaleString('en-US'),
      propertyManagementRate: 10,
    })

    const handleChange = (event) => {
      const re = /^[.,0-9\b]+$/
      // // if value is not blank, then test the regex and only accept numbers
      if (event.target.value === '' || re.test(event.target.value)) {
        if (event.target.name.includes('Amount')) {
          setValues({ ...values, [event.target.name]: formatter.format(event.target.value.toString().replace(/,/g, '')).replace('$', '')})
        } else if (event.target.value.match(/^\d*(\.\d*)?$/g)) {
            setValues({ ...values, [event.target.name]: event.target.value === '' ? 0 : event.target.value.replace(/(^0)(\d)/g, '$2')})
        }
      }
    }

  const monthlyPayment = () => {
    let rentAmountInt = parseInt(values.rentAmount.toString().replace(/,/g, ''))
    let vacancyAmountInt = parseInt(values.vacancyAmount.toString().replace(/,/g, ''))
    let repairAmountInt = parseInt(values.repairsAmount.toString().replace(/,/g, ''))
    let propertyManagementAmountInt = parseInt(values.propertyManagementAmount.toString().replace(/,/g, ''))
    let monthlyPaymentAmount = rentAmountInt - (vacancyAmountInt + repairAmountInt + propertyManagementAmountInt)

    setValues({...values, monthlyPayment: formatter.format(monthlyPaymentAmount)})
    props.changeValue(monthlyPaymentAmount, 'netRentalIncome')
    props.changeValue(rentAmountInt, 'grossRentalIncome')
  }

  useEffect(() => {
    monthlyPayment()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.vacancyAmount, values.rentAmount, values.repairsAmount, values.propertyManagementAmount])

  useEffect(() => {
    setValues((values) => ({ ...values, vacancyAmount: formatter.format(values.rentAmount.toString().replace(/,/g, '') * values.vacancyRate/100).replace('$', '')}))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.vacancyRate, values.rentAmount])

  useEffect(() => {
    setValues((values) => ({ ...values, repairsAmount: formatter.format(values.rentAmount.toString().replace(/,/g, '') * values.repairsRate/100).replace('$', '')}))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.repairsRate, values.rentAmount])

  useEffect(() => {
    setValues((values) => ({ ...values, propertyManagementAmount: formatter.format(values.rentAmount.toString().replace(/,/g, '') * values.propertyManagementRate/100).replace('$', '')}))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.propertyManagementRate, values.rentAmount])

  useEffect(() => {
    monthlyPayment()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


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
        <Typography>Rental Income</Typography>
        <Typography className='accordion-total income'>{values.monthlyPayment}/Mo</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <FormControl fullWidth>
        <TextField
            label='Rental Income'
            variant='filled'
            name='rentAmount'
            value={values.rentAmount}
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <p>$</p>
                  </InputAdornment>
                ),
              }}
            onChange={(event)=> handleChange(event)}
          />
          <div className='two-column'>
            <TextField
                label='Vacancy'
                className='amount-column'
                variant='filled'
                disabled={true}
                name='vacancyAmount'
                value={values.vacancyAmount}
                fullWidth={true}
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <p>$</p>
                      </InputAdornment>
                    ),
                  }}
                onChange={(event)=> handleChange(event)}
            />
            <TextField
                label=' '
                variant='filled'
                name='vacancyRate'
                value={values.vacancyRate}
                fullWidth={true}
                InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <p>%</p>
                      </InputAdornment>
                    ),
                  }}
                onChange={(event)=> handleChange(event)}
            />
          </div>
          <div className='two-column'>
            <TextField
                label='Repairs'
                className='amount-column'
                variant='filled'
                disabled={true}
                name='repairsAmount'
                value={values.repairsAmount}
                fullWidth={true}
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <p>$</p>
                      </InputAdornment>
                    ),
                  }}
                onChange={(event)=> handleChange(event)}
            />
              <TextField
                  label=' '
                  variant='filled'
                  name='repairsRate'
                  value={values.repairsRate}
                  fullWidth={true}
                  InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <p>%</p>
                        </InputAdornment>
                      ),
                    }}
                  onChange={(event)=> handleChange(event)}
            />
          </div>
          <div className='two-column'>
            <TextField
                label='Property Management'
                className='amount-column'
                variant='filled'
                disabled={true}
                name='propertyManagementAmount'
                value={values.propertyManagementAmount}
                fullWidth={true}
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <p>$</p>
                      </InputAdornment>
                    ),
                  }}
                onChange={(event)=> handleChange(event)}
            />
              <TextField
                  label=' '
                  variant='filled'
                  name='propertyManagementRate'
                  value={values.propertyManagementRate}
                  fullWidth={true}
                  InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <p>%</p>
                        </InputAdornment>
                      ),
                    }}
                  onChange={(event)=> handleChange(event)}
            />
          </div>
        </FormControl>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export default RentalIncome
