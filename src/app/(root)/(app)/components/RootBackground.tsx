'use client'

import { useRootBackground } from '@/contexts/RootBackgroundContext'
import Image from 'next/image'
import React, { memo } from 'react'
import { FiVolume2, FiVolumeX } from 'react-icons/fi'

const RootBackground: React.FC = () => {
  const { isVideoPlayed, toggleVideo } = useRootBackground()

  return (
    <>
      <button
        aria-label="Audio toggle"
        type="button"
        className="fixed right-0 top-0 z-[120] mr-3 mt-3 leading-none md:mr-5 md:mt-5 lg:mr-10"
        onClick={() => toggleVideo()}
      >
        {isVideoPlayed ? <FiVolume2 size={18} /> : <FiVolumeX size={18} />}
      </button>
      <div className="fixed left-0 top-0 h-full w-full overflow-hidden bg-white dark:bg-black">
        {/* Móvil: imagen vertical */}
        <Image src="/media/bg-hero-mobile.png" alt="Hero background" className={'block h-full w-full object-cover object-top md:hidden'} fill priority />
        {/* Desktop: imagen horizontal */}
        <Image src="/media/bg-hero.png" alt="Hero background" className={'hidden h-full w-full object-cover object-center md:block'} fill priority />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60 z-5" />
        {isVideoPlayed && (
          <video src="/media/background.webm" loop autoPlay className={'absolute top-0 z-10 block h-full w-full object-cover'} />
        )}
      </div>
    </>
  )
}

export default memo(RootBackground)
