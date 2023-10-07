import {Route, Switch} from 'react-router-dom'
import {Component} from 'react'
import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import VideoItemDetails from './components/VideoItemDetails'
import TrendingVideos from './components/TrendingVideos'
import GamingVideos from './components/GamingVideos'
import SavedContext from './context/SavedContext'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import './App.css'

class App extends Component {
  state = {
    activeMode: 'Light',
    popUpClicked: false,
    savedList: [],
    likedVideos: [],
    disLikedVideos: [],
    currentRoute: 'Home',
  }

  changeActiveMode = e => {
    this.setState({activeMode: e})
  }

  changePopUpStatus = pop => {
    this.setState({popUpClicked: pop})
  }

  updateSavedVideos = videoDetails => {
    const {savedList} = this.state
    console.log(savedList)
    const k = savedList.find(each => each.id === videoDetails.id)
    if (k === undefined) {
      const updatedList = [...savedList, videoDetails]
      this.setState({
        savedList: updatedList,
      })
    } else {
      const updateVideoDetails = savedList.filter(
        each => each.id !== videoDetails.id,
      )
      this.setState({
        savedList: updateVideoDetails,
      })
    }
  }

  updateLikedVideos = videoDetails => {
    const {disLikedVideos, likedVideos} = this.state
    const verify = disLikedVideos.find(each => each.id === videoDetails.id)
    if (verify === undefined) {
      const k = likedVideos.find(each => each.id === videoDetails.id)
      if (k === undefined) {
        const updatedList = [...likedVideos, videoDetails]
        this.setState({
          likedVideos: updatedList,
        })
      } else {
        const updateVideoDetails = likedVideos.filter(
          each => each.id !== videoDetails.id,
        )
        this.setState({
          likedVideos: updateVideoDetails,
        })
      }
    }
  }

  updateDisLikedVideos = videoDetails => {
    const {disLikedVideos, likedVideos} = this.state
    const verify = likedVideos.find(each => each.id === videoDetails.id)
    if (verify === undefined) {
      const k = disLikedVideos.find(each => each.id === videoDetails.id)
      if (k === undefined) {
        const updatedList = [...disLikedVideos, videoDetails]
        this.setState({
          disLikedVideos: updatedList,
        })
      } else {
        const updateVideoDetails = disLikedVideos.filter(
          each => each.id !== videoDetails.id,
        )
        this.setState({
          disLikedVideos: updateVideoDetails,
        })
      }
    }
  }

  changeCurrentRoute = route => {
    this.setState({currentRoute: route})
  }

  render() {
    const {
      activeMode,
      savedList,
      likedVideos,
      disLikedVideos,
      currentRoute,
      popUpClicked,
    } = this.state
    console.log(popUpClicked)
    return (
      <SavedContext.Provider
        value={{
          activeMode,
          changeActiveMode: this.changeActiveMode,
          updateSavedVideos: this.updateSavedVideos,
          updateLikedVideos: this.updateLikedVideos,
          updateDisLikedVideos: this.updateDisLikedVideos,
          changeCurrentRoute: this.changeCurrentRoute,
          changePopUpStatus: this.changePopUpStatus,
          popUpClicked,
          likedVideos,
          disLikedVideos,
          savedList,
          currentRoute,
        }}
      >
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={TrendingVideos} />
          <ProtectedRoute exact path="/gaming" component={GamingVideos} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute component={NotFound} />
        </Switch>
      </SavedContext.Provider>
    )
  }
}

export default App
