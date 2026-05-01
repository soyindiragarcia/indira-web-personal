import type { Metadata } from 'next'
import PageTitleAnimation from './components/PageTitleAnimation'
import RootBackground from './components/RootBackground'

export const metadata: Metadata = {
  title: ‘Indira García’,
  description: ‘Soy Indira García, implementadora de embudos de ventas y automatizaciones.’,
  openGraph: {
    images: ‘/media/poster.jpg’,
    title: ‘Indira García’,
    description: ‘Soy Indira García, implementadora de embudos de ventas y automatizaciones.’,
    url: ‘/’,
  },
  alternates: {
    canonical: ‘/’,
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RootBackground />
      <PageTitleAnimation />
      <main className="relative z-10 flex-1 bg-white/60 p-3 dark:bg-black/75 md:px-5 md:pb-10 lg:px-10">{children}</main>
    </>
  )
}
