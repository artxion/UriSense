const backendUrl = 'http://localhost:5000';

document.addEventListener('DOMContentLoaded', () => {
  // ✅ Registration Handler
  const registerBtn = document.querySelector('.btn-register');

  if (registerBtn) {
    registerBtn.addEventListener('click', async (e) => {
      e.preventDefault();

      const name = document.getElementById('register-name').value;
      const age = document.getElementById('register-age').value;
      const occupation = document.getElementById('register-occupation').value;
      const email = document.getElementById('register-email').value;
      const password = document.getElementById('register-password').value;
      const confirmPassword = document.getElementById('register-confirm-password').value;
      const errorEl = document.getElementById('register-error');
      errorEl.textContent = '';

      if (password !== confirmPassword) {
        errorEl.textContent = 'Passwords do not match';
        return;
      }

      try {
        const res = await fetch(`${backendUrl}/api/auth/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, age, occupation, email, password })
        });

        const contentType = res.headers.get("content-type");

        if (contentType && contentType.includes("application/json")) {
          const data = await res.json();
          if (!res.ok) {
            throw new Error(data.message || 'Registration failed');
          }

          // ✅ Show success message
          alert(data.message); // e.g., "Please check your email to verify your account."

          // ✅ Save token & user to localStorage
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', JSON.stringify(data.user));

          // ✅ Redirect to dashboard
          window.location.href = 'dashboard.html';
        } else {
          const text = await res.text();
          throw new Error(`Unexpected server response: ${text}`);
        }

      } catch (err) {
        console.error('Registration error:', err);
        errorEl.textContent = err.message;
      }
    });
  }

  // ✅ Login Handler
  const loginBtn = document.querySelector('.btn-login');
  if (loginBtn) {
    loginBtn.addEventListener('click', async (e) => {
      e.preventDefault();

      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;
      const errorEl = document.getElementById('login-error');
      errorEl.textContent = '';

      try {
        const res = await fetch(`${backendUrl}/api/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password })
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.message || 'Login failed');

        // ✅ Save token and user
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));

        // ✅ Redirect to dashboard
        window.location.href = 'dashboard.html';

      } catch (err) {
        console.error('Login error:', err);
        errorEl.textContent = err.message;
      }
    });
  }
});
