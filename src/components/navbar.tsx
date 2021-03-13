import { useLocale } from '@react-aria/i18n'
import clsx from 'clsx'
import Link from 'next/link'
import { useCallback, useState } from 'react'
import type { VFC } from 'react'
import { MdClose, MdMenu } from 'react-icons/md'
import iconButtonStyles from '../styles/components/icon-button.module.css'
import styles from '../styles/components/navbar.module.css'

const Navbar: VFC = () => {
  const [hideMenu, setHideMenu] = useState(true)
  const { locale } = useLocale()

  const openMenu = useCallback(() => {
    setHideMenu(false)
  }, [])

  const closeMenu = useCallback(() => {
    setHideMenu(true)
  }, [])

  return (
    <nav className={styles.container}>
      <div className={styles.menuButton}>
        <button
          aria-hidden
          className={iconButtonStyles.iconButton}
          onClick={hideMenu ? openMenu : closeMenu}
          type="button"
        >
          {hideMenu ? <MdMenu /> : <MdClose />}
        </button>
      </div>
      <ul className={styles.menu}>
        <li
          className={clsx(styles.menuItem, {
            [styles.menuItemShow]: !hideMenu
          })}
        >
          <Link href="/#profile" prefetch={false}>
            <a
              className={styles.navLink}
              lang={locale !== 'en' ? 'en' : undefined}
              onClick={closeMenu}
            >
              Profile
            </a>
          </Link>
        </li>
        <li
          className={clsx(styles.menuItem, {
            [styles.menuItemShow]: !hideMenu
          })}
        >
          <Link href="/#discography" prefetch={false}>
            <a
              className={styles.navLink}
              lang={locale !== 'en' ? 'en' : undefined}
              onClick={closeMenu}
            >
              Discography
            </a>
          </Link>
        </li>
        <li
          className={clsx(styles.menuItem, {
            [styles.menuItemShow]: !hideMenu
          })}
        >
          <Link href="/#news" prefetch={false}>
            <a
              className={styles.navLink}
              lang={locale !== 'en' ? 'en' : undefined}
              onClick={closeMenu}
            >
              News
            </a>
          </Link>
        </li>
        <li
          className={clsx(styles.menuItem, {
            [styles.menuItemShow]: !hideMenu
          })}
        >
          <Link href="/#goods" prefetch={false}>
            <a
              className={styles.navLink}
              lang={locale !== 'en' ? 'en' : undefined}
              onClick={closeMenu}
            >
              Goods
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
