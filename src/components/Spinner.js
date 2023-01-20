import React, { Component } from 'react'
import loading from '../images/loading.gif'

export default class spinner extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center my-3">
        <img src={loading} alt="loading..." height="20%" width="10%"/>
      </div>
    )
  }
}
