document.addEventListener('DOMContentLoaded', () => {
    const errorMessage = document.getElementById('error-message');
  
    // Check if there's an error message in the URL (e.g., redirected from failed login)
    const urlParams = new URLSearchParams(window.location.search);
    const errorParam = urlParams.get('error');
  
    if (errorParam) {
      errorMessage.innerText = errorParam;
    }
  });