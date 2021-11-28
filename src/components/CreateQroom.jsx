import React,{useState} from 'react'
import { useHistory } from "react-router-dom";
import firebase from "../utils/firebase";
function CreateQroom() {
    let history = useHistory();
    const [qname,setQname]=useState();
    const [address,setAddress]=useState();
    const [timmings,setTimmings]=useState();
    const [mobnumber,setMobnumber]=useState();
    const [servetime,setServetime]=useState();
    const [err,setErr]=useState();
    const submitForm=()=>{
        if(qname !=="" & address !=="" &timmings !=="" & mobnumber !==undefined &servetime !==undefined){
            setErr("all Good")
            const data={
                QroomName:qname,
                Address:address,
                Timming:timmings,
                MobileNumber:mobnumber,
                ServiceTime:servetime,
                users:[
                    {
                        userID:"ABC123",
                        ArivalTime:25
                    }
                ]           
            }
            const firestore = firebase.database().ref("/QROOMS");
            firestore.push(data);
            alert("Qroom Created Successfully!");
            history.push("/");
        }else{
            setErr("Plz Fill all Feilds!")
        }
        console.log(address);
    }
    return (
<div class="login">
	<h1>Queue free Service</h1>
    <small>{err?<h3 style={{color:"blue"}}>{err}</h3>:"Get QrCode .. Stick on Your Shop"}</small>
    <div>
    	<input type="text" name="Qname" placeholder="Qroom Name" onChange={(e)=>setQname(e.target.value)} />
        <input type="text" name="Address" placeholder="Enter Address" onChange={(e)=>setAddress(e.target.value)} />
        <input type="text" name="Timmings" placeholder="Timmings" onChange={(e)=>setTimmings(e.target.value)} />
        <input type="number" name="Mobnumber" placeholder="Mob. Number" onChange={(e)=>setMobnumber(e.target.value)} />
        <input type="number" name="servtime" placeholder="Service Time" onChange={(e)=>setServetime(e.target.value)} />
        <button className="result-btn mrl10" onClick={submitForm}>Create Qroom</button>
    </div>
</div>
    )
}

export default CreateQroom
