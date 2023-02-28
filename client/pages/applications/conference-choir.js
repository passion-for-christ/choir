import Registration from "./components/conference-choir-registration";

const ConferenceChoirPage = () => {
    return (
        <div className='page'>
            <h1>Romanian Youth Convention</h1>
            <h3>Choir Registration Form</h3>

            <div className='registration'>
                <Registration />
            </div>
        </div>
    )
}

export default ConferenceChoirPage;