import Button from './Button';

import Modal from '../ModalElements/Modal';

const ConfirmDelete = props => {
    return (
        <Modal
            show={props.show}
            onCancel={props.onCancel}
            header={`Confirm Delete`}
            justifyRight
            footer={
                <div>
                    <Button type='button' onClick={props.onCancel}>Cancel</Button>
                    <Button type='button' onClick={props.onDelete} color='red'>Delete</Button>
                </div>
            }
        >
            <span>
                Are you sure you want to remove {`${props.removeItem}`}{props.from && ` from ${props.from}`}?
                <br />
                You won't be able to undo this action.
            </span>
        </Modal>
    );
};

export default ConfirmDelete;