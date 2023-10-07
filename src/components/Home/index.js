import {Redirect, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import VideoCard from '../VideoCard'
import Header from '../Header'
import SideBar from '../SideBar'
import BannerSection from '../BannerSection'
import SavedContext from '../../context/SavedContext'
import {
  HomeMainContainer,
  MainBodyContainer,
  SideBarContainer,
  HomeContainer,
  HomeSubContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
  VideosList,
  LoaderContainer,
  VideoListItem,
  HomeFailureView,
  HomeFailureImage,
  HomeFailureTitle,
  HomeFailureDescription,
  HomeFailureButton,
  NoVideoImage,
  NoVideoContainer,
  NoVideoHeading,
  NoVideoDescription,
  RetryButton,
} from './styledComponents'
import './index.css'

const apiConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    videos: [],
    apiStatus: apiConstants.initial,
    search: '',
  }

  componentDidMount() {
    this.fetchVideos()
  }

  fetchVideos = async () => {
    this.setState({apiStatus: apiConstants.loading})
    const {search} = this.state
    const api = `https://apis.ccbp.in/videos/all?search=${search}`
    const token = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `bearer ${token}`,
      },
    }
    const response = await fetch(api, options)
    const data = await response.json()
    if (response.ok) {
      const updatedData = data.videos.map(each => ({
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({videos: updatedData, apiStatus: apiConstants.success})
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  onChangeUpdate = e => {
    this.setState({search: e.target.value})
  }

  onClickSearch = () => {
    this.fetchVideos()
  }

  onClickRetry = () => {
    this.fetchVideos()
  }

  renderVideoDetailsView = () => {
    const {videos} = this.state
    if (videos.length === 0) {
      return (
        <SavedContext.Consumer>
          {value => {
            const {activeMode} = value
            return (
              <NoVideoContainer data-testid="home">
                <NoVideoImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
                  alt="no videos"
                />
                <NoVideoHeading mode={activeMode}>
                  No Search results found
                </NoVideoHeading>
                <NoVideoDescription>
                  Try different key words or remove search filter
                </NoVideoDescription>
                <RetryButton onClick={this.onClickRetry}>Retry</RetryButton>
              </NoVideoContainer>
            )
          }}
        </SavedContext.Consumer>
      )
    }
    return (
      <VideosList>
        {videos.map(each => (
          <Link key={each.id} to={`/videos/${each.id}`} className="link-item">
            <VideoListItem className="list-item" key={each.id}>
              <VideoCard data={each} />
            </VideoListItem>
          </Link>
        ))}
      </VideosList>
    )
  }

  renderLoadingView = () => {
    console.log('loading')
    return (
      <LoaderContainer data-testid="loader">
        <Loader type="ThreeDots" color="#00306e" height="50" width="50" />
      </LoaderContainer>
    )
  }

  renderFailureView = () => (
    <SavedContext.Consumer>
      {value => {
        const {activeMode} = value
        return (
          <HomeFailureView data-testid="home">
            {activeMode === 'Dark' ? (
              <HomeFailureImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
                alt="failure view"
              />
            ) : (
              <HomeFailureImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                alt="failure view"
              />
            )}
            <HomeFailureTitle mode={activeMode}>
              Oops! Something Went Wrong
            </HomeFailureTitle>
            <HomeFailureDescription>
              We are having some trouble to complete your request. Please try
              again
            </HomeFailureDescription>
            <HomeFailureButton type="button" onClick={this.onClickSearch}>
              Retry
            </HomeFailureButton>
          </HomeFailureView>
        )
      }}
    </SavedContext.Consumer>
  )

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
          const {activeMode, search} = value
          return (
            <HomeMainContainer data-testid="home">
              <Header />
              <MainBodyContainer>
                <SideBarContainer>
                  <SideBar />
                </SideBarContainer>
                <HomeContainer mode={activeMode}>
                  <BannerSection />
                  <HomeSubContainer>
                    <SearchContainer>
                      <SearchInput
                        placeholder="Search"
                        type="search"
                        value={search}
                        onChange={this.onChangeUpdate}
                      />
                      <SearchButton
                        type="button"
                        onClick={this.onClickSearch}
                        data-testid="searchButton"
                      >
                        <AiOutlineSearch color=" #94a3b8" size="20px" />
                      </SearchButton>
                    </SearchContainer>
                    {this.renderVideoDetails()}
                  </HomeSubContainer>
                </HomeContainer>
              </MainBodyContainer>
            </HomeMainContainer>
          )
        }}
      </SavedContext.Consumer>
    )
  }
}

export default Home
