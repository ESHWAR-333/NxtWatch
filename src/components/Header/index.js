// import React from 'react'
import Popup from 'reactjs-popup'
import {FaMoon} from 'react-icons/fa'
import {RiSunLine} from 'react-icons/ri'
import {GiHamburgerMenu} from 'react-icons/gi'
import {SiYoutubegaming} from 'react-icons/si'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {MdPlaylistAdd} from 'react-icons/md'
import {FiLogOut} from 'react-icons/fi'
import {Link, withRouter} from 'react-router-dom'
import {IoMdClose} from 'react-icons/io'
import Cookies from 'js-cookie'
import SavedContext from '../../context/SavedContext'

import {
  HeaderContainer,
  LogoImage,
  ProfileImg,
  LogoutBtn,
  SmallLogoutBtn,
  HeaderButton,
  SmallHeaderButton,
  UserHeader,
  LogoutText,
  HeaderItem,
  PopUpContainer,
  PopUpSubContainer,
  PopUpCancelButton,
  PopUpConfirmButton,
  PopUpMessage,
  SideBarItem,
  SideBarItemName,
} from './styledComponents'

const overlayStyle = {background: 'rgba(0,0,0,0.5)'}

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <SavedContext.Consumer>
      {value => {
        const {activeMode, changeActiveMode} = value
        const changeDarkMode = () => {
          if (activeMode === 'Dark') {
            changeActiveMode('Light')
          } else {
            changeActiveMode('Dark')
          }
        }

        const changeActiveRoute = e => {
          console.log(e)
        }

        return (
          <HeaderContainer mode={activeMode}>
            <Link to="/">
              {activeMode === 'Dark' ? (
                <LogoImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                  alt="website logo"
                />
              ) : (
                <LogoImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="website logo"
                />
              )}
            </Link>

            <UserHeader>
              <HeaderItem>
                <HeaderButton
                  mode={activeMode}
                  type="button"
                  onClick={changeDarkMode}
                  data-testid="theme"
                >
                  {activeMode === 'Dark' ? (
                    <RiSunLine size="25" />
                  ) : (
                    <FaMoon size="25" />
                  )}
                </HeaderButton>
              </HeaderItem>
              <HeaderItem>
                <HeaderButton type="button" mode={activeMode}>
                  <ProfileImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                  <SmallHeaderButton type="button" mode={activeMode}>
                    <Popup
                      modal
                      trigger={
                        <HeaderButton
                          type="button"
                          data-testid="hamburgerIconButton"
                        >
                          <GiHamburgerMenu size="25" />
                        </HeaderButton>
                      }
                      overlayStyle={overlayStyle}
                      className="popup-content"
                    >
                      {close => (
                        <div className="modal-container">
                          <button
                            className="close-button"
                            type="button"
                            data-testid="closeButton"
                            onClick={() => close()}
                          >
                            <IoMdClose size="30" color="#616e7c" />
                          </button>
                          <ul className="nav-links-list">
                            <Link to="/" className="link-item">
                              <SideBarItem
                                mode={activeMode}
                                id="Home"
                                onClick={changeActiveRoute}
                              >
                                <AiFillHome size="22px" />
                                <SideBarItemName>Home</SideBarItemName>
                              </SideBarItem>
                            </Link>
                            <Link to="/trending" className="link-item">
                              <SideBarItem
                                mode={activeMode}
                                onClick={changeActiveRoute}
                                id="Trending"
                              >
                                <HiFire size="22px" />
                                <SideBarItemName>Trending</SideBarItemName>
                              </SideBarItem>
                            </Link>
                            <Link to="/gaming" className="link-item">
                              <SideBarItem
                                mode={activeMode}
                                onClick={changeActiveRoute}
                                id="Gaming"
                              >
                                <SiYoutubegaming size="22px" />
                                <SideBarItemName>Gaming</SideBarItemName>
                              </SideBarItem>
                            </Link>
                            <Link to="/saved-videos" className="link-item">
                              <SideBarItem
                                mode={activeMode}
                                onClick={changeActiveRoute}
                                id="Saved"
                              >
                                <MdPlaylistAdd size="22px" />
                                <SideBarItemName>Saved videos</SideBarItemName>
                              </SideBarItem>
                            </Link>
                          </ul>
                        </div>
                      )}
                    </Popup>
                  </SmallHeaderButton>
                </HeaderButton>
              </HeaderItem>
              <HeaderItem>
                <Popup
                  modal
                  trigger={
                    <LogoutBtn mode={activeMode} type="button">
                      <LogoutText>Logout</LogoutText>
                      <SmallLogoutBtn mode={activeMode} type="button">
                        <FiLogOut size="25" />
                      </SmallLogoutBtn>
                    </LogoutBtn>
                  }
                  overlayStyle={overlayStyle}
                >
                  {close => (
                    <>
                      <PopUpContainer mode={activeMode}>
                        <PopUpMessage mode={activeMode}>
                          Are you sure, you want to logout?
                        </PopUpMessage>
                        <PopUpSubContainer>
                          <PopUpCancelButton
                            type="button"
                            className="trigger-button"
                            onClick={() => close()}
                            mode={activeMode}
                          >
                            Cancel
                          </PopUpCancelButton>
                          <PopUpConfirmButton
                            type="button"
                            className="trigger-button"
                            onClick={onClickLogout}
                          >
                            Confirm
                          </PopUpConfirmButton>
                        </PopUpSubContainer>
                      </PopUpContainer>
                    </>
                  )}
                </Popup>
              </HeaderItem>
            </UserHeader>
          </HeaderContainer>
        )
      }}
    </SavedContext.Consumer>
  )
}

export default withRouter(Header)
