import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 61px;
  background-color: ${props => (props.mode === 'Dark' ? '#181818' : '')};
  margin-bottom: 0px;
`
export const SideBarItem = styled.div`
  display: flex;
  justify-content: flex-start;
  text-decoration: none;
  align-items: center;
  padding: 0px;
  padding-left: 20px;
  margin: 0px;
  color: ${props => (props.mode === 'Dark' ? '#f9f9f9' : '')};
  background-color: ${props =>
    props.activeness === 'active' ? '#d7dfe9' : ''};
`
export const SideBarItemName = styled.p`
  margin-left: 20px;
  font-weight: 500;
  font-family: 'Roboto';
`
export const LogoImage = styled.img`
  width: 120px;
  height: 35px;
  margin-top: 5px;
  margin-left: 60px;
  @media screen and (max-width: 768px) {
    margin-left: 10px;
    width: 100px;
  }
`
export const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const LogoutBtn = styled.button`
  color: ${props => (props.mode === 'Dark' ? '#f9f9f9' : '#3b82f6')};
  background-color: transparent;
  font-weight: 700;
  border: ${props =>
    props.mode === 'Dark' ? ' 2px solid #f9f9f9' : '2px solid #3b82f6'};
  padding: 5px 15px;
  font-family: 'Roboto';
  margin-left: 10px;
  @media screen and (max-width: 768px) {
    border:none;
    padding:0px;
    color: ${props => (props.mode === 'Dark' ? '#f9f9f9' : '#')};
}
  }
`
export const LogoutText = styled.p`
  margin: 0px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const SmallLogoutBtn = styled.div`
  display: none;
  background-color: transparent;
  border: 0px;
  color: ${props => (props.mode === 'Dark' ? '#f9f9f9' : '')};
  @media screen and (max-width: 768px) {
    display: block;
    color: ${props => (props.mode === 'Dark' ? '#f9f9f9' : '#181818')};
    padding-left: 0px;
  }
`

export const HeaderButton = styled.button`
  background-color: transparent;
  border: 0px;
  color: ${props => (props.mode === 'Dark' ? '#f9f9f9' : '')};
  margin-left: 10px;
  margin-right: 10px;
  @media screen and (max-width: 768px) {
    margin-left: 0px;
    margin-right: 0px;
    color: ${props => (props.mode === 'Dark' ? '#f9f9f9' : '#181818')};
  }
`
export const CloseButton = styled.button`
  position: absolute;
  top: -150px;
  right: -60px;
  background-color: transparent;
  border: 0px;
`

export const PopUpMainContainer = styled.div`
  //   position: relative;
`

export const SmallHeaderButton = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    color: ${props => (props.mode === 'Dark' ? '#f9f9f9' : '#181818')};
  }
`
export const UserHeader = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${props => (props.mode === 'Dark' ? '#f9f9f9' : '')};
  margin-right: 60px;
  list-style-type: none;
  @media screen and (max-width: 768px) {
    margin-left: 0px;
    margin-right: 10px;
  }
`
export const HeaderItem = styled.li``

export const PopUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  width: 250px;
  background-color: ${props =>
    props.mode === 'Dark' ? '#181818' : ' #f9f9f9'};

  border-radius: 10px;
  padding: 20px;
  @media screen and (min-width: 768px) {
    height: 200px;
    width: 400px;
  }
`
export const PopUpSubContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const PopUpCancelButton = styled.button`
  background-color: transparent;
  border: 1px solid grey;
  padding: 8px;
  padding-right: 12px;
  padding-left: 12px;
  color: grey;
  margin: 12px;
  outline: none;
  cursor: pointer;
  border-radius: 2px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  color: ${props => (props.mode === 'Dark' ? ' #f9f9f9' : '#181818')};
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px;
    padding-right: 20px;
    padding-left: 20px;
  }
`
export const PopUpConfirmButton = styled.button`
  align-self: flex-end;
  background-color: #3b82f6;
  color: white;
  padding: 8px;
  padding-right: 12px;
  padding-left: 12px;
  border: 1px solid #3b82f6;
  margin: 10px;
  outline: none;
  cursor: pointer;
  border-radius: 3px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px;
    padding-right: 20px;
    padding-left: 20px;
  }
`
export const PopUpMessage = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  margin: 10px;
  color: ${props => (props.mode === 'Dark' ? ' #f9f9f9' : '#181818')};
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
