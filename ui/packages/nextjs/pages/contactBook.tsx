import React from "react";
import FriendCard from "../components/FriendCard";

const ContactBook: React.FC = () => {
  const names = ["Ariel", "Saida", "Tom"];

  return (
    <div>
      <h1 className="text-center">Contact Book</h1>
      {names.map(name => (
        <FriendCard key={name} name={name} />
      ))}
    </div>
  );
};

export default ContactBook;
