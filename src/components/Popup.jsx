const Popup = ({ bg_color,content }) => {
    const popup = `popup popup-${bg_color}`
    return (
        <>
            <div className={popup}>{content}</div>
        </>
    )
}

export default Popup