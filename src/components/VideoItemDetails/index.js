import {Redirect} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {Component} from 'react'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  HomeMainContainer,
  MainBodyContainer,
  LoaderContainer,
  DataDetailsContainer,
  SideBarContainer,
  VideoPlayer,
  VideoItemDetailsContainer,
  VideoTitle,
  VideoDetailsContainer,
  VideoLikeContainer,
  LikeShareSaveContainer,
  VideoDetailsLabel,
  VideoDetails,
  ChannelContainer,
  ChannelImage,
  ChannelDetails,
  ChannelName,
  ChannelSubscribers,
  VideoDescription,
  Separator,
  VideoItemDetailsView,
  VideoItemDetailsImage,
  VideoItemDetailsTitle,
  VideoItemDetailsDescription,
  VideoItemDetailsButton,
  SmallVideoPlayer,
  VideoDetailsDesc,
} from './styledComponents'
import SavedContext from '../../context/SavedContext'

const apiConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {videoDetails: [], apiStatus: apiConstants.initial}

  componentDidMount = () => {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiConstants.loading})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const api = `https://apis.ccbp.in/videos/${id}`
    const token = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `bearer ${token}`,
      },
    }
    const response = await fetch(api, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = {
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        description: data.video_details.description,
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
      }
      this.setState({
        videoDetails: updatedData,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  renderVideoDetailsView = () => {
    const {videoDetails} = this.state
    const {
      channel,
      description,
      publishedAt,
      id,
      title,
      videoUrl,
      viewCount,
    } = videoDetails

    const {name, profileImageUrl, subscriberCount} = channel
    let date = formatDistanceToNow(new Date(publishedAt))
    date = date.slice((5: 11))

    return (
      <SavedContext.Consumer>
        {value => {
          const {
            activeMode,
            updateSavedVideos,
            savedList,
            likedVideos,
            disLikedVideos,
            updateLikedVideos,
            updateDisLikedVideos,
          } = value
          const updateSavedList = () => {
            updateSavedVideos(videoDetails)
          }

          const updateLikedList = () => {
            updateLikedVideos(videoDetails)
          }
          const updateDisLikedList = () => {
            updateDisLikedVideos(videoDetails)
          }

          const color =
            savedList.find(each => each.id === id) === undefined
              ? ''
              : '#3b82f6'
          const likeColor =
            likedVideos.find(each => each.id === id) === undefined
              ? ''
              : '#3b82f6'
          const dislikeColor =
            disLikedVideos.find(each => each.id === id) === undefined
              ? ''
              : '#3b82f6'

          return (
            <VideoItemDetailsContainer data-testid="videoItemDetails">
              <VideoPlayer>
                <ReactPlayer width="100%" height="500px" url={videoUrl} />
              </VideoPlayer>
              <SmallVideoPlayer>
                <ReactPlayer width="100%" url={videoUrl} />
              </SmallVideoPlayer>
              <VideoTitle mode={activeMode}>{title}</VideoTitle>
              <VideoDetailsContainer>
                <VideoDetailsDesc mode={activeMode}>
                  {viewCount} Views . {date} ago
                </VideoDetailsDesc>
                <VideoLikeContainer>
                  <LikeShareSaveContainer onClick={updateLikedList}>
                    <BiLike color={likeColor} width="25px" />
                    <VideoDetailsLabel color={likeColor}>
                      Like
                    </VideoDetailsLabel>
                  </LikeShareSaveContainer>
                  <LikeShareSaveContainer onClick={updateDisLikedList}>
                    <BiDislike color={dislikeColor} width="25px" />
                    <VideoDetailsLabel color={dislikeColor}>
                      Dislike
                    </VideoDetailsLabel>
                  </LikeShareSaveContainer>
                  <LikeShareSaveContainer onClick={updateSavedList}>
                    <MdPlaylistAdd width="25px" color={color} />
                    <VideoDetailsLabel color={color}>Save</VideoDetailsLabel>
                  </LikeShareSaveContainer>
                </VideoLikeContainer>
              </VideoDetailsContainer>
              <Separator />
              <VideoDetails>
                <ChannelContainer>
                  <ChannelImage src={profileImageUrl} alt="channel logo" />
                  <ChannelDetails>
                    <ChannelName mode={activeMode}>{name}</ChannelName>
                    <ChannelSubscribers mode={activeMode}>
                      {subscriberCount}
                    </ChannelSubscribers>
                    <VideoDescription mode={activeMode}>
                      {description}
                    </VideoDescription>
                  </ChannelDetails>
                </ChannelContainer>
              </VideoDetails>
            </VideoItemDetailsContainer>
          )
        }}
      </SavedContext.Consumer>
    )
  }

  onClickRefresh = () => {
    this.getVideoDetails()
  }

  renderFailureView = () => (
    <SavedContext.Consumer>
      {value => {
        const {activeMode} = value
        return (
          <VideoItemDetailsView>
            {activeMode === 'Dark' ? (
              <VideoItemDetailsImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
                alt="failure view"
              />
            ) : (
              <VideoItemDetailsImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                alt="failure view"
              />
            )}
            <VideoItemDetailsTitle mode={activeMode}>
              Oops! Something Went Wrong
            </VideoItemDetailsTitle>
            <VideoItemDetailsDescription>
              We are having some trouble to complete your request. Please try
              again.
            </VideoItemDetailsDescription>
            <VideoItemDetailsButton onClick={this.onClickRefresh}>
              Retry
            </VideoItemDetailsButton>
          </VideoItemDetailsView>
        )
      }}
    </SavedContext.Consumer>
  )

  renderLoadingView = () => {
    console.log('loading')
    return (
      <LoaderContainer data-testid="loader">
        <Loader type="ThreeDots" color="#00306e" height="50" width="50" />
      </LoaderContainer>
    )
  }

  renderVideoDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiConstants.success:
        return this.renderVideoDetailsView()
      case apiConstants.failure:
        return this.renderFailureView()
      case apiConstants.loading:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const token = Cookies.get('jwt_token')
    if (token === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <SavedContext.Consumer>
        {value => {
          const {activeMode} = value
          return (
            <HomeMainContainer>
              <Header />
              <MainBodyContainer>
                <SideBarContainer>
                  <SideBar />
                </SideBarContainer>

                <DataDetailsContainer mode={activeMode}>
                  {this.renderVideoDetails()}
                </DataDetailsContainer>
              </MainBodyContainer>
            </HomeMainContainer>
          )
        }}
      </SavedContext.Consumer>
    )
  }
}

export default VideoItemDetails
