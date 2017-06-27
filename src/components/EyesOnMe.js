// Code EyesOnMe Component Here

import React from 'react'


export default class EyesOnMe extends React.Component {
  
  focusFunc = () => console.log('Good!')

  blurFunc = () => console.log('Hey! Eyes on me!')

  render(){
    return (
      <button onFocus={this.focusFunc} onBlur={this.blurFunc}>Eyes over Here!</button>
    )

  }
}
