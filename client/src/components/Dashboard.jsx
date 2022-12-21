import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TimezoneSelect from "react-timezone-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { time } from "../utils/resource";

const Dashboard = () => {
  const [selectedTimezone, setSelectedTimezone] = useState({});
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("_id");
    localStorage.removeItem("_myEmail");
    navigate("/");
  };

  const [schedule, setSchedule] = useState([
    { day: "Sun", startTime: "", endTime: "" },
    { day: "Mon", startTime: "", endTime: "" },
    { day: "Tue", startTime: "", endTime: "" },
    { day: "Wed", startTime: "", endTime: "" },
    { day: "Thu", startTime: "", endTime: "" },
    { day: "Fri", startTime: "", endTime: "" },
    { day: "Sat", startTime: "", endTime: "" },
  ]);

  const handleTimeChange = (e, id) => {
    const { name, value } = e.target;
    if (value === "Select") return;

    const list = [...schedule];
    list[id][name] = value;
    setSchedule(list);
  };
  const handleSaveSchedules = () => {
    console.log(JSON.stringify(selectedTimezone));
    if (JSON.stringify(selectedTimezone) !== "{}") {
      console.log(schedule);
    } else {
      toast.error("Please select timeone", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)
  return (
    <div>
      <nav className="dashboard_nav">
        <h2>BookMe</h2>
        <button className="logout_btn" onClick={handleLogout}>
          Log out
        </button>
      </nav>
      <main className="dashboard_main">
        <h2 className="dashboard_heading">Select your availability</h2>
        <div className="timezone_wrapper">
          <p>Pick your timezone</p>
          <TimezoneSelect
            value={selectedTimezone}
            onChange={setSelectedTimezone}
          />
          {schedule.map((sch, id) => (
            <div className="form" key={id}>
              <p>{sch.day}</p>
              <div className="select_wrapper">
                <label htmlFor="startTime">Start Time</label>
                <select
                  name="startTime"
                  id="startTime"
                  onChange={(e) => handleTimeChange(e, id)}
                >
                  {time.map((t) => (
                    <option key={t.id} value={t.t} id={t.id}>
                      {t.t}
                    </option>
                  ))}
                </select>
              </div>
              <div className="select_wrapper">
                <label htmlFor="endTime">End Time</label>
                <select
                  name="endTime"
                  id="endTime"
                  onChange={(e) => handleTimeChange(e, id)}
                >
                  {time.map((t) => (
                    <option key={t.id} value={t.t} id={t.id}>
                      {t.t}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}
        </div>
        <div className="saveBtn_container">
          <button onClick={handleSaveSchedules}>SAVE SCHEDULES</button>
          <ToastContainer />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
