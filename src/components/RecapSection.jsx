import React from 'react';

const RecapSection = () => {
  const features = [
    {
      title: "Channel recaps:",
      description: "get key highlights in any channel and cut straight to what's most important"
    },
    {
      title: "Summarize long threads:",
      description: "quickly catch up on long conversations in one click"
    },
    {
      title: "AI-powered search:",
      description: "ask a question and get clear, concise answers in real-time"
    }
  ];

  return (
    <section style={{ padding: '3rem 20px' }}>
      <div style={{
        maxWidth: '1200px',
        margin: 'auto',
        borderRadius: '18px',
        backgroundColor: 'rgb(238, 228, 213)',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        gap: '20px',
        flexDirection: 'column',
        '@media (min-width: 750px)': {
          flexDirection: 'row'
        }
      }}>
        <div style={{
          padding: '30px',
          order: 2,
          '@media (min-width: 750px)': {
            order: 1
          }
        }}>
          <h1 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Work smarter with Slack AI</h1>
          <p style={{ marginBottom: '1rem' }}>Empower everyone with trusted AI, where work already happens.</p>
          
          <ul style={{ marginTop: '1rem', marginBottom: '2rem' }}>
            {features.map((feature, index) => (
              <li key={index} style={{
                display: 'flex',
                gap: '10px',
                fontSize: '0.9rem',
                alignItems: 'center',
                marginBottom: '0.6rem'
              }}>
                <img src="/assets/checklist.png" alt="" style={{ width: '14px', height: '14px' }} />
                <p>
                  <span style={{ fontWeight: '600' }}>{feature.title}</span> {feature.description}
                </p>
              </li>
            ))}
          </ul>
          
          <div style={{
            backgroundColor: 'green',
            color: 'white',
            padding: '0.5rem 1rem',
            width: 'max-content',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
            Contact Sales
          </div>
        </div>
        
        <div style={{
          maxWidth: '320px',
          width: '100%',
          '@media (max-width: 750px)': {
            maxWidth: '100%'
          }
        }}>
          <img 
            src="https://img.freepik.com/free-vector/financial-insurance-guarantees-protection-your-money-gold_1150-52744.jpg" 
            alt="" 
            style={{ 
              width: '100%',
              mixBlendMode: 'multiply'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default RecapSection;