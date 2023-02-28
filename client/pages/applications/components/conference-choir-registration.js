import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { useForm } from '@/utils/hooks/FormHooks/form.hook';
import { useSubmitHook } from '@/utils/hooks/FormHooks/submit.hook';

import { VALIDATOR_EMAIL, VALIDATOR_REQUIRE } from '../../../utils/validators';
import { INITIAL_REGISTRATION_INPUTS } from '@/data/initialRegistrationInputs';

import LoadingSpinner from '../../../components/UIElements/LoadingSpinner';
import Input from '../../../components/UIElements/Input';
import SubmitButton from '@/components/FormElements/SubmitButton';

const Registration = () => {
    const { submitHandler } = useSubmitHook();
    const router = useRouter(); 

    const [isLoading, setIsLoading] = useState(true);
  
    const [formState, inputHandler] = useForm(INITIAL_REGISTRATION_INPUTS, false);
  
    useEffect(() => {
        setIsLoading(false);
    }, []);

    const submitEntryForm = (event) => {
        setIsLoading(true);
        event.preventDefault();
        submitHandler(formState);
        setIsLoading(false);
        router.push('/applications/conference-choir-submited')
    };

    return (
        <>
            {isLoading ? <LoadingSpinner asOverlay /> : null}

            <form onSubmit={submitEntryForm}>
                <Input id='firstName'
                element='input' type='text'
                label='First Name *'
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}
                initialValidity={false}
                />

                <Input id='lastName'
                element='input' type='text'
                label='Last Name *'
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}
                initialValidity={false}
                />

                <div className='form-row form-row-flex-1'>
                    <Input id='age'
                        element='input' type='number'
                        min={0}
                        label='Age *'
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        initialValidity={false}
                    />

                    <Input id='city'
                        element='select' type='input'
                        label='Region *'
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        initialValidity={false}
                    >
                        <option value='' disabled defaultValue>Select</option>
                        <option value='Seattle'>Seattle</option>
                        <option value='Portland'>Portland</option>
                    </Input>
                </div>

                <div className='form-row form-row-flex-1'>
                    <Input id='church'
                        element='input' type='text'
                        label='Church *'
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        initialValidity={false}
                    />
                </div>

                <Input id='telephone'
                    element='input' type='tel'
                    label='Phone Number *'
                    validators={[VALIDATOR_REQUIRE()]}
                    onInput={inputHandler}
                    initialValidity={false}
                />

                <Input id='email'
                    element='input' type='email'
                    label='Email *'
                    validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
                    onInput={inputHandler}
                    initialValidity={false}
                />

        
                <Input id='experienced'
                    element='select' type='input'
                    label='Choir Experience *'
                    validators={[VALIDATOR_REQUIRE()]}
                    onInput={inputHandler}
                    initialValidity={false}
                >
                    <option value='' disabled defaultValue>Select</option>
                    <option value='true'>Yes</option>
                    <option value='false'>No</option>
                </Input>

                <Input id='voiceType'
                    element='select' type='input'
                    label='Choir Part *'
                    validators={[VALIDATOR_REQUIRE()]}
                    onInput={inputHandler}
                    initialValidity={false}
                >
                    <option value='' disabled defaultValue>Select</option>
                    <option value='Soprano'>Soprano</option>
                    <option value='Alto'>Alto</option>
                    <option value='Tenor'>Tenor</option>
                    <option value='Bass'>Bass</option>
                    <option value='Unsure'>Unsure</option>
                </Input>
                    

                <SubmitButton isValid={formState.isValid} />                
            </form>
        </>
    );
};

export default Registration;