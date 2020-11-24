import React from 'react'
import { connect } from 'react-redux'

function Display(props) {
  return (
    <div id="display">
      <h2>{props.currDisplay}</h2>
    </div>
  )
}

const mapStateToProps = (state) => ({
  currBank: state.currBank,
  currDisplay: state.currDisplay,
  volume: state.volume
})

export default connect(mapStateToProps)(Display);