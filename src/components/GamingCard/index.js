import {Link} from 'react-router-dom'
import {
  GamingCardContainer,
  GamingCardImage,
  GamingCardSubContainer,
  GamingCardTitle,
  GamingCardDetails,
} from './styledComponents'
import SavedContext from '../../context/SavedContext'

const GamingCard = props => {
  const {data} = props
  const {id, title, thumbnailUrl, viewCount} = data
  return (
    <SavedContext.Consumer>
      {value => {
        const {activeMode} = value
        return (
          <Link to={`/videos/${id}`} className="link-item">
            <GamingCardContainer>
              <GamingCardImage src={thumbnailUrl} alt="video thumbnail" />
              <GamingCardSubContainer>
                <GamingCardTitle mode={activeMode}>{title}</GamingCardTitle>
                <GamingCardDetails>
                  {viewCount} Watching WorldWide
                </GamingCardDetails>
              </GamingCardSubContainer>
            </GamingCardContainer>
          </Link>
        )
      }}
    </SavedContext.Consumer>
  )
}

export default GamingCard
