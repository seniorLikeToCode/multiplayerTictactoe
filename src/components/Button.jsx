const Button = ({ btnColor , content }) => {
    const btn = `btn ${btnColor}`
    return (
        <>
            <button className= {btn}>{content}</button>
        </>
    )
}

export default Button;