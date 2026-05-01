import { IGuestbookMessage } from '@/types'
import { db } from '@/utils/firebase'
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore'
import type { Metadata } from 'next'
import PageTitle from '../components/PageTitle'
import FormSignGuestbook from './components/FormSignGuestbook'
import GuestbookMessages from './components/GuestbookMessages'

export const dynamic = 'force-dynamic'

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

export default async function GuestbookPage() {
  const messages = await loadMessages()

  return (
    <>
      <PageTitle title="Libro de Visitas" />
      <FormSignGuestbook />
      <GuestbookMessages initialMessages={JSON.stringify(messages)} />
    </>
  )
}

const loadMessages = async () => {
  const colRef = collection(db, 'guestbook')
  const q = query(colRef, orderBy('createdAt', 'desc'), limit(100))

  const querySnapshot = await getDocs(q)

  const messages: IGuestbookMessage[] = []
  querySnapshot.forEach((doc) => {
    messages.push({ _id: doc.id, ...doc.data() } as IGuestbookMessage)
  })

  return messages
}
