import React from "react";
import logoImg from "../assets/image.png";

const Navbar = () => {
  return (
    <div className="Navbar flex_space_between">
      <div className="menu_icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="50"
          height="32"
          viewBox="0 0 30 30"
          fill="white"
        >
          <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
        </svg>
      </div>
      <div>
        <img src={logoImg} alt="logo" height={23} width={142} />
      </div>
      <div className="flex_center" style={{ gap: "44px" }}>
        <p style={{}}>Learn more</p>
        <p>List your car</p>
        <p>Inbox</p>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="40"
            height="40"
            viewBox="0 0 64 64"
          >
            <ellipse cx="32" cy="33" fill="#ffce29" rx="21" ry="23"></ellipse>
            <circle cx="12.5" cy="32.882" r="4.5" fill="#ffce29"></circle>
            <circle cx="51.5" cy="32.882" r="4.5" fill="#ffce29"></circle>
            <ellipse cx="32" cy="61" opacity=".3" rx="19" ry="3"></ellipse>
            <path
              fill="#9c34c2"
              d="M18.038,20c0,0,7.451,2,13.97,2s13.97-2,13.97-2v1.014c0,4.134,2.726,7.506,6.576,7.504H52.6	c0.004-6.598-1.795-13.714-7.054-18.348c-7.796-6.869-19.278-6.869-27.075,0c-5.259,4.634-7.073,13.337-7.073,18.337	c0.023,0,0.046,0,0.069,0c3.848,0,6.572-3.35,6.572-7.482V20H18.038z"
            ></path>
            <path
              d="M45.7,42.298c-0.702,1.306-1.559,2.516-2.543,3.595c-1.483,1.625-2.228,2.253-4.017,3.259	c-3.236,1.82-3.084,5.562-2.73,6.323c3.825-0.888,7.466-2.956,10.438-6.212c2.439-2.672,4.143-5.839,5.13-9.204	C49.645,39.109,46.923,40.026,45.7,42.298z"
              opacity=".15"
            ></path>
            <path
              fill="#fff"
              d="M21.776,13.922c2.856-2.517,6.49-3.903,10.231-3.903c2.547,0,4.626-1.911,4.937-4.374	c-6.332-1.589-13.234-0.09-18.474,4.527c-3.014,2.656-4.895,6.647-5.952,10.512c4.864,0.34,6.267-2.573,6.356-2.741	C19.747,16.287,20.672,14.895,21.776,13.922z"
              opacity=".3"
            ></path>
            <path
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="3"
              d="M17.985,16.363c0.766-1.361,1.691-2.591,2.799-3.566c0.85-0.749,1.763-1.407,2.725-1.967"
            ></path>
            <circle cx="23.5" cy="32.5" r="2.5" fill="#9c34c2"></circle>
            <circle cx="40.5" cy="32.5" r="2.5" fill="#9c34c2"></circle>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
