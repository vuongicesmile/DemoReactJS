//rcep , rce

import React, { Component } from 'react'

export class DemoLifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      visiable: true,
    }
    this.handleIncreaseNumber = this.handleIncreaseNumber.bind(this);
    this.handleVisibaleElement = this.handleVisibaleElement.bind(this);
  }

  componentDidMount() {
    console.log('vo day lan dau tien');
  }

  componentDidUpdate(prevProps, currentState) {
    console.log('prevProps', prevProps);
    console.log('prevState', currentState);
    console.log('currentState', this.state);
  }

  componentWillUnmount() {
    console.log('vo day');
  }

  /**
   * Function to handle the increment of the number
   */
  handleIncreaseNumber() {
    console.log('nhan vo day');
    this.setState((preState) => ({
      count: preState.count + 1
    }))
  }

  /**
   * function to handle the visibale element
   */
  handleVisibaleElement() {
    this.setState((prevState) => ({
      visiable: !prevState.visiable
    }))
  }


  render() {
    // cmmb
    /**
     * hello world
     */
    return (
      <>
        {this.state.visiable && <>
          <div>DemoLifeCycle</div>
          <p>Count : {this.state.count}</p>
          <button onClick={() => this.handleIncreaseNumber()}>Enter</button>
          <button onClick={() => this.handleVisibaleElement()}>Visiable</button>
        </>
        }
      </>
    )
  }
}

export default DemoLifeCycle