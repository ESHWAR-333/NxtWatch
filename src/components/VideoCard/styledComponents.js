import styled from 'styled-components'

export const VideoCardContainer = styled.div`
  width: 410px;
  font-family: 'Roboto';
  margin-left: 0px;
  margin-right: 15px;
  height: 390px;
  @media screen and (max-width: 768px) {
    margin-top: 10px;
    width: 360px;
    padding-left: 0px;
    margin-right: 0px;
  }
`
export const VideoImage = styled.img`
  width: 400px;
  margin: 0px;
  margin-right: 10px;
  @media screen and (max-width: 768px) {
    margin-right: 0px;
    width: 350px;
  }
`
export const VideoCardDescription = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 0;
`
export const VideoDescriptionImage = styled.img`
  width: 40px;
  margin-top: 10px;
  margin-right: 10px;
  @media screen and (max-width: 768px) {
    margin-right: 0px;
  }
`
export const VideoCardDetailsContainer = styled.div`
  margin-top: 0;
  @media screen and (max-width: 768px) {
    margin-right: 0px;
    width: 320px;
  }
`
export const VideoCardTitle = styled.p`
  width: 290px;
  font-size: 16px;
  font-family: 'Roboto';
  color: ;
  font-weight: 400;
  color: ${props => (props.mode === 'Dark' ? '#f8fafc' : ' #1e293b')};
  @media screen and (max-width: 768px) {
    font-weight: 700;
    padding-left: 10px;
  }
`
export const VideoCardChannelName = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
  color: #475569;
  @media screen and (max-width: 768px) {
    padding-left: 10px;
  }
`
export const VideoCardCount = styled.p`
  margin-top: 5px;
  color: #475569;
  margin-bottom: 0px;
  @media screen and (max-width: 768px) {
    padding-left: 10px;
  }
`
