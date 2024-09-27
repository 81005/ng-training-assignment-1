import React from 'react';

const DeleteTaskModal = ({ taskName, onDeleteConfirm, onCancel }) => {
    return (
        <div className="delete-task-modal">
            <h3>Delete</h3>
            <p>Do you want to delete task {taskName}?</p>
            <div className="modal-buttons">
                <button onClick={onCancel}>No</button>
                <button onClick={onDeleteConfirm}>Yes</button>
            </div>
        </div>
    );
};

export default DeleteTaskModal;
