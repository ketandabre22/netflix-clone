import React from "react";
import "./ProfileScreen.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "../Nav";

const ProfileScreen = () => {
  // Use the useSelector hook to get the user from the Redux store
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_Info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="netflix_avatar_logo"
          />

          <div className="profileScreen_Details">
            <h2>{user.email}</h2>

                                <div className="profileScreen_Plans">
                                      <h3>
                                          Plans
                                      </h3>
              <button
                onClick={() => auth.signOut()}
                className="profileScreen_SignOut"
>
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
