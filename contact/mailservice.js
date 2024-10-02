export default function mailService() {
    document.getElementById('contactForm').addEventListener('submit', async function (event) {
      event.preventDefault();
      
      const name = document.getElementById('fname').value;
      const option = document.getElementById('option').innerText;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
    
      const data = {
        name,
        option,
        email,
        message
      };
    
      try {
        const response = await fetch('http://localhost:3000/send-message', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
    
        if (response.ok) {
          const result = await response.json();
          console.log('Success:', result);
          alert('A message has already been sent!');
        } else {
          console.error('Error:', response.statusText);
          alert('Error sending message.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error sending message.');
      }
    });
  }