import styled from 'styled-components'

export const HomeMainContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const MainBodyContainer = styled.div`
  display: flex;
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
  overflow-x: auto;
  width: 100%;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`

export const GamingVideosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
  }
`
export const GamingVideosSubContainer = styled.div`
  background-color: ${props => (props.mode === 'Dark' ? '#212121' : '#f1f1f1')};
  padding-left: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  align-items: center;
`
export const GamingLogoContainer = styled.div`
  background-color: ${props => (props.mode === 'Dark' ? '#181818' : '#e2e8f0')};
  padding: 20px 22px;
  border-radius: 80px;
  margin-right: 12px;
`
export const GamingHeading = styled.h1`
  color: ${props => (props.mode === 'Dark' ? '#f8fafc' : ' #1e293b')};
  font-family: 'Roboto';
`

export const GamingFailureView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
export const GamingFailureImage = styled.img`
  width: 450px;
  margin-top: 40px;
  @media screen and (max-width: 768px) {
    width: 320px;
  }
`
export const GamingFailureTitle = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.mode === 'Dark' ? '#f8fafc' : '#1e293b')};
  margin-bottom: 0px;
  margin-top: 40px;
  font-size: 28px;
  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`
export const GamingFailureDescription = styled.p`
  color: ${props => (props.mode === 'Dark' ? ' #e2e8f0' : '#475569')};
  font-family: 'Roboto';
  font-size: 20px;
  width: 500px;
  text-align: center;
  @media screen and (max-width: 768px) {
    width: 350px;
    font-size: 18px;
  }
`
export const GamingFailureButton = styled.button`
  background-color: #4f46e5;
  color: white;
  padding: 10px 25px;
  font-family: 'Roboto';
  border: 0px;
  border-radius: 3px;
  cursor: pointer;
  font-weight: 700;
  @media screen and (max-width: 768px) {
    margin-bottom: 25px;
  }
`
