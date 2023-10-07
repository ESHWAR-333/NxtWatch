import styled from 'styled-components'

export const BannerMainContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: ${props => props.display};
  justify-content: space-between;
  height: 35vh;
  width: 1310px;
  min-width: 100%;
  /* margin-top: 5px; */
  font-family: 'Roboto';
  padding-top: 25px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const BannerLeftSection = styled.div`
  margin-left: 20px;
  width: 480px;
  @media screen and (max-width: 768px) {
    width: 300px;
  }
`
export const BannerImage = styled.img`
  width: 200px;
  @media screen and (max-width: 768px) {
    width: 130px;
  }
`
export const BannerHeading = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: #475569;
  @media screen and (max-width: 768px) {
    font-size: 22px;
    line-height: 1.5;
    margin-top: 10px;
  }
`
export const BannerButton = styled.button`
  background-color: transparent;
  padding: 10px 20px;
  font-weight: 700;
  color: #475569;
  font-size: 15px;
  @media screen and (max-width: 768px) {
    padding: 10px 18px;
    padding-bottom: 10px;
  }
`
export const BannerRightContainer = styled.div`
  margin-right: 20px;
`
export const BannerCloseButton = styled.button`
  background-color: transparent;
  border: 0px;
  font-size: 20px;
  @media screen and (max-width: 768px) {
    width: 20px;
  }
`
