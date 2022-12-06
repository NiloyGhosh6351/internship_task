import "./attendanceform.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Attendanceform() {
  const [attendacneData, setAttendacneData] = useState();
  const headers = {
    Authorization: "Bearer " + localStorage.getItem("access_token"),
  };
  const sendRequest = async () => {
    try {
        const res = await axios({
            method: 'GET',
            url: 'https://test.nexisltd.com/test', headers:headers
        });
        setAttendacneData(res.data);
        
    } catch (err) {
        // Handle Error
        console.error(err);
    }
}
  useEffect(() => {
    sendRequest();
  }, []);

  return <div>
    <div className="attendence-head">
        <p className="attendence-head__date-head">Date</p>
        <p className="attendence-head__user-head">Employee Name</p>
        <p className="attendence-head__status-head">Status</p>
    </div>
    {attendacneData ? <p>{Object.keys(attendacneData).map(attendance=>{
    return Object.keys(attendacneData[attendance].attendance).map(oneDate=>{
        return(
            <div className="attendence">
                <p className="attendence__date">{oneDate}</p>
                <p className="attendence__user">{attendacneData[attendance].username}</p>
                <p className="attendence__status">{attendacneData[attendance].attendance[oneDate].status}</p>
            </div>
        )
    })
  })}</p>:<p>Loading</p>}  </div>;
}
export default Attendanceform;
