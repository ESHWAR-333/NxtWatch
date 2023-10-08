import {Link} from 'react-router-dom'
import {SiYoutubegaming} from 'react-icons/si'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {MdPlaylistAdd} from 'react-icons/md'
import SavedContext from '../../context/SavedContext'

import {
  SideBarItem,
  UnorderedList,
  SideBarTopContainer,
  SideBarFooterContainer,
  FooterHeading,
  SocialMediaHandlesList,
  ListItem,
  SideBarItemName,
  SocialMediaImage,
  FooterDescription,
  SideBarMainContainer,
} from './styledComponents'
import './index.css'

const SideBar = () => (
  <SavedContext.Consumer>
    {value => {
      const {activeMode, currentRoute, changeCurrentRoute} = value

      /* console.log(currentRoute) */

      const changeActiveRoute = e => {
        changeCurrentRoute(e.target.id)
      }
      return (
        <SideBarMainContainer mode={activeMode}>
          <SideBarTopContainer>
            <UnorderedList>
              <Link to="/" className="link-item" onClick={changeActiveRoute}>
                <SideBarItem
                  mode={activeMode}
                  id="Home"
                  activeness={currentRoute === 'Home' ? 'active' : 'notActive'}
                >
                  <AiFillHome
                    size="22px"
                    color={currentRoute === 'Home' ? '#ff0000' : ''}
                  />
                  <SideBarItemName>Home</SideBarItemName>
                </SideBarItem>
              </Link>

              <Link
                to="/trending"
                className="link-item"
                onClick={changeActiveRoute}
              >
                <SideBarItem
                  mode={activeMode}
                  id="Trending"
                  activeness={
                    currentRoute === 'Trending' ? 'active' : 'notActive'
                  }
                >
                  <HiFire
                    size="22px"
                    color={currentRoute === 'Trending' ? '#ff0000' : ''}
                  />
                  <SideBarItemName>Trending</SideBarItemName>
                </SideBarItem>
              </Link>
              <Link
                to="/gaming"
                className="link-item"
                onClick={changeActiveRoute}
              >
                <SideBarItem
                  mode={activeMode}
                  id="Gaming"
                  activeness={
                    currentRoute === 'Gaming' ? 'active' : 'notActive'
                  }
                >
                  <SiYoutubegaming
                    size="22px"
                    color={currentRoute === 'Gaming' ? '#ff0000' : ''}
                  />
                  <SideBarItemName>Gaming</SideBarItemName>
                </SideBarItem>
              </Link>
              <Link
                to="/saved-videos"
                className="link-item"
                onClick={changeActiveRoute}
              >
                <SideBarItem
                  mode={activeMode}
                  id="Saved"
                  activeness={currentRoute === 'Saved' ? 'active' : 'notActive'}
                >
                  <MdPlaylistAdd
                    size="22px"
                    color={currentRoute === 'Saved' ? '#ff0000' : ''}
                  />
                  <SideBarItemName>Saved videos</SideBarItemName>
                </SideBarItem>
              </Link>
            </UnorderedList>
          </SideBarTopContainer>
          <SideBarFooterContainer>
            <FooterHeading mode={activeMode}>CONTACT US</FooterHeading>
            <SocialMediaHandlesList>
              <ListItem>
                <SocialMediaImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png "
                  alt="facebook logo"
                />
              </ListItem>
              <ListItem>
                <SocialMediaImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
                  alt="twitter logo"
                />
              </ListItem>
              <ListItem>
                <SocialMediaImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </ListItem>
            </SocialMediaHandlesList>
            <FooterDescription mode={activeMode}>
              Enjoy! Now to see your channels and recommendations!
            </FooterDescription>
          </SideBarFooterContainer>
        </SideBarMainContainer>
      )
    }}
  </SavedContext.Consumer>
)

export default SideBar
