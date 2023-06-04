import { NavLink } from 'react-router-dom'

const NAV_LINKS = [
  { name: 'AboutMe', to: '/contact' },
  { name: 'Projects', to: '/about' },
  { name: 'Feature_Ideas', to: '/about' },
  { name: "Contact", to: '/faqs' },

]

export function NavLinks({ className }: { className?: string }) {
  return (
    <ul className={className}>
      {NAV_LINKS.map((link) => (
        <li key={link.name} className="ml-4">
          <NavLink
            to={link.to}
            className={({ isActive }) =>
              isActive ? 'border-b text-dark' : 'text-dark hover:border-b'
            }
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
