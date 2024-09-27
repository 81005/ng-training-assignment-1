import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import DeleteTaskModal from './components/DeleteTaskModal';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
      { id: 1, assignedTo: 'User 1', status: 'Completed', dueDate: '2024-10-12', priority: 'Low', comments: 'This task is good' },
      { id: 2, assignedTo: 'User 2', status: 'In Progress', dueDate: '2024-09-14', priority: 'High', comments: 'This' },
      { id: 3, assignedTo: 'User 3', status: 'Not Started', dueDate: '2024-08-18', priority: 'Low', comments: 'This' },
  ]);

  const [currentTask, setCurrentTask] = useState(null);
  const [isFormVisible, setFormVisible] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  const handleEdit = (task) => {
      setCurrentTask(task);
      setFormVisible(true);
  };

  const handleDelete = (task) => {
      setTaskToDelete(task);
      setDeleteModalVisible(true);
  };

  const handleSave = (taskData) => {
      if (currentTask) {
          setTasks(prevTasks => prevTasks.map(task => (task.id === currentTask.id ? { ...task, ...taskData } : task)));
      } else {
          setTasks(prevTasks => [...prevTasks, { id: prevTasks.length + 1, ...taskData }]);
      }
      setFormVisible(false);
      setCurrentTask(null);
  };

  const handleDeleteConfirm = () => {
      setTasks(prevTasks => prevTasks.filter(task => task.id !== taskToDelete.id));
      setDeleteModalVisible(false);
      setTaskToDelete(null);
  };

  return (
      <div className="App">
         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 >Tasks</h1>
          <button  style={{  backgroundColor: 'yellow', color: 'black', padding: '5px 10px',  marginLeft: 'auto' }} onClick={() => setFormVisible(true)}>New Task</button>
          </div>
          <TaskList tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} />

          {isFormVisible && (
              <TaskForm
                  task={currentTask}
                  onSave={handleSave}
                  onCancel={() => setFormVisible(false)}
              />
          )}

          {isDeleteModalVisible && (
              <DeleteTaskModal
                  taskName={taskToDelete.assignedTo}
                  onDeleteConfirm={handleDeleteConfirm}
                  onCancel={() => setDeleteModalVisible(false)}
              />
          )}
      </div>
  );
};

export default App;
