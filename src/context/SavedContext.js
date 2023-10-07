import React from 'react'

const SavedContext = React.createContext({
  savedList: [],
  activeMode: false,
  likedVideos: [],
  disLikedVideos: [],
  currentRoute: 'Home',
  changeCurrentRoute: () => {},
  updateSavedVideos: () => {},
  updateLikedVideos: () => {},
  updateDisLikedVideos: () => {},
  changeActiveMode: () => {},
})

export default SavedContext
