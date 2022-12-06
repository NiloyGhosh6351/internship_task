
import signuplogo from "../asset/signuplogo.jpg"
import signuppicture from "../asset/signuppicture.jpg"
import SignupForm from "../components/signupform";
import "./signup.css"

function Signup(props) {
    return (
      <div className="signup">
        <div className="signuppicture">
          <img className="signuppicture__logo" src={signuplogo}></img>
          <img className="signuppicture__picture" src={signuppicture}></img> 
        </div>
        <div className="signup__form">
          <SignupForm currentPage={props.currentPage}></SignupForm>
        </div>
      </div>
    );
  }
  export default Signup;