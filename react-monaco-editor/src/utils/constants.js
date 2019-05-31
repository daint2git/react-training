export const LANGUAGE_OPTIONS = [
  {
    value: 'en',
    children: 'English',
  },
  {
    value: 'ja',
    children: 'Japan',
  },
]

export const ROUTES = [
  {
    id: 'home',
    to: '/',
    label: 'home',
  },
  {
    id: 'about',
    to: '/about',
    label: 'about',
  },
  {
    id: 'login',
    to: '/login',
    label: 'login',
  },
  {
    id: 'other',
    to: '/other',
    label: 'other',
  },
]

export const AUTH_ROUTES = {
  admin: [
    {
      id: 'admin/dashboard',
      to: '/admin/dashboard',
      label: 'admin/dashboard',
    },
    {
      id: 'admin/student',
      to: '/admin/student',
      label: 'admin/student',
    },
  ],
  student: [
    {
      id: 'student/dashboard',
      to: '/student/dashboard',
      label: 'student/dashboard',
    },
    {
      id: 'student/exercise',
      to: '/student/exercise',
      label: 'student/exercise',
    },
  ],
}
