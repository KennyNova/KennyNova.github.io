import { useState } from 'react';
import axios from 'axios';

const EmailButton = () => {
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [emailSent, setEmailSent] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [userEmail, setUserEmail] = useState('');

  const handleButtonClick = () => {
    setShowEmailInput(true);
  };

  const handleInputChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handleSendResume = () => {
    setEmailSent(true)
    emailServer()
  }

  const emailServer = async () => {
    
    try {
      await axios.post('http://your-backend-url/sendEmail', { userEmail });
      console.log('Email sent successfully!');

      
    } catch (error) {
      console.error('Error sending email:', error);
      setEmailError(true)
    }
  };

  return (
    <div>
      {showEmailInput ? (
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            value={userEmail}
            onChange={handleInputChange}
          />
           <button onClick={handleSendResume}>Send Resume</button>
           {
              !emailSent ? (
                null
              ) : !emailError ? (
                <div className="bg-green-100 border-l-4 border-green-500 bg-opacity-30  p-4" role="alert">
                  <p className="font-bold text-green-500">Thank you!</p>
                </div>
              ) : (
                <div className="bg-red-600 border-l-4 border-red-600 text-rose-600 bg-opacity-30 p-4" role="alert">
                  <label className="font-bold">Be Warned</label>
                  <br />
                  <label>Something not ideal might be happening.</label>
                </div>
              )
            }
        </div>
      ) : (
        <button onClick={handleButtonClick}>Get Resume</button>
      )}
    </div>
  );
};

export default EmailButton;
