const FaqItem = props => {
  const {details, onClickSub, onClickAdd} = props
  const {id, questionText, answerText, qAnswered} = details
  const displayUrl = qAnswered
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  const alt = qAnswered ? 'minus' : 'plus'
  const text = qAnswered ? answerText : null

  const eventListenerFunction1 = () => {
    onClickAdd(id)
  }

  const eventListenerFunction2 = () => {
    onClickSub(id)
  }

  const eventListener = qAnswered
    ? eventListenerFunction2
    : eventListenerFunction1

  console.log(qAnswered)
  console.log(questionText)
  return (
    <li>
      <h1>{questionText}</h1>
      <button onClick={eventListener} type="button">
        <img src={displayUrl} alt={alt} />
      </button>
      {qAnswered && <p>{answerText}</p>}
    </li>
  )
}

export default FaqItem
