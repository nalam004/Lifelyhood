import React from "react";
import notes from "../images/School/notes.svg";
import schedule from "../images/School/schedule.svg";
import clubs from "../images/School/clubs.svg";
import exams from "../images/School/exams.svg";
import assign from "../images/School/assign.svg";
import add from "../images/add.svg";
import profile from "../images/profile/user/default.svg";
import ProfileNav from "../components/ProfileNav";

const Schoolspace = () => {
  return (
    <div className="profile">
        <ProfileNav />
        <div className="main">
            <img className="user_info" src={profile} alt="profile_image"/>
            <p className="user_info">User's SchoolSpace</p>
            <div className="pages">
                <button><img src={notes} alt="Notes" /></button> 
                <button><img src={schedule} alt="Schedule" /></button>
                <button><img src={clubs} alt="Clubs" /></button>
                <button><img src={exams} alt="Exams" /></button> 
                <button><img src={assign} alt="Assignments" /></button>
                <button><img src={add} alt="Add Page" /></button>
            </div>  
        </div>  
    </div>
  );
};

export default Schoolspace;