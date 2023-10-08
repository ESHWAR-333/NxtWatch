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
  CloseButton,
  PopUpMainContainer,
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

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <SavedContext.Consumer>
      {value => {
        const {
          activeMode,
          changeActiveMode,
          currentRoute,
          changeCurrentRoute,
        } = value

        const overlayStyle = {
          background: activeMode === 'Dark' ? '#231f20' : '#f9f9f9',
        }
        const logoutoverlayStyle = {
          background: 'rgba(0,0,0,0.5)',
        }
        const changeDarkMode = () => {
          if (activeMode === 'Dark') {
            changeActiveMode('Light')
          } else {
            changeActiveMode('Dark')
          }
        }

        const changeActiveRoute = e => {
          changeCurrentRoute(e.target.id)
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
                          mode={activeMode}
                        >
                          <GiHamburgerMenu size="25" />
                        </HeaderButton>
                      }
                      overlayStyle={overlayStyle}
                      className="popup-content"
                    >
                      {close => (
                        <PopUpMainContainer className="modal-container">
                          <CloseButton
                            className="close-button"
                            position="top right"
                            type="button"
                            data-testid="closeButton"
                            onClick={() => close()}
                          >
                            <IoMdClose size="30" color="#616e7c" />
                          </CloseButton>
                          <ul className="nav-links-list">
                            <Link
                              to="/"
                              className="link-item"
                              activeness={
                                currentRoute === 'Home' ? 'active' : 'notActive'
                              }
                              onClick={changeActiveRoute}
                            >
                              <SideBarItem mode={activeMode} id="Home">
                                <AiFillHome
                                  size="22px"
                                  color={
                                    currentRoute === 'Home' ? '#ff0000' : ''
                                  }
                                />
                                <SideBarItemName>Home</SideBarItemName>
                              </SideBarItem>
                            </Link>
                            <Link
                              to="/trending"
                              className="link-item"
                              activeness={
                                currentRoute === 'Trending'
                                  ? 'active'
                                  : 'notActive'
                              }
                              onClick={changeActiveRoute}
                            >
                              <SideBarItem mode={activeMode} id="Trending">
                                <HiFire
                                  size="22px"
                                  color={
                                    currentRoute === 'Trending' ? '#ff0000' : ''
                                  }
                                />
                                <SideBarItemName>Trending</SideBarItemName>
                              </SideBarItem>
                            </Link>
                            <>
                              <Link
                                to="/gaming"
                                className="link-item"
                                activeness={
                                  currentRoute === 'Gaming'
                                    ? 'active'
                                    : 'notActive'
                                }
                                onClick={changeActiveRoute}
                              >
                                <SideBarItem mode={activeMode} id="Gaming">
                                  <SiYoutubegaming
                                    size="22px"
                                    color={
                                      currentRoute === 'Gaming' ? '#ff0000' : ''
                                    }
                                  />
                                  <SideBarItemName>Gaming</SideBarItemName>
                                </SideBarItem>
                              </Link>
                            </>

                            <>
                              <Link
                                to="/saved-videos"
                                className="link-item"
                                activeness={
                                  currentRoute === 'Saved'
                                    ? 'active'
                                    : 'notActive'
                                }
                                onClick={changeActiveRoute}
                              >
                                <SideBarItem mode={activeMode} id="Saved">
                                  <MdPlaylistAdd
                                    size="22px"
                                    color={
                                      currentRoute === 'Saved' ? '#ff0000' : ''
                                    }
                                  />
                                  <SideBarItemName>
                                    Saved videos
                                  </SideBarItemName>
                                </SideBarItem>
                              </Link>
                            </>
                          </ul>
                        </PopUpMainContainer>
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
                      <SmallLogoutBtn mode={activeMode}>
                        <FiLogOut size="25" />
                      </SmallLogoutBtn>
                    </LogoutBtn>
                  }
                  overlayStyle={logoutoverlayStyle}
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
