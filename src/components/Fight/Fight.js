import React, { useState } from "react";
import FightOptions from "./FightOptions";
import RequestShutdown from "./RequestShutdown";
import WriteCongress from "./WriteCongress";
import BaitScammer from "./BaitScammer";
import DonateAttack from "./DonateAttack";

export default function Fight(props) {
  const { onNext, onPrev, onBack, step = 0 } = props;
  const [selectedOption, setSelectedOption] = useState(null);
  
  // Handle option selection and navigate to sub-component
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onNext();
  };
  
  // Render the appropriate component based on step
  const renderContent = () => {
    if (step === 0) {
      return (
        <FightOptions 
          onNext={handleOptionSelect} 
          onBack={onBack} 
        />
      );
    } else if (selectedOption) {
      switch (selectedOption) {
        case "RequestShutdown":
          return <RequestShutdown onNext={onNext} onBack={onPrev} />;
        case "WriteCongress":
          return <WriteCongress onNext={onNext} onBack={onPrev} />;
        case "BaitScammer":
          return <BaitScammer onNext={onNext} onBack={onPrev} />;
        case "DonateAttack":
          return <DonateAttack onNext={onNext} onBack={onPrev} />;
        default:
          return <FightOptions onNext={handleOptionSelect} onBack={onBack} />;
      }
    }
    
    // Fallback
    return <FightOptions onNext={handleOptionSelect} onBack={onBack} />;
  };
  
  return (
    <div>
      {renderContent()}
    </div>
  );
}
