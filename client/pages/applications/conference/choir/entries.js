import { useAdmin } from '../../../../utils/hooks/admin.hook';

import Button from '../../../../components/UIElements/Button';
import LoadingSpinner from '../../../../components/UIElements/LoadingSpinner';
import Modal from '../../../../components/ModalElements/Modal';
import ConfirmDelete from '../../../../components/UIElements/ConfirmDelete';
import AdminTable from '../../../../components/UIElements/AdminTable';
import { useRouter } from 'next/router';

import UpdateEntries from './components/registration-update';

import classes from './entries.module.scss';
import { useEffect, useState } from 'react';

const Entries = ({ props }) => {
    const [cityFilter, setCityFilter] = useState('');
    const [voiceTypeFilter, setVoiceTypeFilter] = useState('');

    const [ isAdmin, setIsAdmin ] = useState(false);

    const [
        isLoading,
        showSuccessMessage,
        setShowSuccessMessage,
        collection,
        modalState,
        // openDeleteModalHandler,
        deleteHandler,
        // openUpdateModalHandler,
        updateHandler,
        closeModalHandler,
    ] = useAdmin('sign-up', cityFilter, voiceTypeFilter);

    const {
        currentlySelected,
        showUpdateModal,
        showConfirmDeleteModal,
        deletedOrUpdated,
    } = modalState;

    const router = useRouter(); 

    const theQuery = router.query.pass;

    useEffect(() => {
        if (theQuery && theQuery === '1qaz2wsx') {
            setIsAdmin(true);
        }
    }, [theQuery]);

    const onChangeVoiceTypeFilter = event => {
        event.preventDefault();
        const value = event.target.value;

        let updatedFilter = `&voiceType=${value}`;
        setVoiceTypeFilter(updatedFilter);
    };

    const onChangeCityFilter = event => {
        event.preventDefault();
        const value = event.target.value;

        let updatedFilter = `&city=${value}`;
        setCityFilter(updatedFilter);
    };

    const resetFilterHandler = () => {
        document.querySelector('form').reset();
        setCityFilter('');
        setVoiceTypeFilter('');
    };

    if (!theQuery || !isAdmin) {
        return <div style={{marginTop: '2rem', textAlign: 'center'}}>Sorry you are not authorized to view this content.</div>;
    }

    return (
        <>
            {isLoading && <LoadingSpinner asOverlay />}

            <div className={classes.adminContentUsers}>
                <h4>CHOIR entries</h4>

                <form>
                    <div className={classes.filters}>
                        <div className={classes.filter}>
                            <label htmlFor='city-filter'>Filter City</label>
                            <select id='city-filter' onChange={onChangeCityFilter}>
                                <option hidden={true}>Select</option>
                                <option disabled={true} default={true}>Select</option>

                                <option value='Seattle'>Seattle</option>
                                <option value='Portland'>Portland</option>
                            </select>
                        </div>

                        <div className={classes.filter}>
                            <label htmlFor='voice-type-filter'>Filter Choir Part</label>
                            <select id='voice-type-filter' onChange={onChangeVoiceTypeFilter}>
                                <option hidden={true}>Select</option>
                                <option disabled={true} default={true}>Select</option>

                                <option value='Soprano' defaultValue>Soprano</option>
                                <option value='Alto'>Alto</option>
                                <option value='Tenor'>Tenor</option>
                                <option value='Bass'>Bass</option>
                            </select>
                        </div>

                        <button className={classes.resetButton} onClick={resetFilterHandler} type='button'>Reset Filter</button>
                    </div>
                </form>

                {collection.length ? ( 
                    <>
                        <div className={classes.totals}>
                            <p>
                                Total Entries: &nbsp;&nbsp;<strong>{collection.length}</strong> &nbsp;&nbsp;
                            </p>
                        </div>

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
                                    <td></td>
                                    <td>Name</td>
                                    <td>Age</td>
                                    <td>Phone</td>
                                    <td>Email</td>
                                    <td>Church</td>
                                    <td>City</td>
                                    <td>Choir Part</td>
                                    <td>Experience</td>
                                    {/* <td></td> */}
                                </tr>
                            </thead>

                            <tbody>
                                {collection.length ? (
                                    collection.map((entry, i) => (
                                        <tr key={entry._id}>
                                            <td>{ i + 1 }</td>
                                            <td style={{ textTransform: 'capitalize' }}>
                                                {entry.firstName + ' ' + entry.lastName}
                                            </td>

                                            <td style={{ textTransform: 'capitalize' }}>
                                                {entry.age}
                                            </td>

                                            <td style={{ textTransform: 'capitalize' }}>
                                                {entry.telephone}
                                            </td>

                                            <td>
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

                                            <td style={{ textTransform: 'capitalize' }}>
                                                {entry.experienced ? 'YES' : 'NO'}
                                            </td>

                                            {/* <td className={classes.adminButtons}>
                                                <div>
                                                    <Button type='button' size='icon' onClick={() => openUpdateModalHandler(entry)}>
                                                        <i className='fal fa-edit'></i>
                                                    </Button>
                                                    
                                                    <Button type='button' size='icon' onClick={() => openDeleteModalHandler(entry)} color='red'>
                                                        <i className='fal fa-trash-alt'></i>
                                                    </Button>
                                                </div>
                                            </td> */}
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
                ) : (
                    <div>
                        No entries yet.
                    </div>
                )} 

                <Modal 
                    show={showUpdateModal} 
                    onCancel={closeModalHandler}
                    size='regular'
                    header={`${(currentlySelected && (currentlySelected.firstName + ' ' + currentlySelected.lastName)) ? 'EDIT' : 'ADD'} ENTRY`}
                    footer={<p>* Required Field</p>}
                >
                    <UpdateEntries
                        entry={currentlySelected}
                        onUpdate={updateHandler}
                        isModalLoading={isLoading}
                    />
                </Modal>

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