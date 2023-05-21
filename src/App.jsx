import Task from './components/task'
import './styles.css'
function App() {

  return (
    <div className='main-div'>
      <form className="new-item-form">
        <label className='new-item-label'>New Item: </label>
        <input type='text' className='new-item-input'/>
        <button className='new-item-button'>Add</button>
        <h2>To-Do List</h2>
        <Task taskTitle="Test Task" taskCompleted={false}/>
      </form>
    </div>
  )
}

export default App
