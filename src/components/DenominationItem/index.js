import './index.css'

const DenominationItem = props => {
  const {
    countItems,
    firstButton,
    secondButton,
    thirdButton,
    fourthButton,
  } = props
  const {value} = countItems
  const decrementButton = id => {
    firstButton(id)
    secondButton(id)
    thirdButton(id)
    fourthButton(id)
  }

  return (
    <li className="list-container">
      <button className="button" type="button" onClick={decrementButton}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
