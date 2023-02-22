import Button from '../UIElements/Button';

import classes from './SubmitButton.module.scss';

const SubmitButton = ({ isValid, formIsTouched = true }) => {
    return (
        <>
            <Button
                disabled={!isValid || !formIsTouched}
                type='submit'
            >
                Submit
            </Button>

            <p className={classes.requiredText}>* Required</p>
        </>
    );
};

export default SubmitButton;