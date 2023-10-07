import {Component} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import {
  BannerMainContainer,
  BannerLeftSection,
  BannerImage,
  BannerHeading,
  BannerButton,
  BannerRightContainer,
  BannerCloseButton,
} from './styledComponents'

class BannerSection extends Component {
  state = {displayBanner: 'flex'}

  closeTheBanner = () => {
    this.setState({displayBanner: 'none'})
  }

  render() {
    const {displayBanner} = this.state
    return (
      <BannerMainContainer display={displayBanner} data-testid="banner">
        <BannerLeftSection>
          <BannerImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <BannerHeading>
            Buy Nxt Watch Premium prepaid plans with UPI
          </BannerHeading>
          <BannerButton type="button">GET IT NOW</BannerButton>
        </BannerLeftSection>
        <BannerRightContainer>
          <BannerCloseButton
            type="button"
            onClick={this.closeTheBanner}
            data-testid="close"
          >
            <AiOutlineClose />
          </BannerCloseButton>
        </BannerRightContainer>
      </BannerMainContainer>
    )
  }
}

export default BannerSection
