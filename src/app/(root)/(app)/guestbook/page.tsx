import type { Metadata } from 'next'
import PageTitle from '../components/PageTitle'
import FormSignGuestbook from './components/FormSignGuestbook'
import GuestbookMessages from './components/GuestbookMessages'

export const metadata: Metadata = {
  title: 'Libro de Visitas - Indira García',
  openGraph: {
    title: 'Libro de Visitas - Indira García',
    url: '/guestbook',
  },
  alternates: {
    canonical: '/guestbook',
  },
}

export default function GuestbookPage() {
  return (
    <>
      <PageTitle title="Libro de Visitas" />
      <FormSignGuestbook />
      <GuestbookMessages initialMessages="[]" />
    </>
  )
}
