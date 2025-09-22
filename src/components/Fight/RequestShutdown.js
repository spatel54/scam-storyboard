import React from "react";
import { MdOutlineBusinessCenter } from "react-icons/md";

export default function RequestShutdown(props) {
  const { onNext, onBack } = props;
  
  return (
    <div className="fight-options-container">
      <h1 className="fight-options-title">
        <MdOutlineBusinessCenter style={{ marginRight: '10px', verticalAlign: 'middle' }} />
        Shut down scammer
      </h1>
      
      <div style={{ 
        maxWidth: '700px', 
        margin: '0 auto',
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '25px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
      }}>
        <h2 style={{ fontSize: '20px', marginBottom: '15px' }}>How to request a shutdown</h2>
        
        <div style={{ textAlign: 'left', marginBottom: '20px' }}>
          <p>Reporting scam websites, emails, and phone numbers to service providers can help remove these fraudulent operations quickly. Here's what to do:</p>
          
          <ul style={{ marginTop: '15px', lineHeight: '1.6' }}>
            <li><strong>For websites:</strong> Report to the domain registrar or hosting provider. You can find this information using a "whois" lookup.</li>
            <li><strong>For emails:</strong> Forward to the email service provider (e.g., Gmail, Outlook) and mark as phishing/spam.</li>
            <li><strong>For phone numbers:</strong> Report to the telecom carrier and consumer protection agencies.</li>
            <li><strong>For social media:</strong> Use the platform's reporting tools to flag fraudulent accounts.</li>
          </ul>
          
          <p style={{ marginTop: '15px' }}>Always include details like:</p>
          <ul>
            <li>When you encountered the scam</li>
            <li>What makes you believe it's fraudulent</li>
            <li>Any communication you've received</li>
            <li>Screenshots or copies of messages</li>
          </ul>
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
