'use client'

import Image from 'next/image'
import React, { memo } from 'react'

const RootBackground: React.FC = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-full overflow-hidden bg-white dark:bg-black">
      {/* Móvil: imagen vertical */}
      <Image src="/media/bg-hero-mobile.png" alt="Hero background" className={'block h-full w-full object-cover object-top md:hidden'} fill priority />
      {/* Desktop: imagen horizontal */}
      <Image src="/media/bg-hero.png" alt="Hero background" className={'hidden h-full w-full object-cover object-center md:block'} fill priority />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" style={{ zIndex: 5 }} />
    </div>
  )
}

export default memo(RootBackground)
