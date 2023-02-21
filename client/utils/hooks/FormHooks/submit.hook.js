import { useHttpClient } from '../http.hook';

export const useSubmitHook = () => {
    const { sendRequest } = useHttpClient();

    const submitHandler = async (formState) => {
        if (formState.inputs.voiceType.value === 'Unsure') {
            formState.inputs.voiceType.value = 'Soprano';
        }

        const formData = {
            firstName: formState.inputs.firstName.value,
            lastName: formState.inputs.lastName.value,
            age: formState.inputs.age.value,
            city: formState.inputs.city.value,
            church: formState.inputs.church.value,
            telephone: formState.inputs.telephone.value,
            email: formState.inputs.email.value,
            experienced: formState.inputs.experienced.value,
            voiceType: formState.inputs.voiceType.value,
        };
        
        try {
            await sendRequest(process.env.BACKEND_URL + '/sign-up/', 'POST', JSON.stringify(formData), {
                'Content-Type': 'application/json',
            });
        } catch (err) {
            console.error(`There was an error submitting registration form:`, err);
        }
    };

    return { submitHandler };
};