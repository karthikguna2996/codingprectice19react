import {Component} from 'react'

import FaqItem from '../FaqItem'

class Faqs extends Component {
  state = {
    finalList: [
      {
        id: 0,
        questionText: 'What is IRC?',
        answerText:
          'IRC is an Industry Ready Certification that represents your readiness for a job with the necessary skills.',
      },
      {
        id: 1,
        questionText: 'What is the medium of instruction?',
        answerText:
          'The courses would be delivered in English and Telugu. The program will be available in more vernacular languages soon.',
      },
      {
        id: 2,
        questionText:
          'Is there an EMI option to pay the fee for CCBP Tech 4.0 Intensive?',
        answerText:
          'Yes, EMI support is available for credit cards. Please select EMI option while making payment for more information.',
      },
      {
        id: 3,
        questionText: 'How will my doubts be cleared? What is the mechanism?',
        answerText:
          'You can ask your doubts in the discussions section and course mentor will answer them. You can also see the doubts asked by other students.',
      },
    ].map(eachItem => ({...eachItem, qAnswered: false})),
  }

  onClickAdd = uniqueId => {
    const {finalList} = this.state
    this.setState(prevState => ({
      finalList: finalList.map(eachItem => {
        if (eachItem.id === uniqueId) {
          return {...eachItem, qAnswered: true}
        }
        return {...eachItem}
      }),
    }))
  }

  onClickSub = uniqueId => {
    const {finalList} = this.state
    this.setState(prevState => ({
      finalList: finalList.map(eachItem => {
        if (eachItem.id === uniqueId) {
          return {...eachItem, qAnswered: false}
        }
        return {...eachItem}
      }),
    }))
  }

  render() {
    const {finalList} = this.state

    console.log(finalList)

    return (
      <div>
        <h1>FAQs</h1>
        <ul>
          {finalList.map(eachItem => (
            <FaqItem
              details={eachItem}
              onClickAdd={this.onClickAdd}
              onClickSub={this.onClickSub}
              key={eachItem.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Faqs
