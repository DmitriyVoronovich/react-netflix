import './input-info.css'

const InputInfo = (props) => {
    const {name, type, placeholder, style} = props;
    let inputStyle = 'input_style';
    let inputContainer = 'input_container'
    if (style) {
        inputStyle += ` ${style}`
        inputContainer += ` ${style}`
    }


    return (
        <div className={inputContainer}>
            <div class='input_name'>{name}</div>
            <input type={type} placeholder={placeholder} className={inputStyle}/>
        </div>
    )
}

export default InputInfo;