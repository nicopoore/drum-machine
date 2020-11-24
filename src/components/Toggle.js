import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch } from '@material-ui/core'

const ONE = 'ONE'
const TWO = 'TWO'

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.toggleBank = this.toggleBank.bind(this)
    this.togglePower = this.togglePower.bind(this)
  }

  disabled = !this.props.power

  toggleBank = () => {
    if(this.props.power) {
      let nextBank
      let bankName
      switch(this.props.currBank) {
        case ONE:
          nextBank = TWO
          bankName = 'Heater Kit'
          break;
        case TWO:
          nextBank = ONE
          bankName = 'Smooth Piano Kit'
          break;
        default:
          nextBank = this.props.currBank
      }
  
      this.props.dispatch({
        type: 'TOGGLE_BANK',
        currBank: nextBank,
        currDisplay: bankName
      })
    }
  }

  togglePower = () => {
    let currDisplay
    if(this.props.power){
      currDisplay = 'Power off'
    } else {
      currDisplay = 'Power on'
    }

    this.props.dispatch({
      type: 'TOGGLE_POWER',
      power: !this.props.power,
      currDisplay: currDisplay
    })
  }


  render() {
    
    const bankToggler = 
      <div className="toggler" id="bankToggler">
        <p className="toggle-title">Toggle Bank</p>
        <br />
        <Switch
          onChange={this.toggleBank}
          disabled={!this.props.power}
          color="primary"
          label="Bank"
        />
      </div>

    const powerToggler =
      <div className="toggler" id="powerToggler">
        <p className="toggle-title">Power</p>
        <br />
        <Switch
          onChange={this.togglePower}
          checked={this.props.power}
          color="primary"
          label="Power"
        />
      </div>

    let togglerId = (
      this.props.toggleType === 'toggle/bank' ? 'bankToggler' : 'powerToggler'
    )

    return (
      <div className="toggler" id={togglerId}>
        {this.props.toggleType === 'toggle/bank' && bankToggler}
        {this.props.toggleType === 'toggle/power' && powerToggler}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  power: state.power,
  currBank: state.currBank
})

export default connect(mapStateToProps)(Toggle);