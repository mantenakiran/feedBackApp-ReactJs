// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isEmojiSelected: false}

  feedbackSubmitted = () => {
    this.setState({isEmojiSelected: true})
  }

  feedBackContainer = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="card-name-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance
        </h1>
        <ul className="list-container">
          {emojis.map(eachItem => (
            <li key={eachItem.id} className="list-items">
              <button
                onClick={this.feedbackSubmitted}
                type="button"
                className="button"
              >
                <img
                  alt={eachItem.name}
                  className="image"
                  src={eachItem.imageUrl}
                />
              </button>
              <p className="names">{eachItem.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  thankyouContainer = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thankyou-container">
        <img alt="love emoji" className="thank" src={loveEmojiUrl} />
        <h1 className="thank-text">Thank You!</h1>
        <p className="description">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isEmojiSelected} = this.state

    return (
      <div className="bg-container">
        <div className="inner-container">
          {isEmojiSelected
            ? this.thankyouContainer()
            : this.feedBackContainer()}
        </div>
      </div>
    )
  }
}
export default Feedback
