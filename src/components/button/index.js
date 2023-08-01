import './button.css'

const Button = ({name, style, type, onClick}) =>
    (
        <>
            <button type={type} className={style} onClick={onClick}>{name}</button>
        </>
    )


export default Button;