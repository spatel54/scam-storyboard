import React from "react";

export default function BrowseExisting(props) {
  const { step = 0, onNext, onPrev, onBack } = props;
  
  const browseSteps = [
    "Education Planning",
    "Share Knowledge", 
    "Community Impact"
  ];
  
  const renderBrowseStep = () => {
    switch (step) {
      case 0:
        return (
          <div>
            <h2>📚 Educate Others</h2>
            <p>Help spread awareness and protect others from scams:</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
              <button onClick={onNext} style={{ padding: '10px', fontSize: '14px' }}>
                � Share with Family & Friends
              </button>
              <button onClick={onNext} style={{ padding: '10px', fontSize: '14px' }}>
                � Post on Social Media
              </button>
              <button onClick={onNext} style={{ padding: '10px', fontSize: '14px' }}>
                � Email Educational Content
              </button>
              <button onClick={onNext} style={{ padding: '10px', fontSize: '14px' }}>
                🏫 Organize Community Workshop
              </button>
            </div>
          </div>
        );
      case 1:
        return (
          <div>
            <h2>Share Your Knowledge</h2>
            <p>Choose how you want to educate others about scam prevention:</p>
            <div style={{ textAlign: 'left', marginTop: '20px', backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '5px' }}>
              <h3>� Ready-to-Share Content:</h3>
              <ul>
                <li>Social media awareness posts</li>
                <li>Email templates for family/friends</li>
                <li>Printable scam warning flyers</li>
              </ul>
              <h3>🎯 Target Audiences:</h3>
              <ul>
                <li>Elderly family members</li>
                <li>Community groups</li>
                <li>Social media followers</li>
              </ul>
            </div>
            <div style={{ marginTop: '20px' }}>
              <button onClick={onNext} style={{ padding: '10px 20px' }}>
                Start Sharing
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Making an Impact!</h2>
            <p>Your education efforts are helping protect the community.</p>
            <div style={{ backgroundColor: '#d4edda', padding: '15px', borderRadius: '5px', marginTop: '20px' }}>
              <h3>🎉 Education Impact</h3>
              <ul style={{ textAlign: 'left' }}>
                <li>5 family members educated ✓</li>
                <li>Content shared on 2 social platforms ✓</li>
                <li>Community workshop scheduled ✓</li>
                <li>10+ people now more scam-aware ✓</li>
              </ul>
            </div>
            <div style={{ marginTop: '20px' }}>
              <button onClick={onBack} style={{ padding: '10px 20px', backgroundColor: '#28a745', color: 'white' }}>
                Complete & Return to Main Flow
              </button>
            </div>
          </div>
        );
      default:
        return <div>Education section complete!</div>;
    }
  };
  
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      {renderBrowseStep()}
      
      <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'space-between' }}>
        {step > 0 && (
          <button onClick={onPrev} style={{ padding: '8px 16px' }}>
            Previous
          </button>
        )}
        <button onClick={onBack} style={{ padding: '8px 16px', backgroundColor: '#6c757d', color: 'white' }}>
          Back to Choices
        </button>
      </div>
      
      {/* Step indicator */}
      <div style={{ marginTop: '20px', fontSize: '12px', color: '#666' }}>
        Step {step + 1} of {browseSteps.length}: {browseSteps[step]}
      </div>
    </div>
  );
}
