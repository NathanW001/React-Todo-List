import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import FailSnackbar from './components/FailSnackbar'
import { useState } from 'react'
import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers'



function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [showSnackbar, setShowSnakbar] = useState(false)
  const [tasks, setTasks] = useState([{
    id: 1,
    text: 'Doctor\'s Appointment',
    day: 'Feb 5th at 2:30 pm',
    reminder: true,
  }])

  var lowestId = tasks.length + 1 

  //Show Snackbar
  const showAndHideSnackbar = () => {
    setShowSnakbar(true)
    setTimeout(() => {setShowSnakbar(false)}, 3000)
  }

  //Add Task
  const addTask = (task) => {
    const id = lowestId
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
    lowestId++
  }

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      {showSnackbar && <FailSnackbar isSuccess={true} message={'This is a snackbar!'}/>}
      <Header onClickAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} onAddFail={showAndHideSnackbar}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? 
      (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) 
      : ('No Tasks!')}
    </div>
  );
}

export default App;
