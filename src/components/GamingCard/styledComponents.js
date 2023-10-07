import styled from 'styled-components'

export const GamingCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 30px;
  padding-top: 30px;
  @media screen and (max-width: 768px) {
    width: 180px;
    height: 350px;
    margin-right: 10px;
    padding-left: 10px;
  }
`
export const GamingCardImage = styled.img`
  width: 280px;
  height: 380px;
  padding-bottom: 0px;
  @media screen and (max-width: 768px) {
    width: 170px;
    height: 250px;
  }
`
export const GamingCardSubContainer = styled.div`
  font-family: 'Roboto';
`
export const GamingCardTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: ${props => (props.mode === 'Dark' ? '#f8fafc' : '#1e293b')};
  margin-bottom: 5px;
`
export const GamingCardDetails = styled.p`
  font-size: 14px;
  color: #64748b;
  margin-top: 0px;
`
