import React from "react";

function SigupConformation({ isVisible, onConformYes, onConformNo  }) {
  if (!isVisible) return null;
  return (
    <div className="conformationPopup">
      <div className="popupContent">
        <p>Do you want to create an account?</p>
        <div className="popupButtons">
          <button onClick={onConformYes}>Yes</button>
          <button onClick={onConformNo}>No</button>
        </div>
      </div>
    </div>
  );
}

export default SigupConformation;
