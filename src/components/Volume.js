import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Slider, Grid } from '@material-ui/core'
import { VolumeDown, VolumeUp } from '@material-ui/icons'

class Volume extends Component {
  
  handleChange(e, value) {
    if(this.props.power) {
      document.querySelectorAll('.clip').forEach(clip => {
        clip.volume = parseFloat(value) / 100
      })
  
      let newDisplay = `Volume: ${value}%`
  
      switch(value) {
        case 0:
          newDisplay = `Volume: Muted`;
          break;
        case 100:
          newDisplay = `Volume: Max`;
          break;
        default:
          break;
      }
  
      this.props.dispatch({
        type: 'VOLUME_CHANGE',
        volume: value,
        currDisplay: newDisplay
      })
    }
  }

    

  render() {
    return (
      <div id="volume">
        <Grid container spacing={2}>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider
              value={this.props.volume}
              step={1}
              min={0}
              max={100}
              onChange={this.handleChange.bind(this)}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
            />
          </Grid>
          <Grid item>
            <VolumeUp />
          </Grid>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  power: state.power,
  volume: state.volume
})

export default connect(mapStateToProps)(Volume);