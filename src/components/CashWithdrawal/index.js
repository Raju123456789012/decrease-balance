import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {count: 2000}

  firstButton = () => {
    this.setState(prevState => ({
      count: prevState.count - 50,
    }))
  }

  secondButton = () => {
    this.setState(prevState => ({
      count: prevState.count - 100,
    }))
  }

  thirdButton = () => {
    this.setState(prevState => ({
      count: prevState.count - 250,
    }))
  }

  fourthButton = () => {
    this.setState(prevState => ({
      count: prevState.count - 500,
    }))
  }

  render() {
    const {count} = this.state
    const {denominationsList} = this.props
    return (
      <div className="container">
        <div className="container1">
          <div className="row-container">
            <h1 className="heading">S</h1>
            <p className="para">Sarah Williams</p>
          </div>
          <div className="row-container1">
            <div>
              <h1 className="balance">Your Balance</h1>
            </div>
            <div>
              <h1 className="count">{count}</h1>
              <p className="rupees">In Rupees</p>
            </div>
          </div>
          <h1 className="withdraw">Withdraw</h1>
          <p className="choose">CHOOSE SUM (IN RUPEES)</p>
          <ul>
            {denominationsList.map(eachItem => (
              <DenominationItem
                countItems={eachItem}
                key={eachItem.id}
                firstButton={this.firstButton}
                secondButton={this.secondButton}
                thirdButton={this.thirdButton}
                fourthButton={this.fourthButton}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
