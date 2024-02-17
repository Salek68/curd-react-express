// ChatBot.js
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './css.css';
const ChatBotContainer = styled.div`
  width: 98%;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  margin: 20px;
  margin-right: 20px;
  height : auto;
`;

const UserMessage = styled.div`
  background-color: #2196F3;
  color: white;
  padding: 10px;
  text-align: left;
`;

const BotReply = styled.div`
  background-color: #FFEB3B;
  padding: 10px;
  text-align: left;
`;

const InputContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

const UserInput = styled.input`
  width: calc(100% - 20px);
  margin-right: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SendButton = styled.button`
  padding: 8px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const MessageHistory = styled.div`
  max-height: 600px;
  overflow-y: auto;
  padding: 10px;
`;

const ChatBot = () => {
  const [userMessage, setUserMessage] = useState('');
  const [botReply, setBotReply] = useState('');
  const [messageHistory, setMessageHistory] = useState([]);

  const handleSendMessage = async () => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [ { "role": "user", "content": userMessage }],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': '', // جایگزین کلید API واقعی خود کنید
          },
        }
      );

      const formattedText = response.data.choices[0].message["content"].replace(/\./g, '.\n');
      setBotReply(formattedText);

      // اضافه کردن پیام جدید به تاریخچه
      setMessageHistory([...messageHistory, { "role": "user", "content": userMessage }, { "role": "bot", "content": formattedText }]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
  
    <ChatBotContainer>
        
      <MessageHistory>
        {messageHistory.map((message, index) => (
          <div key={index} className={message.role === 'user' ? 'user' : 'bot'}>
            <p><span className='ub'>{message.role === 'user' ? 'شما: ' : 'ربات: '}</span> <pre>{message.content}</pre></p>
          </div>
        ))}
      </MessageHistory>
      <InputContainer>
        <UserInput
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
        />
        <SendButton onClick={handleSendMessage}>ارسال</SendButton>
      </InputContainer>
    </ChatBotContainer>
    </>
  );
};

export default ChatBot;
