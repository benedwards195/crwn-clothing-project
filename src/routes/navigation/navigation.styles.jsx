import styled from 'styled-components'
import {Link} from 'react-router-dom';

export const NavigationContainer  = styled.div`
  flex-direction: column;
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`

export const NavigationWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
`
   
  export const NavLinks = styled.div`
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 0 25px
  `

  export const NavLink = styled(Link)`
        padding: 10px 15px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: flex-end;
  `
  