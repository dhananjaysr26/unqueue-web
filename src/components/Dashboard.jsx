import React, { useState, useEffect } from "react";
import firebase from "../utils/firebase";
import "../styles/Dashboard.css";

import { BsInfoCircle } from "react-icons/bs";
import { GoLinkExternal } from "react-icons/go";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
function Dashboard() {
  const [qrooms, setQrroms] = useState([]);
  useEffect(() => {
    const firestore = firebase.database().ref("/QROOMS/");
    firestore.on("value", (response) => {
      const data = response.val();
      let QroomInfo = [];
      for (let id in data) {
        QroomInfo.push({
          ID: id,
          QroomName: data[id].QroomName,
          Address: data[id].Address,
          MobileNo: data[id].MobileNumber,
          Timming: data[id].Timming,
          ServTime: data[id].ServiceTime,
        });
      }
      setQrroms(QroomInfo);
    });
  }, []);
  return (
    <div>
      <h1>DashBoard</h1>
      <div className="card-container">
        {qrooms.map((data, index) => {
          return (
            <div className="card">
              <div className="card-content">
                <h1>{data.QroomName}</h1>
                <small>ID:{data.ID}</small>
                <h5>Service Time:{data.ServTime}</h5>
                <h5>Address:{data.Address}</h5>
              </div>
              <div className="view-icon">
                  <BsInfoCircle className="icon"/>
                <GoLinkExternal className="icon" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
