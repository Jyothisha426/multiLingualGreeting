import './index.css'

const LanguageImage = props => {
  const {imageDetails} = props
  const {imageUrl, imageAltText} = imageDetails

  return <img src={imageUrl} alt={imageAltText} className="language-image" />
}

export default LanguageImage
