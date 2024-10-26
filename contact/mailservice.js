export default function mailService() {
  document
    .getElementById('contactForm')
    .addEventListener('submit', async function (event) {
      event.preventDefault();

      const name = document.getElementById('fname').value.trim();
      const option = document.getElementById('option').innerText.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      let errorName, errorEmail, errorMessage;
      let countErrors = false;

      if (name === '') {
        countErrors = true;
        errorName = 'Name is required.';
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        countErrors = true;
        errorEmail = 'Please enter a valid email address.';
      }

      if (message === '') {
        countErrors = true;
        errorMessage = 'Message is required.';
      }

      if (countErrors) {
        document.getElementById('m-name').textContent = errorName;
        document.getElementById('m-email').textContent = errorEmail;
        document.getElementById('m-message').textContent = errorMessage;
        const inputError = document.querySelectorAll('.input-error');
        inputError.forEach((elem) => {
          if (elem.textContent == 'undefined') {
            elem.textContent = '';
          }
        });
        return;
      }

      const data = {
        name,
        option,
        email,
        message,
      };

      try {
        const response = await fetch('http://localhost:3000/send-message', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        cleanFields();
        if (response.ok) {
          const result = await response.json();
          waysToConnections("myModal", "close1")
        } else {
          console.error('Error:', response.statusText);
          alert('Error sending message.');
        }
      } catch (error) {
        console.error('Error:', error);
        waysToConnections("myModalReject", "close2")
      }
    });
}

function cleanFields() {
  const inputError = document.querySelectorAll('.input-error');
  const inputs = document.querySelectorAll('input');
  document.getElementById('message').value = '';
  document.querySelector('.select-trigger').textContent = 'Subject';
  inputError.forEach((elem) => {
    elem.textContent = '';
  });
  inputs.forEach((input) => {
    input.value = '';
  });
}

window.addEventListener('click', function(event) {
  closeConnectionWindow("myModal", event)
})

window.addEventListener('click', function(event) {
  closeConnectionWindow("myModalReject", event)
})

function waysToConnections(item1, item2){
  const modal = document.getElementById(item1);
  modal.style.display = "block";
  document.body.style.overflow = 'hidden';
  const span = document.getElementsByClassName(item2)[0];
  span.addEventListener('click', () => {
    modal.style.display = "none";
    document.body.style.overflow = 'visible';
  })
}

function closeConnectionWindow(item){
  const modal = document.getElementById(item);
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = 'visible';
  }
}