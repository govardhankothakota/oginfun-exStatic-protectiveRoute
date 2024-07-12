import React from "react";
import DashBoard from "./DashBoard";
import { useSelector } from "react-redux";

function Home() {
  let storeObj = useSelector((store) => {
    return store;
  });

  return (
    <div>
      <DashBoard />
      <h1>Welcome To Home</h1>
      <img src={`http://localhost:13189/${storeObj.loginDetails.profilePic}`}></img>
       <h2>Welcome {storeObj.loginDetails.firstName}{storeObj.loginDetails.lastName}</h2>
       <h3>Gender : {storeObj.loginDetails.gender}</h3>
       <h3>Age : {storeObj.loginDetails.age}</h3>
       <h3>Email : {storeObj.loginDetails.email}</h3>
       <h3>MobileNo : {storeObj.loginDetails.mobileNo}</h3>
    </div>
  );
}

export default Home;
