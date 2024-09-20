import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0}

  onIncrement = () => {
    console.log('Increment Clicked')
    this.setState(munduState => {
      console.log(`previous state value : ${munduState.count}`)
      return {count: munduState.count + 1}
    })
  }

  onDecrement = () => {
    this.setState(prevState => {
      return {count: prevState.count - 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="count">{count}</p>
        <div>
          <button className="button" onClick={this.onIncrement}>
            Increase
          </button>
          <button className="button" onClick={this.onDecrement}>
            Decrease
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
