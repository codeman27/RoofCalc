import React, { Component } from 'react'
import * as RealEstateAPI from '../RealEstateAPI';
import '../styles/App.css'
import SearchPage from './SearchPage'
import Results from './Results'
import { Transition, } from "react-spring/renderprops";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { teal} from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: teal,
  },
  overrides: {
    MuiInputLabel: {
      root: {
        'font-weight': 'bold'
      }
    }
  }
})

class App extends Component {
  state = {
    inputAddress: '',
    results: {},
    showResults: true,
    badAddress: false
  }

  switchScreens = () => {
    this.setState({showResults: this.state.showResults ? false : true})
  }

  updateAddress = (input) => {
    this.setState({inputAddress: input})
  }

  updateError = () => {
    this.setState({badAddress: false})
  }

  search = () => {
    if(this.state.inputAddress !== ''){
      RealEstateAPI.getAll(this.state.inputAddress).then(data => {
        if(data === 500) {
          this.setState({badAddress: !this.state.badAddress})
          return
        }
        this.setState({results: data})
        this.switchScreens()
      })
    }
  }

  render() {
    let transformFromDir = this.state.showResults ? 'translate3d(-100%,0,0)' : 'translate3d(100%,0,0)'
    let transformLeaveDir = this.state.showResults ? 'translate3d(100%,0,0)' : 'translate3d(-100%,0,0)'

    return (
      <div className='App-main'>
        <MuiThemeProvider theme={theme}>
          <Transition
            items={this.state.showResults}
            initial={false}
            from={{ position: 'absolute', opacity: 0, transform: transformFromDir, width: '80%'}}
            enter={{ opacity: 1, transform: 'translate3d(0%,0,0)', width: '80%'}}
            leave={{ opacity: 0, transform: transformLeaveDir, width: '80%' }}
            >
            {items =>
              items
                ? props => <div style={props} className='search-page'>
                  <SearchPage
                    updateAddress={this.updateAddress}
                    search={this.search}
                    badAddress={this.state.badAddress}
                    updateError={this.updateError}
                  />
                </div>
                : props => <div style={props} className='results-page'>
                  <Results
                    results={this.state.results}
                    switch={this.switchScreens}
                    inputAddress={this.state.inputAddress}
                  />
                </div>
            }
          </Transition>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App
