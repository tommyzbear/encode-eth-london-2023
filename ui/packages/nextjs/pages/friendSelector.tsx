import React from "react";
import Checkbox from "../components/Checkbox";

const FriendSelector: React.FC = () => {
  const handleSelection = (selectedOptions: string[]) => {
    // Do something with the selected options
    console.log(selectedOptions);
  };

  return (
    <div>
      <h1>Friend Selector</h1>
      <Checkbox onSelection={handleSelection} />
    </div>
  );
};

export default FriendSelector;
