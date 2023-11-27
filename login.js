function login(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
  
    // Basic validation
    if (email && password) {
      alert(`Login successful!\nEmail: ${email}`);
      window.location.href = "index.html";
    } else {
      alert('Please enter both email and password.');
    }
  }
  
  function register(event) {
    event.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
  
    // Basic validation
    if (name && email && password) {
      alert(`Registration successful!\nName: ${name}\nEmail: ${email}`);
      window.location.href = "index.html";
    } else {
      alert('Please fill in all fields.');
    }
  }
  