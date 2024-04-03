import { Outlet, Link, useLocation } from 'react-router-dom'

const MainLayout = () => {
  const location = useLocation()

  const getHeaderPathname = () => {
    if (location.pathname === '/') {
      return 'Inicio'
    } else {
      return location.pathname.slice(1).charAt(0).toUpperCase() + location.pathname.slice(2)
    }
  }

  const pathname = getHeaderPathname()

  const highLightLink = (link: string) => {
    if (pathname === link) {
      return 'bg-violet-200'
    } else {
      return ''
    }
  }

  return (
    <div className='bg-gray-300 h-screen'>
      <div className='sm:max-w-lg mx-auto bg-white px-5 min-h-screen'>
        <div className='flex flex-col h-screen justify-between'>
          <header className='flex justify-center mt-8 py-4'>
            <h1 className='font-bold text-base'>
              {pathname}
            </h1>
          </header>
          <main className='h-full'>
            <Outlet />
          </main>
          <footer className='flex justify-evenly h-18 px-8 sm:px-0 pb-5 border-t pt-5'>
            <Link to='/' className={`p-2 rounded-md border border-violet-200 ${highLightLink('Inicio')}`}>
              Inicio
            </Link>
            <Link to='/overview' className={`p-2 rounded-md border border-violet-200 ${highLightLink('Overview')}`}>
              Overview
            </Link>
            <Link to='/tatus' className={`p-2 rounded-md border border-violet-200 ${highLightLink('Tatus')}`}>
              Tatus
            </Link>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default MainLayout
