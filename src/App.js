import {Component} from 'react'

import LanguageItem from './components/LanguageItem'

import LanguageImage from './components/LanguageImage'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class App extends Component {
  state = {activeLangId: languageGreetingsList[0].id}

  displayGreeting = id => {
    this.setState({activeLangId: id})
  }

  displayFilteredLanguage = () => {
    const {activeLangId} = this.state
    const filteredList = languageGreetingsList.filter(
      each => each.id === activeLangId,
    )
    return filteredList
  }

  render() {
    const {activeLangId} = this.state
    const getFilteredList = this.displayFilteredLanguage()
    return (
      <div className="main-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="languages-list">
          {languageGreetingsList.map(eachLang => (
            <LanguageItem
              key={eachLang.id}
              details={eachLang}
              isActive={eachLang.id === activeLangId}
              displayGreeting={this.displayGreeting}
            />
          ))}
        </ul>
        <div className="image-container">
          {getFilteredList.map(each => (
            <LanguageImage imageDetails={each} key={each.id} />
          ))}
        </div>
      </div>
    )
  }
}

export default App
