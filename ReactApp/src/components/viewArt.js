import React from 'react'

class ViewArt extends React.Component {
  showAlert() {
    alert('Hello')
  }

  render() {
    return <button onClick={this.showAlert}>show alert</button>
  }
}

export default ViewArt
