import React from 'react'

const PageTitle: React.FC<{ title: string }> = ({ title }) => (
  <h1 className="relative my-[1em] text-[calc(1.825rem+6.9vw)] font-bold">
    {title}
  </h1>
)

export default PageTitle
