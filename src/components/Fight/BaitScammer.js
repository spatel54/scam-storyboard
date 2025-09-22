import React from "react";
import { FaFish } from "react-icons/fa";
import { MdWarning } from "react-icons/md";

export default function BaitScammer(props) {
  const { onNext, onBack } = props;
  
  return (
    <div className="fight-options-container">
      <h1 className="fight-options-title">
        <FaFish style={{ marginRight: '10px', verticalAlign: 'middle' }} />
        Bait Scammer
      </h1>
      
      <div style={{ 
        maxWidth: '700px', 
        margin: '0 auto',
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '25px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
      }}>
        <div style={{ 
          backgroundColor: '#fff8e6', 
          padding: '15px', 
          borderRadius: '8px',
          border: '1px solid #fbbf24',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center'
        }}>
          <MdWarning size={24} color="#b45309" style={{ marginRight: '10px', flexShrink: 0 }} />
          <p style={{ margin: 0, fontSize: '14px', color: '#78350f' }}>
            <strong>Safety Warning:</strong> Engaging with scammers carries risks. Never share personal information, financial details, or allow remote access to your devices. Consider if this approach is right for you.
          </p>
        </div>
        
        <h2 style={{ fontSize: '20px', marginBottom: '15px' }}>How to safely waste scammers' time</h2>
        
        <div style={{ textAlign: 'left', marginBottom: '20px' }}>
          <p>Scam baiting involves deliberately engaging with scammers to waste their time and resources, preventing them from targeting vulnerable victims. If you choose to do this:</p>
          
          <ul style={{ marginTop: '15px', lineHeight: '1.6' }}>
            <li><strong>Create a fake persona:</strong> Never use your real identity, information, or accounts.</li>
            <li><strong>Use secure communication:</strong> Consider using a virtual phone number or secure email address.</li>
            <li><strong>Document everything:</strong> Keep logs of all communications for reporting purposes.</li>
            <li><strong>Recognize manipulation tactics:</strong> Be aware of how scammers try to create urgency or emotional responses.</li>
            <li><strong>Know when to stop:</strong> If a scammer becomes threatening or if you feel uncomfortable, end contact immediately.</li>
          </ul>
          
          <p style={{ marginTop: '15px' }}>Remember that the goal is to waste the scammer's time ethically, not to harass or threaten them. Always prioritize your safety.</p>
        </div>
        
        <div style={{ marginTop: '25px', display: 'flex', justifyContent: 'space-between' }}>
          <button 
            onClick={onBack}
            style={{
              padding: '10px 20px',
              backgroundColor: '#f1f5f9',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Back to options
          </button>
          
          <button 
            onClick={onNext}
            style={{
              padding: '10px 20px',
              backgroundColor: '#3182ce',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            I understand
          </button>
        </div>
      </div>
    </div>
  );
}
