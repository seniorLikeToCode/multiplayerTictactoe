const Input = ({ labelName, name, type, placeholder }) => {
    return (
        <>
            <div className="inputComponent" >
                <label htmlFor={labelName}>{labelName}</label>
                <input name={name} type={type} placeholder={placeholder} />
            </div>
        </>
    )
}

export default Input;