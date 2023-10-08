import styled from 'styled-components'

export const TrendingVideoCardContainer = styled.div`
  display: flex;
  padding: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    display: none;
    padding-top: 0px;
  }
`
export const TrendingVideoCardImage = styled.img`
  width: 700px;
  height: 450px;
  padding: 20px;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0px;
    height: 150px;
  }
`
export const TrendingVideoCardSubContainer = styled.div`
  font-family: 'Roboto';
  padding-top: 20px;
  @media screen and (max-width: 768px) {
    padding-top: 4px;
  }
`
export const TrendingVideoCardTitle = styled.p`
  font-size: 22px;
  font-weight: 500;
  margin-top: 0px;
  color: ${props => (props.mode === 'Dark' ? '#f8fafc' : '#1e293b')};
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`
export const TrendingVideoCardChannelName = styled.p`
  font-size: 15px;

  color: #94a3b8;
`
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
    height: 300px;
  }
`
export const VideoImage = styled.img`
  width: 400px;
  margin: 0px;
  margin-right: 10px;
  @media screen and (max-width: 768px) {
    margin-right: 10px;
    width: 350px;
    margin-left: 10px;
  }
`
export const VideoCardDescription = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 0;
  @media screen and (max-width: 768px) {
    margin-left: 10px;
  }
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

export const SmallTrendingVideoCardContainer = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`

export const VideoCardChannelName = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
  color: #475569;
  @media screen and (max-width: 768px) {
    margin-right: 5px;
  }
`
export const VideoCardCount = styled.p`
  margin-top: 5px;
  color: #475569;
  margin-bottom: 0px;
  @media screen and (max-width: 768px) {
    padding-left: 10px;
    display: flex;
  }
`
