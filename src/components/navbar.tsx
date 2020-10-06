import Link from 'next/link'
import { useCallback, useState } from 'react'
import type { FC } from 'react'
import { MdClose, MdMenu } from 'react-icons/md'
import styled from 'styled-components'
import IconButton from './icon-button'

const Container = styled.nav`
  background-color: transparent;
  color: #000;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
`

const MenuButton = styled(IconButton)`
  font-size: 2rem;
  margin: 0.2em 0.2em auto auto;

  @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
    display: none;
  }
`

const Menu = styled.ul`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  list-style-type: none;
  margin: 0;
  padding: 3em 0 0;
  position: fixed;
  left: 100%;
  top: 0;
  width: 0;

  @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
    align-items: center;
    display: flex;
    flex-direction: row;
    font-size: 1.2rem;
    justify-content: flex-end;
    margin: 0 0.5em;
    padding: 0.5em;
    position: static;
    width: auto;
  }
`

type MenuItemProps = {
  delay?: number
  show?: boolean
}

const MenuItem = styled.li<MenuItemProps>`
  background-color: #fff;
  margin: 0.25em 0;
  padding: 0;
  transform: translateX(${(props) => (props.show ? -100 : 0)}%);
  transition-delay: ${(props) => props.delay ?? 0}s;
  transition-duration: 0.3s;
  transition-property: opacity, transform;
  transition-timing-function: ease;

  @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
    background-color: transparent;
    border-bottom-width: 0;
    opacity: 1;
    padding: 0 0.1em;
    transform: none;
    transition: none;
  }
`

const NavLink = styled.a`
  color: inherit;
  display: block;
  font-weight: 900;
  letter-spacing: 0.05em;
  padding: 0.3em 0.5em 0.3em 0.75em;
  text-decoration: none;
  text-transform: uppercase;

  :hover {
    color: inherit;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
    border-radius: 0.25em;
    text-align: inherit;
    transition: background-color 0.5s ease;

    :hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`

const Navbar: FC = () => {
  const [hideMenu, setHideMenu] = useState(true)

  const openMenu = useCallback(() => {
    setHideMenu(false)
  }, [])

  const closeMenu = useCallback(() => {
    setHideMenu(true)
  }, [])

  return (
    <Container>
      <MenuButton
        aria-label={hideMenu ? 'メニューを開く' : 'メニューを閉じる'}
        onClick={hideMenu ? openMenu : closeMenu}
        type="button"
      >
        {hideMenu ? (
          <MdMenu aria-hidden="true" />
        ) : (
          <MdClose aria-hidden="true" />
        )}
      </MenuButton>
      <Menu>
        <MenuItem show={!hideMenu}>
          <Link href="/#profile" passHref prefetch={false}>
            <NavLink onClick={closeMenu}>Profile</NavLink>
          </Link>
        </MenuItem>
        <MenuItem delay={0.3} show={!hideMenu}>
          <Link href="/#discography" passHref prefetch={false}>
            <NavLink onClick={closeMenu}>Discography</NavLink>
          </Link>
        </MenuItem>
        <MenuItem delay={0.6} show={!hideMenu}>
          <Link href="/#news" passHref prefetch={false}>
            <NavLink onClick={closeMenu}>News</NavLink>
          </Link>
        </MenuItem>
        <MenuItem delay={0.9} show={!hideMenu}>
          <Link href="/#goods" passHref prefetch={false}>
            <NavLink onClick={closeMenu}>Goods</NavLink>
          </Link>
        </MenuItem>
      </Menu>
    </Container>
  )
}

export default Navbar
