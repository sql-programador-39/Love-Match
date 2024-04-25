import { Link } from 'react-router-dom'

import useUser from '../../hooks/useUser'

import DropdownMenu from '../Dropdown/DropdownMenu'

const Nav = () => {

  const { user } = useUser()

  return (
    <>
      <nav className='flex justify-between items-center bg-white shadow px-14 py-3'>
        <div className='text-3xl font-bold'>Love <span className='text-red-600'>Match</span></div>

        { user.id ? (
          <div className='flex gap-3'>
            <Link to="/search" className='text-xl font-medium hover:-translate-y-1 hover:text-red-600 duration-300'>Conoce nuevas personas ❤</Link>
            <DropdownMenu />
          </div>
          ) : (
            <Link to="/signin" className='text-xl font-medium hover:-translate-y-1 hover:text-red-600 duration-300'>Iniciar sesión ❤</Link>   
          )
        }     
      </nav>
    </>
  )
}

export default Nav
