import type { Metadata } from 'next'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

export const metadata: Metadata = {
  title: 'Proyectos - Indira Garcia',
  openGraph: {
    title: 'Proyectos - Indira Garcia',
    url: '/projects',
  },
  alternates: {
    canonical: '/projects',
  },
}

const projects = [
  {
    title: 'Landing Page + Embudo de Ventas',
    client: 'Coach de Bienestar',
    description: 'Diseño e implementacion de landing page de alta conversion con embudo automatizado. Integracion con CRM y secuencia de emails para nutricion de leads.',
    tags: ['Landing Page', 'Embudo', 'Email Marketing'],
    result: '+340% tasa de conversion vs pagina anterior',
    color: '#dd2098',
  },
  {
    title: 'Automatizacion de Seguimiento',
    client: 'Agencia Digital',
    description: 'Sistema de automatizacion con Make para seguimiento de prospectos. Conexion entre formularios, CRM, WhatsApp y Google Sheets en flujo sin fricciones.',
    tags: ['Make', 'Automatizacion', 'WhatsApp', 'CRM'],
    result: '80% reduccion de tiempo en gestion de leads',
    color: '#dd2098',
  },
  {
    title: 'Embudo de Lanzamiento',
    client: 'Consultora de Marketing',
    description: 'Estrategia e implementacion de embudo completo para lanzamiento de curso online. Pagina de captura, webinar automatizado, secuencia de venta y pagina de checkout.',
    tags: ['Embudo', 'Curso Online', 'Webinar'],
    result: '127 ventas en los primeros 7 dias',
    color: '#dd2098',
  },
  {
    title: 'Sistema de Captacion de Clientes',
    client: 'Estudio de Fotografia',
    description: 'Landing page optimizada para SEO local + formulario inteligente conectado a agenda automatica. Los clientes reservan sesiones sin intervencion manual.',
    tags: ['Landing Page', 'SEO Local', 'Automatizacion'],
    result: '3x mas consultas mensuales',
    color: '#dd2098',
  },
]

export default function ProjectsPage() {
  return (
    <>
      <PageTitle title="Proyectos" />
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {projects.map((project, i) => (
          <div key={i} className="relative flex flex-col overflow-hidden bg-white/50 backdrop-blur dark:bg-black/80">
            <div className="flex-1 p-5">
              <h2 className="mb-1 text-xl font-bold">{project.title}</h2>
              <p className="mb-3 text-xs font-bold opacity-60">{project.client}</p>
              <p className="mb-4 text-sm opacity-80">{project.description}</p>
              <p className="text-sm font-bold" style={{ color: '#dd2098' }}>
                {project.result}
              </p>
            </div>
            <div className="px-5 pb-4">
              <ul className="flex flex-wrap gap-1">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="border bg-gray-100/50 px-2 py-1 text-xs leading-none dark:border-gray-800 dark:bg-gray-900/50"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-1 w-full" style={{ backgroundColor: '#dd2098' }} />
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <p className="mb-4 text-sm opacity-70">
          Tienes un proyecto en mente? Hablemos.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white px-6 py-3 font-bold hover:bg-black hover:text-white dark:bg-black dark:hover:bg-white dark:hover:text-black"
        >
          Contactar
        </Link>
      </div>
    </>
  )
}
