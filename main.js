const form = document.querySelector('form');
const responseContainer = document.querySelector('.response');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const message = form.querySelector('textarea').value;
  
  const response = await fetch('https://api.openai.com/v1/engines/chat-davinci/jobs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer <API_KEY>'
    },
    body: JSON.stringify({
      prompt: message,
      max_tokens: 1024,
      n: 1,
      stop: null,
      temperature: 0.5,
    })
  });
  
  const json = await response.json();
  const answer = json.choices[0].text;
  
  responseContainer.innerHTML = `<p>${answer}</p>`;
});

