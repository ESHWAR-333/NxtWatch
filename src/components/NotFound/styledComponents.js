import styled from 'styled-components'

export const HomeMainContainer = styled.div`
  display: flex;
  flex-direction: column;
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

export const HomeSubContainer = styled.div`
  margin-left: 30px;
`

export const NotFoundView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  @media screen and (max-width: 768px) {
    text-align: center;
    width: 350px;
  }
`
export const NotFoundImage = styled.img`
  width: 450px;
  @media screen and (max-width: 768px) {
    width: 350px;
  }
`
export const NotFoundTitle = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.mode === 'Dark' ? '#f8fafc' : '#1e293b')};
  margin-bottom: 0px;
  margin-top: 40px;
  font-size: 45px;
  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`
export const NotFoundDescription = styled.p`
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
