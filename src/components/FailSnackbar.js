import { FaTimes } from 'react-icons/fa'

const Snackbar = ({ message }) => {
  return (
    <div className='snackbar' style={{ backgroundColor: 'red'}}>
      <FaTimes/>
      <h2>{message}</h2>
    </div>
  )
}

export default Snackbar