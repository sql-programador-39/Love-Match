import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire, faBan } from '@fortawesome/free-solid-svg-icons'

import imgPeque from '../../assets/peque.webp'

const InitialCard = ({ profile }) => {

  const { name, age, genre, interests, description } = profile

  let genreTransformed

  if(genre === 'Masculino') {
    genreTransformed = 'Hombre'
  } else if(genre === 'Femenino') {
    genreTransformed = 'Mujer'
  } else {
    genreTransformed = 'Otro'
  }

  const handleLikeClick = () => {
    console.log('like')
  }

  return (
    <div className='rounded-xl shadow-lg'>
      <img src={ imgPeque } alt="" className='rounded-t-lg'/>           
      <div className='pb-5 px-5'>

        <div className='flex mb-4 justify-between'>
          <div>
            <h2 className='mt-2 text-3xl font-bold'>{ name }</h2>
            <p className='text-sm text-gray-500'>{ genreTransformed }</p>
          </div>
          <p className='my-2 text-center text-3xl font-bold text-red-600'>{ age } Años</p>
        </div>

        <div className='mb-2 border-b-2 pb-2'></div>
        
        <div>
          <p className='font-bold text-xl mb-2'>Sobre { name }</p>
          <p className='h-60 overflow-y-auto'>{ description }</p>
        </div>
        

        <div className='mb-2 border-b-2 pb-2'></div>

        <p className='font-bold text-xl mb-2'>Intereses</p>
        <div className='grid grid-cols-3 gap-3'>
          {
            interests.map((tag, i) => (
              <span key={i} className='bg-black text-white font-medium px-2.5 py-1 rounded-full w-full text-center'>{ tag }</span>
            ))
          }
        </div>

        <div className='mb-4 border-b-2 pb-4'></div>
        <div className='grid grid-cols-2 gap-4 text-white'>
          <button type='button' onClick={ handleLikeClick } className='w-full bg-gray-600 py-1 rounded-full hover:bg-slate-500 font-medium text-lg'>
          <FontAwesomeIcon icon={ faBan } /> nope
          </button>
          <button type='button' onClick={ handleLikeClick } className='w-full bg-red-600 py-1 rounded-full hover:bg-red-500 font-medium text-lg'>
            <FontAwesomeIcon icon={ faFire } /> like
          </button>
        </div>

      </div>
    </div>
  )
}

export default InitialCard
