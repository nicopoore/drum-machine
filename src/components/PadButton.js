import React, { Component } from 'react'
import { connect } from 'react-redux'

class PadButton extends Component {
  constructor(props) {
    super(props);
    this.handlePad = this.handlePad.bind(this)
  }

  handlePad = () => {
    if(this.props.power) {
      const sound = document.getElementById(this.props.keyTrigger)
      sound.currentTime = 0
      sound.play()
      document.getElementById(this.props.id).focus()

      this.props.dispatch({
        type: 'UPDATE_DISPLAY',
        currDisplay: this.props.id
      })
    }
  }

  handleKey = (e) => {
    if(e.key.toUpperCase() === this.props.keyTrigger) {
      this.handlePad()
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', (e) => {
      this.handleKey(e)
    })
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', (e) => {
      this.handleKey(e)
    })
  }

  render() {
    return (
      <button 
        className="drum-pad"
        id={this.props.id}
        onClick={this.handlePad}
      >
        <audio
          className="clip"
          id={this.props.keyTrigger}
          src={this.props.clip}
        />
        {this.props.keyTrigger}
      </button>
    )
  }
}

const mapStateToProps = (state) => ({
  power: state.power,
  currDisplay: state.currDisplay,
  volume: state.volume
})

export default connect(mapStateToProps)(PadButton)