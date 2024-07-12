import React, { useRef, useState } from "react";
import SigupConformation from "./SignupConformation";
import { Link } from "react-router-dom";

function SignupForm() {
  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let ageInputRef = useRef();
  let genderSelectRef = useRef();
  let emailInputRef = useRef();
  let passwordInputRef = useRef();
  let mobileNoInputRef = useRef();
  let profilePicInputRef = useRef();
  let [profilePic, setprofilePic] = useState("./images/emptyimg.jpg");

  let [conformationPopup, setConformationPopup] = useState(false);

  let firstNameSpanRef = useRef();
  let lastNameSpanRef = useRef();
  let ageSpanRef = useRef();
  let genderSpanRef = useRef();
  let emailSpanRef = useRef();
  let passwordSpanRef = useRef();
  let mobileNoSpanRef = useRef();
  let profilePicSpanRef = useRef();
  let nameRegEx = /^[a-zA-Z\s]{2,30}$/;
  let emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let passwordRegEx = /^[A-Za-z\d@$!%*?&]{8,}$/;
  let mobileNoRegEx = /^[6-9]\d{9}$/;
  let ageRegEx = /^(?:1[01][0-9]|120|[1-9]?[0-9])$/;
  let genderRegEx = /^(Male|Female|Non-Binary|Others|Prefer not to say)$/i;
  let profilePicRegEx = /^.*\.(jpg|jpeg|png|gif)$/i;

  let resetForm = () => {
    firstNameInputRef.current.value = "";
    lastNameInputRef.current.value = "";
    ageInputRef.current.value = "";
    genderSelectRef.current.value = "select";
    emailInputRef.current.value = "";
    passwordInputRef.current.value = "";
    mobileNoInputRef.current.value = "";
    profilePicInputRef.current.value = "";
    setprofilePic("./images/emptyimg.jpg");

    firstNameSpanRef.current.innerHTML = "";
    lastNameSpanRef.current.innerHTML = "";
    ageSpanRef.current.innerHTML = "";
    genderSpanRef.current.innerHTML = "";
    emailSpanRef.current.innerHTML = "";
    passwordSpanRef.current.innerHTML = "";
    mobileNoSpanRef.current.innerHTML = "";
    profilePicSpanRef.current.innerHTML = "";
  };

  let onSignupFormData = async () => {
    let myHeader = new Headers();
    myHeader.append("content-type", "multipart/form-data");

    let dataToSend = new FormData();
    dataToSend.append("firstName", firstNameInputRef.current.value);
    dataToSend.append("lastName", lastNameInputRef.current.value);
    dataToSend.append("age", ageInputRef.current.value);
    dataToSend.append("gender", genderSelectRef.current.value);
    dataToSend.append("email", emailInputRef.current.value);
    dataToSend.append("password", passwordInputRef.current.value);
    dataToSend.append("mobileNo", mobileNoInputRef.current.value);
    dataToSend.append("profilePic", profilePicInputRef.current.files[0]);

    let reqOptions = {
      method: "POST",
      body: dataToSend,
    };

    let JSONData = await fetch("http://localhost:13189/signup", reqOptions);
    let JSOData = await JSONData.json();

    console.log(JSOData);
    alert(JSOData.msg);
    resetForm();
  };

  let inputOnFocus = (inputRef, color = "bisque") => {
    inputRef.current.style.backgroundColor = color;
  };
  let inputOnBlur = (inputRef) => {
    inputRef.current.style.backgroundColor = "";
  };

  let validateName = (inputRef, spanRef) => {
    let isValid = nameRegEx.test(inputRef.current.value);
    spanRef.current.innerHTML = isValid ? "" : "invalid";
    spanRef.current.style.color = isValid ? "" : "red";
  };
  let validateEmail = (inputRef, spanRef) => {
    let isValid = emailRegEx.test(inputRef.current.value);
    spanRef.current.innerHTML = isValid ? "" : "invalid";
    spanRef.current.style.color = isValid ? "" : "red";
  };
  let validatePassword = (inputRef, spanRef) => {
    let isValid = passwordRegEx.test(inputRef.current.value);
    spanRef.current.innerHTML = isValid ? "" : "invalid";
    spanRef.current.style.color = isValid ? "" : "red";
  };
  let validateAge = (inputRef, spanRef) => {
    let isValid = ageRegEx.test(inputRef.current.value);
    spanRef.current.innerHTML = isValid ? "" : "invalid";
    spanRef.current.style.color = isValid ? "" : "red";
  };
  let validateMobileNo = (inputRef, spanRef) => {
    let isValid = mobileNoRegEx.test(inputRef.current.value);
    spanRef.current.innerHTML = isValid ? "" : "invalid";
    spanRef.current.style.color = isValid ? "" : "red";
  };
  let validateGender = (inputRef, spanRef) => {
    let isValid = genderRegEx.test(inputRef.current.value);
    spanRef.current.innerHTML = isValid ? "" : "invalid";
    spanRef.current.style.color = isValid ? "" : "red";
  };
  let validateProfilePic = (inputRef, spanRef) => {
    let isValid = profilePicRegEx.test(inputRef.current.value);
    spanRef.current.innerHTML = isValid ? "" : "invalid";
    spanRef.current.style.color = isValid ? "" : "red";
  };

  let handleSignup = () => {
    setConformationPopup(true);
  };

  let handleConformYes = () => {
    setConformationPopup(false);
    onSignupFormData();
  };

  let handleConformNo = () => {
    setConformationPopup(false);
  };

  return (
    <div className="formCountainer">
      <form>
        <h2>Signup Form</h2>
        <div>
          <label>First Name</label>
          <input
            ref={firstNameInputRef}
            onFocus={() => {
              inputOnFocus(firstNameInputRef);
            }}
            onBlur={() => {
              inputOnBlur(firstNameInputRef);
            }}
            onChange={() => {
              validateName(firstNameInputRef, firstNameSpanRef);
            }}
          ></input>
          <span ref={firstNameSpanRef}></span>
        </div>
        <div>
          <label>Last Name</label>
          <input
            ref={lastNameInputRef}
            onFocus={() => {
              inputOnFocus(lastNameInputRef);
            }}
            onBlur={() => {
              inputOnBlur(lastNameInputRef);
            }}
            onChange={() => {
              validateName(lastNameInputRef, lastNameSpanRef);
            }}
          ></input>
          <span ref={lastNameSpanRef}></span>
        </div>
        <div>
          <label>Age</label>
          <input
            ref={ageInputRef}
            onFocus={() => {
              inputOnFocus(ageInputRef);
            }}
            onBlur={() => {
              inputOnBlur(ageInputRef);
            }}
            onChange={() => {
              validateAge(ageInputRef, ageSpanRef);
            }}
          ></input>
          <span ref={ageSpanRef}></span>
        </div>
        <div>
          <label>Gender</label>
          <select
            ref={genderSelectRef}
            onFocus={() => {
              inputOnFocus(genderSelectRef);
            }}
            onBlur={() => {
              inputOnBlur(genderSelectRef);
            }}
            onChange={() => {
              validateGender(genderSelectRef, genderSpanRef);
            }}
          >
            <option>select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non-Binary">Non-Binary</option>
            <option value="Others">Others</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
          <span ref={genderSpanRef}></span>
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            ref={emailInputRef}
            onFocus={() => {
              inputOnFocus(emailInputRef);
            }}
            onBlur={() => {
              inputOnBlur(emailInputRef);
            }}
            onChange={() => {
              validateEmail(emailInputRef, emailSpanRef);
            }}
          ></input>
          <span ref={emailSpanRef}></span>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            ref={passwordInputRef}
            onFocus={() => {
              inputOnFocus(passwordInputRef);
            }}
            onBlur={() => {
              inputOnBlur(passwordInputRef);
            }}
            onChange={() => {
              validatePassword(passwordInputRef, passwordSpanRef);
            }}
          ></input>
          <span ref={passwordSpanRef}></span>
        </div>
        <div>
          <label>Mobile Number</label>
          <input
            ref={mobileNoInputRef}
            onFocus={() => {
              inputOnFocus(mobileNoInputRef);
            }}
            onBlur={() => {
              inputOnBlur(mobileNoInputRef);
            }}
            onChange={() => {
              validateMobileNo(mobileNoInputRef, mobileNoSpanRef);
            }}
          ></input>
          <span ref={mobileNoSpanRef}></span>
        </div>
        <div>
          <label>Profile Pic</label>
          <input
            className="picInput"
            type="file"
            ref={profilePicInputRef}
            onFocus={() => {
              inputOnFocus(profilePicInputRef);
            }}
            onBlur={() => {
              inputOnBlur(profilePicInputRef);
            }}
            onChange={(eventObj) => {
              let selectedImgPath = URL.createObjectURL(
                eventObj.target.files[0]
              );
              setprofilePic(selectedImgPath);
              validateProfilePic(profilePicInputRef, profilePicSpanRef);
            }}
          ></input>
          <span ref={profilePicSpanRef}></span>
          <br/>
          <img src={profilePic} className="picPreview"></img>
        </div>

        <div>
          <button
            type="button"
            onClick={() => {
              handleSignup();
            }}
          >
            Signup
          </button>
        </div>
        <div>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Login
          </Link>
        </div>
      </form>

      <SigupConformation
        isVisible={conformationPopup}
        onConformYes={handleConformYes}
        onConformNo={handleConformNo}
      ></SigupConformation>
    </div>
  );
}

export default SignupForm;
