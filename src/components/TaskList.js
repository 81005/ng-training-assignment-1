import React from 'react';

const TaskList = ({ tasks, onEdit, onDelete }) => {
    return (
        <div className="task-list">
            <table className="task-table">
                <thead>
                    <tr>
                        <th>Assigned To</th>
                        <th>Status</th>
                        <th>Due Date</th>
                        <th>Priority</th>
                        <th>Comments</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => (
                        <tr key={task.id}>
                            <td>{task.assignedTo}</td>
                            <td>{task.status}</td>
                            <td>{task.dueDate}</td>
                            <td>{task.priority}</td>
                            <td>{task.comments}</td>
                            <td>
                                <button style={{ backgroundColor: 'yellow', color: 'black', padding: '5px 10px', marginRight: '5px' }} onClick={() => onEdit(task)}  >Edit</button>
                                <button style={{ backgroundColor: 'yellow', color: 'black', padding: '5px 10px', marginRight: '5px' }} onClick={() => onDelete(task)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TaskList;
