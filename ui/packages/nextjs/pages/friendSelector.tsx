import React from "react";
import Checkbox from "../components/Checkbox";

const FriendSelector: React.FC = () => {
  const handleSelection = (selectedOptions: string[]) => {
    // Do something with the selected options
    console.log(selectedOptions);
  };

  return (

    <div className="min-h-screen flex items-center mx-6">
      <div className="card mx-auto w-full max-w-xl">
        <div className="grid">
          <h1 className="text-2xl">Friend Selector</h1>
          <Checkbox onSelection={handleSelection} />
        </div>
      </div>
    </div>
  );
};

export default FriendSelector;
