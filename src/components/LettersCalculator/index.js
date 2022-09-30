// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onChangeSearchInput = event => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="app-container">
        <div>
          <h1 className="app-heading">Calculate the Letters you enter</h1>
          <label htmlFor="input" className="label-heading">
            Enter the phrase
          </label>{' '}
          <br />
          <input
            type="text"
            onChange={this.onChangeSearchInput}
            // value={searchInput}
            id="input"
            className="input-styles"
            placeholder="Enter the please"
          />
          <br />
          <p className="paragraph">No.of letters: {count}</p>
        </div>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt=" letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
