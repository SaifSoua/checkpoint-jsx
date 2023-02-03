import React from "react";
import photo from "../photo.jpg";
const ProfilePhoto = () => {
  return (
    <img src={photo} alt="photo.jpg" style={{ width: "25%", padding: 20 }} />
  );
};

export default ProfilePhoto;
