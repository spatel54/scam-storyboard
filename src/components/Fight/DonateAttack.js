import React from "react";
import { BiDonateHeart } from "react-icons/bi";

export default function DonateAttack(props) {
  const { onNext, onBack } = props;
  
  return (
    <div className="fight-options-container">
      <h1 className="fight-options-title">
        <BiDonateHeart style={{ marginRight: '10px', verticalAlign: 'middle' }} />
        Donate to Support Anti-Scam Efforts
      </h1>
      
      <div style={{ 
        maxWidth: '700px', 
        margin: '0 auto',
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '25px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
      }}>
        <h2 style={{ fontSize: '20px', marginBottom: '15px' }}>Support organizations fighting fraud</h2>
        
        <div style={{ textAlign: 'left', marginBottom: '20px' }}>
          <p>Your donations can help fund important work to prevent scams, support victims, and improve cybersecurity. Consider supporting these types of organizations:</p>
          
          <ul style={{ marginTop: '15px', lineHeight: '1.6' }}>
            <li><strong>Consumer protection nonprofits:</strong> Organizations that educate the public about scams and advocate for stronger protections.</li>
            <li><strong>Cybersecurity research:</strong> Groups working to identify and counter new scam techniques.</li>
            <li><strong>Victim support services:</strong> Organizations that help scam victims recover and rebuild their lives.</li>
            <li><strong>Technical initiatives:</strong> Projects developing tools to identify and block scam attempts.</li>
          </ul>
          
          <div style={{ 
            backgroundColor: '#f0f9ff', 
            padding: '15px', 
            borderRadius: '8px',
            border: '1px solid #bae6fd',
            marginTop: '20px'
          }}>
            <h3 style={{ fontSize: '16px', marginTop: 0 }}>Donation Tips:</h3>
            <ul style={{ margin: '10px 0 0 0' }}>
              <li>Research organizations thoroughly before donating</li>
              <li>Check charity ratings on sites like Charity Navigator</li>
              <li>Look for transparent organizations that show how funds are used</li>
              <li>Consider both national and local initiatives</li>
              <li>Even small donations can make a difference when combined with others</li>
            </ul>
          </div>
          
          <p style={{ marginTop: '20px', fontStyle: 'italic' }}>
            Note: This platform does not directly collect donations or endorse specific organizations. We encourage you to research and choose reputable anti-fraud organizations aligned with your values.
          </p>
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
