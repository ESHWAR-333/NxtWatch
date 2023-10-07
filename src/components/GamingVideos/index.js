import {Redirect} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import {Component} from 'react'
import Header from '../Header'
import SideBar from '../SideBar'
import GamingCard from '../GamingCard'
import {
  LoaderContainer,
  HomeMainContainer,
  MainBodyContainer,
  DataDetailsContainer,
  GamingVideosContainer,
  GamingVideosSubContainer,
  GamingLogoContainer,
  GamingHeading,
  GamingFailureView,
  GamingFailureImage,
  GamingFailureTitle,
  SideBarContainer,
  GamingFailureDescription,
  GamingFailureButton,
} from './styledComponents'
import SavedContext from '../../context/SavedContext'

const apiConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class GamingVideos extends Component {
  state = {videoDetails: [], apiStatus: apiConstants.initial}

  componentDidMount = () => {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiConstants.loading})
    const api = `https://apis.ccbp.in/videos/gaming`
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
        viewCount: each.view_count,
      }))
      this.setState({
        videoDetails: updatedData,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  onClickRefresh = () => {
    this.getVideoDetails()
  }

  renderVideoDetailsView = () => {
    const {videoDetails} = this.state

    return (
      <GamingVideosContainer>
        {videoDetails.map(each => (
          <GamingCard data={each} key={each.id} />
        ))}
      </GamingVideosContainer>
    )
  }

  renderFailureView = () => (
    <SavedContext.Consumer>
      {value => {
        const {activeMode} = value
        return (
          <GamingFailureView>
            {activeMode === 'Dark' ? (
              <GamingFailureImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
                alt="failure view"
              />
            ) : (
              <GamingFailureImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                alt="failure view"
              />
            )}
            <GamingFailureTitle mode={activeMode}>
              Oops! Something Went Wrong
            </GamingFailureTitle>
            <GamingFailureDescription>
              We are having some trouble to complete your request. Please try
              again
            </GamingFailureDescription>
            <GamingFailureButton onClick={this.onClickRefresh}>
              Retry
            </GamingFailureButton>
          </GamingFailureView>
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
                <DataDetailsContainer mode={activeMode} data-testid="gaming">
                  <GamingVideosSubContainer mode={activeMode}>
                    <GamingLogoContainer mode={activeMode}>
                      <HiFire size="30px" color="red" />
                    </GamingLogoContainer>
                    <GamingHeading mode={activeMode}>Gaming</GamingHeading>
                  </GamingVideosSubContainer>
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

export default GamingVideos
