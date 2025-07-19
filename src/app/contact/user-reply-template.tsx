
import * as React from 'react';

interface UserReplyEmailProps {
  name: string;
}

export const UserReplyEmail: React.FC<Readonly<UserReplyEmailProps>> = ({ name }) => (
  <div style={container}>
    <h1 style={heading}>We've Received Your Message!</h1>
    <div style={content}>
      <p>Hi {name},</p>
      <p>Thanks for getting in touch with us. This is an automated reply to confirm that we've received your message.</p>
      <p>Our team will review your inquiry and get back to you as soon as possible.</p>
      <p>Best regards,</p>
      <p><strong>The Glitch Launch Team</strong></p>
    </div>
    <p style={footer}>You're receiving this email because you contacted us through the Glitch Launch website.</p>
  </div>
);

// Styles
const container: React.CSSProperties = {
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
  backgroundColor: '#f2f2f7',
  padding: '20px',
  color: '#333',
};

const heading: React.CSSProperties = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#1d1d1f',
  borderBottom: '2px solid #ddd',
  paddingBottom: '10px',
};

const content: React.CSSProperties = {
  backgroundColor: '#ffffff',
  padding: '20px',
  borderRadius: '8px',
  marginTop: '20px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
};

const footer: React.CSSProperties = {
  fontSize: '12px',
  color: '#888',
  marginTop: '20px',
  textAlign: 'center',
};
