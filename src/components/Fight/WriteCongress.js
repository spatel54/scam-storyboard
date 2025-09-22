import React, { useState } from "react";
import { MdOutlineAccountBalance } from "react-icons/md";

export default function WriteCongress(props) {
  const { onNext, onBack } = props;
  
  const [letterText, setLetterText] = useState(
    `Dear [Representative's Name],

I am writing to express my concern about the growing problem of [type of scam] in our community. Recently, [briefly describe personal experience or observation].

I urge you to support legislation that would [specific action, such as "increase penalties for scammers" or "provide more resources for consumer protection agencies"].

Thank you for your attention to this important issue.

Sincerely,
[Your Name]`
  );

  const handleLetterChange = (e) => {
    setLetterText(e.target.value);
  };
  
  return (
    <div className="fight-options-container">
      <h1 className="fight-options-title">
        <MdOutlineAccountBalance style={{ marginRight: '10px', verticalAlign: 'middle' }} />
        Write to Congress
      </h1>
      
      <div style={{ 
        maxWidth: '700px', 
        margin: '0 auto',
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '25px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
      }}>
        <h2 style={{ fontSize: '20px', marginBottom: '15px' }}>Make your voice heard</h2>
        
        <div style={{ textAlign: 'left', marginBottom: '20px' }}>
          <p>Contacting your representatives can help strengthen laws against scams and fraud. Here's how to make an effective communication:</p>
          
          <ul style={{ marginTop: '15px', lineHeight: '1.6' }}>
            <li><strong>Find your representatives:</strong> Use sites like Congress.gov to locate your local representatives.</li>
            <li><strong>Be clear and concise:</strong> Explain the issue and why stronger anti-scam legislation matters.</li>
            <li><strong>Share personal experiences:</strong> If you've been affected by scams, sharing your story can be powerful.</li>
            <li><strong>Suggest specific actions:</strong> Mention specific policies or laws you'd like to see enacted.</li>
          </ul>
          
          <p style={{ marginTop: '15px' }}>Sample letter template (edit as needed):</p>
          <div style={{ 
            backgroundColor: '#f8fafc', 
            padding: '15px', 
            borderRadius: '8px',
            border: '1px solid #e2e8f0',
            marginTop: '10px',
            fontSize: '14px'
          }}>
            <textarea
              value={letterText}
              onChange={handleLetterChange}
              style={{
                width: '100%',
                minHeight: '200px',
                padding: '10px',
                fontFamily: 'inherit',
                fontSize: '14px',
                lineHeight: '1.5',
                border: '1px solid #e2e8f0',
                borderRadius: '6px',
                resize: 'vertical'
              }}
            />
          </div>
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
