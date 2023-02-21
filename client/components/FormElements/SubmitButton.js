import Button from '../UIElements/Button';

import classes from './SubmitButton.module.scss';

const SubmitButton = ({ isValid }) => {
    return (
        <>
            <Button
                disabled={!isValid}
                type='submit'
            >
                Submit
            </Button>

            <p className={classes.requiredText}>* Required</p>
        </>
    );
};

export default SubmitButton;

//test