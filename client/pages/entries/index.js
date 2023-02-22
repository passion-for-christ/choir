import { useAdmin } from '@/utils/hooks/admin.hook';

import Button from '@/components/UIElements/Button';
import LoadingSpinner from '@/components/UIElements/LoadingSpinner';
import Modal from '@/components/ModalElements/Modal';
import ConfirmDelete from '@/components/UIElements/ConfirmDelete';
import AdminTable from '@/components/UIElements/AdminTable';

import UpdateEntries from './update';

import classes from './index.module.scss';

const Entries = () => {
    const [
        isLoading,
        showSuccessMessage,
        setShowSuccessMessage,
        collection,
        modalState,
        openDeleteModalHandler,
        deleteHandler,
        openUpdateModalHandler,
        updateHandler,
        closeModalHandler,
    ] = useAdmin('sign-up');

    const {
        currentlySelected,
        showUpdateModal,
        showConfirmDeleteModal,
        deletedOrUpdated,
    } = modalState;

    return (
        <>
            {isLoading && <LoadingSpinner asOverlay />}

            <div className={classes.adminContentUsers}>
                <h4>CHOIR ENTRIES</h4>

                {collection.length ? ( 
                    <>
                        {showSuccessMessage && (
                            <div className='success-message' style={
                                {background: deletedOrUpdated === 'deleted' ? '#b74242' : '#60AE5B'}
                            }>
                                <p>Choir entry {deletedOrUpdated} successfully.</p>
                                <Button
                                    className='success-message-btn'
                                    type='button'
                                    size='icon'
                                    color='transparent-white'
                                    onClick={() => setShowSuccessMessage(false)}
                                >
                                    <i className='fal fa-times'></i>
                                </Button>
                            </div>
                        )}

                        <AdminTable>
                            <thead>
                                <tr>
                                    <td>Name</td>
                                    <td>Age</td>
                                    <td>Phone</td>
                                    <td>Email</td>
                                    <td>Church</td>
                                    <td>City</td>
                                    <td>Vocal Part</td>
                                </tr>
                            </thead>

                            <tbody>
                                {collection.length ? (
                                    collection.map(entry => (
                                        <tr key={entry._id}>
                                            <td style={{ textTransform: 'capitalize' }}>
                                                {entry.firstName + ' ' + entry.lastName}
                                            </td>

                                            <td style={{ textTransform: 'capitalize' }}>
                                                {entry.age}
                                            </td>

                                            <td style={{ textTransform: 'capitalize' }}>
                                                {entry.telephone}
                                            </td>

                                            <td style={{ textTransform: 'capitalize' }}>
                                                {entry.email}
                                            </td>

                                            <td style={{ textTransform: 'capitalize' }}>
                                                {entry.church}
                                            </td>

                                            <td style={{ textTransform: 'capitalize' }}>
                                                {entry.city}
                                            </td>

                                            <td style={{ textTransform: 'capitalize' }}>
                                                {entry.voiceType}
                                            </td>

                                            <td className={classes.adminButtons}>
                                                <div>
                                                    {/* <Button type='button' size='icon' onClick={() => openUpdateModalHandler(entry)}>
                                                        <i className='fal fa-edit'></i>
                                                    </Button> */}
                                                    
                                                    <Button type='button' size='icon' onClick={() => openDeleteModalHandler(entry)} color='red'>
                                                        <i className='fal fa-trash-alt'></i>
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td>No entry found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </AdminTable>
                    </>
                ) : null} 

                {/* <Modal 
                    show={showUpdateModal} 
                    onCancel={closeModalHandler}
                    size='regular'
                    header={`${(currentlySelected && (currentlySelected.firstName + ' ' + currentlySelected.lastName)) ? 'EDIT' : 'ADD'} ENTRY`}
                    footer={<p>* Required Field</p>}
                >
                    <UpdateEntries
                        church={currentlySelected}
                        onUpdate={updateHandler}
                        isModalLoading={isLoading}
                    />
                </Modal> */}

                <ConfirmDelete
                    show={showConfirmDeleteModal}
                    onCancel={closeModalHandler}
                    onDelete={() => deleteHandler(currentlySelected._id)}
                    removeItem={currentlySelected && (currentlySelected.firstName + ' ' + currentlySelected.lastName)}
                    from='choir entries'
                />
            </div>
        </>
    );
};

export default Entries;