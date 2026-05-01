import { FORMSPREE_KEY, SOCIALS } from '@/constans/common'
import type { Metadata } from 'next'
import PageTitle from '../components/PageTitle'
import ContactForm from './components/ContactForm'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Contacto - Indira García',
  openGraph: {
    title: 'Contacto - Indira García',
    url: '/contact',
  },
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <PageTitle title="Contacto" />
      <div className="flex flex-col lg:flex-row">
        <div className="mb-4 w-full text-center lg:w-[480px] lg:text-left">
          <div className="mb-8">
            <h2 className="mb-3 text-lg font-bold">UBICACIÓN</h2>
            <p className="text-sm leading-5">
              Ciudad Bolívar, Venezuela.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="mb-3 text-lg font-bold">CORREO ELECTRÓNICO</h2>
            <p className="text-sm leading-5">
              <a href="mailto:hola@soyindiragarcia.com" rel="noopener" className="hover:text-yellow-600">
                hola@soyindiragarcia.com
              </a>
            </p>
          </div>
          <div className="mb-8">
            <h2 className="mb-3 text-lg font-bold">PERFILES</h2>
            <p className="text-sm leading-5 space-y-1">
              <a href={SOCIALS.IN} target="_blank" rel="noopener" className="block hover:text-yellow-600">
                LinkedIn — soyindiragarcia
              </a>
              <a href={SOCIALS.IG} target="_blank" rel="noopener" className="block hover:text-yellow-600">
                Instagram — @soyindiragarcia
              </a>
              <a href={SOCIALS.FV} target="_blank" rel="noopener" className="block hover:text-yellow-600">
                Fiverr — soyindiragarcia
              </a>
              <a href={SOCIALS.UP} target="_blank" rel="noopener" className="block hover:text-yellow-600">
                Upwork — Indira García
              </a>
            </p>
          </div>
        </div>
        <div className="lg:flex-1">
          <ContactForm formspreeKey={FORMSPREE_KEY} />
        </div>
      </div>
    </>
  )
}
