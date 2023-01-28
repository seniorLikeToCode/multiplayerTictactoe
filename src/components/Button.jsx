const Button = ({handler, btnColor , content }) => {
    const btn = `btn ${btnColor}`
    return (
        <>
            <button onClick={()=>handler()} className= {btn}>{content}</button>
        </>
    )
}

export default Button;