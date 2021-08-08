import type { ForwardRefComponent } from '@reach/utils'
import clsx from 'clsx'
import { forwardRef } from 'react'
import styles from '../styles/components/icon-button.module.css'

type Props = {
  disabled?: boolean
}

const IconButton = forwardRef(function IconButton(
  { as: Comp = 'button', children, className, ...props },
  forwardedRef
) {
  return (
    <Comp
      className={clsx(styles.iconButton, className)}
      ref={forwardedRef}
      {...props}
    >
      {children}
    </Comp>
  )
}) as ForwardRefComponent<'button', Props>

export default IconButton
