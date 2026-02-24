import React from "react";

export default function ProfileHeader() {
  const publicLogo = `${process.env.PUBLIC_URL || ''}/logo513.png`;
  const publicProfile = `${process.env.PUBLIC_URL || ''}/profile.jpg`;

  return (
    <div className="profile">
      <img
        className="avatar"
        src={publicLogo}
        alt="Profile"
        onError={(e) => {
          const img = e.currentTarget;
          // If primary (logo513.png) missing, try profile.jpg, then fallback avatar
          if (!img.dataset.fallback) {
            img.dataset.fallback = 'tried-profile';
            img.src = publicProfile;
          } else {
            img.onerror = null;
            img.src = `https://ui-avatars.com/api/?name=PALLE+SAIRAM&background=0D8ABC&color=fff&size=256`;
          }
        }}
      />
      <h1 className="name">PALLE SAIRAM</h1>
      <p className="bio">👋 Welcome! Join me on my journey of creativity and fun! 🎉</p>
    </div>
  );
}