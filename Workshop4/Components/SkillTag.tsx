import React from "react";
import "./SkillTag.css";

interface SkillTagProps {
  skillName: string;
  level?: "Beginner" | "Intermediate" | "Advanced";
}

const SkillTag: React.FC<SkillTagProps> = ({ skillName, level }) => {
  const levelClass = level ? level.toLowerCase() : "";
  return (
    <span className={`skill-tag ${levelClass}`}>
      {skillName} {level && <span className="level">({level})</span>}
    </span>
  );
};

export default SkillTag;
