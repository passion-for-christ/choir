import Registration from "./components/registration";

const ConferenceChoirPage = () => {
    return (
        <div className='page'>
            <h2 style={{marginBottom: '1rem'}}>West-Coast Youth Convention</h2>
            <h4>Choir Registration Form - Seattle 2023</h4>

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