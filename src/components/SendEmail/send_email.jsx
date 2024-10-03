'use client';
import { useCallback, useState } from 'react';

const SendEmail = () => {
  const [message, setMessage] = useState('');
  const sendEmail = useCallback(async () => {
    try {
      const response = await fetch('/api/email/sendEmail', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setMessage('Email sent successfully!');
        console.log(data);
      } else {
        setMessage('Failed to send email.');
      }
    } catch (error) {
      setMessage('An error occurred.');
      console.error(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  return (
    <div>
      <button className="btn" onClick={sendEmail}>
        Send Email
      </button>
    </div>
  );
};

export default SendEmail;
