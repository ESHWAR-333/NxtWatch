import styled from 'styled-components'

export const HomeMainContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const MainBodyContainer = styled.div`
  display: flex;
  height: 91vh;
  background-size: cover;
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
  overflow-x: auto;
  width: 100%;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`

export const TrendingVideosContainer = styled.div``
export const TrendingVideosSubContainer = styled.div`
  background-color: ${props => (props.mode === 'Dark' ? '#212121' : '#f1f1f1')};
  padding-left: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  align-items: center;
`
export const TrendingLogoContainer = styled.div`
  background-color: ${props => (props.mode === 'Dark' ? '#181818' : '#e2e8f0')};
  padding: 20px 22px;
  border-radius: 80px;
  margin-right: 12px;
`
export const TrendingHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.mode === 'Dark' ? '#f8fafc' : ' #1e293b')};
`

export const NoSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  align-items: center;
`
export const NoSavedVideoImg = styled.img`
  width: 450px;
  @media screen and (max-width: 768px) {
    width: 295px;
  }
`
export const NoSavedVideosTitle = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.mode === 'Dark' ? '#f8fafc' : '#1e293b')};
  margin-bottom: 0px;
  margin-top: 40px;
  font-size: 25px;
`
export const NoSavedVideosDescription = styled.p`
  font-family: 'Roboto';
  color: #475569;
  margin-top: 10px;
`
