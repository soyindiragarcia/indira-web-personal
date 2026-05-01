import React from 'react'
import { highlight } from 'sugar-high'

interface CodeProps {
  children?: string
  [key: string]: any
}

const Code: React.FC<CodeProps> = ({ children, ...props }) => {
  if (!children || typeof children !== 'string') {
    return <code {...props}>{children}</code>
  }
  const codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

export default Code
