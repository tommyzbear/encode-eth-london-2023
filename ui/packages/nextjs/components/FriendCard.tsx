import React from "react";

interface FriendCardProps {
  name: string;
}

const FriendCard: React.FC<FriendCardProps> = ({ name }) => {
  return (
    <div className="p-4 border rounded-lg shadow-lg space-y-2">
      <h3 className="text-xl font-semibold">{name}</h3>
      <div className="flex space-x-2">
        <button className="h-10 px-5 text-indigo-700 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100">
          Send Funds
        </button>
        <button className="h-10 px-5 text-indigo-700 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100">
          Request Funds
        </button>
      </div>
    </div>
  );
};

export default FriendCard;
