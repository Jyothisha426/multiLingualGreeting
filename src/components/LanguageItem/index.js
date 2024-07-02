import './index.css'

const LanguageItem = props => {
  const {details, isActive, displayGreeting} = props
  const {id, buttonText} = details

  const displayLanguageGreeting = () => {
    displayGreeting(id)
  }

  const activeTabClassName = isActive
    ? 'active-language-button'
    : 'language-button'

  return (
    <li className="button-list-item">
      <button
        type="button"
        className={activeTabClassName}
        onClick={displayLanguageGreeting}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default LanguageItem
