const VALIDATOR_TYPE_REQUIRE = 'REQUIRE';
const VALIDATOR_TYPE_NOT_REQUIRED = 'NOT_REQUIRED';
const VALIDATOR_TYPE_TRUE = 'TRUE';

const VALIDATOR_TYPE_MIN_LENGTH = 'MIN_LENGTH';
const VALIDATOR_TYPE_MAX_LENGTH = 'MAX_LENGTH';

const VALIDATOR_TYPE_MIN = 'MIN';
const VALIDATOR_TYPE_MAX = 'MAX';

const VALIDATOR_TYPE_EMAIL = 'EMAIL';
const VALIDATOR_TYPE_EQUAL = 'EQUAL';

export const VALIDATOR_REQUIRE = () => ({ type: VALIDATOR_TYPE_REQUIRE });
export const VALIDATOR_NOT_REQUIRED = () => ({ type: VALIDATOR_TYPE_NOT_REQUIRED });
export const VALIDATOR_TRUE = () => ({ type: VALIDATOR_TYPE_TRUE });

export const VALIDATOR_MINLENGTH = val => ({
    type: VALIDATOR_TYPE_MIN_LENGTH,
    val: val
});

export const VALIDATOR_MAX_LENGTH = val => ({
    type: VALIDATOR_TYPE_MAX_LENGTH,
    val: val
});

export const VALIDATOR_MIN = val => ({ type: VALIDATOR_TYPE_MIN, val: val });
export const VALIDATOR_MAX = val => ({ type: VALIDATOR_TYPE_MAX, val: val });

export const VALIDATOR_EMAIL = () => ({ type: VALIDATOR_TYPE_EMAIL });
export const VALIDATOR_EQUAL = val => ({
    type: VALIDATOR_TYPE_EQUAL,
    val: val
});

export const validate = (value, validators) => {
    let isValid = true;
    for (const validator of validators) {
        if (validator.type === VALIDATOR_TYPE_REQUIRE) {
            isValid = isValid && value.trim().length > 0;
        }
        if (validator.type === VALIDATOR_TYPE_NOT_REQUIRED) {
            isValid = true;
        }
        if (validator.type === VALIDATOR_TYPE_TRUE) {
            isValid = isValid && value === true;
        }

        if (validator.type === VALIDATOR_TYPE_MIN_LENGTH) {
            isValid = isValid && value.trim().length >= validator.val;
        }
        if (validator.type === VALIDATOR_TYPE_MAX_LENGTH) {
            isValid = isValid && value.trim().length <= validator.val;
        }

        if (validator.type === VALIDATOR_TYPE_MIN) {
            isValid = isValid && +value >= validator.val;
        }
        if (validator.type === VALIDATOR_TYPE_MAX) {
            isValid = isValid && +value <= validator.val;
        }

        if (validator.type === VALIDATOR_TYPE_EMAIL) {
            isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
        }
        if (validator.type === VALIDATOR_TYPE_EQUAL) {
            isValid = isValid && value === validator.val;
        }
    }
    return isValid;
};