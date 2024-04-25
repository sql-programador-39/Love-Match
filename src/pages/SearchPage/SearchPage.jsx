import { useState, useEffect } from 'react'
import { useSpring, animated } from '@react-spring/web'
import useUser from '../../hooks/useUser'
import axios from 'axios'
import Nav from '../../components/Nav/Nav'
import SearchBar from '../../components/SearchBar/SearchBar'
import InitialCard from '../../components/InitialCard/InitialCard'
import FinalCard from '../../components/FinalCard/FinalCard'

import imgGrande from '../../assets/grande.jpg'
import imgPeque from '../../assets/peque.webp'


const Search = () => {

  const [profiles, setProfiles] = useState([])
  const [selectedProfiles, setSelectedProfiles] = useState([])

  const { user } = useUser()

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    if (profiles.length > 0) {
      filterProfiles();
    }
  }, [profiles]);
  
  const filterProfiles = () => {
    const selectedProfiles2 = profiles.filter(profile => profile.genre !== "Masculino")
    setSelectedProfiles(selectedProfiles2)
  }

  const getUsers = async () => {
    try {
      const response = await axios('http://localhost:5000/users')
      setProfiles(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      filterProfiles()
    }
  }

  return (
    <>
      <div className="w-1/2 mx-auto">

        <h1 className='text-4xl my-10 font-bold text-center'>Conecta con personas increibles...</h1>
        
        <SearchBar />
      </div>

      <section className='w-2/3 mx-auto'>

      {
        selectedProfiles.length > 0 ? (
          <section className='grid grid-cols-3 gap-10'>
            {
              selectedProfiles.map(profile => (
                <InitialCard key={profile.id} profile={profile} />
              ))
            }
          </section>
        ) : (
          <h2 className='text-2xl font-bold text-center'>No se encontraron usuarios para mostrar...</h2> 
        )
      }
      </section>

    </>
  )
}

export default Search
