import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {Component} from 'react'
import Header from '../Header'
import SideBar from '../SideBar'
import SavedContext from '../../context/SavedContext'
import {
  HomeMainContainer,
  MainBodyContainer,
  SideBarContainer,
  HomeContainer,
  HomeSubContainer,
  NotFoundView,
  NotFoundImage,
  NotFoundTitle,
  NotFoundDescription,
} from './styledComponents'

class NotFound extends Component {
  renderFailureView = () => (
    <SavedContext.Consumer>
      {value => {
        const {activeMode} = value
        return (
          <NotFoundView>
            {activeMode === 'Dark' ? (
              <NotFoundImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png"
                alt="not found"
              />
            ) : (
              <NotFoundImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                alt="not found"
              />
            )}
            <NotFoundTitle mode={activeMode}>Page Not Found</NotFoundTitle>
            <NotFoundDescription>
              we are sorry, the page you requested could not be found.
            </NotFoundDescription>
          </NotFoundView>
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
                <HomeContainer mode={activeMode}>
                  <HomeSubContainer>
                    {this.renderFailureView()}
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

export default NotFound
