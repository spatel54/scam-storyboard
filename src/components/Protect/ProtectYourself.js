import React, { useState } from "react";
import CreateUniqueIdentifier from "./EmailSubjectLine";
import WordNumberTrick from "./WordNumberTrick";

export default function ProtectYourself(props) {
  const { step = 0, onNext, onPrev, onBack } = props;
  const [selectedOption, setSelectedOption] = useState(null);
  const [uniqueIdentifier, setUniqueIdentifier] = useState("");
  
  const protectSteps = [
    "Email Protection Options",
    "Create Identifier",
    "Summary"
  ];
  
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    if (option === 'yes') {
      onNext(); // Go to the identifier creation step
    } else {
      // Skip to summary if "No" was selected
      setSelectedOption('no');
      onNext();
      onNext(); // Skip ahead two steps
    }
  };
  
  const handleIdentifierCreated = (identifier) => {
    setUniqueIdentifier(identifier);
    onNext();
  };
  
  const renderProtectStep = () => {
    switch (step) {
      case 0:
        return <CreateUniqueIdentifier onNext={handleOptionSelect} onBack={onBack} />;
      case 1:
        return <WordNumberTrick onNext={handleIdentifierCreated} onBack={onPrev} />;
      case 2:
        return (
          <div style={{
            maxWidth: '700px',
            margin: '0 auto',
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            padding: '25px'
          }}>
            <h2 style={{ 
              fontSize: '24px', 
              fontWeight: 'bold',
              marginBottom: '16px'
            }}>
              Protection Setup Complete
            </h2>
            
            <p style={{ fontSize: '16px', lineHeight: '1.5', marginBottom: '20px' }}>
              You've successfully enhanced your protection against email scams!
            </p>
            
            <div style={{ 
              backgroundColor: '#edf8ed', 
              padding: '20px', 
              borderRadius: '8px', 
              marginBottom: '25px',
              textAlign: 'left'
            }}>
              <h3 style={{ 
                fontSize: '18px', 
                marginTop: '0', 
                marginBottom: '15px',
                color: '#16a34a',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span>✅</span> Your Protection Summary
              </h3>
              
              <div style={{ fontSize: '15px', lineHeight: '1.6' }}>
                {selectedOption === 'yes' && uniqueIdentifier && (
                  <>
                    <p style={{ margin: '0 0 10px 0', fontWeight: 'bold' }}>
                      Your unique identifier: <span style={{ color: '#16a34a' }}>{uniqueIdentifier}</span>
                    </p>
                    <p style={{ margin: '0 0 5px 0' }}>
                      Legitimate government emails will include: <strong>[Govt-{uniqueIdentifier}]</strong> in the subject line
                    </p>
                  </>
                )}
                
                {selectedOption === 'no' && (
                  <p style={{ margin: '0 0 10px 0' }}>
                    You've successfully set up a unique identifier for government emails. This will help you identify legitimate communications.
                  </p>
                )}
                
                <ul style={{ paddingLeft: '20px', margin: '15px 0 0 0' }}>
                  <li>Be suspicious of emails claiming to be from government agencies that don't include your identifier</li>
                  <li>Verify requests through official channels before providing personal information</li>
                  <li>Report suspicious emails to the appropriate authorities</li>
                </ul>
              </div>
            </div>
            
            <div style={{ 
              backgroundColor: '#fff8e6', 
              border: '1px solid #fbbf24',
              borderRadius: '6px',
              padding: '15px',
              marginBottom: '25px',
              display: 'flex',
              alignItems: 'flex-start',
              textAlign: 'left'
            }}>
              <span style={{ fontSize: '20px', marginRight: '10px', color: '#fbbf24' }}>💡</span>
              <p style={{ margin: 0, fontSize: '14px' }}>
                <strong>Tip:</strong> Share these protection strategies with family and friends to help them stay safe too!
              </p>
            </div>
            
            <div style={{ marginTop: '25px' }}>
              <button 
                onClick={onBack} 
                style={{ 
                  padding: '12px 25px',
                  fontSize: '16px',
                  backgroundColor: '#22c55e',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                Complete & Return to Main Flow
              </button>
            </div>
          </div>
        );
      default:
        return <div>Protection section complete!</div>;
    }
  };
  
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      {renderProtectStep()}
      
      {/* Step indicator (only show for identifier creation step) */}
      {step === 1 && selectedOption === 'yes' && (
        <div style={{ marginTop: '20px', fontSize: '12px', color: '#666' }}>
          Step {step + 1} of {protectSteps.length}: {protectSteps[step]}
        </div>
      )}
    </div>
  );
}
