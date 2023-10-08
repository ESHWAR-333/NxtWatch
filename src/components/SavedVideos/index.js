import {Redirect} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import {Component} from 'react'
import Header from '../Header'
import SideBar from '../SideBar'
import TrendingVideoCard from '../TrendingVideoCard'
import {
  LoaderContainer,
  HomeMainContainer,
  MainBodyContainer,
  DataDetailsContainer,
  TrendingVideosContainer,
  TrendingVideosSubContainer,
  TrendingLogoContainer,
  TrendingHeading,
  SideBarContainer,
  NoSavedVideosContainer,
  NoSavedVideoImg,
  NoSavedVideosTitle,
  NoSavedVideosDescription,
} from './styledComponents'
import SavedContext from '../../context/SavedContext'

class SavedVideos extends Component {
  renderFailureView = () => {}

  renderLoadingView = () => {
    console.log('loading')
    return (
      <LoaderContainer data-testid="loader">
        <Loader type="ThreeDots" color="#00306e" height="50" width="50" />
      </LoaderContainer>
    )
  }

  renderVideoDetails = () => (
    <SavedContext.Consumer>
      {value => {
        const {savedList, activeMode} = value
        if (savedList.length !== 0) {
          return (
            <TrendingVideosContainer>
              {savedList.map(each => (
                <TrendingVideoCard data={each} key={each.id} />
              ))}
            </TrendingVideosContainer>
          )
        }
        return (
          <NoSavedVideosContainer mode={activeMode}>
            <NoSavedVideoImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <NoSavedVideosTitle mode={activeMode}>
              No saved videos found
            </NoSavedVideosTitle>
            <NoSavedVideosDescription>
              You can save your videos while watching them
            </NoSavedVideosDescription>
          </NoSavedVideosContainer>
        )
      }}
    </SavedContext.Consumer>
  )

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
                  <TrendingVideosSubContainer mode={activeMode}>
                    <TrendingLogoContainer mode={activeMode}>
                      <HiFire size="30px" color="red" />
                    </TrendingLogoContainer>
                    <TrendingHeading mode={activeMode}>
                      Saved Videos
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

export default SavedVideos
