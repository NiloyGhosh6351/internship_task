import attendancelogo from "../asset/signuplogo.jpg"
import Attendanceform from "../components/attendanceform";
import "./attendance.css"


function Attendance() {
    return (
      <div className="attendance">
          <img className="attendance__logo" src={attendancelogo}></img>
          <div className="attendance__header">
            <p className="attendance__header__text">Attendance information</p>
          </div>
          <Attendanceform></Attendanceform>
      </div>
    );
  }
  export default Attendance;