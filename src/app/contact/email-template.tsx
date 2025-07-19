
import * as React from 'react';

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({ name, email, message }) => (
  <div style={container}>
    <h1 style={heading}>New Message from Contact Form</h1>
    <div style={content}>
      <p>You've received a new message from your website contact form. Here are the details:</p>
      <hr style={hr} />
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> <a href={`mailto:${email}`} style={link}>{email}</a></p>
      <p><strong>Message:</strong></p>
      <p style={messageBox}>{message}</p>
    </div>
    <p style={footer}>This email was sent from the contact form on Glitch Launch.</p>
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

const messageBox: React.CSSProperties = {
  backgroundColor: '#f9f9f9',
  border: '1px solid #e5e5e5',
  borderRadius: '4px',
  padding: '15px',
  whiteSpace: 'pre-wrap',
  wordWrap: 'break-word',
};

const link: React.CSSProperties = {
  color: '#007aff',
  textDecoration: 'none',
};

const hr: React.CSSProperties = {
  borderColor: '#e5e5e5',
  margin: '20px 0',
};

const footer: React.CSSProperties = {
  fontSize: '12px',
  color: '#888',
  marginTop: '20px',
  textAlign: 'center',
};
