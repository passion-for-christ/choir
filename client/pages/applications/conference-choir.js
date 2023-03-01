import { useRouter } from "next/router";
import {useEffect} from "react";

const SignUpRedirect = () => {

    const router = useRouter();

    useEffect(() => {
        router.push('/applications/conference/choir')
    }, [])

    return;
}

export default SignUpRedirect;