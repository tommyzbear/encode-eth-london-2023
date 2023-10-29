import React from "react";
import Checkbox from "../../components/Checkbox";

const FriendSelector: React.FC = () => {
  const handleSelection = (selectedOptions: string[]) => {
    // Do something with the selected options
    console.log(selectedOptions);
  };

  return (
    <div className="min-h-screen flex items-center mx-6">
      <div className="mx-auto w-full max-w-xl p-6 bg-white rounded-lg shadow-md">
        <div className="space-y-4">
          <h1 className="text-2xl text-center">Select Recovery Guardians</h1>
          <Checkbox onSelection={handleSelection} />
        </div>
      </div>
    </div>
  );
};

export default FriendSelector;
