import React, { useState } from 'react';

const TaskForm = ({ task, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        assignedTo: task ? task.assignedTo : '',
        status: task ? task.status : 'Not Started',
        dueDate: task ? task.dueDate : '',
        priority: task ? task.priority : 'Normal',
        description: task ? task.description : ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div className="task-form">
            <form onSubmit={handleSubmit}>
                <label>
                    Assigned To
                    <input
                        type="text"
                        name="assignedTo"
                        value={formData.assignedTo}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Status
                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                    >
                        <option value="Not Started">Not Started</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </label>

                <label>
                    Due Date
                    <input
                        type="date"
                        name="dueDate"
                        value={formData.dueDate}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Priority
                    <select
                        name="priority"
                        value={formData.priority}
                        onChange={handleChange}
                    >
                        <option value="Low">Low</option>
                        <option value="Normal">Normal</option>
                        <option value="High">High</option>
                    </select>
                </label>

                <label>
                    Description
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </label>

                <div className="form-buttons">
                    <button type="submit">Save</button>
                    <button type="button" onClick={onCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default TaskForm;
