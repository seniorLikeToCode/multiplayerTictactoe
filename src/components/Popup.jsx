const Popup = ({result}) => {    
    return (
        <>
            <div style={{display: result.popup}}  className="popup popup-red">{result.message}</div>
        </>
    )
}

export default Popup