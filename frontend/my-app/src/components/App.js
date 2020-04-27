import React, { Component } from 'react'
import * as RealEstateAPI from '../RealEstateAPI';
import '../styles/App.css'
import SearchPage from './SearchPage'
import Results from './Results'
import { Transition, } from "react-spring/renderprops";

class App extends Component {
  state = {
    inputAddress: '',
    results: {},
    showResults: true
  }

  switchScreens = () => {
    this.setState({showResults: this.state.showResults ? false : true})
  }

  search = (input) => {
    this.setState({inputAddress: input})
    if(this.state.inputAddress !== ''){
      RealEstateAPI.getAll(this.state.inputAddress).then(data => {
        this.setState({results: data})
      })

    }
    this.switchScreens()
  }

  render() {
    let transformFromDir = this.state.showResults ? 'translate3d(-100%,0,0)' : 'translate3d(100%,0,0)'
    let transformLeaveDir = this.state.showResults ? 'translate3d(100%,0,0)' : 'translate3d(-100%,0,0)'
    
    return (
      <div className='App-main'>
          <Transition
            items={this.state.showResults}
            initial={false}
            from={{ position: 'absolute', opacity: 0, transform: transformFromDir}}
            enter={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
            leave={{ opacity: 0, transform: transformLeaveDir }}>
            {items =>
              items
                ? props => <div style={props}>
                  <SearchPage
                    inputAddress = {this.state.inputAddress}
                    search = {this.search}
                  />
                </div>
                : props => <div style={props}>
                  <Results
                    results= {this.state.results}
                    switch = {this.switchScreens}
                  />
                </div>
            }
        </Transition>
      </div>
    )
  }
}

export default App