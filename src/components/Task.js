import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers'
import { FaTimes, FaBell, FaBellSlash } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className='task' onDoubleClick={() => onToggle(task.id)}>
      <h3>
        {task.text} 
        <div>
          {task.reminder === true ? (<FaBell style={{ color: 'green'}} onClick={() => onToggle(task.id)} />) : (<FaBellSlash style={{ color: 'gray'}} onClick={() => onToggle(task.id)} />)}
          <FaTimes style={{ color: 'red', cursor: 'pointer'}} onClick={() => onDelete(task.id)} />
        </div>
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task