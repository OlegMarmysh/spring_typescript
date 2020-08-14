import React, { useState } from 'react'
import styleMenu from './menu/Menu.module.scss'
import Menu from './menu/Menu'
import logo from '../../image/logo.svg'
import '../../index.scss'
import { useDispatch } from 'react-redux'
import { logOut } from '../../redux/loginPageReducer'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Wrapper from '../../styled-components/Wrapper'

const HeaderContainer = styled.header`
    position: fixed;
    width: 100%;
    z-index: 10;
    border-bottom: 1px solid #eeeeee;
    
    ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;

    @media (max-width: 885px) {
      z-index: 2;
    }
  }
  `

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  position: relative;
`
const Logo = styled.div`
  position: relative;
  z-index: 3;
  
  img {
    height: 48px;
    max-width: 250px;

    @media (max-width: 885px) {
      height: 38px;
    }
  }
`

const MenuBurger = styled.div`
  display: none;

  @media (max-width: 885px) {
    display: block;
    position: relative;
    height: 20px;
    width: 30px;
    z-index: 3;

    ::before,
    ::after {
      content: '';
      position: absolute;
      background: black;
      width: 100%;
      height: 2px;
      left: 0;
      transition: all .3s ease-in;
    }

    ::before {
      top: 0;
    }

    ::after {
      bottom: 0;
    }

    span {
      position: absolute;
      background: black;
      width: 100%;
      height: 2px;
      left: 0;
      top: 9px;
      transition: all .3s ease-in;
    }
  }
`

const MenuBurgerActive = styled(MenuBurger)`
  ::before {
    transform: rotate(45deg);
    top: 9px;
  }

  ::after {
    transform: rotate(-45deg);
    bottom: 9px;
  }

  span {
    transform: scale(0);
  }
`

const Button = styled.button`
    position: absolute;
    z-index: 3;
    right: 50px;
    top: 25px;
    outline: none;
    border: none;
    padding: 5px 10px;
    background: black;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: .3s;
    border-radius: 5px;

    :hover {
      background: #c42721;
    }
    @media (max-width: 1260px) {
      right: 20px;
    }
    @media (max-width: 995px) {
      right: 5px;
      top: 27px;
      padding: 3px 5px;
      font-size: 13px;
    }
    @media (max-width: 885px) {
      right: 95px;
      top: 20px
    }
`

const Header = () => {
  const [isHidden, setIsHidden] = useState(false)
  const history = useHistory()

  const dispatch = useDispatch()
  const MenuBurgerClassActive = isHidden ? MenuBurgerActive : MenuBurger
  const menuActive = isHidden ? styleMenu.menuActive : styleMenu.menu
  const toggleBurgerMenu = () => {
    setIsHidden(!isHidden)
  }
  if (isHidden) {
    document.querySelector('body').classList.add('lock')
  } else {
    document.querySelector('body').classList.remove('lock')
  }
  const onLogOut = () => {
    dispatch(logOut())
    localStorage.clear()
    history.push('/spring')
  }

  return (
    <HeaderContainer>
      <Wrapper>
        <HeaderSection>
          <Logo>
            <a href="#">
              <img src={logo} alt="logo"/>
            </a>
          </Logo>
          <MenuBurgerClassActive onClick={toggleBurgerMenu}>
            <span/>
          </MenuBurgerClassActive>
          <Menu menu={menuActive}/>
        </HeaderSection>
        <Button onClick={onLogOut}>
          Log out
        </Button>
      </Wrapper>
    </HeaderContainer>
  )
}

export default Header
