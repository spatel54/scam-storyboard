import React, { useState } from "react";
import './App.css';
import Verify from "./components/Verify";
import Educate from "./components/Educate";
import Socialize from "./components/Socialize";
import ReportingScam from "./components/ReportingScam";
import AutoReporting from "./components/AutoReporting";
import Fight from "./components/Fight/Fight";
import ProtectYourself from "./components/Protect/ProtectYourself";
import BrowseExisting from "./components/BrowseExisting";
import ActionSelection from "./components/ActionSelection";
// Import other components as needed

// Define step configuration with meaningful names
const stepConfig = [
  { id: "verify", label: "Verify", description: "Verify a potential scam" },
  { id: "socialize", label: "Share", description: "Socializing with others" },
  { id: "report", label: "Report", description: "Report a scam" },
  { id: "auto-report", label: "Auto Report", description: "Automated reporting options" },
  { id: "action", label: "Actions", description: "Choose an action to take" },
];

// Legacy array for backwards compatibility
const steps = stepConfig.map(step => {
  // Map new step IDs to old string format
  switch(step.id) {
    case "verify": return "Verify";
    case "socialize": return "Socialize";
    case "report": return "ReportingScam";
    case "auto-report": return "AutoReporting";
    case "action": return "ChoiceBranch";
    default: return step.id;
  }
});

function App() {
  const [step, setStep] = useState(0);
  const [currentSection, setCurrentSection] = useState(null); // Track current section (Fight, Protect, etc.)
  const [sectionStep, setSectionStep] = useState(0); // Track step within a section
  // Add completed steps tracking for progress indicator
  const [completedSteps, setCompletedSteps] = useState([]);

  // Navigate to specific step by index
  const goToStep = (index) => {
    // Only allow navigation to steps that have been completed or the next step
    if (index <= Math.max(...completedSteps, 0) + 1) {
      setStep(index);
      
      // If we're navigating away from a section, clear it
      if (currentSection) {
        setCurrentSection(null);
        setSectionStep(0);
      }
      
      // Mark this step as visited if not already
      if (!completedSteps.includes(index) && index > 0) {
        setCompletedSteps(prev => [...prev, index].sort((a, b) => a - b));
      }
    }
  };

  const goToNext = () => {
    const nextStep = Math.min(step + 1, steps.length - 1);
    setStep(nextStep);
    
    // Mark this step as completed
    if (!completedSteps.includes(nextStep)) {
      setCompletedSteps(prev => [...prev, nextStep].sort((a, b) => a - b));
    }
  };
  
  const goToPrev = () => {
    setStep(s => Math.max(s - 1, 0));
  };
  
  // Function to navigate to a specific section
  const goToSection = (section) => {
    setCurrentSection(section);
    setSectionStep(0);
  };
  
  // Function to go back to main flow from a section
  const backToMainFlow = () => {
    setCurrentSection(null);
    setSectionStep(0);
  };
  
  // Function to go back to action selection page
  const backToActionPage = () => {
    setCurrentSection(null);
    setSectionStep(0);
    // Set step to the action selection page (ChoiceBranch)
    setStep(steps.indexOf("ChoiceBranch"));
  };
  
  // Function to navigate within a section
  const goToNextInSection = () => setSectionStep(s => s + 1);
  const goToPrevInSection = () => setSectionStep(s => Math.max(s - 1, 0));

  // Render section-specific content
  const renderSection = (navigationProps) => {
    if (!currentSection) return null;
    
    switch (currentSection) {
      case "Fight":
        return <Fight 
          onNext={goToNextInSection} 
          onPrev={goToPrevInSection}
          onBack={backToMainFlow}
          step={sectionStep}
          navigation={navigationProps}
        />;
      case "Protect":
        return <ProtectYourself 
          onNext={goToNextInSection} 
          onPrev={goToPrevInSection}
          onBack={backToMainFlow}
          step={sectionStep}
          navigation={navigationProps}
        />;
      case "Educate":
        return <Educate 
          onNext={goToNextInSection} 
          onPrev={backToActionPage}
          onBack={backToActionPage}
          step={sectionStep}
          navigation={navigationProps}
        />;
      default:
        return <div>Section not found</div>;
    }
  };

  // Action Selection component for branching (Action page)

  const renderStep = (navigationProps) => {
    // If we're in a section, render that section
    if (currentSection) {
      return renderSection(navigationProps);
    }
    
    // Otherwise render main flow steps
    switch (steps[step]) {
      case "Verify": 
        return <Verify 
          onNext={goToNext} 
          onPrev={goToPrev} 
          navigation={navigationProps} 
        />;
      case "Socialize": 
        return <Socialize 
          onNext={goToNext} 
          onPrev={goToPrev} 
          navigation={navigationProps} 
        />;
      case "ReportingScam": 
        return <ReportingScam 
          onNext={goToNext} 
          onPrev={goToPrev} 
          navigation={navigationProps} 
        />;
      case "AutoReporting": 
        return <AutoReporting 
          onNext={goToNext} 
          onPrev={goToPrev} 
          navigation={navigationProps} 
        />;
      case "ChoiceBranch": 
        return <ActionSelection 
          onGoToSection={goToSection} 
          onNext={goToNext} 
          onPrev={goToPrev} 
          navigation={navigationProps} 
        />;
      // Add other steps here
      default: return <div>Flow complete!</div>;
    }
  };

  // Common props to pass to all components
  const stepNavigationProps = {
    steps: stepConfig,
    currentStepIndex: step,
    completedSteps,
    onStepClick: index => {
      // This function is called when user clicks on a step in the progress bar
      goToStep(index);
    },
    // For section components
    currentSection,
    sectionStep
  };
  
  return (
    <div className="App" style={{ 
      padding: (steps[step] === "Verify" || currentSection === "Educate") ? 0 : undefined,
      margin: 0,
      overflow: 'hidden',
      height: '100vh',
      width: '100vw'
    }}>
      {renderStep(stepNavigationProps)}
    </div>
  );
}

export default App;
