import {Redirect} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import {Component} from 'react'
import Header from '../Header'
import SideBar from '../SideBar'
import TrendingVideoCard from '../TrendingVideoCard'
import VideoCard from '../VideoCard'
import {
  LoaderContainer,
  HomeMainContainer,
  MainBodyContainer,
  DataDetailsContainer,
  TrendingVideosContainer,
  TrendingVideosSubContainer,
  TrendingLogoContainer,
  TrendingHeading,
  TrendingFailureView,
  TrendingFailureImage,
  TrendingFailureTitle,
  TrendingFailureDescription,
  TrendingFailureButton,
  SideBarContainer,
  SmallTrendingVideosContainer,
} from './styledComponents'
import SavedContext from '../../context/SavedContext'

const apiConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class TrendingVideos extends Component {
  state = {videoDetails: [], apiStatus: apiConstants.initial}

  componentDidMount = () => {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiConstants.loading})
    const api = `https://apis.ccbp.in/videos/trending`
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
      const updatedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        viewCount: each.view_count,
        publishedAt: each.published_at,
      }))
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

    return (
      <>
        <TrendingVideosContainer>
          {videoDetails.map(each => (
            <TrendingVideoCard data={each} key={each.id} />
          ))}
        </TrendingVideosContainer>
        <SmallTrendingVideosContainer>
          {videoDetails.map(each => (
            <TrendingVideoCard data={each} key={each.id} />
          ))}
        </SmallTrendingVideosContainer>
      </>
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
          <TrendingFailureView>
            {activeMode === 'Dark' ? (
              <TrendingFailureImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
                alt="failure view"
              />
            ) : (
              <TrendingFailureImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                alt="failure view"
              />
            )}
            <TrendingFailureTitle mode={activeMode}>
              Oops! Something Went Wrong
            </TrendingFailureTitle>
            <TrendingFailureDescription>
              We are having some trouble to complete your request. Please try
              again
            </TrendingFailureDescription>
            <TrendingFailureButton onClick={this.onClickRefresh}>
              Retry
            </TrendingFailureButton>
          </TrendingFailureView>
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

                <DataDetailsContainer mode={activeMode} data-testid="trending">
                  <TrendingVideosSubContainer mode={activeMode}>
                    <TrendingLogoContainer mode={activeMode}>
                      <HiFire size="30px" color="red" />
                    </TrendingLogoContainer>
                    <TrendingHeading mode={activeMode}>
                      Trending
                    </TrendingHeading>
                  </TrendingVideosSubContainer>
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

export default TrendingVideos
