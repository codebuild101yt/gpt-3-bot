const form = document.querySelector('form');
const responseContainer = document.querySelector('.response');
const maxTokensInput = document.querySelector('input[name="maxTokens"]');
const numResponsesInput = document.querySelector('input[name="numResponses"]');
const temperatureInput = document.querySelector('input[name="temperature"]');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const message = form.querySelector('textarea').value;
  const maxTokens = maxTokensInput.value;
  const numResponses = numResponsesInput.value;
  const temperature = temperatureInput.value;
  
  const response = await fetch(`https://api.openai.com/v1/engines/chat-davinci/jobs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer API_KEY'
    },
    body: JSON.stringify({
      prompt: message,
      max_tokens: maxTokens,
      n: numResponses,
      temperature: temperature
    })
  });
  
  const data = await response.json();
  
  responseContainer.innerHTML = data.choices[0].text;
});
