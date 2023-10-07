import styled from 'styled-components'

export const HomeMainContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const MainBodyContainer = styled.div`
  display: flex;
  //   margin-top: 10px;
  height: 91vh;
`
export const SideBarContainer = styled.div`
  flex-grow: 1;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const HomeContainer = styled.div``

export const DataDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${props => (props.mode === 'Dark' ? '#0f0f0f' : '#f8fafc')};
  padding-left: 25px;
  overflow-x: auto;
  width: 100%;
  padding-top: 25px;
  padding-right: 25px;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`

export const VideoPlayer = styled.div`
  padding: 0px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const SmallVideoPlayer = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`

export const VideoTitle = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => (props.mode === 'Dark' ? '#f8fafc' : '#475569')};
  margin-top: 25px;
`

export const VideoItemDetailsContainer = styled.div``

export const VideoDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto';
  font-weight: 400;
  margin-top: 0px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const VideoLikeContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

export const LikeShareSaveContainer = styled.button`
  display: flex;
  align-items: center;
  margin-right: 15px;
  font-size: 16px;
  background-color: transparent;
  border: 0px;
  color: #64748b;
`
export const VideoDetailsLabel = styled.p`
  margin-left: 5px;
  color: ${props => props.color};
`

export const VideoDetailsDesc = styled.p`
  color: #475569;
`

export const Separator = styled.hr`
  height: 2px;
  border: none;
  background-color: #cbd5e1;
  //   border-top: 10px solid #8c8b8b;
`
export const VideoDetails = styled.div`
  display: flex;
  flex-direction: column;
`
export const ChannelContainer = styled.div`
  display: flex;
`
export const ChannelImage = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 15px;
  margin-right: 10px;
`
export const ChannelDetails = styled.div``
export const ChannelName = styled.p`
  color: ${props => (props.mode === 'Dark' ? '#f8fafc' : '#475569')};
  margin-bottom: 0px;
  font-family: 'Roboto';
`
export const ChannelSubscribers = styled.p`
  color: ${props => (props.mode === 'Dark' ? '#f8fafc' : '#475569')};
  margin-top: 0px;
  font-family: 'Roboto';
`
export const VideoDescription = styled.p`
  color: ${props => (props.mode === 'Dark' ? '#f8fafc' : '#475569')};
  font-family: 'Roboto';
  font-size: 17px;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`

export const VideoItemDetailsView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
export const VideoItemDetailsImage = styled.img`
  width: 450px;
  margin-top: 40px;
  @media screen and (max-width: 768px) {
    width: 320px;
  }
`
export const VideoItemDetailsTitle = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.mode === 'Dark' ? '#f8fafc' : '#1e293b')};
  margin-bottom: 0px;
  margin-top: 40px;
  font-size: 28px;
  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`
export const VideoItemDetailsDescription = styled.p`
  color: ${props => (props.mode === 'Dark' ? ' #e2e8f0' : '#475569')};
  font-family: 'Roboto';
  font-size: 20px;
  width: 500px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 17px;
    width: 350px;
  }
`
export const VideoItemDetailsButton = styled.button`
  background-color: #4f46e5;
  color: white;
  padding: 10px 25px;
  font-family: 'Roboto';
  border: 0px;
  border-radius: 3px;
  cursor: pointer;
  font-weight: 700;
  margin-bottom: 30px;
`
