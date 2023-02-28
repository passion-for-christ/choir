import Registration from "./components/conference-choir-registration";

const ConferenceChoirPage = () => {
    return (
        <div className='page'>
            <h2>West-Coast Youth Convention</h2>
            <h4>Choir Registration Form [ Seattle - 2023 ]</h4>

            <div className='registration'>
                <img src="/img/choir.jpg" />

                <div className="regbody">
                    <Registration />
                </div>
            </div>
        </div>
    )
}

export default ConferenceChoirPage;