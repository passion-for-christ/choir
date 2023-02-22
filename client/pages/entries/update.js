import { useState, useEffect } from 'react';

import { VALIDATOR_REQUIRE } from '@/utils/validators';
import { useForm } from '@/utils/hooks/FormHooks/form.hook';
import { useHttpClient } from '@/utils/hooks/http.hook';

import Input from '@/components/UIElements/Input';
import Button from '@/components/UIElements/Button';
import LoadingSpinner from '@/components/UIElements/LoadingSpinner';

const UpdateEntries = ({ church, onUpdate, isModalLoading }) => {
    const { sendRequest } = useHttpClient();

    const [isLoading, setIsLoading] = useState(isModalLoading);

    const [editMode, setEditMode] = useState(false);
    const [formIsTouched, setFormIsTouched] = useState(false);

    const [formState, inputHandler] = useForm({
        address_line_1: {
            value: '',
            isValid: false,
        },
        address_line_2: {
            value: '',
            isValid: false,
        },
        state: {
            value: '',
            isValid: false,
        },
        city: {
            value: '',
            isValid: false,
        },
        zipCode: {
            value: '',
            isValid: false,
        },
        locationTitle: {
            value: '',
            isValid: false,
        },
        locationText: {
            value: '',
            isValid: false,
        },
        locationLink: {
            value: '',
            isValid: false,
        },
        locationLinkLabel: {
            value: '',
            isValid: false,
        },
        locationHasMap: {
            value: false,
            isValid: false,
        },
        locationReverse: {
            value: false,
            isValid: false,
        },
        featuredChurchImage: {
            value: '',
            isValid: false,
        },
        churchMobileFeaturedImage: {
            value: '',
            isValid: false,
        },
        mainBibleVerse: {
            value: '',
            isValid: false,
        },
        mainBibleVerseRef: {
            value: '',
            isValid: false,
        },
        youTubeLink: {
            value: '',
            isValid: false,
        },
        facebookLink: {
            value: '',
            isValid: false,
        },
        instagramLink: {
            value: '',
            isValid: false,
        },
        connectWithUsTitle: {
            value: '',
            isValid: false,
        },
        connectWithUsDescription: {
            value: '',
            isValid: false,
        },
        membershipImage: {
            value: '',
            isValid: false,
        },
        membershipTitle: {
            value: '',
            isValid: false,
        },
        membershipSubTitle: {
            value: '',
            isValid: false,
        },
        membershipText: {
            value: '',
            isValid: false,
        },
        membershipLink: {
            value: '',
            isValid: false,
        },
        membershipLinkLabel: {
            value: '',
            isValid: false,
        },
        membershipReverse: {
            value: false,
            isValid: false,
        },
        servingImage: {
            value: '',
            isValid: false,
        },
        servingTitle: {
            value: '',
            isValid: false,
        },
        servingSubTitle: {
            value: '',
            isValid: false,
        },
        servingText: {
            value: '',
            isValid: false,
        },
        servingLink: {
            value: '',
            isValid: false,
        },
        servingLinkLabel: {
            value: '',
            isValid: false,
        },
        servingReverse: {
            value: false,
            isValid: false,
        },
        connectImage: {
            value: '',
            isValid: false,
        },
        connectTitle: {
            value: '',
            isValid: false,
        },
        connectSubTitle: {
            value: '',
            isValid: false,
        },
        connectText: {
            value: '',
            isValid: false,
        },
        connectLink: {
            value: '',
            isValid: false,
        },
        connectLinkLabel: {
            value: '',
            isValid: false,
        },
        connectLabelName: {
            value: '',
            isValid: false,
        },
        connectLabelPhone: {
            value: '',
            isValid: false,
        },
        connectLabelEmail: {
            value: '',
            isValid: false,
        },
        connectReverse: {
            value: false,
            isValid: false,
        },
        churchAds: {
            value: [],
            isValid: false,
        },
        churchServices: {
            value: [],
            isValid: false,
        },
    }, false);

    useEffect(() => {
        if (church && church.city) {
            setEditMode(true);
        };        
    }, [church]);

    const submitFormHandler = async (event) => {
        setIsLoading(true);
        event.preventDefault();
        
        const formData = new FormData();

        formData.append('address_line_1', formState.inputs.address_line_1.value);
        formData.append('address_line_2', formState.inputs.address_line_2.value);
        formData.append('state', formState.inputs.state.value);
        formData.append('city', formState.inputs.city.value);
        formData.append('zipCode', formState.inputs.zipCode.value);
        formData.append('locationTitle', formState.inputs.locationTitle.value);
        formData.append('locationText', formState.inputs.locationText.value);
        formData.append('locationLink', formState.inputs.locationLink.value);
        formData.append('locationLinkLabel', formState.inputs.locationLinkLabel.value);
        formData.append('locationHasMap', formState.inputs.locationHasMap.value);
        formData.append('locationReverse', formState.inputs.locationReverse.value);
        formData.append('featuredChurchImage', formState.inputs.featuredChurchImage.value);
        formData.append('churchMobileFeaturedImage', formState.inputs.churchMobileFeaturedImage.value);
        formData.append('mainBibleVerse', formState.inputs.mainBibleVerse.value);
        formData.append('mainBibleVerseRef', formState.inputs.mainBibleVerseRef.value);
        formData.append('youTubeLink', formState.inputs.youTubeLink.value);
        formData.append('facebookLink', formState.inputs.facebookLink.value);
        formData.append('instagramLink', formState.inputs.instagramLink.value);
        formData.append('connectWithUsTitle', formState.inputs.connectWithUsTitle.value);
        formData.append('connectWithUsDescription', formState.inputs.connectWithUsDescription.value);
        formData.append('membershipImage', formState.inputs.membershipImage.value);
        formData.append('membershipTitle', formState.inputs.membershipTitle.value);
        formData.append('membershipSubTitle', formState.inputs.membershipSubTitle.value);
        formData.append('membershipText', formState.inputs.membershipText.value);
        formData.append('membershipLink', formState.inputs.membershipLink.value);
        formData.append('membershipLinkLabel', formState.inputs.membershipLinkLabel.value);
        formData.append('membershipReverse', formState.inputs.membershipReverse.value);
        formData.append('servingImage', formState.inputs.servingImage.value);
        formData.append('servingTitle', formState.inputs.servingTitle.value);
        formData.append('servingSubTitle', formState.inputs.servingSubTitle.value);
        formData.append('servingText', formState.inputs.servingText.value);
        formData.append('servingLink', formState.inputs.servingLink.value);
        formData.append('servingLinkLabel', formState.inputs.servingLinkLabel.value);
        formData.append('servingReverse', formState.inputs.servingReverse.value);
        formData.append('connectImage', formState.inputs.connectImage.value);
        formData.append('connectTitle', formState.inputs.connectTitle.value);
        formData.append('connectSubTitle', formState.inputs.connectSubTitle.value);
        formData.append('connectText', formState.inputs.connectText.value);
        formData.append('connectLink', formState.inputs.connectLink.value);
        formData.append('connectLinkLabel', formState.inputs.connectLinkLabel.value);
        formData.append('connectLabelName', formState.inputs.connectLabelName.value);
        formData.append('connectLabelPhone', formState.inputs.connectLabelPhone.value);
        formData.append('connectLabelEmail', formState.inputs.connectLabelEmail.value);
        formData.append('connectReverse', formState.inputs.connectReverse.value);
        formData.append('churchAds', formState.inputs.churchAds.value);
        formData.append('churchServices', formState.inputs.churchServices.value);
    
        try {
            if (editMode) {
                await sendRequest(process.env.BACKEND_URL + '/churches/' + church._id, 'PATCH', formData, {
                    Authorization: `Bearer ${auth.token}`,
                });
            } else {
                await sendRequest(process.env.BACKEND_URL + '/churches/', 'POST', formData, {
                    Authorization: `Bearer ${auth.token}`,
                });
            }

            onUpdate();
        } catch (err) {
            console.error(`There was an error updating church info: `, err);
        }
        setIsLoading(false);
    };

    const formTouchedHandler = () => {
        setFormIsTouched(true);
    };
    
    return (
        <>
            {isLoading ? <LoadingSpinner asOverlay /> : null}

            <form onChange={formTouchedHandler} onSubmit={submitFormHandler}>
                <h4>ADDRESS</h4>
                <div className='form-row form-row-flex-1'>
                    <Input id='address_line_1'
                        element='input' type='text'
                        label='Address Line 1 *'
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        initialValidity={(church && church.address_line_1) ? true : false}
                        initialValue={church && church.address_line_1}
                    />
                </div>

                <div className='form-row form-row-flex-1'>
                    <Input id='address_line_2'
                        element='input' type='text'
                        label='Address Line 2'
                        validators={[]}
                        onInput={inputHandler}
                        initialValidity={true}
                        initialValue={church && church.address_line_2}
                    />
                </div>

                <div className='form-row form-row-flex-1'>
                    <Input id='city'
                        element='input' type='text'
                        label='City *'
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        initialValidity={(church && church.city) ? true : false}
                        initialValue={church && church.city}
                    />
                    <Input id='state'
                        element='input' type='text'
                        label='State *'
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        initialValidity={(church && church.state) ? true : false}
                        initialValue={church && church.state}
                    />
                    <Input id='zipCode'
                        element='input' type='text'
                        label='Zip Code *'
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        initialValidity={(church && church.zipCode) ? true : false}
                        initialValue={church && church.zipCode}
                    />
                </div>

                <br />
                <h4>LOCATION</h4>
                <div className='form-row form-row-flex-1'>
                    <Input id='locationTitle'
                        element='input' type='text'
                        label='Location Title *'
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        initialValidity={(church && church.locationTitle) ? true : false}
                        initialValue={church && church.locationTitle}
                    />
                </div>

                <div className='form-row form-row-flex-1'>
                    <Input id='locationText'
                        element='textarea'
                        label='Location Description *'
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        initialValidity={(church && church.locationText) ? true : false}
                        initialValue={church && church.locationText}
                    />
                </div>

                <div className='form-row form-row-flex-1'>
                    <Input id='locationLink'
                        element='input' type='text'
                        label='Location Link *'
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        initialValidity={(church && church.locationLink) ? true : false}
                        initialValue={church && church.locationLink}
                    />
                    <Input id='locationLinkLabel'
                        element='input' type='text'
                        label='Location Link Label *'
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        initialValidity={(church && church.locationLinkLabel) ? true : false}
                        initialValue={church && church.locationLinkLabel}
                    />
                    <Input id='locationHasMap'
                        element='checkbox' type='checkbox'
                        label='Location Map'
                        validators={[]}
                        onInput={inputHandler}
                        initialValidity={true}
                        initialValue={(church && church.locationReverse) ? true : false}
                    />
                    <Input id='locationReverse'
                        element='checkbox' type='checkbox'
                        label='Reverse Image'
                        validators={[]}
                        onInput={inputHandler}
                        initialValidity={true}
                        initialValue={(church && church.locationReverse) ? true : false}
                    />
                </div>

                <br />
                <h4>FEATURED CHURCH IMAGE</h4>
                <div className='form-row form-row-flex-1' onClick={() => getPhotoNameHandler('featuredChurchImage')}>
                    <ImageUpload
                        id='featuredChurchImage'
                        text='Upload New Photo'
                        onGetPhoto={getPhotoHandler}
                        currentImg={church && church.featuredChurchImage}
                        typeOfPhoto='churches'
                    />          
                </div>

                <br />
                <h4>FEATURED MOBILE IMAGE</h4>
                <div className='form-row form-row-flex-1' onClick={() => getPhotoNameHandler('churchMobileFeaturedImage')}>
                    <ImageUpload
                        id='churchMobileFeaturedImage'
                        text='Upload New Photo'
                        onGetPhoto={getPhotoHandler}
                        currentImg={church && church.churchMobileFeaturedImage}
                        typeOfPhoto='churches'
                    />
                </div>

                <br />
                <h4>BIBLE VERSE</h4>
                <div className='form-row form-row-flex-1'>
                    <Input id='mainBibleVerse'
                        element='input' type='text'
                        label='Main Bible Verse *'
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        initialValidity={(church && church.mainBibleVerse) ? true : false}
                        initialValue={church && church.mainBibleVerse}
                    />
                    <Input id='mainBibleVerseRef'
                        element='input' type='text'
                        label='Main Bible Verse Reference *'
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        initialValidity={(church && church.mainBibleVerseRef) ? true : false}
                        initialValue={church && church.mainBibleVerseRef}
                    />
                </div>

                <br />
                <h4>SOCIALS</h4>
                <div className='form-row form-row-flex-1'>
                    <Input id='youTubeLink'
                        element='input' type='text'
                        label='Youtube Link'
                        validators={[]}
                        onInput={inputHandler}
                        initialValidity={true}
                        initialValue={church && church.youTubeLink}
                    />
                    <Input id='facebookLink'
                        element='input' type='text'
                        label='Facebook Link'
                        validators={[]}
                        onInput={inputHandler}
                        initialValidity={true}
                        initialValue={church && church.facebookLink}
                    />
                    <Input id='instagramLink'
                        element='input' type='text'
                        label='Instagram Link'
                        validators={[]}
                        onInput={inputHandler}
                        initialValidity={true}
                        initialValue={church && church.instagramLink}
                    />
                </div>

                <br />
                <h4>CONNECT WITH US</h4>
                <div className='form-row form-row-flex-1'>
                    <Input id='connectWithUsTitle'
                        element='input' type='text'
                        label='Connect With Us Title'
                        validators={[]}
                        onInput={inputHandler}
                        initialValidity={true}
                        initialValue={church && church.connectWithUsTitle}
                    />
                </div>

                <div className='form-row form-row-flex-1'>
                    <Input id='connectWithUsDescription'
                        element='textarea'
                        label='Connect With Us Description'
                        validators={[]}
                        onInput={inputHandler}
                        initialValidity={true}
                        initialValue={church && church.connectWithUsDescription}
                    />
                </div>

                <br />
                <h4>MEMBERSHIP</h4>
                <div className='form-row form-row-flex-1' onClick={() => getPhotoNameHandler('membershipImage')}>
                    <ImageUpload
                        id='membershipImage'
                        text='Upload New Photo'
                        onGetPhoto={getPhotoHandler}
                        currentImg={church && church.membershipImage}
                        typeOfPhoto='churches'
                    />
                </div>

                <div className='form-row form-row-flex-1'>
                    <Input id='membershipTitle'
                        element='input' type='text'
                        label='Membership Title *'
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        initialValidity={(church && church.membershipTitle) ? true : false}
                        initialValue={church && church.membershipTitle}
                    />
                    <Input id='membershipSubTitle'
                        element='input' type='text'
                        label='Membership Subtitle *'
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        initialValidity={(church && church.membershipSubTitle) ? true : false}
                        initialValue={church && church.membershipSubTitle}
                    />
                </div>

                <div className='form-row form-row-flex-1'>
                    <Input id='membershipText'
                        element='textarea'
                        label='Membership Description *'
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        initialValidity={(church && church.membershipText) ? true : false}
                        initialValue={church && church.membershipText}
                    />
                </div>

                <div className='form-row form-row-flex-1'>
                    <Input id='membershipLink'
                        element='input' type='text'
                        label='Membership Link *'
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        initialValidity={(church && church.membershipLink) ? true : false}
                        initialValue={church && church.membershipLink}
                    />
                    <Input id='membershipLinkLabel'
                        element='input' type='text'
                        label='Membership Link Label *'
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        initialValidity={(church && church.membershipLinkLabel) ? true : false}
                        initialValue={church && church.membershipLinkLabel}
                    />
                    <Input id='membershipReverse'
                        element='checkbox' type='checkbox'
                        label='Reverse Image'
                        validators={[]}
                        onInput={inputHandler}
                        initialValidity={true}
                        initialValue={(church && church.membershipReverse) || false}
                    />
                </div>

                <br />
                <h4>SERVING</h4>
                <div className='form-row form-row-flex-1' onClick={() => getPhotoNameHandler('servingImage')}>
                    <ImageUpload
                        id='servingImage'
                        text='Upload New Photo'
                        onGetPhoto={getPhotoHandler}
                        currentImg={church && church.servingImage}
                        typeOfPhoto='churches'
                    />
                </div>

                <div className='form-row form-row-flex-1'>
                    <Input id='servingTitle'
                        element='input' type='text'
                        label='Serving Title *'
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        initialValidity={(church && church.servingTitle) ? true : false}
                        initialValue={church && church.servingTitle}
                    />
                    <Input id='servingSubTitle'
                        element='input' type='text'
                        label='Serving Subtitle *'
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        initialValidity={(church && church.servingSubTitle) ? true : false}
                        initialValue={church && church.servingSubTitle}
                    />
                </div>

                <div className='form-row form-row-flex-1'>
                    <Input id='servingText'
                        element='textarea'
                        label='Serving Description *'
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        initialValidity={(church && church.servingText) ? true : false}
                        initialValue={church && church.servingText}
                    />
                </div>

                <div className='form-row form-row-flex-1'>
                    <Input id='servingLink'
                        element='input' type='text'
                        label='Serving Link *'
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        initialValidity={(church && church.servingLink) ? true : false}
                        initialValue={church && church.servingLink}
                    />
                    <Input id='servingLinkLabel'
                        element='input' type='text'
                        label='Serving Link Label *'
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        initialValidity={(church && church.servingLinkLabel) ? true : false}
                        initialValue={church && church.servingLinkLabel}
                    />
                    <Input id='servingReverse'
                        element='checkbox' type='checkbox'
                        label='Reverse Image'
                        validators={[]}
                        onInput={inputHandler}
                        initialValidity={true}
                        initialValue={(church && church.servingReverse) || false}
                    />
                </div>

                <br />
                <h4>CONNECT</h4>
                <div className='form-row form-row-flex-1' onClick={() => getPhotoNameHandler('connectImage')}>
                    <ImageUpload
                        id='connectImage'
                        text='Upload New Photo'
                        onGetPhoto={getPhotoHandler}
                        currentImg={church && church.connectImage}
                        typeOfPhoto='churches'
                    />
                </div>

                <div className='form-row form-row-flex-1'>
                    <Input id='connectTitle'
                        element='input' type='text'
                        label='Connect Title'
                        validators={[]}
                        onInput={inputHandler}
                        initialValidity={true}
                        initialValue={church && church.connectTitle}
                    />
                    <Input id='connectSubTitle'
                        element='input' type='text'
                        label='Connect Subtitle'
                        validators={[]}
                        onInput={inputHandler}
                        initialValidity={true}
                        initialValue={church && church.connectSubTitle}
                    />
                </div>

                <div className='form-row form-row-flex-1'>
                    <Input id='connectText'
                        element='textarea'
                        label='Connect Description'
                        validators={[]}
                        onInput={inputHandler}
                        initialValidity={true}
                        initialValue={church && church.connectText}
                    />
                </div>

                <div className='form-row form-row-flex-1'>
                    <Input id='connectLink'
                        element='input' type='text'
                        label='Connect Link'
                        validators={[]}
                        onInput={inputHandler}
                        initialValidity={true}
                        initialValue={church && church.connectLink}
                    />
                    <Input id='connectLinkLabel'
                        element='input' type='text'
                        label='Connect Link Label'
                        validators={[]}
                        onInput={inputHandler}
                        initialValidity={true}
                        initialValue={church && church.connectLinkLabel}
                    />
                </div>

                <div className='form-row form-row-flex-1'>
                    <Input id='connectLabelName'
                        element='input' type='text'
                        label='Connect Label Name'
                        validators={[]}
                        onInput={inputHandler}
                        initialValidity={true}
                        initialValue={church && church.connectLabelName}
                    />
                    <Input id='connectLabelPhone'
                        element='input' type='tel'
                        label='Connect Label Phone'
                        validators={[]}
                        onInput={inputHandler}
                        initialValidity={true}
                        initialValue={church && church.connectLabelPhone}
                    />
                </div>

                <div className='form-row form-row-flex-1'>
                    <Input id='connectLabelEmail'
                        element='input' type='email'
                        label='Connect Label Email'
                        validators={[]}
                        onInput={inputHandler}
                        initialValidity={true}
                        initialValue={church && church.connectLabelEmail}
                    />
                    <Input id='connectReverse'
                        element='checkbox' type='checkbox'
                        label='Reverse Image'
                        validators={[]}
                        onInput={inputHandler}
                        initialValidity={true}
                        initialValue={(church && church.connectReverse) || false}
                    />
                </div>

                <br />
                <h4>CHURCH ADS</h4>
                <div className='form-row form-row-flex-1'>
                    <Input id='churchAds'
                        element='input' type='text'
                        label='Church Ads'
                        validators={[]}
                        onInput={inputHandler}
                        initialValidity={true}
                        initialValue={church && church.churchAds}
                    />
                </div>

                <br />
                <h4>CHURCH SERVICES</h4>
                <div className='form-row form-row-flex-1'>
                    <Input id='churchServices'
                        element='input' type='text'
                        label='Church Services'
                        validators={[]}
                        onInput={inputHandler}
                        initialValidity={true}
                        initialValue={church && church.churchServices}
                    />
                </div>

                <Button
                    disabled={!formState.isValid || !formIsTouched}
                    type='submit'
                >
                    Save
                </Button>

            </form>
        </>
    );
};

export default UpdateEntries;