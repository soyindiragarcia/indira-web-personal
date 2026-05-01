import { FiClipboard, FiGlobe, FiHome, FiMail, FiUser } from 'react-icons/fi'

export const HOST = process.env.NEXT_PUBLIC_HOST || 'http://localhost:3000'

export const NAV_ITEMS = [
  { path: '/', label: 'Inicio', Icon: FiHome },
  { path: '/about', label: 'Sobre Mí', Icon: FiUser },
  { path: '/blog', label: 'Blog', Icon: FiGlobe },
  { path: '/projects', label: 'Proyectos', Icon: FiClipboard },
  { path: '/contact', label: 'Contacto', Icon: FiMail },
]

export const PAGE_TITLES = {
  '/': '._',
  '/about': 'Sobre Mí',
  '/blog': 'Blog',
  '/projects': 'Proyectos',
  '/contact': 'Contacto',
  '/guestbook': 'Libro de Visitas',
}

export const SOCIALS = {
  IG: 'https://www.instagram.com/soyindiragarcia',
  IN: 'https://www.linkedin.com/in/soyindiragarcia/',
  FV: 'https://es.fiverr.com/s/yv3B0wz',
  UP: 'https://www.upwork.com/freelancers/~015df1ac5997eb7912?mp_source=share',
}

export const RESUME_URL = 'https://drive.google.com/file/d/17EnrWbKObHNKFj4scsZM0R9JOX96uRJ3/view?usp=drive_link'

export const FORMSPREE_KEY = 'mkoygjez'

export const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyCVXW6MTdRVtYPTOoV92ruBQ3ZQcF5Ho0g',
  authDomain: 'dede-ard.firebaseapp.com',
  databaseURL: 'https://dede-ard.firebaseio.com',
  projectId: 'dede-ard',
  storageBucket: 'dede-ard.appspot.com',
  messagingSenderId: '120930847292',
  appId: '1:120930847292:web:eb77034f59e9ee37b65139',
  measurementId: 'G-KJRFL3X06T',
}
