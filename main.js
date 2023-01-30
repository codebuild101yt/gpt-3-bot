import React, { useState } from 'react';
import axios from 'axios';

const ChatGPT = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await axios.post('https://api.openai.com/v1/engines/text-davinci-002/completions', {
      prompt: input,
      max_tokens: 99999,
      n: 1,
      stop: '',
    });
    setResponse(res.data.choices[0].text);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
      <p>Response: {response}</p>
    </div>
  );
};

export default ChatGPT;
