import React from 'react';

const DeleteTaskModal = ({ taskName, onDeleteConfirm, onCancel }) => {
    return (
        <div className="delete-task-modal">
            <h3>Delete</h3>
   
            <p>Do you want to delete task {taskName}?</p>
            <div className="modal-buttons">
                <button style={{ backgroundColor: 'yellow', color: 'black', padding: '5px 10px', marginRight: '5px' }} onClick={onCancel}>No</button>
                <button style={{ backgroundColor: 'green', color: 'black', padding: '5px 10px', marginRight: '5px' }} onClick={onDeleteConfirm}>Yes</button>
            </div>
        </div>
    );
};

export default DeleteTaskModal;
