import PropTypes from "prop-types";

const Input = ({ text, type, id }) => {
  return (
    <div className="input-container">
      <label htmlFor={id}>{text}</label>
      <input type={type} />
    </div>
  );
};

Input.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Input;
