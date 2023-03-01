import { useState, useCallback, useReducer, useEffect } from 'react';

import { useHttpClient } from './http.hook';

const initialState = {
    currentlySelected: {},
    showUpdateModal: false,
    showConfirmDeleteModal: false,
    deletedOrUpdated: 'updated',
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'OPEN_MODAL':
            const { payload } = action;

            let modalAction;
            if (payload.modal === 'showConfirmDeleteModal') {
                modalAction = 'deleted';
            } else {
                modalAction = 'updated';
            }

            return {
                ...state,
                [payload.modal]: true,
                currentlySelected: payload.current,
                deletedOrUpdated: modalAction,
            };
        case 'CLOSE_MODAL':
            return {
                ...state,
                showUpdateModal: false,
                showConfirmDeleteModal: false,
            };
        default:
            return {
                ...state,
            };
    }
};

const useModals = () => {
    const [modalState, dispatch] = useReducer(reducer, initialState);

    const openUpdateModal = useCallback((currentlySelected) => {
        dispatch({ type: 'OPEN_MODAL', payload: {
            modal: 'showUpdateModal',
            current: currentlySelected,
        }});
    }, []);

    const openConfirmDeleteModal = useCallback((currentlySelected) => {
        dispatch({ type: 'OPEN_MODAL', payload: {
            modal: 'showConfirmDeleteModal',
            current: currentlySelected,
        }});
    }, []);

    const closeModal = useCallback(() => {
        dispatch({ type: 'CLOSE_MODAL' });
    }, []);

    return [modalState, openUpdateModal, openConfirmDeleteModal, closeModal];
};

export const useAdmin = (collectionUrl, cityFilter, voiceTypeFilter) => {
    const { sendRequest } = useHttpClient();

    const [isLoading, setIsLoading] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [collection, setCollection] = useState([]);

    const [modalState, openUpdateModal, openConfirmDeleteModal, closeModal] = useModals();

    useEffect(() => {
        fetchCollection();
    }, [sendRequest, cityFilter, voiceTypeFilter]);

    const fetchCollection = async () => {
        setIsLoading(true);
        try {
            const responseData = await sendRequest(process.env.BACKEND_URL + '/' + collectionUrl + '/?' + cityFilter + voiceTypeFilter);
            setCollection(responseData.data.data);
        } catch (err) {
            console.error('There was an error fetching the collection: ', err);
        }
        setIsLoading(false);
    };

    const successfulPatch = () => {
        setShowSuccessMessage(true);
        fetchCollection();
    };

    const deleteHandler = async () => {
        setIsLoading(true);

        try {
            await sendRequest(process.env.BACKEND_URL + '/' + collectionUrl + '/' + modalState.currentlySelected._id, 'DELETE');
            successfulPatch();
        } catch (err) {
            console.error('There was an error deleting this document: ', err);
        }

        closeModal();
        setIsLoading(false);
    };

    const openDeleteModalHandler = (document) => {
        setShowSuccessMessage(false);
        setIsLoading(true);

        openConfirmDeleteModal(document);

        setIsLoading(false);
    };

    const updateHandler = () => {
        setIsLoading(true);

        closeModal();
        successfulPatch();

        setIsLoading(false);
    };

    const openUpdateModalHandler = (document) => {
        setIsLoading(true);
        setShowSuccessMessage(false);

        openUpdateModal(document);

        setIsLoading(false);
    };

    const closeModalHandler = () => {
        setIsLoading(true);

        closeModal();
        setIsLoading(false);
    };

    return [
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
    ];
};