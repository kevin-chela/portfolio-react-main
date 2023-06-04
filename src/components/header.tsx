import { Link } from 'react-router-dom'
import { NavLinks } from './nav-links'

import { Logo } from './logo'

export function Header({ title }: { title?: string }) {

  return (
    <header className="bg-light p-4 relative shadow-2xl ">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="relative flex items-center justify-between">
          <h1 className="m-0 text-xl font-bold uppercase leading-none">
            <Link to="/" className="flex items-center no-underline text-dark">
              <Logo className="mr-2" /> PortFolio
            </Link>
          </h1>
          <h5 style={{
            
          }}>
          <NavLinks className="font-bold text-sm  mt-3 inline-flex w-full flex-none justify-center lg:order-1 lg:mb-0 lg:flex lg:w-3/4 lg:justify-end" />
          </h5>
        </div>
      </div>
    </header>
  )
}
