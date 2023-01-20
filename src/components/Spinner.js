import React, { Component } from 'react'
import loading from './loading.gif'

export default class spinner extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center my-3">
        <img src={loading} alt="loading..." />
      </div>
    )
  }
}
