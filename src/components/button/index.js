import './button.css';

const Button = ({ name, className, type, onClick }) => (
  <>
    <button type={type} className={className} onClick={onClick}>
      {name}
    </button>
  </>
);

export default Button;
