import React from "react";
import Checkbox from "../components/Checkbox";

const FriendSelector: React.FC = () => {
  const handleSelection = (selectedOptions: string[]) => {
    // Do something with the selected options
    console.log(selectedOptions);
  };

  return (
    <div className="min-h-screen items-center justify-center">
      <h1 className="text-3xl font-semibold mb-4 font-light">Friend Selector</h1>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-screen-sm">
        <div className="grid grid-cols-1 gap-4">
          <Checkbox onSelection={handleSelection} />
        </div>
      </div>
    </div>
  );
};

export default FriendSelector;
