import React from "react";
import UserProfileCard from "./Components/UserProfileCard";
import type { UserData } from "./Components/UserProfileCard";
import "./App.css";

const App: React.FC = () => {
  const users: UserData[] = [
    {
      id: 1,
      name: "องอาจ ชาตินักรบ",
      email: "Ongat@example.com",
      isOnline: true,
      avatarUrl: "https://today-obs.line-scdn.net/0h0TB8VRNib3t_QX3t9V8QLEcXYwpMJ3VyXS8gSltEYxhQbXorES88GFgVN1daI38sX3QnHQ5FNENaJXwoQQ/w1200",
      skills: [
        { name: "React", level: "Advanced" },
        { name: "TypeScript", level: "Intermediate" },
      ],
    },
    {
      id: 2,
      name: "บ่าววี กรุงธนคอมเพล็กซ์",
      email: "BaoWi@example.com",
      isOnline: false,
      avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqQc37tsToYH7tyXacZthABF_ys6iYUL19Ow&s",
      skills: [
        { name: "UI Design", level: "Beginner" },
        { name: "HTML/CSS", level: "Intermediate" },
      ],
    },
    {
      id: 3,
      name: "จุก เบี้ยวสกุล",
      email: "jok@example.com",
      isOnline: true,
      avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkuDZiakxsVLygrCltM4Fg-fJymARo1ZcLPA&s", 
      skills: [{ name: "Python", level: "Advanced" }],
    },
  ];

  const handleViewDetails = (userId: string | number) => {
    console.log("View details for user:", userId);
  };

  return (
    <div className="app-container">
      {users.map((u) => (
        <UserProfileCard key={u.id} user={u} onViewDetails={handleViewDetails} />
      ))}
    </div>
  );
};

export default App;
