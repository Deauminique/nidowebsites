import { Link } from 'react-router-dom'

interface NavItem {
  label: string
  path: string
}

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Diensten', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Over Ons', path: '/about' },
  { label: 'Contact', path: '/contact' }
]

const Navigation = ({ isMobile = false }: { isMobile?: boolean }) => {
  const baseClasses = isMobile
    ? 'flex flex-col space-y-4 mt-4'
    : 'hidden md:flex md:space-x-8'

  return (
    <nav className={baseClasses}>
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}

export default Navigation
