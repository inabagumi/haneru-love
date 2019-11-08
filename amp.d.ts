/// <reference types="react" />

declare namespace React {
  interface AmpHTMLAttributes<T> extends HTMLAttributes<T> {
    fallback?: boolean
    height?: string
    heights?: string
    layout?: string
    media?: string
    noLoading?: boolean
    on?: string
    placeHolder?: boolean
    sizes?: string
    width?: number
  }

  interface AmpImgHTMLAttribute<T> extends AmpHTMLAttributes<T> {
    alt?: string
    attribution?: string
    src?: string
    srcSet?: string
  }
}

declare namespace JSX {
  interface IntrinsicElements {
    'amp-img': React.DetailedHTMLProps<
      React.AmpImgHTMLAttribute<HTMLElement>,
      HTMLElement
    >
  }
}
