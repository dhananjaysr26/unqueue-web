import React from 'react'
import firebase from "../utils/firebase";
function Profile() {
    const data={
        users:[
            {
                userID:"ABC123",
                ArivalTime:25
            }
        ]           
    }
    const firestore = firebase.database().ref("/QROOMS");
    firestore.child(data);
    alert("Qroom Created Successfully!");
    return (
        <div>
            <h1>My Profile</h1>
        </div>
    )
}

export default Profile
