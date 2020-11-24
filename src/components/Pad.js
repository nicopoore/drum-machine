import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PadButton } from './'

const ONE = 'ONE'
const TWO = 'TWO'

class Pad extends Component {
  componentDidMount() {
    document.querySelectorAll('.clip').forEach(clip => {
      clip.volume = this.props.volume / 100
    })
  }

  renderPads(i, arr) {
    return (
      <PadButton 
        keyCode={arr[i].keyCode}
        key={arr[i].keyCode}
        keyTrigger={arr[i].keyTrigger}
        id={arr[i].id}
        clip={arr[i].url}
      />
    )
  }

  render() {
    let pad;
    switch(this.props.currBank) {
      case ONE:
        pad = this.props.bankOne.map((_, i, arr) => this.renderPads(i, arr))
        return (
          <div className="pad-wrapper">
            {pad}
          </div>
        )
      case TWO:
        pad = this.props.bankTwo.map((_, i, arr) => this.renderPads(i, arr))
        return (
          <div className="pad-wrapper">
            {pad}
          </div>
        )
      default:
        return null
    }
  }
};

const mapStateToProps = (state) => ({
  currBank: state.currBank,
  bankOne: state.banks['bankOne'],
  bankTwo: state.banks['bankTwo'],
  volume: state.volume
});

export default connect(mapStateToProps)(Pad);