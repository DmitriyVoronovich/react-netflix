import './button.css'

const Button = ({name, style}) =>
    (
        <>
            <button className={style}>{name}</button>
        </>
    )


export default Button;