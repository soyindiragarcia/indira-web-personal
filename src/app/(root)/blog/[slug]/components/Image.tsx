import React from 'react'

type ImageProps = {
  alt?: string
  src: string
  [key: string]: any
}

const Image: React.FC<ImageProps> = ({ alt, src, ...rest }) => {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt || ''} className="max-w-full h-auto" {...rest} />
}

export default Image
