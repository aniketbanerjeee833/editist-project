import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Img,
  Section,
} from '@react-email/components';
import * as React from 'react';

interface UserReplyEmailProps {
  name: string;
}

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const userImage = {
  margin: '0 auto',
  marginBottom: '16px',
  border: '1px solid #E5E5E5',
  borderRadius: '9999px',
};

const heading = {
  fontSize: '28px',
  fontWeight: 'bold',
  marginTop: '48px',
};

const body = {
  margin: '24px 0',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
};

export const UserReplyEmail = ({ name }: UserReplyEmailProps) => (
  <Html>
    <Head />
    <Preview>Thank you for contacting us!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={{ padding: '0 48px' }}>
          <Img
            src="https://png.pngtree.com/png-vector/20220610/ourlarge/pngtree-letter-e-logo-vector-png-image_4890250.png"
            width="50"
            height="50"
            alt="Editist Logo"
            style={userImage}
          />
          <Heading style={heading}>Thank you for contacting us, {name}!</Heading>
          <Text style={paragraph}>
            We have received your message and appreciate you taking the time to write to us.
          </Text>
          <Text style={paragraph}>
            One of our team members will review your message and get back to you as soon as
            possible. If your matter is urgent, please allow us up to 24 hours to respond.
          </Text>
          <Text style={paragraph}>
            Best,
            <br />
            The Editist Team
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default UserReplyEmail;
