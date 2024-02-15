import PropTypes from "prop-types";

const Button1 = ({ buttonName, onClick }) => (
  <button style={HomeButtonStyle} onClick={onClick}>
    {buttonName}
  </button>
);

Button1.propTypes = {
  buttonName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const HomeButtonStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  width: "100px",
  height: "40px",
  top: "20px",
  right: "20px",
  backgroundColor: "#de8e18",
  color: "white",
  borderRadius: "10px",
  gap: "10px",
  border: "none",
  fontFamily: "Poppins",
};

export default Button1;
