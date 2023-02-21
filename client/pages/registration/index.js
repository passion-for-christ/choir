import { useState, useEffect } from 'react';

import { useForm } from '@/utils/hooks/FormHooks/form.hook';
import { useSubmitHook } from '@/utils/hooks/FormHooks/submit.hook';

import { VALIDATOR_EMAIL, VALIDATOR_REQUIRE } from '../../utils/validators';
import { INITIAL_REGISTRATION_INPUTS } from '@/data/initialRegistrationInputs';

import LoadingSpinner from '../../components/UIElements/LoadingSpinner';
import Input from '../../components/UIElements/Input';
import SubmitButton from '@/components/FormElements/SubmitButton';
// import Button from '@/components/UIElements/Button';

const Registration = () => {
    const { submitHandler } = useSubmitHook();

    const [isLoading, setIsLoading] = useState(true);
  
    const [formState, inputHandler] = useForm(INITIAL_REGISTRATION_INPUTS, false);
  
    useEffect(() => {
        setIsLoading(false);
    }, []);

    const submitRegistrationForm = (event) => {
        setIsLoading(true);
        event.preventDefault();
        submitHandler(formState);
        setIsLoading(false);
    };

    return (
        <>
            {isLoading ? <LoadingSpinner asOverlay /> : null}

            <h4>CHOIR REGISTRATION FORM</h4>

            <form onSubmit={submitRegistrationForm} className='container'>
                <div className='form-row form-row-flex-1'>
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
                </div>

                <div className='form-row form-row-flex-1'>
                    <Input id='age'
                        element='input' type='number'
                        label='Age *'
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        initialValidity={false}
                    />

                    <Input id='city'
                        element='input' type='text'
                        label='City *'
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        initialValidity={false}
                    />
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

                <div className='form-row form-row-flex-1'>
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
                </div>  

                <div className='form-row form-row-flex-1'>
                    <div>
                        <label htmlFor='experienced'><strong>Do you have choir experience?</strong></label>
                        <Input id='experienced'
                            element='radio' type='radio'
                            name='choirExperience'
                            label='Yes'
                            initialValue={true}
                            validators={[]}
                            onInput={inputHandler}
                            initialValidity={false}
                        />

                        <Input id='experienced'
                            element='radio' type='radio'
                            name='choirExperience'
                            label='No'
                            initialValue={false}
                            validators={[]}
                            onInput={inputHandler}
                            initialValidity={false}
                        />
                    </div>

                    <Input id='voiceType'
                        element='select' type='input'
                        label='Voice Type *'
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        initialValidity={false}
                    >
                        <option value='' disabled defaultValue>Select</option>
                        <option value='Unsure'>Unsure</option>
                        <option value='Soprano'>Soprano</option>
                        <option value='Alto'>Alto</option>
                        <option value='Tenor'>Tenor</option>
                        <option value='Bass'>Bass</option>
                    </Input>
                </div>            

                {/* <Button onClick={() => console.log(formState)} type='button' /> */}

                <SubmitButton isValid={formState.isValid} />                
            </form>
        </>
    );
};

export default Registration;