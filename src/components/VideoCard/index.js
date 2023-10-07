import {formatDistanceToNow} from 'date-fns'
import {
  VideoCardContainer,
  VideoImage,
  VideoCardDescription,
  VideoDescriptionImage,
  VideoCardDetailsContainer,
  VideoCardTitle,
  VideoCardChannelName,
  VideoCardCount,
} from './styledComponents'
import SavedContext from '../../context/SavedContext'

const VideoCard = props => {
  const {data} = props
  const {channel, publishedAt, thumbnailUrl, title, viewCount} = data
  const {name, profileImageUrl} = channel
  const timePeriod = formatDistanceToNow(new Date(publishedAt))

  return (
    <SavedContext.Consumer>
      {value => {
        const {activeMode} = value
        return (
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
                <VideoCardChannelName>{name}</VideoCardChannelName>
                <VideoCardCount>
                  {viewCount}k Views . {timePeriod} ago
                </VideoCardCount>
              </VideoCardDetailsContainer>
            </VideoCardDescription>
          </VideoCardContainer>
        )
      }}
    </SavedContext.Consumer>
  )
}

export default VideoCard
