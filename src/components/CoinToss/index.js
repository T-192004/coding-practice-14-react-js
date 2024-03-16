// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {coinValue: 0, tossCount: 0, headsCount: 0, tailsCount: 0}

  tossThecoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    this.setState({coinValue: tossResult})
    this.setState(prevState => ({tossCount: prevState.tossCount + 1}))
    if (tossResult === 0) {
      this.setState(prevState => ({headsCount: prevState.headsCount + 1}))
    } else {
      this.setState(prevState => ({tailsCount: prevState.tailsCount + 1}))
    }
  }

  render() {
    const {coinValue, tossCount, headsCount, tailsCount} = this.state
    const coinImage =
      coinValue === 0 ? (
        <img
          className="coin-img"
          src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
          alt="toss result"
        />
      ) : (
        <img
          className="coin-img"
          src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
          alt="toss result"
        />
      )
    return (
      <div className="coin-toss-container">
        <div className="coin-toss-card">
          <h1 className="coin-toss-heading">Coin Toss Game</h1>
          <p className="coin-toss-description">Heads (or) Tails</p>
          {coinImage}
          <button className="toss-btn" type="button" onClick={this.tossThecoin}>
            Toss Coin
          </button>
          <ul className="result-section">
            <li className="result-count">Total: {tossCount}</li>
            <li className="result-count">Heads: {headsCount}</li>
            <li className="result-count">Tails: {tailsCount}</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default CoinToss
