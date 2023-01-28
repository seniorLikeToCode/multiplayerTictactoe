const Input = ({ labelName, name, type, placeholder, data, setData }) => {
    return (
        
        <>
            <div className="inputComponent" >
                <label htmlFor={labelName}>{labelName}</label>
                <input name={name} type={type} placeholder={placeholder} onChange={(e) => setData((prev) => {
                    return {
                        ...prev,
                        [e.target.name]: e.target.value
                    }
                })} required />
            </div>
        </>
    )
}

export default Input;