import { useState } from 'react';

import { INITIAL_REGISTRATION_INPUTS } from '../../data/initialRegistrationInputs';

import { VALIDATOR_REQUIRE, VALIDATOR_EMAIL } from '@/utils/validators';
import { useForm } from '../../utils/hooks/FormHooks/form.hook';
import { useSubmitHook } from '../../utils/hooks/FormHooks/submit.hook';

import Input from '../../components/UIElements/Input';
import LoadingSpinner from '../../components/UIElements/LoadingSpinner';
import SubmitButton from '../../components/FormElements/SubmitButton';

const UpdateEntries = ({ entry, onUpdate, isModalLoading }) => {
    const { submitHandler } = useSubmitHook();

    const [isLoading, setIsLoading] = useState(isModalLoading);

    const [formIsTouched, setFormIsTouched] = useState(false);

    const [formState, inputHandler] = useForm(INITIAL_REGISTRATION_INPUTS, false);

    const submitRegistrationForm = (event) => {
        setIsLoading(true);
        event.preventDefault();
        submitHandler(formState, entry);
        onUpdate();
        setIsLoading(false);
    };

    const formTouchedHandler = () => {
        setFormIsTouched(true);
    };

    if (!entry) return null;
    
    return (
        <>
            {isLoading ? <LoadingSpinner asOverlay /> : null}

            <form onSubmit={submitRegistrationForm} onChange={formTouchedHandler}>
                <div className='form-row form-row-flex-1'>
                    <Input id='firstName'
                        element='input' type='text'
                        label='First Name *'
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        initialValidity={true}
                        initialValue={entry.firstName}
                    />

                    <Input id='lastName'
                        element='input' type='text'
                        label='Last Name *'
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        initialValidity={true}
                        initialValue={entry.lastName}
                    />
                </div>

                <div className='form-row form-row-flex-1'>
                    <Input id='age'
                        element='input' type='number'
                        label='Age *'
                        min={0}
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        initialValidity={true}
                        initialValue={entry.age}
                    />

                    <Input id='city'
                        element='input' type='text'
                        label='City *'
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        initialValidity={true}
                        initialValue={entry.city}
                    />
                </div>

                <div className='form-row form-row-flex-1'>
                    <Input id='church'
                        element='input' type='text'
                        label='Church *'
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        initialValidity={true}
                        initialValue={entry.church}
                    />
                </div>

                <div className='form-row form-row-flex-1'>
                    <Input id='telephone'
                        element='input' type='tel'
                        label='Phone Number *'
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        initialValidity={true}
                        initialValue={entry.telephone}
                    />

                    <Input id='email'
                        element='input' type='email'
                        label='Email *'
                        validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
                        onInput={inputHandler}
                        initialValidity={true}
                        initialValue={entry.email}
                    />
                </div>  

                <div className='form-row form-row-flex-1'>
                    <Input id='voiceType'
                        element='select' type='input'
                        label='Voice Type *'
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        initialValidity={true}
                        initialValue={entry.voiceType}
                    >
                        <option value='' disabled defaultValue>Select</option>
                        <option value='Soprano'>Soprano</option>
                        <option value='Alto'>Alto</option>
                        <option value='Tenor'>Tenor</option>
                        <option value='Bass'>Bass</option>
                        <option value='Unsure'>Unsure</option>
                    </Input>
                </div>            

                <SubmitButton isValid={formState.isValid} formIsTouched={formIsTouched} />                
            </form>
        </>
    );
};

export default UpdateEntries;