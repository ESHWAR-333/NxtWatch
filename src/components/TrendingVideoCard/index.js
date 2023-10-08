import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import {
  TrendingVideoCardContainer,
  TrendingVideoCardImage,
  TrendingVideoCardSubContainer,
  TrendingVideoCardTitle,
  TrendingVideoCardChannelName,
  VideoCardContainer,
  VideoImage,
  VideoCardDescription,
  VideoDescriptionImage,
  VideoCardDetailsContainer,
  VideoCardTitle,
  VideoCardChannelName,
  VideoCardCount,
  SmallTrendingVideoCardContainer,
} from './styledComponents'

import SavedContext from '../../context/SavedContext'

const TrendingVideoCard = props => {
  const {data} = props
  const {
    id,
    title,
    thumbnailUrl,
    channel,
    viewCount,
    publishedAt,
    timePeriod,
  } = data
  const {name, profileImageUrl} = channel
  let date = formatDistanceToNow(new Date(publishedAt))
  date = date.slice((9: 11))
  return (
    <SavedContext.Consumer>
      {value => {
        const {activeMode} = value
        return (
          <Link to={`/videos/${id}`} className="link-item">
            <TrendingVideoCardContainer>
              <TrendingVideoCardImage
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <TrendingVideoCardSubContainer>
                <TrendingVideoCardTitle mode={activeMode}>
                  {title}
                </TrendingVideoCardTitle>
                <TrendingVideoCardChannelName>
                  {name}
                </TrendingVideoCardChannelName>
                <TrendingVideoCardChannelName>
                  {viewCount} views <b>.</b> {date} ago
                </TrendingVideoCardChannelName>
              </TrendingVideoCardSubContainer>
            </TrendingVideoCardContainer>

            <SmallTrendingVideoCardContainer>
              <VideoCardContainer>
                <VideoImage src={thumbnailUrl} alt="video thumbnail" />
                <VideoCardDescription>
                  <VideoDescriptionImage
                    src={profileImageUrl}
                    alt="channel logo"
                    className="profile-image"
                  />
                  <VideoCardDetailsContainer>
                    <VideoCardTitle mode={activeMode}>{title}</VideoCardTitle>

                    <VideoCardCount>
                      <VideoCardChannelName>{name}</VideoCardChannelName>
                      <BsDot />
                      {viewCount}k Views <BsDot /> {timePeriod} ago
                    </VideoCardCount>
                  </VideoCardDetailsContainer>
                </VideoCardDescription>
              </VideoCardContainer>
            </SmallTrendingVideoCardContainer>
          </Link>
        )
      }}
    </SavedContext.Consumer>
  )
}

export default TrendingVideoCard
