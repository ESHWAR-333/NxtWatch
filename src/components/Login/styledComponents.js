import styled from 'styled-components'

export const FormContainer = styled.form``

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
  padding: 20px;
  width: 100%;
  background-color: ${props => (props.mode === 'Dark' ? '#000000' : '')};
  max-width: 380px;
  border-radius: 5px;
`
export const LoginMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: 'Roboto';
  background-color: ${props => (props.mode === 'Dark' ? '#181818' : '')};
`

export const Input = styled.input`
  padding: 9px;
  border: 1px solid ${props => (props.mode === 'Dark' ? '#f1f1f1' : '#e2e8f0')};
  border-radius: 3px;
  color: ${props => (props.isDark ? '#f9f9f9' : '#64748b')};
  background-color: ${props => (props.mode === 'Dark' ? 'transparent' : '')};
  outline: none;
  font-size: 14px;
  margin-top: 3px;
`

export const Label = styled.label`
  color: ${props => (props.mode === 'Dark' ? '#f8fafc' : ' #7e858e')};
  font-size: 11px;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 3px;
`
export const ShowPassword = styled.label`
  color: ${props => (props.mode === 'Dark' ? '#f8fafc' : '  #1e293b')};
  font-size: 13px;
  font-weight: 500;
  margin-left: 3px;
`
