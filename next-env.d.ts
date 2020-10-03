/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.jpeg' {
  const url: string

  export default url
}

declare module '*.jpg' {
  const url: string

  export default url
}

declare module '*.webp' {
  const url: string

  export default url
}
