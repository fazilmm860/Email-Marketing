import React, { useState } from 'react';
import './index.css';

const Message = () => {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubjectChange = (event) => {
        setSubject(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // You can perform any action with the subject and message here, like sending an email
        
        console.log("Subject:", subject);
        console.log("Message:", message);
        // Reset form fields after submission
        setSubject('');
        setMessage('');
    };

    return (
        <div className="box-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="subject">Subject:</label>
                    <input
                        type="text"
                        id="subject"
                        value={subject}
                        onChange={handleSubjectChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={handleMessageChange}
                    ></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Message;
