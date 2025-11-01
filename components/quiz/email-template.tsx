import * as React from 'react';

interface EmailTemplateProps {
  name: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name

}) => (
  <div>
    <h1>Vision Hunt Quiz</h1>
    <p>Hello {name},</p>
    <p>Thank you for participating in the Vision Hunt quiz!</p>

    <div>
      <p>Best regards,</p>
      <p>Technical team</p>
      <p>ME-RIISE Foundation</p>
    </div>
  </div>
);