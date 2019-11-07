import React, { FC } from 'react'

type Props = {
  height?: number
  name: string
  width?: number
}

const Icon: FC<Props> = ({ height = 100, name, width = 100 }) => {
  return (
    <>
      <svg className="icon" height={height} width={width}>
        <use xlinkHref={`#${name}`} />
      </svg>

      <style jsx>{`
        .icon {
          display: inline-block;
          fill: currentColor;
        }
      `}</style>
    </>
  )
}

export default Icon
