import styled from 'styled-components'

export const HomeMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  filter: ${props => (props.popup ? 'blur(2px)' : '')};
`
export const MainBodyContainer = styled.div`
  display: flex;
  margin-top: 0px;
  height: 91vh;
`
export const SideBarContainer = styled.div`
  //   flex-grow: 1;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const HomeContainer = styled.div`
  height: 100%;
  overflow-x: auto;
  flex-grow: 5;
  background-color: ${props => (props.mode === 'Dark' ? '#0f0f0f' : '#f8fafc')};
  //   padding-top: 25px;
`
export const SearchContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const SearchInput = styled.input`
  width: 300px;
  border: 1px solid #94a3b8;
  padding: 5px;
  outline: none;
`

export const SearchButton = styled.button`
  padding: 1px 15px;
  border: 1px solid #94a3b8;
  background-color: #f1f5f9;
`

export const VideosList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0px;
  margin-top: 0px;
`
export const VideoListItem = styled.li`
  list-style-type: none;
  /* padding: 0px;
  margin: 0px;
  margin-right: 10px; */
`

export const HomeSubContainer = styled.div`
  margin-left: 30px;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`

export const HomeFailureView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
export const HomeFailureImage = styled.img`
  width: 450px;
  @media screen and (max-width: 768px) {
    width: 320px;
  }
`
export const HomeFailureTitle = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.mode === 'Dark' ? '#f8fafc' : '#1e293b')};
  margin-bottom: 0px;
  margin-top: 40px;
  font-size: 28px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`
export const HomeFailureDescription = styled.p`
  color: ${props => (props.mode === 'Dark' ? ' #e2e8f0' : '#475569')};
  font-family: 'Roboto';
  font-size: 20px;
  width: 500px;
  text-align: center;
  @media screen and (max-width: 768px) {
    width: 350px;
  }
`
export const HomeFailureButton = styled.button`
  background-color: #4f46e5;
  color: white;
  padding: 10px 25px;
  font-family: 'Roboto';
  border: 0px;
  border-radius: 3px;
  cursor: pointer;
  font-weight: 700;
`

export const NoVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NoVideoImage = styled.img`
  width: 420px;
  margin-top: 30px;
  @media screen and (max-width: 768px) {
    width: 250px;
  }
`
export const NoVideoHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.mode === 'Dark' ? '#f8fafc' : '#1e293b')};
  margin-bottom: 0px;
  margin-top: 40px;
  font-weight: 500;
  font-size: 28px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`
export const NoVideoDescription = styled.p`
  color: ${props => (props.mode === 'Dark' ? ' #e2e8f0' : '#475569')};
  font-family: 'Roboto';
  font-size: 20px;
  width: 500px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 15px;
    width: 350px;
  }
`
export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: white;
  padding: 10px 25px;
  font-family: 'Roboto';
  border: 0px;
  border-radius: 3px;
  cursor: pointer;
  margin-bottom: 50px;
  font-weight: 700;
  @media screen and (max-width: 768px) {
    padding: 10px 22px;
  }
`
