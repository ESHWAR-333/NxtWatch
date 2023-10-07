import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'
import {
  FormContainer,
  LoginContainer,
  LoginMainContainer,
  Input,
  Label,
  ShowPassword,
} from './styledComponents'

import SavedContext from '../../context/SavedContext'

class Login extends Component {
  state = {
    errorMsg: '',
    username: '',
    password: '',
    showPwd: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeCheckbox = () => {
    this.setState(prevState => ({
      showPwd: !prevState.showPwd,
    }))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderDarkTheme = () => {
    const {errorMsg, showPwd, username, password} = this.state
    return (
      <SavedContext.Consumer>
        {value => {
          const {activeMode} = value
          return (
            <LoginContainer mode={activeMode} className="login-sub-container">
              <img
                src={
                  activeMode === 'Dark'
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
                alt="website logo"
                className="logo-image"
              />
              <FormContainer
                className="form-container"
                onSubmit={this.onSubmitForm}
              >
                <div className="input-container">
                  <Label mode={activeMode} className="label" htmlFor="username">
                    USERNAME
                  </Label>
                  <Input
                    placeholder="Username"
                    id=" username"
                    type="text"
                    mode={activeMode}
                    onChange={this.onChangeUsername}
                    value={username}
                  />
                </div>
                <div className="input-container">
                  <Label mode={activeMode} className="label" htmlFor="password">
                    PASSWORD
                  </Label>
                  <Input
                    placeholder="Password"
                    id=" password"
                    mode={activeMode}
                    type={showPwd ? 'text' : 'password'}
                    onChange={this.onChangePassword}
                    value={password}
                  />
                </div>
                <div className="show-password-container">
                  <Input
                    className="show-password"
                    id="showPassword"
                    type="checkbox"
                    mode={activeMode}
                    onChange={this.onChangeCheckbox}
                  />
                  <ShowPassword
                    mode={activeMode}
                    className="show-password-text"
                    htmlFor="showPassword"
                  >
                    Show Password
                  </ShowPassword>
                </div>
                <div className="button-container">
                  <button className="login-button" type="submit">
                    Login
                  </button>
                  <p className="error-message">{errorMsg}</p>
                </div>
              </FormContainer>
            </LoginContainer>
          )
        }}
      </SavedContext.Consumer>
    )
  }

  render() {
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <SavedContext.Consumer>
        {value => {
          const {activeMode} = value
          return (
            <LoginMainContainer
              className="login-main-container"
              mode={activeMode}
            >
              {this.renderDarkTheme()}
            </LoginMainContainer>
          )
        }}
      </SavedContext.Consumer>
    )
  }
}

export default Login
