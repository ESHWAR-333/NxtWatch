import styled from 'styled-components'

export const SideBarItem = styled.div`
  display: flex;
  justify-content: flex-start;
  text-decoration: none;
  align-items: center;
  padding: 0px;
  padding-left: 20px;
  margin: 0px;
  color: ${props => (props.mode === 'Dark' ? '#f9f9f9' : '')};
`

export const UnorderedList = styled.ul`
  padding-left: 0;
  margin-top: 0px;
  padding-top: 0px;
`
export const SideBarFooterContainer = styled.div`
  padding-left: 20px;
  margin-bottom: 10px;
`
export const FooterHeading = styled.p`
  font-weight: 700;
  color: #424242;
  font-size: 18px;
  color: ${props => (props.mode === 'Dark' ? '#f9f9f9' : '')};
`

export const SideBarTopContainer = styled.div`
  padding-top: 25px;
`
export const SocialMediaHandlesList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  padding-left: 0;
`
export const ListItem = styled.li``
export const SocialMediaImage = styled.img`
  width: 35px;
  margin-right: 10px;
`
export const FooterDescription = styled.p`
  font-weight: 500;
  color: #424242;
  font-size: 17px;
  color: ${props => (props.mode === 'Dark' ? '#f9f9f9' : '')};
  padding-right: 20px;
`
export const SideBarItemName = styled.p`
  margin-left: 20px;
  font-weight: 500;
  font-family: 'Roboto';
`
export const SideBarMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 91vh;
  font-family: 'Roboto';
  width: 180px;
  //   margin-right: 20px;
  background-color: ${props => (props.mode === 'Dark' ? '#181818' : '')};
`
