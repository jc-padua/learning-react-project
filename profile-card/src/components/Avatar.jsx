import React from 'react';
import avatar from '../assets/img/jork.jpg';
function Avatar() {
  return (
    <div className="avatar-container">
      <img src={avatar} alt="" className="avatar-img" />
    </div>
  );
}

export default Avatar;
