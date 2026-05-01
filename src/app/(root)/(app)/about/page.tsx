import { RESUME_URL } from '@/constans/common'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

export const metadata: Metadata = {
  title: 'Sobre Mí - Indira García',
  openGraph: {
    title: 'Sobre Mí - Indira García',
    url: '/about',
  },
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return (
    <>
      <PageTitle title="Sobre Mí" />
      <div className="md:flex">
        <div className="mb-5 md:w-56">
          <Image
            src="/media/indira-laptop.webp"
            alt="Indira García"
            className="block w-full"
            width={224}
            height={391}
            style={{ animation: 'fadeIn 0.6s ease-in-out' }}
          />
        </div>
        <div className="md:flex-1 md:pl-6">
          <h2 className="mb-2 text-xl font-bold">Soy Indira García</h2>
          <div className="mb-6">
            <p className="mb-1">
              Implementadora especializada en embudos de ventas y automatizaciones de marketing. Ayudo a emprendedores, coaches y agencias digitales a convertir sus ideas en estrategias que generan resultados medibles.
            </p>
          </div>
          <h2 className="mb-2 text-xl font-bold">Mi enfoque</h2>
          <div className="mb-6">
            <p className="mb-1">
              No soy una agencia genérica. Soy una implementadora que entiende el proceso completo: desde el análisis de tu negocio, el diseño de landing pages profesionales, la construcción de embudos de conversión, hasta la optimización continua de automatizaciones que generan ROI tangible.
            </p>
          </div>
          <h2 className="mb-2 text-xl font-bold">Especialidades</h2>
          <div className="mb-6">
            <p className="mb-1">Diseño de Landing Pages, Embudos de Ventas, Automatizaciones con Make, Integración de Herramientas, Estrategia de Marketing Digital, Optimización de Conversiones.</p>
          </div>
          <Link
            href="/contact"
            rel="nofollow"
            className="mr-3 inline-block bg-white px-5 py-3 hover:bg-black hover:text-white dark:bg-black dark:hover:bg-white dark:hover:text-black"
          >
            Agendar Consulta
          </Link>
          <Link
            href="/projects"
            rel="nofollow"
            className="inline-block bg-white px-5 py-3 hover:bg-black hover:text-white dark:bg-black dark:hover:bg-white dark:hover:text-black"
          >
            Ver Proyectos
          </Link>
        </div>
      </div>
    </>
  )
}
