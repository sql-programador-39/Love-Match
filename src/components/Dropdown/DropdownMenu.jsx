
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHeart, faComments, faRightFromBracket, faChevronDown, faCircleUser } from '@fortawesome/free-solid-svg-icons'

import useUser from '../../hooks/useUser'

const DropdownMenu = () => {

  const { user } = useUser()

  return (
    <>
      <div className=" text-right">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-bold text-white hover:bg-red-500 focus:outline-none gap-3">
              <div>
              <FontAwesomeIcon icon={ faUser } />
              </div>
              <div>
                { user.name }
              </div>
              <div>
              <FontAwesomeIcon icon={ faChevronDown } />
              </div>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <Link to="/profile"
                      className={`${
                        active ? 'bg-red-600 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2 font-medium`}
                    >
                      {active ? (
                        <FontAwesomeIcon icon={faCircleUser} />
                      ) : (
                        <FontAwesomeIcon icon={faCircleUser} />     
                      )}
                      Mi perfil
                    </Link>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link to="/likes"
                      className={`${
                        active ? 'bg-red-600 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2 font-medium`}
                    >
                      {active ? (
                        <FontAwesomeIcon icon={faHeart} />
                      ) : (
                        <FontAwesomeIcon icon={faHeart} />
                      )}
                      Mis likes
                    </Link>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link to="/matchs"
                      className={`${
                        active ? 'bg-red-600 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2 font-medium`}
                    >
                      {active ? (
                        <FontAwesomeIcon icon={faComments} />
                      ) : (
                        <FontAwesomeIcon icon={faComments} />
                      )}
                      Mis matchs
                    </Link>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-red-600 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2 font-medium`}
                    >
                      {active ? (
                        <FontAwesomeIcon icon={faRightFromBracket} />
                      ) : (
                        <FontAwesomeIcon icon={faRightFromBracket} />
                      )}
                      Cerrar Sesión
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </>
  )
}

export default DropdownMenu
