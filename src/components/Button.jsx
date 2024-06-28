import PropTypes from "prop-types";

const Button = ({ text, type }) => {
  return (
  <div className="button-container">
    <button type={type}>{text}</button>
  </div>
  )
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Button;
