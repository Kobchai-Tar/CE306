import React from "react";
import SkillTag from "./SkillTag";
import "./UserProfileCard.css";

export interface UserData {
  id: string | number;
  name: string;
  avatarUrl?: string;
  email: string;
  isOnline: boolean;
  skills: { name: string; level?: "Beginner" | "Intermediate" | "Advanced" }[];
}

interface UserProfileCardProps {
  user: UserData;
  onViewDetails: (userId: string | number) => void;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({ user, onViewDetails }) => {
  return (
    <div className="user-card">
      <img
      src={user.avatarUrl || "https://via.placeholder.com/100"}
      alt={user.name}
      className="avatar"
      />
      <h2 className="name">{user.name}</h2>
      <p className="email">{user.email}</p>
      <p className={`status ${user.isOnline ? "online" : "offline"}`}>
        {user.isOnline ? "ออนไลน์" : "ออฟไลน์"}
      </p>

      <div className="skills">
      <h3 className="skills-title">Skills:</h3>
      {user.skills.map((s, idx) => (
      <SkillTag key={idx} skillName={s.name} level={s.level} />
      ))}
    </div>

      <button
        onClick={() => onViewDetails(user.id)}
        className="details-button"
      >
        ดูรายละเอียด
      </button>
    </div>
  );
};

export default UserProfileCard;
